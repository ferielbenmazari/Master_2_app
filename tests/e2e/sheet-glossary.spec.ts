import { test, expect, type Page } from '@playwright/test'

const FICHE = '/#/matiere/rec1/chapitre/rec1-05-qualite-validite-ethique/fiche'

async function onboard(page: Page) {
  await page.goto('/')
  const dialog = page.getByRole('dialog', { name: 'Choisis ton pseudo' })
  await dialog.getByLabel('Pseudo').fill('Léa')
  await dialog.getByRole('button', { name: 'C’est parti' }).click()
  await expect(dialog).toBeHidden()
}

test('glossaire : « validite » trouve FR et EN, clic ouvre la définition', async ({ page }) => {
  await onboard(page)
  await page.goto('/#/matiere/rec1/glossaire')
  const search = page.getByRole('searchbox')
  await search.fill('validite')
  await expect(page.getByRole('button', { name: /validité interne/i })).toBeVisible()
  await search.fill('internal validity')
  await expect(page.getByRole('button', { name: /internal validity|validité interne/i })).toBeVisible()
  await page.getByRole('button', { name: /validité interne/i }).first().click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await expect(page.getByRole('link', { name: /Voir dans le chapitre/ })).toBeVisible()
})

test('fiche REC1-05 : points numérotés, tableau, impression A4', async ({ page }) => {
  await onboard(page)
  await page.goto(FICHE)
  await expect(page.getByRole('heading', { name: 'L’essentiel' })).toBeVisible()
  await expect(page.locator('.sheet-table tbody tr').first()).toBeVisible()
  await page.emulateMedia({ media: 'print' })
  await expect(page.locator('.sheet-notes')).toBeVisible()
  await expect(page.locator('.sheet-table')).toBeVisible()
})
