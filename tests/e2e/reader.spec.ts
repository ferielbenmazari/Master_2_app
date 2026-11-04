import { test, expect, type Page } from '@playwright/test'

const READ = '/#/matiere/rec1/chapitre/rec1-05-qualite-validite-ethique/lire'

async function onboard(page: Page) {
  await page.goto('/')
  const dialog = page.getByRole('dialog', { name: 'Choisis ton pseudo' })
  await dialog.getByLabel('Pseudo').fill('Léa')
  await dialog.getByRole('button', { name: 'C’est parti' }).click()
  await expect(dialog).toBeHidden()
}

test('lire REC1-05 : source, terme au clavier, « J’ai fini », coche sur la page matière', async ({
  page,
}) => {
  await onboard(page)
  await page.goto(READ)
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Ta recherche tient-elle debout',
  )

  // source : feuille avec citation exacte
  await page.getByRole('button', { name: 'Voir la source dans le cours' }).first().click()
  const sheet = page.getByRole('dialog', { name: 'Ce que dit le cours' })
  await expect(sheet.locator('blockquote').first()).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(sheet).toBeHidden()

  // terme : Entrée ouvre, Échap ferme
  const term = page.locator('button.term').first()
  await term.focus()
  await page.keyboard.press('Enter')
  const pop = page.getByRole('dialog', { name: /^Définition/ })
  await expect(pop).toBeVisible()
  await expect(pop).toBeFocused()
  await page.keyboard.press('Escape')
  await expect(pop).toBeHidden()
  await expect(term).toBeFocused()

  // fin de chapitre
  await page.getByRole('button', { name: 'J’ai fini' }).click()
  await expect(page.getByText('Chapitre terminé')).toBeVisible()
  await page.goto('/#/matiere/rec1')
  await expect(page.getByRole('img', { name: 'Lu' })).toHaveCount(1)
})

test('mode FR+EN desktop : colonnes FR/EN alignées bloc par bloc', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 })
  await onboard(page)
  await page.goto(READ)
  const fr = page.locator('article [lang="fr"]').first()
  await expect(fr).toBeVisible()
  // le code des evaluate s'exécute dans le navigateur : écrit en chaîne (ce projet de tests n'a pas la lib DOM)
  const pairs = await page.evaluate<
    number[]
  >(`Array.from(document.querySelectorAll('article .grid.grid-cols-2'))
    .slice(0, 8)
    .map((g) => {
      const [a, b] = Array.from(g.children).map((c) => c.getBoundingClientRect())
      return Math.abs(a.top - b.top)
    })`)
  expect(pairs.length).toBeGreaterThan(3)
  for (const d of pairs) expect(d).toBeLessThan(1)
})

test('Mermaid : diagramme malveillant neutralisé (navigateur réel)', async ({ page }) => {
  await onboard(page)
  // en dev, Vite peut recharger la page une fois quand il découvre `mermaid` : on réessaie
  const run = () =>
    page.evaluate<{
      xss: number
      bad: number
      handlers: boolean
      js: boolean
      len: number
    }>(`(async () => {
      window.__xss = 0
      const { renderMermaid } = await import('/src/components/content/mermaid-render.ts')
      const evil = 'graph TD\\n  A["<img src=x onerror=window.__xss=1>"] --> B["<script>window.__xss=2</script>"]\\n  click A href "javascript:window.__xss=3"'
      const svg = await renderMermaid(evil, 'dark')
      const host = document.createElement('div')
      host.innerHTML = svg
      document.body.append(host)
      await new Promise((r) => setTimeout(r, 500))
      return {
        xss: window.__xss,
        bad: host.querySelectorAll('script, img, iframe').length,
        handlers: /\\son\\w+=/i.test(svg),
        js: /javascript:/i.test(svg),
        len: svg.length,
      }
    })()`)
  let result: Awaited<ReturnType<typeof run>> | undefined
  for (let i = 0; i < 4 && !result; i++) {
    try {
      result = await run()
    } catch {
      await page.waitForLoadState('load')
    }
  }
  if (!result) throw new Error('rendu Mermaid impossible')
  expect(result.xss).toBe(0)
  expect(result.bad).toBe(0)
  expect(result.handlers).toBe(false)
  expect(result.js).toBe(false)
  expect(result.len).toBeGreaterThan(100)
})
