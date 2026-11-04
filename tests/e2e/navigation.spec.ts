import { test, expect, type Page } from '@playwright/test'

async function onboard(page: Page) {
  await page.goto('/')
  const dialog = page.getByRole('dialog', { name: 'Choisis ton pseudo' })
  await dialog.getByLabel('Pseudo').fill('Léa')
  await dialog.getByRole('button', { name: 'C’est parti' }).click()
  await expect(dialog).toBeHidden()
}

test('accueil → matière → chapitre → mode, en 2 taps depuis l’accueil', async ({ page }) => {
  await onboard(page)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Salut Léa')
  await expect(page.locator('a[href^="#/matiere/"]')).toHaveCount(4)

  await page.getByRole('link', { name: /Méthodes de recherche/ }).click()
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Méthodes de recherche')
  await page.getByRole('link', { name: /Ta recherche tient-elle debout/ }).click()
  await expect(page.getByText('Vérifié')).toBeVisible()
  await expect(page.getByRole('list', { name: 'Modes de révision' }).getByRole('listitem')).toHaveCount(7)

  await page.getByRole('link', { name: /^Quiz \d+$/ }).click()
  await expect(page.getByRole('heading', { name: 'Bientôt ici' })).toBeVisible()
})

test('matière sans chapitre : contenu en préparation', async ({ page }) => {
  await onboard(page)
  await page.getByRole('link', { name: /Sécurité/ }).click()
  await expect(page.getByRole('heading', { name: 'Contenu en préparation' })).toBeVisible()
})
