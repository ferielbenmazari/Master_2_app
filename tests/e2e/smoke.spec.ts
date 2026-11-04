import { test, expect } from '@playwright/test'

test('la page d’accueil affiche le titre', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Révision M2' })).toBeVisible()
})
