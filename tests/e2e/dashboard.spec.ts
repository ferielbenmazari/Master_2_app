import { test, expect, type Page } from '@playwright/test'

const SHOTS = process.env.T12_SHOTS

async function onboard(page: Page) {
  await page.goto('/')
  const dialog = page.getByRole('dialog', { name: 'Choisis ton pseudo' })
  await dialog.getByLabel('Pseudo').fill('Zoé Test')
  await dialog.getByRole('button', { name: 'C’est parti' }).click()
  await expect(dialog).toBeHidden()
}

// Scripts évalués dans la page : mêmes modules (donc même base Dexie) que l'app.
const SEED = `import('/src/store/progress.ts').then(async (m) => {
  const day = (back) => { const d = new Date(); d.setDate(d.getDate() - back); return m.localDate(d) }
  for (const [back, n] of [[0, 3], [1, 5], [2, 1], [3, 8], [4, 2], [7, 4], [9, 12], [15, 2], [16, 6], [30, 3]])
    for (let i = 0; i < n; i++) await m.bumpActivity(day(back))
  const ids = ['rec1-05-qz-01', 'rec1-05-qz-02', 'rec1-05-qz-03', 'rec1-05-qz-04']
  for (const [i, id] of ids.entries()) await m.recordAttempt({ itemId: id, kind: 'quiz', correct: i === 0 })
  await m.recordAttempt({ itemId: ids[1], kind: 'quiz', correct: false })
  await m.setReading('rec1-05-qualite-validite-ethique', 1, true)
})`

test('série, calendrier et statistiques du profil', async ({ page }) => {
  await onboard(page)
  await page.evaluate(SEED)

  await page.goto('/#/')
  await page.reload()
  await expect(page.locator('.streak')).toHaveText('5')
  if (SHOTS) await page.screenshot({ path: `${SHOTS}-accueil.png` })

  await page.goto('/#/profil')
  await expect(page.getByText('5 jours d’affilée')).toBeVisible()
  await expect(page.getByTestId('heatmap').locator('i')).toHaveCount(56)
  const rec1 = page.locator('.panel', { hasText: 'Réussite au quiz' }).filter({ hasText: 'REC1' })
  await expect(rec1.getByText('1 bonne réponse sur 5')).toBeVisible()
  await expect(rec1.getByRole('link').first()).toBeVisible()
  if (SHOTS) await page.screenshot({ path: `${SHOTS}-profil.png`, fullPage: true })
})
