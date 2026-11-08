import type { CourseColor } from '@/lib/course-color'
import { AVATAR_COLORS } from '@/store/prefs'
import { ALL, type WireMessage } from './transport/types'

/**
 * Moteur du Quiz Battle : réducteurs purs (aucun temps, aucun réseau, aucun hasard).
 * - `hostReduce` : l'hôte est l'arbitre, il détient les bonnes réponses.
 * - `guestReduce` : la vue d'un joueur, construite uniquement à partir des messages reçus.
 * Le temps (`now`, en ms) est toujours fourni par l'appelant.
 */

export type L = { readonly fr: string; readonly en: string }
/** Réponse : booléen (vrai/faux) ou indices AFFICHÉS cochés (QCM). */
export type Choice = boolean | readonly number[]

export const QUESTION_COUNT = 10
export const QUESTION_SECONDS = 20
/** Durées proposées à l'hôte avant la partie (en secondes). */
export const SECONDS_CHOICES = [10, 15, 20, 30, 45, 60, 0] as const
/** `seconds = 0` : partie sans minuteur (la manche se clôt quand tous ont répondu, ou à la main par l'hôte). */
export const NO_LIMIT = 0
/** Langue d'affichage des questions pour toute la partie (choisie par l'hôte). */
export type GameLang = 'fr' | 'en'
export const DEFAULT_LANG: GameLang = 'fr'
export const BASE_POINTS = 500
export const SPEED_POINTS = 500
export const MAX_NAME_LENGTH = 20

/** Score d'une manche : 0 si faux, sinon 500 + 500 × (temps restant / temps total), arrondi. */
export function scoreFor(correct: boolean, remainingMs: number, totalMs: number): number {
  if (!correct) return 0
  const ratio = totalMs > 0 ? Math.min(1, Math.max(0, remainingMs / totalMs)) : 0
  return BASE_POINTS + Math.round(SPEED_POINTS * ratio)
}

// --------------------------------------------------------------------------- Messages

/** D'où vient la question : matière (ex. REC1) et chapitre. */
export interface QuestionOrigin {
  readonly course: string
  readonly chapter: number
  readonly title: L
}

/** Question telle que stockée par l'hôte (avec la réponse). Les indices sont ceux de l'ordre AFFICHÉ. */
export interface BattleQuestion {
  readonly id: string
  readonly kind: 'tf' | 'mcq'
  readonly text: L
  /** Options dans l'ordre affiché (vide pour un vrai/faux). */
  readonly options: readonly L[]
  readonly correct: boolean | readonly number[]
  readonly explanation: L
  readonly origin?: QuestionOrigin
}

/** Question envoyée aux invités : jamais la réponse ni l'explication. */
export type PublicQuestion = {
  readonly index: number
  readonly total: number
  readonly durationMs: number
  readonly kind: 'tf' | 'mcq'
  readonly text: L
  readonly options: readonly L[]
  /** Plusieurs réponses possibles (cases à cocher) ? Déduit du nombre de bonnes réponses. */
  readonly multi: boolean
  /** Matière et chapitre de la question (affichés aux joueurs). */
  readonly origin: QuestionOrigin | null
}

export interface PlayerInfo {
  readonly id: string
  readonly name: string
  readonly avatar: CourseColor
  readonly connected: boolean
}

export interface RankedPlayer extends PlayerInfo {
  readonly score: number
  /** Rang « compétition » : deux joueurs à égalité ont le même rang (1, 1, 3). */
  readonly rank: number
  /** Points gagnés à la dernière manche. */
  readonly gain: number
}

export interface RoundResult {
  readonly id: string
  readonly answered: boolean
  readonly correct: boolean
  readonly gain: number
}

export type GameMessage =
  | { readonly t: 'hello'; readonly name: string; readonly avatar: CourseColor }
  | {
      readonly t: 'lobby'
      readonly hostId: string
      readonly players: readonly PlayerInfo[]
      readonly locked: boolean
      readonly total: number
      readonly seconds: number
      readonly lang: GameLang
      /** Correction détaillée (justification du cours) après chaque question ? */
      readonly feedback: boolean
    }
  | {
      readonly t: 'start'
      readonly total: number
      readonly seconds: number
      readonly lang: GameLang
      readonly feedback: boolean
    }
  | ({ readonly t: 'question' } & PublicQuestion)
  | { readonly t: 'answer'; readonly index: number; readonly choice: Choice }
  | {
      readonly t: 'reveal'
      readonly index: number
      readonly correct: boolean | readonly number[]
      readonly explanation: L
      readonly results: readonly RoundResult[]
    }
  | { readonly t: 'scores'; readonly ranking: readonly RankedPlayer[] }
  | { readonly t: 'end'; readonly ranking: readonly RankedPlayer[] }

