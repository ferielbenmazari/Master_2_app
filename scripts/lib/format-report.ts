import type { Issue, Report } from './validate.ts'

const plural = (n: number, one: string, many: string): string => `${n} ${n > 1 ? many : one}`

export function formatIssue(i: Issue): string {
  const mark = i.severity === 'error' ? '✖' : '⚠'
  const where = i.path ? `${i.file} › ${i.path}` : i.file
  return `${mark} ${where} : ${i.message}`
}

export function formatSummary(r: Report): string {
  const errors = r.issues.filter((i) => i.severity === 'error').length
  const warnings = r.issues.length - errors
  const { stats } = r
  const parts = [
    plural(stats.courses, 'matière', 'matières'),
    plural(stats.chapters, 'chapitre', 'chapitres'),
    ...(stats.exams > 0 ? [plural(stats.exams, 'examen', 'examens')] : []),
    plural(stats.citations, 'citation vérifiée', 'citations vérifiées'),
    `couverture ★★★ ${stats.coverage3.covered}/${stats.coverage3.total}`,
    ...(stats.coverage2.total > 0 ? [`★★ ${stats.coverage2.covered}/${stats.coverage2.total}`] : []),
    plural(warnings, 'avertissement', 'avertissements'),
  ]
  if (errors > 0) parts.push(plural(errors, 'erreur', 'erreurs'))
  return `${errors > 0 ? '✖' : '✔'} ${parts.join(' · ')}`
}

export function formatReport(r: Report): string {
  const errors = r.issues.filter((i) => i.severity === 'error')
  const warnings = r.issues.filter((i) => i.severity === 'warning')
  return [...errors, ...warnings].map(formatIssue).concat(formatSummary(r)).join('\n')
}
