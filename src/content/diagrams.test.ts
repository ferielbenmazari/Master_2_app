import { describe, expect, it } from 'vitest'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Garde-fou contenu : chaque schéma Mermaid des chapitres doit être accepté par le moteur de l'app.
 * Un schéma refusé s'affiche « Le schéma n'a pas pu être affiché » dans le lecteur.
 */
type Block = { type: string; mermaid?: string }

function diagrams(): { where: string; code: string }[] {
  const root = join(process.cwd(), 'content')
  const out: { where: string; code: string }[] = []
  for (const course of readdirSync(root)) {
    const dir = join(root, course, 'chapters')
    if (!existsSync(dir)) continue
    for (const file of readdirSync(dir).filter((f) => f.endsWith('.json'))) {
      const story = (JSON.parse(readFileSync(join(dir, file), 'utf8')) as { story: Block[] }).story
      story.forEach((b, i) => {
        if (b.type === 'diagram' && b.mermaid) out.push({ where: `${course}/${file} story[${i}]`, code: b.mermaid })
      })
    }
  }
  return out
}

describe('schémas du contenu', () => {
  it('chaque bloc diagram est un Mermaid valide', async () => {
    const { default: mermaid } = await import('mermaid')
    mermaid.initialize({ startOnLoad: false, securityLevel: 'strict' })
    const all = diagrams()
    expect(all.length).toBeGreaterThan(0)
    const errors: string[] = []
    for (const d of all) {
      try {
        await mermaid.parse(d.code)
      } catch (e) {
        errors.push(`${d.where} : ${String(e).split('\n')[0]}`)
      }
    }
    expect(errors).toEqual([])
  }, 30_000)
})