export interface Outgoing {
  /** Identifiant du destinataire ou `'all'`. */
  readonly to: string
  readonly msg: GameMessage
}

// --------------------------------------------------------------------------- Validation des messages reçus

const isObj = (v: unknown): v is Record<string, unknown> =>
  typeof v === 'object' && v !== null && !Array.isArray(v)
const isInt = (v: unknown): v is number => typeof v === 'number' && Number.isInteger(v)
const isL = (v: unknown): v is L => isObj(v) && typeof v.fr === 'string' && typeof v.en === 'string'
const isOrigin = (v: unknown): v is QuestionOrigin =>
  isObj(v) && typeof v.course === 'string' && isInt(v.chapter) && isL(v.title)
const isAvatar = (v: unknown): v is CourseColor => AVATAR_COLORS.includes(v as CourseColor)
const asLang = (v: unknown): GameLang => (v === 'en' ? 'en' : DEFAULT_LANG)
const asFeedback = (v: unknown): boolean => v !== false

export function cleanName(raw: unknown): string {
  const s = typeof raw === 'string' ? raw.replace(/\s+/g, ' ').trim().slice(0, MAX_NAME_LENGTH) : ''
  return s || 'Joueur'
}

function isChoice(v: unknown): v is Choice {
  return typeof v === 'boolean' || (Array.isArray(v) && v.every(isInt))
}

function isPlayerInfo(v: unknown): v is PlayerInfo {
  return (
    isObj(v) &&
    typeof v.id === 'string' &&
    typeof v.name === 'string' &&
    isAvatar(v.avatar) &&
    typeof v.connected === 'boolean'
  )
}

function isRanked(v: unknown): v is RankedPlayer {
  return isPlayerInfo(v) && isObj(v) && isInt(v.score) && isInt(v.rank) && isInt(v.gain)
}

function isResult(v: unknown): v is RoundResult {
  return (
    isObj(v) &&
    typeof v.id === 'string' &&
    typeof v.answered === 'boolean' &&
    typeof v.correct === 'boolean' &&
    isInt(v.gain)
  )
}

/** Valide un message réseau (jamais de confiance) ; `null` si inconnu ou mal formé. */
export function parseGameMessage(raw: WireMessage): GameMessage | null {
  const m = raw as Record<string, unknown>
  switch (raw.t) {
    case 'hello':
      return isAvatar(m.avatar) ? { t: 'hello', name: cleanName(m.name), avatar: m.avatar } : null
    case 'lobby':
      return typeof m.hostId === 'string' &&
        Array.isArray(m.players) &&
        m.players.every(isPlayerInfo) &&
        typeof m.locked === 'boolean' &&
        isInt(m.total) &&
        isInt(m.seconds)
        ? {
            t: 'lobby',
            hostId: m.hostId,
            players: m.players,
            locked: m.locked,
            total: m.total,
            seconds: m.seconds,
            lang: asLang(m.lang),
            feedback: asFeedback(m.feedback),
          }
        : null
    case 'start':
      return isInt(m.total) && isInt(m.seconds)
        ? {
            t: 'start',
            total: m.total,
            seconds: m.seconds,
            lang: asLang(m.lang),
            feedback: asFeedback(m.feedback),
          }
        : null
    case 'question':
      return isInt(m.index) &&
        isInt(m.total) &&
        isInt(m.durationMs) &&
        (m.kind === 'tf' || m.kind === 'mcq') &&
        isL(m.text) &&
        Array.isArray(m.options) &&
        m.options.every(isL) &&
        typeof m.multi === 'boolean' &&
        (m.origin === undefined || m.origin === null || isOrigin(m.origin))
        ? {
            t: 'question',
            index: m.index,
            total: m.total,
            durationMs: m.durationMs,
            kind: m.kind,
            text: m.text,
            options: m.options,
            multi: m.multi,
            origin: isOrigin(m.origin) ? m.origin : null,
          }
        : null
    case 'answer':
      return isInt(m.index) && isChoice(m.choice)
        ? { t: 'answer', index: m.index, choice: m.choice }
        : null
    case 'reveal':
      return isInt(m.index) &&
        isChoice(m.correct) &&
        isL(m.explanation) &&
        Array.isArray(m.results) &&
        m.results.every(isResult)
        ? {
            t: 'reveal',
            index: m.index,
            correct: m.correct,
            explanation: m.explanation,
            results: m.results,
          }
        : null
    case 'scores':
    case 'end':
      return Array.isArray(m.ranking) && m.ranking.every(isRanked)
        ? { t: raw.t, ranking: m.ranking }
        : null
    default:
      return null
  }
}

