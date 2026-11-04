/** Lecture et validation de content/<id>/sources.json ; résolution du fichier texte lu et cité. */
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { SourcesSchema, type SourceEntry, type SourceTier } from '../../../src/content/schema.ts'

export const DEFAULT_TIERS: SourceTier[] = ['cours', 'annale']

export interface ResolvedSource {
  /** fichier réellement lu et cité (`text` s'il existe, sinon `file`), relatif à la racine du repo */
  file: string
  /** fichier d'origine déclaré dans le manifeste (PDF, …) */
  original: string
  tier: SourceTier
  title?: string
  chapters?: string[]
  /** false si le fichier texte n'existe pas (extraction pas encore faite) ou n'est pas lisible comme texte */
  available: boolean
}

export function loadManifest(root: string, courseId: string): SourceEntry[] {
  const path = join(root, 'content', courseId, 'sources.json')
  if (!existsSync(path)) {
    const known = listCourseIds(root)
    throw new Error(`Matière inconnue « ${courseId} » (content/${courseId}/sources.json absent). Matières : ${known.join(', ') || 'aucune'}`)
  }
  let raw: unknown
  try {
    raw = JSON.parse(readFileSync(path, 'utf-8'))
  } catch (e) {
    throw new Error(`content/${courseId}/sources.json : JSON invalide (${(e as Error).message})`)
  }
  const r = SourcesSchema.safeParse(raw)
  if (!r.success) {
    const first = r.error.issues[0]
    throw new Error(`content/${courseId}/sources.json invalide : ${first?.path.join('.')} ${first?.message}`)
  }
  return r.data.sources
}

export function listCourseIds(root: string): string[] {
  try {
    return readdirSync(join(root, 'content'), { withFileTypes: true })
      .filter((d) => d.isDirectory() && existsSync(join(root, 'content', d.name, 'sources.json')))
      .map((d) => d.name)
      .sort()
  } catch {
    return []
  }
}

const TEXT_EXT = /\.(md|txt|markdown)$/i

/** Chemin du fichier texte lu pour une entrée : `text`, sinon `file` s'il est déjà du texte ; `null` sinon. */
export function resolveText(entry: SourceEntry): string | null {
  if (entry.text) return entry.text
  return TEXT_EXT.test(entry.file) ? entry.file : null
}

export function resolveSources(root: string, courseId: string): ResolvedSource[] {
  return loadManifest(root, courseId).map((e) => {
    const text = resolveText(e)
    return {
      file: text ?? e.file,
      original: e.file,
      tier: e.tier,
      ...(e.title !== undefined ? { title: e.title } : {}),
      ...(e.chapters !== undefined ? { chapters: e.chapters } : {}),
      available: e.tier !== 'ignore' && text !== null && existsSync(join(root, text)),
    }
  })
}

/** Tous les fichiers classés « ignore » (toutes matières) : jamais lus ni renvoyés. */
export function ignoredFiles(root: string): Set<string> {
  const out = new Set<string>()
  for (const id of listCourseIds(root)) {
    try {
      for (const e of loadManifest(root, id)) {
        if (e.tier === 'ignore') {
          out.add(e.file)
          if (e.text) out.add(e.text)
        }
      }
    } catch {
      /* manifeste invalide : signalé par le validateur de contenu */
    }
  }
  return out
}
