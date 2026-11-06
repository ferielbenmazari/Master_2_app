/**
 * Flashcards virtuelles tirées du glossaire (T22) : aucune donnée ajoutée au contenu, donc aucune invention.
 * Deux cartes par terme : terme → définition (`-a`) et définition → terme (`-b`).
 * Les ids sont stables (`<chapterId>-gl-<termId>-a|b`) : l'historique FSRS survit à toute évolution de l'app.
 */
import type { Chapter, Flashcard, L, Term } from '@/content/schema'
import { UI } from '@/i18n/ui'

export type GlossarySide = 'a' | 'b'

/** Id stable d'une carte du glossaire. */
export function glossaryCardId(chapterId: string, termId: string, side: GlossarySide): string {
  return `${chapterId}-gl-${termId}-${side}`
}

function section(label: L, text: L | undefined): L | null {
  if (!text) return null
  return { fr: `**${label.fr}.** ${text.fr}`, en: `**${label.en}.** ${text.en}` }
}

/** Verso « terme → définition » : définition, puis exemple et piège s'ils existent (séparés par un saut de ligne). */
function definitionBack(term: Term): L {
  const parts: L[] = [term.definition]
  const ex = section(UI.flashcards.cardExample, term.example)
  const pit = section(UI.flashcards.cardPitfall, term.pitfall)
  if (ex) parts.push(ex)
  if (pit) parts.push(pit)
  return { fr: parts.map((p) => p.fr).join('<br>'), en: parts.map((p) => p.en).join('<br>') }
}

/** Les deux cartes d'un terme, rattachées à `chapterId`. */
export function termCards(chapterId: string, term: Term): [Flashcard, Flashcard] {
  const common = { termId: term.id, src: term.src, ...(term.notion ? { notions: [term.notion] } : {}) }
  return [
    { id: glossaryCardId(chapterId, term.id, 'a'), front: { fr: term.fr, en: term.en }, back: definitionBack(term), ...common },
    { id: glossaryCardId(chapterId, term.id, 'b'), front: term.definition, back: { fr: term.fr, en: term.en }, ...common },
  ]
}

/**
 * Cartes du glossaire d'une matière, par chapitre (`chapters` = chapitres de la matière dans l'ordre).
 * - un `term.id` défini dans plusieurs chapitres ne donne des cartes qu'une fois (premier chapitre) ;
 * - un terme déjà couvert par une flashcard écrite à la main dans le même chapitre n'en reçoit pas ;
 * - dans un chapitre, toutes les cartes « terme → définition » précèdent les « définition → terme »
 *   (l'une ne sert pas de réponse à l'autre juste après).
 */
export function courseGlossaryCards(chapters: readonly Chapter[]): Map<string, Flashcard[]> {
  const claimed = new Set<string>()
  const out = new Map<string, Flashcard[]>()
  for (const ch of chapters) {
    const written = new Set(ch.flashcards.flatMap((f) => (f.termId ? [f.termId] : [])))
    const as: Flashcard[] = []
    const bs: Flashcard[] = []
    for (const term of ch.glossary) {
      if (claimed.has(term.id)) continue
      claimed.add(term.id)
      if (written.has(term.id)) continue
      const [a, b] = termCards(ch.id, term)
      as.push(a)
      bs.push(b)
    }
    out.set(ch.id, [...as, ...bs])
  }
  return out
}

/** Nombre total de cartes d'un chapitre (écrites + glossaire), dans le contexte de sa matière. */
export function chapterCardCount(chapters: readonly Chapter[], chapterId: string): number {
  const ch = chapters.find((c) => c.id === chapterId)
  return ch ? ch.flashcards.length + (courseGlossaryCards(chapters).get(chapterId)?.length ?? 0) : 0
}