// --------------------------------------------------------------------------- Classement

/** Classement par score décroissant (ordre d'arrivée en cas d'égalité), rangs « compétition ». */
export function rankPlayers(
  players: readonly (PlayerInfo & { readonly score: number })[],
  gains: Readonly<Record<string, number>> = {},
): RankedPlayer[] {
  // tri stable (ES2019) : à score égal, l'ordre d'arrivée est conservé
  const sorted = [...players].sort((a, b) => b.score - a.score)
  let rank = 0
  return sorted.map((p, i) => {
    if (i === 0 || p.score !== sorted[i - 1]!.score) rank = i + 1
    return {
      id: p.id,
      name: p.name,
      avatar: p.avatar,
      connected: p.connected,
      score: p.score,
      rank,
      gain: gains[p.id] ?? 0,
    }
  })
}

// --------------------------------------------------------------------------- Hôte (arbitre)

export type HostPhase = 'lobby' | 'question' | 'reveal' | 'podium'

export interface HostPlayer extends PlayerInfo {
  readonly score: number
}

export interface HostState {
  readonly phase: HostPhase
  readonly hostId: string
  /** Dans l'ordre d'arrivée. */
  readonly players: readonly HostPlayer[]
  readonly questions: readonly BattleQuestion[]
  /** Nombre de questions prévu (connu dès le salon, avant le départ). */
  readonly total: number
  readonly seconds: number
  readonly lang: GameLang
  readonly feedback: boolean
  readonly index: number
  readonly startedAt: number
  readonly answers: Readonly<Record<string, { readonly choice: Choice; readonly at: number }>>
  readonly gains: Readonly<Record<string, number>>
}

export type HostAction =
  | {
      readonly type: 'hello'
      readonly id: string
      readonly name: string
      readonly avatar: CourseColor
    }
  /** Liste des invités actuellement connectés (l'hôte, lui, l'est toujours). */
  | { readonly type: 'peers'; readonly ids: readonly string[] }
  | { readonly type: 'start'; readonly questions: readonly BattleQuestion[]; readonly now: number }
  | {
      readonly type: 'answer'
      readonly id: string
      readonly index: number
      readonly choice: Choice
      readonly now: number
    }
  | { readonly type: 'tick'; readonly now: number }
  | { readonly type: 'close' }
  | { readonly type: 'next'; readonly now: number }

export interface Step {
  readonly state: HostState
  readonly out: readonly Outgoing[]
}

export function createHostState(
  hostId: string,
  total: number = QUESTION_COUNT,
  seconds: number = QUESTION_SECONDS,
  lang: GameLang = DEFAULT_LANG,
  feedback = true,
): HostState {
  return {
    phase: 'lobby',
    hostId,
    players: [],
    questions: [],
    total,
    seconds,
    lang,
    feedback,
    index: -1,
    startedAt: 0,
    answers: {},
    gains: {},
  }
}

const durationMs = (s: HostState) => s.seconds * 1000
const unlimited = (s: HostState) => s.seconds === NO_LIMIT

function toInfo(p: HostPlayer): PlayerInfo {
  return { id: p.id, name: p.name, avatar: p.avatar, connected: p.connected }
}

function lobbyMessage(s: HostState, locked: boolean): GameMessage {
  return {
    t: 'lobby',
    hostId: s.hostId,
    players: s.players.map(toInfo),
    locked,
    total: s.total,
    seconds: s.seconds,
    lang: s.lang,
    feedback: s.feedback,
  }
}

export function publicQuestion(s: HostState, index: number): PublicQuestion {
  const q = s.questions[index]!
  return {
    index,
    total: s.questions.length,
    durationMs: durationMs(s),
    kind: q.kind,
    text: q.text,
    options: q.options,
    multi: Array.isArray(q.correct) && q.correct.length > 1,
    origin: q.origin ?? null,
  }
}

/** Réponse normalisée si elle est valable pour la question, sinon `null`. */
function normalizeChoice(q: BattleQuestion, choice: Choice): Choice | null {
  if (q.kind === 'tf') return typeof choice === 'boolean' ? choice : null
  if (typeof choice === 'boolean') return null
  const set = [...new Set(choice)].sort((a, b) => a - b)
  if (set.length === 0 || set.some((i) => i < 0 || i >= q.options.length)) return null
  return set
}

/** Correction exacte : pour un QCM, l'ensemble coché doit être identique à l'ensemble attendu. */
export function isChoiceCorrect(q: BattleQuestion, choice: Choice): boolean {
  if (typeof q.correct === 'boolean') return choice === q.correct
  if (typeof choice === 'boolean') return false
  const good = new Set(q.correct)
  return choice.length === good.size && choice.every((i) => good.has(i))
}

