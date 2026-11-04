import { test, expect, type Page } from '@playwright/test'
import { readFile } from 'node:fs/promises'

const SHOTS = process.env.T05_SHOTS

async function onboard(page: Page, pseudo = 'Zoé Test') {
  await page.goto('/')
  const dialog = page.getByRole('dialog', { name: 'Choisis ton pseudo' })
  await dialog.getByLabel('Pseudo').fill(pseudo)
  await dialog.getByRole('button', { name: 'C’est parti' }).click()
  await expect(dialog).toBeHidden()
  await page.goto('/#/profil')
}

// Scripts évalués dans la page (le tsconfig des tests n'a pas la lib DOM) : on passe par les
// modules du store servis par Vite, donc par la même base Dexie que l'app.
const PUT_READING = `import('/src/store/progress.ts').then((m) => m.setReading('c1', 0.5))`
const GET_READING = `import('/src/store/db.ts').then((m) => m.db.reading.toArray())`

test('pseudo, avatar et langue d’entraînement persistés après rechargement', async ({ page }) => {
  await onboard(page)
  await page.getByLabel('Pseudo', { exact: true }).fill('Nina')
  await page.getByRole('radio', { name: 'Couleur cyan' }).first().click()
  await page.getByRole('radio', { name: 'English' }).click()
  await page.reload()
  await expect(page.getByLabel('Pseudo', { exact: true })).toHaveValue('Nina')
  await expect(page.getByRole('radio', { name: 'English' })).toHaveAttribute('aria-checked', 'true')
  await expect(page.getByRole('radio', { name: 'Couleur cyan' }).first()).toHaveAttribute('aria-checked', 'true')
})

test('un pseudo vide est refusé', async ({ page }) => {
  await onboard(page)
  const input = page.getByLabel('Pseudo', { exact: true })
  await input.fill('   ')
  await page.reload()
  await expect(input).toHaveValue('Zoé Test')
})

test('export téléchargé, progression conservée au rechargement, import et réinitialisation', async ({ page }) => {
  await onboard(page)
  await page.evaluate(PUT_READING)
  await page.reload()
  const readReading = () => page.evaluate<unknown[]>(GET_READING)
  expect(await readReading()).toEqual([{ chapterId: 'c1', progress: 0.5 }])

  const [dl] = await Promise.all([page.waitForEvent('download'), page.getByRole('button', { name: 'Exporter ma progression' }).click()])
  expect(dl.suggestedFilename()).toMatch(/^revision-m2-Zoe-Test-\d{4}-\d{2}-\d{2}\.json$/)
  const path = await dl.path()
  const saved = JSON.parse(await readFile(path, 'utf8'))
  expect(saved.tables.reading).toEqual([{ chapterId: 'c1', progress: 0.5 }])
  expect(saved.prefs.pseudo).toBe('Zoé Test')

  // Fichier invalide : erreur lisible, données intactes.
  await page.getByTestId('import-file').setInputFiles({ name: 'x.json', mimeType: 'application/json', buffer: Buffer.from('{oups') })
  await page.getByRole('dialog').getByRole('button', { name: 'Remplacer' }).click()
  await expect(page.getByRole('status')).toContainText('JSON lisible')
  expect(await readReading()).toEqual([{ chapterId: 'c1', progress: 0.5 }])

  // Réinitialisation (double confirmation) puis import du fichier exporté.
  await page.getByRole('button', { name: 'Réinitialiser' }).click()
  await page.getByRole('button', { name: 'Continuer' }).click()
  await page.getByRole('button', { name: 'Tout effacer définitivement' }).click()
  await expect(page.getByRole('dialog', { name: 'Choisis ton pseudo' })).toBeVisible()
  expect(await readReading()).toEqual([])

  await page.getByRole('dialog').getByLabel('Pseudo').fill('Temp')
  await page.getByRole('dialog').getByRole('button', { name: 'C’est parti' }).click()
  await page.getByTestId('import-file').setInputFiles(path)
  await page.getByRole('dialog').getByRole('button', { name: 'Remplacer' }).click()
  await expect(page.getByLabel('Pseudo', { exact: true })).toHaveValue('Zoé Test')
  expect(await readReading()).toEqual([{ chapterId: 'c1', progress: 0.5 }])
  if (SHOTS) await page.screenshot({ path: `${SHOTS}/profil-${page.viewportSize()?.width}.png`, fullPage: true })
})
