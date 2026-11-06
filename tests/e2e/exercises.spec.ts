import { test, expect, type Page } from '@playwright/test'

const CH = 'rec1-05-qualite-validite-ethique'
const LIST = `/#/matiere/rec1/chapitre/${CH}/exercices`

async function onboard(page: Page) {
  await page.goto('/')
  const dialog = page.getByRole('dialog', { name: 'Choisis ton pseudo' })
  await dialog.getByLabel('Pseudo').fill('Léa')
  await dialog.getByRole('button', { name: 'C’est parti' }).click()
  await expect(dialog).toBeHidden()
}

const SIZES = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'desktop', width: 1280, height: 800 },
]

for (const size of SIZES) {
  test(`exercices : liste, brouillon, indice, corrigé (${size.name})`, async ({ page }) => {
    await page.setViewportSize({ width: size.width, height: size.height })
    await onboard(page)
    await page.goto(LIST)
    await expect(page.getByRole('list', { name: 'Liste des exercices' }).getByRole('listitem')).toHaveCount(3)
    await page.screenshot({ path: `tests/screens/T13-liste-${size.name}.png` })

    await page.getByRole('link', { name: /Patchwork|plagiat/i }).first().click()
    await page.getByLabel('Ton brouillon').fill('a) patchwork')
    await page.reload()
    await expect(page.getByLabel('Ton brouillon')).toHaveValue('a) patchwork')

    await page.getByRole('button', { name: /^Un indice/ }).click()
    await expect(page.getByText(/^Indice 1 sur/)).toBeVisible()
    await page.getByRole('button', { name: 'Voir le corrigé' }).click()
    await expect(page.getByRole('heading', { name: 'Corrigé' })).toBeVisible()
    await page.getByRole('button', { name: 'Réussi' }).click()
    await expect(page.getByText(/Enregistré/)).toBeVisible()
    await page.screenshot({ path: `tests/screens/T13-exercice-${size.name}.png`, fullPage: true })
  })
}