function allAnswered(s: HostState): boolean {
  const waiting = s.players.filter((p) => p.connected)
  return waiting.length > 0 && waiting.every((p) => s.answers[p.id] !== undefined)
}

function closeRound(s: HostState): Step {
  const q = s.questions[s.index]!
  const gains: Record<string, number> = {}
  const results: RoundResult[] = []
  for (const p of s.players) {
    const a = s.answers[p.id]
    const correct = a !== undefined && isChoiceCorrect(q, a.choice)
    const remaining = a ? durationMs(s) - (a.at - s.startedAt) : 0
    // sans minuteur, pas de bonus de vitesse : une bonne réponse vaut le maximum
    const gain = unlimited(s)
      ? correct
        ? BASE_POINTS + SPEED_POINTS
        : 0
      : scoreFor(correct, remaining, durationMs(s))
    gains[p.id] = gain
    results.push({ id: p.id, answered: a !== undefined, correct, gain })
  }
  const players = s.players.map((p) => ({ ...p, score: p.score + (gains[p.id] ?? 0) }))
  const state: HostState = { ...s, phase: 'reveal', players, gains }
  return {
    state,
    out: [
      {
        to: ALL,
        msg: {
          t: 'reveal',
          index: s.index,
          correct: q.correct,
          // correction détaillée facultative : sans elle, rien n'est envoyé
          explanation: s.feedback ? q.explanation : { fr: '', en: '' },
          results,
        },
      },
      { to: ALL, msg: { t: 'scores', ranking: rankPlayers(players, gains) } },
    ],
  }
}

export function hostReduce(s: HostState, action: HostAction): Step {
  switch (action.type) {
    case 'hello': {
      const known = s.players.some((p) => p.id === action.id)
      if (s.phase !== 'lobby') {
        // partie commencée : on prévient seulement l'arrivant (pas de reconnexion en T17)
        return known
          ? { state: s, out: [] }
          : { state: s, out: [{ to: action.id, msg: lobbyMessage(s, true) }] }
      }
      const name = cleanName(action.name)
      const players: HostPlayer[] = known
        ? s.players.map((p) =>
            p.id === action.id ? { ...p, name, avatar: action.avatar, connected: true } : p,
          )
        : [...s.players, { id: action.id, name, avatar: action.avatar, connected: true, score: 0 }]
      const state = { ...s, players }
      return { state, out: [{ to: ALL, msg: lobbyMessage(state, false) }] }
    }

    case 'peers': {
      const here = new Set(action.ids)
      const connectedNow = (p: HostPlayer) => p.id === s.hostId || here.has(p.id)
      if (s.phase === 'lobby') {
        const players = s.players.filter(connectedNow)
        if (players.length === s.players.length) return { state: s, out: [] }
        const state = { ...s, players }
        return { state, out: [{ to: ALL, msg: lobbyMessage(state, false) }] }
      }
      // en partie : le joueur reste dans le classement mais on ne l'attend plus
      const players = s.players.map((p) =>
        p.connected === connectedNow(p) ? p : { ...p, connected: connectedNow(p) },
      )
      const changed = players.some((p, i) => p !== s.players[i])
      if (!changed) return { state: s, out: [] }
      const state = { ...s, players }
      return s.phase === 'question' && allAnswered(state) ? closeRound(state) : { state, out: [] }
    }

    case 'start': {
      if (s.phase !== 'lobby' || action.questions.length === 0) return { state: s, out: [] }
      const state: HostState = {
        ...s,
        phase: 'question',
        questions: action.questions,
        total: action.questions.length,
        index: 0,
        startedAt: action.now,
        answers: {},
        gains: {},
        players: s.players.map((p) => ({ ...p, score: 0 })),
      }
      return {
        state,
        out: [
          { to: ALL, msg: {
              t: 'start',
              total: state.total,
              seconds: s.seconds,
              lang: s.lang,
              feedback: s.feedback,
            } },
          { to: ALL, msg: { t: 'question', ...publicQuestion(state, 0) } },
        ],
      }
    }

    case 'answer': {
      if (s.phase !== 'question' || action.index !== s.index) return { state: s, out: [] }
      const player = s.players.find((p) => p.id === action.id)
      if (!player || !player.connected || s.answers[action.id]) return { state: s, out: [] }
      const elapsed = action.now - s.startedAt
      if (!unlimited(s) && elapsed > durationMs(s)) return { state: s, out: [] } // réponse tardive : ignorée
      const choice = normalizeChoice(s.questions[s.index]!, action.choice)
      if (choice === null) return { state: s, out: [] }
      const state = {
        ...s,
        answers: { ...s.answers, [action.id]: { choice, at: Math.max(s.startedAt, action.now) } },
      }
      return allAnswered(state) ? closeRound(state) : { state, out: [] }
    }

    case 'tick':
      return s.phase === 'question' && !unlimited(s) && action.now - s.startedAt >= durationMs(s)
        ? closeRound(s)
        : { state: s, out: [] }

    /** L'hôte clôt la manche à la main (surtout utile sans minuteur). */
    case 'close':
      return s.phase === 'question' ? closeRound(s) : { state: s, out: [] }

    case 'next': {
      if (s.phase !== 'reveal') return { state: s, out: [] }
      if (s.index + 1 < s.questions.length) {
        const state: HostState = {
          ...s,
          phase: 'question',
          index: s.index + 1,
          startedAt: action.now,
          answers: {},
          gains: {},
        }
        return {
          state,
          out: [{ to: ALL, msg: { t: 'question', ...publicQuestion(state, state.index) } }],
        }
      }
      const state: HostState = { ...s, phase: 'podium' }
      return {
        state,
        out: [{ to: ALL, msg: { t: 'end', ranking: rankPlayers(s.players, s.gains) } }],
      }
    }
  }
}

