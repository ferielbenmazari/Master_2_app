import { test, expect, type Page } from '@playwright/test'

const SHOTS = process.env.T09_SHOTS
async function shot(page: Page, name: string) {
  if (!SHOTS) return
  await page.waitForTimeout(1800) // fin des animations (flip, flash, compteur, ligne tapée)
  await page.screenshot({ path: `${SHOTS}/${name}-${page.viewportSize()?.width}-${process.env.T09_THEME ?? 'dark'}.png` })
}

async function onboard(page: Page) {
  await page.goto('/')
  const dialog = page.getByRole('dialog', { name: 'Choisis ton pseudo' })
  await dialog.getByLabel('Pseudo').fill('Léa')
  await dialog.getByRole('button', { name: 'C’est parti' }).click()
  await expect(dialog).toBeHidden()
}

const pending = async (page: Page) => {
  const t = await page.locator('.log').first().textContent()
  return Number(/(\d+)\s+CARTE/.exec(t ?? '')?.[1])
}

test('réviser : flip au clavier, notation 1–4, compteur d’accueil mis à jour, état festif', async ({ page }) => {
  await onboard(page)
  await expect.poll(() => pending(page)).toBeGreaterThan(0)
  const before = await pending(page)
  await shot(page, 'home')

  await page.goto('/#/reviser')
  const flip = page.getByRole('button', { name: 'Retourner la carte' })
  await expect(flip).toBeFocused()
  await shot(page, 'recto')
  await page.keyboard.press('Space')
  await expect(page.locator('.flip.on')).toBeVisible()
  await shot(page, 'verso')
  await page.keyboard.press('4') // Facile : la carte sort de la session
  await expect(page.getByRole('status', { name: new RegExp(`^Carte 2 sur ${before}$`) })).toBeAttached()

  await page.getByRole('link', { name: 'Base' }).first().click()
  await expect.poll(() => pending(page)).toBe(before - 1)
  await page.reload()
  await expect.poll(() => pending(page)).toBe(before - 1)

  // tout revoir (Facile partout) → état festif
  await page.goto('/#/reviser')
  await expect(page.getByRole('button', { name: 'Retourner la carte' })).toBeFocused()
  for (let i = 0; i < before - 1; i++) {
    await page.keyboard.press('Enter')
    await expect(page.locator('.flip.on')).toHaveCount(1)
    await page.keyboard.press('4')
    await expect(page.locator('.flip.on')).toHaveCount(0)
  }
  await expect(page.getByText('Tout est revu pour aujourd’hui !')).toBeVisible()
  await shot(page, 'termine')
  await page.getByRole('link', { name: 'Retour à l’accueil' }).click()
  await expect.poll(() => pending(page)).toBe(0)
})
