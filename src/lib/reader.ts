import type { StoryBlock } from '@/content/schema'
import type { LangMode } from '@/store/prefs'

export type Layout = 'fr' | 'en' | 'stack' | 'columns'

/** Mise en page selon le mode de langue et la largeur (≥ 1024 px = « wide »). */
export function layoutFor(mode: LangMode, wide: boolean): Layout {
  if (mode === 'fr') return 'fr'
  if (mode === 'en') return 'en'
  return wide ? 'columns' : 'stack'
}

export type Heading = Extract<StoryBlock, { type: 'heading' }>
export interface Episode {
  /** `null` pour l'introduction (blocs avant le premier titre). */
  heading: Heading | null
  /** Numéro 1..total (0 pour l'introduction). */
  n: number
  blocks: StoryBlock[]
}

/** Découpe l'histoire en épisodes : chaque `heading` ouvre un épisode. */
export function splitEpisodes(story: StoryBlock[]): { episodes: Episode[]; total: number } {
  const episodes: Episode[] = []
  let n = 0
  for (const b of story) {
    if (b.type === 'heading') {
      n++
      episodes.push({ heading: b, n, blocks: [] })
    } else {
      let cur = episodes[episodes.length - 1]
      if (!cur) {
        cur = { heading: null, n: 0, blocks: [] }
        episodes.push(cur)
      }
      cur.blocks.push(b)
    }
  }
  return { episodes, total: n }
}

/** Progression de lecture 0..1 d'après le défilement de la page. */
export function scrollRatio(scrollTop: number, scrollHeight: number, viewport: number): number {
  const max = scrollHeight - viewport
  if (!(max > 0)) return 1
  return Math.min(1, Math.max(0, scrollTop / max))
}