// --------------------------------------------------------------------------- Joueur (vue)

export type GuestPhase = 'joining' | 'lobby' | 'locked' | 'question' | 'reveal' | 'podium'

export interface RevealInfo {
  readonly correct: boolean | readonly number[]
  readonly explanation: L
  readonly results: readonly RoundResult[]
}

export interface GuestView {
  readonly phase: GuestPhase
  readonly hostId: string
  readonly players: readonly PlayerInfo[]
  readonly total: number
  readonly seconds: number
  readonly lang: GameLang
  readonly feedback: boolean
  readonly question: PublicQuestion | null
  /** Instant (ms) de réception de la question : sert à afficher le minuteur. */
  readonly receivedAt: number
  readonly myChoice: Choice | null
  readonly reveal: RevealInfo | null
  readonly ranking: readonly RankedPlayer[]
}

export type GuestEvent =
  | { readonly type: 'msg'; readonly msg: GameMessage; readonly now: number }
  | { readonly type: 'answered'; readonly choice: Choice }

export function createGuestView(): GuestView {
  return {
    phase: 'joining',
    hostId: '',
    players: [],
    total: QUESTION_COUNT,
    seconds: QUESTION_SECONDS,
    lang: DEFAULT_LANG,
    feedback: true,
    question: null,
    receivedAt: 0,
    myChoice: null,
    reveal: null,
    ranking: [],
  }
}

export function guestReduce(v: GuestView, ev: GuestEvent): GuestView {
  if (ev.type === 'answered') {
    return v.phase === 'question' && v.myChoice === null ? { ...v, myChoice: ev.choice } : v
  }
  const m = ev.msg
  switch (m.t) {
    case 'lobby':
      if (m.locked) return { ...v, phase: 'locked', hostId: m.hostId }
      // un lobby tardif ne doit pas ramener une partie en cours au salon
      if (v.phase !== 'joining' && v.phase !== 'lobby') return v
      return {
        ...v,
        phase: 'lobby',
        hostId: m.hostId,
        players: m.players,
        total: m.total,
        seconds: m.seconds,
        lang: m.lang,
        feedback: m.feedback,
      }
    case 'start':
      return { ...v, total: m.total, seconds: m.seconds, lang: m.lang, feedback: m.feedback }
    case 'question': {
      const question: PublicQuestion = {
        index: m.index,
        total: m.total,
        durationMs: m.durationMs,
        kind: m.kind,
        text: m.text,
        options: m.options,
        multi: m.multi,
        origin: m.origin,
      }
      return { ...v, phase: 'question', question, receivedAt: ev.now, myChoice: null, reveal: null }
    }
    case 'reveal':
      if (v.phase !== 'question' || v.question?.index !== m.index) return v
      return {
        ...v,
        phase: 'reveal',
        reveal: { correct: m.correct, explanation: m.explanation, results: m.results },
      }
    case 'scores':
      return { ...v, ranking: m.ranking }
    case 'end':
      return { ...v, phase: 'podium', ranking: m.ranking }
    default:
      return v
  }
}

/** Gagnants du podium : tous les joueurs de rang 1 (égalités comprises). */
export function winners(ranking: readonly RankedPlayer[]): RankedPlayer[] {
  return ranking.filter((p) => p.rank === 1)
}
