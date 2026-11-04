/** Lecture de content/ sur disque → ContentTree (pas d'import.meta.glob : ce script tourne sous Node). */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import type { ContentTree, CourseInput, Issue, RawFile } from './validate.ts'

function readJson(root: string, rel: string, issues: Issue[]): RawFile | undefined {
  const abs = join(root, rel)
  if (!existsSync(abs)) return undefined
  try {
    return { file: rel, data: JSON.parse(readFileSync(abs, 'utf-8')) as unknown }
  } catch (e) {
    issues.push({ severity: 'error', code: 'R1', file: rel, path: '', message: `JSON invalide : ${e instanceof Error ? e.message : String(e)}` })
    return undefined
  }
}

function jsonFiles(root: string, relDir: string): string[] {
  const abs = join(root, relDir)
  if (!existsSync(abs)) return []
  return readdirSync(abs)
    .filter((f) => f.endsWith('.json'))
    .sort()
    .map((f) => `${relDir}/${f}`)
}

export function loadContentTree(root: string): ContentTree {
  const loadIssues: Issue[] = []
  const contentDir = join(root, 'content')
  const dirs = existsSync(contentDir)
    ? readdirSync(contentDir)
        .filter((d) => statSync(join(contentDir, d)).isDirectory())
        .sort()
    : []
  const courses: CourseInput[] = dirs.map((dir) => {
    const base = `content/${dir}`
    const course = readJson(root, `${base}/course.json`, loadIssues)
    const sources = readJson(root, `${base}/sources.json`, loadIssues)
    const notions = readJson(root, `${base}/notions.json`, loadIssues)
    const pick = (rels: string[]): RawFile[] =>
      rels.flatMap((rel) => {
        const f = readJson(root, rel, loadIssues)
        return f ? [f] : []
      })
    const input: CourseInput = {
      dir,
      chapters: pick(jsonFiles(root, `${base}/chapters`)),
      exams: pick(jsonFiles(root, `${base}/exams`)),
    }
    if (course) input.course = course
    if (sources) input.sources = sources
    if (notions) input.notions = notions
    return input
  })
  return { courses, loadIssues }
}
