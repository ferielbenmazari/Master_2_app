#!/usr/bin/env node
// Sommaire et statistiques des chapitres d'une matière (docs/06 §11).
// Usage :
//   node tools/cours/outline.mjs <courseId>              → tableau de bord de tous les chapitres
//   node tools/cours/outline.mjs <courseId> <chapitre>   → sommaire détaillé d'un chapitre (préfixe de fichier ou d'id)
//   ajouter --en pour la version anglaise, --blocs pour lister chaque bloc
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const [courseId, chapArg, ...flags] = process.argv.slice(2).filter((a) => a !== '--en' && a !== '--blocs')
const lang = process.argv.includes('--en') ? 'en' : 'fr'
const showBlocks = process.argv.includes('--blocs')
if (!courseId) {
  console.error('Usage : node tools/cours/outline.mjs <courseId> [chapitre] [--en] [--blocs]')
  process.exit(1)
}
void flags
const dir = join(process.cwd(), 'content', courseId, 'chapters')
if (!existsSync(dir)) {
  console.error(`Matière introuvable : ${dir}`)
  process.exit(1)
}
const course = JSON.parse(readFileSync(join(process.cwd(), 'content', courseId, 'course.json'), 'utf8'))
const notionsFile = join(process.cwd(), 'content', courseId, 'notions.json')
const notions = existsSync(notionsFile) ? JSON.parse(readFileSync(notionsFile, 'utf8')) : null
const notionList = notions ? (Array.isArray(notions) ? notions : notions.notions) : []

const words = (s) => (s ? s.split(/\s+/).filter(Boolean).length : 0)
function blockWords(b) {
  let n = 0
  if (b.text && typeof b.text === 'object') n += words(b.text.fr)
  if (b.type === 'list') n += b.items.reduce((s, i) => s + words(i.fr), 0)
  if (b.type === 'table') n += b.rows.flat().reduce((s, c) => s + words(c.fr), 0)
  if (b.type === 'method') n += b.steps.reduce((s, st) => s + words(st.do.fr) + words(st.why.fr), 0)
  return n
}
function stats(c) {
  const tf = c.quiz.filter((q) => q.type === 'true_false')
  const falsePct = tf.length ? Math.round((100 * tf.filter((q) => !q.answer).length) / tf.length) : 0
  const lv = {}
  for (const q of c.quiz) lv[q.level] = (lv[q.level] || 0) + 1
  const total = c.story.reduce((s, b) => s + blockWords(b), 0)
  return {
    words: total,
    minutes: Math.max(1, Math.round(total / 180)),
    diagrams: c.story.filter((b) => b.type === 'diagram').length,
    blocks: c.story.length,
    quiz: c.quiz.length,
    falsePct,
    levels: lv,
    fc: c.flashcards.length,
    ex: c.exercises.length,
    wr: c.writing.length,
  }
}
const files = readdirSync(dir).filter((f) => f.endsWith('.json'))
const chapters = files.map((f) => ({ file: f, c: JSON.parse(readFileSync(join(dir, f), 'utf8')) }))
const order = course.chapterOrder || chapters.map((x) => x.c.id)
chapters.sort((a, b) => order.indexOf(a.c.id) - order.indexOf(b.c.id))

if (!chapArg) {
  console.log(`# ${course.title[lang]} (${courseId}) — ${chapters.length} chapitres\n`)
  console.log('ordre | fichier | titre | mots (~min) | blocs | schémas | quiz (%FAUX) | fc | ex')
  let tot = 0
  for (const { file, c } of chapters) {
    const s = stats(c)
    tot += s.words
    console.log(`${c.order} | ${file} | ${c.title[lang]} | ${s.words} (~${s.minutes}) | ${s.blocks} | ${s.diagrams} | ${s.quiz} (${s.falsePct} %) | ${s.fc} | ${s.ex}`)
  }
  console.log(`\nTotal récit : ${tot} mots (~${Math.round(tot / 180)} min)`)
  process.exit(0)
}

const hit = chapters.find(({ file, c }) => file.startsWith(chapArg) || c.id === chapArg || c.id.startsWith(`${courseId}-${chapArg}`))
if (!hit) {
  console.error(`Chapitre introuvable : ${chapArg}`)
  process.exit(1)
}
const { c } = hit
const s = stats(c)
console.log(`# ${c.order}. ${c.title[lang]}  (${hit.file})`)
console.log(`${s.words} mots (~${s.minutes} min) · ${s.blocks} blocs · ${s.diagrams} schéma(s) · quiz ${s.quiz} (${s.falsePct} % de FAUX, niveaux ${JSON.stringify(s.levels)}) · flashcards ${s.fc} · exercices ${s.ex} · anglais ${s.wr}`)
if (c.question) console.log(`Question : ${c.question[lang]}`)
for (const o of c.objectives || []) console.log(`  ${o.id} [${o.level}] ${o.text[lang]}`)
for (const [k, v] of Object.entries(c.examFocus || {})) for (const x of v) console.log(`  examen (${k}) : ${x[lang]}`)
console.log('')
// parties : mots par partie, sous-parties et schémas
const parts = []
for (const [i, b] of c.story.entries()) {
  if (b.type === 'heading' || parts.length === 0) parts.push({ title: b.type === 'heading' ? b.text[lang] : '(avant la 1re partie)', words: 0, lines: [] })
  const part = parts[parts.length - 1]
  part.words += blockWords(b)
  if (showBlocks) {
    const t = b.text?.[lang] ?? b.caption?.[lang] ?? b.title?.[lang] ?? b.headers?.[0]?.[lang] ?? b.items?.[0]?.[lang] ?? b.quizId ?? ''
    part.lines.push(`  [${i}] ${b.type}${b.variant ? ':' + b.variant : ''} ${String(t).slice(0, 90).replace(/\n/g, ' ')}${b.notions ? '  {' + b.notions.join(', ') + '}' : ''}`)
  } else if (b.type === 'subheading') part.lines.push(`   ### ${b.text[lang]}`)
  else if (b.type === 'diagram') part.lines.push(`   [schéma] ${b.caption[lang].slice(0, 90)}`)
}
for (const p of parts) {
  console.log(`## ${p.title}  — ${p.words} mots`)
  for (const l of p.lines) console.log(l)
}

// couverture des notions déclarées dans notions.json pour ce chapitre
const nn = hit.c.id.slice(courseId.length + 1).split('-')[0]
const mine = notionList.filter((n) => n.chapter === nn && n.importance >= 2)
if (mine.length) {
  console.log('\nNotions ★★/★★★ rattachées à ce chapitre (notions.json) :')
  for (const n of mine) {
    const inStory = c.story.some((b) => ['paragraph', 'list', 'table', 'method'].includes(b.type) && b.notions?.includes(n.id))
    const inQuiz = c.quiz.some((q) => q.notions?.includes(n.id))
    const termN = new Map(c.glossary.map((t) => [t.id, t.notion]))
    const inFc = c.flashcards.some((f) => f.notions?.includes(n.id) || (f.termId && termN.get(f.termId) === n.id))
    const ok = inStory && (n.importance === 3 ? inQuiz && inFc : inQuiz || inFc)
    console.log(`  ${ok ? '✔' : '✖'} ${'★'.repeat(n.importance)} ${n.id} — récit ${inStory ? 'oui' : 'NON'}, quiz ${inQuiz ? 'oui' : 'non'}, flashcard ${inFc ? 'oui' : 'non'}`)
  }
}
