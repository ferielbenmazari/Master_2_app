import { test, expect, type Page } from '@playwright/test'

const SHOTS = process.env.T04_SHOTS

async function onboard(page: Page, pseudo = 'Camille') {
  await page.goto('/')
  const dialog = page.getByRole('dialog', { name: 'Choisis ton pseudo' })
  await expect(dialog).toBeVisible()
  await dialog.getByLabel('Pseudo').fill(pseudo)
  await dialog.getByRole('radio', { name: 'Couleur corail' }).click()
  if (SHOTS && pseudo === 'Camille' && page.viewportSize()?.width === 390) await page.screenshot({ path: `${SHOTS}/onboarding-mobile.png` })
  await dialog.getByRole('button', { name: 'C’est parti' }).click()
  await expect(dialog).toBeHidden()
}

test('premier lancement → pseudo → accueil, onboarding une seule fois', async ({ page }) => {
  await onboard(page)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Salut Camille')
  if (SHOTS) await page.screenshot({ path: `${SHOTS}/home-mobile.png` })
  await page.reload()
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Salut Camille')
  await expect(page.getByRole('dialog')).toHaveCount(0)
})

test('thème et mode langue persistés après rechargement', async ({ page }) => {
  await onboard(page)
  await page.getByRole('navigation').getByRole('link', { name: 'Profil' }).click()
  // Thème de départ = celui de l'OS ; on bascule vers l'opposé et on vérifie qu'il survit au rechargement.
  const html = page.locator('html')
  const before = (await html.getAttribute('data-theme')) === 'light' ? 'light' : 'dark'
  const after = before === 'light' ? 'dark' : 'light'
  await page.getByRole('button', { name: before === 'light' ? 'Mode nuit' : 'Mode jour' }).click()
  await page.getByRole('radio', { name: 'EN', exact: true }).click()
  await expect(html).toHaveAttribute('data-theme', after)
  await page.reload()
  await expect(html).toHaveAttribute('data-theme', after)
  await expect(page.getByRole('radio', { name: 'EN', exact: true })).toHaveAttribute('aria-checked', 'true')
  if (SHOTS) await page.screenshot({ path: `${SHOTS}/profil-mobile-toggled.png` })
})

test('barre du bas en mobile', async ({ page }) => {
  await onboard(page)
  const bar = page.locator('nav.nav')
  await expect(bar).toBeVisible()
  await expect(page.locator('nav.rail')).toBeHidden()
  await bar.getByRole('link', { name: 'Arène' }).click()
  await expect(page).toHaveURL(/#\/jouer$/)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Arène')
  await bar.getByRole('link', { name: 'Réviser' }).click()
  await expect(page).toHaveURL(/#\/reviser$/)
  await page.goto('/#/matiere/rec1')
  await expect(page.getByRole('heading', { name: 'Bientôt ici' })).toBeVisible()
  if (SHOTS) await page.screenshot({ path: `${SHOTS}/course-mobile.png` })
})

test.describe('desktop', () => {
  test.use({ viewport: { width: 1280, height: 800 } })

  test('rail à gauche', async ({ page }) => {
    await onboard(page)
    const rail = page.locator('nav.rail')
    await expect(rail).toBeVisible()
    await expect(page.locator('nav.nav')).toBeHidden()
    await rail.getByRole('link', { name: 'Profil' }).click()
    await expect(page).toHaveURL(/#\/profil$/)
    await rail.getByRole('link', { name: 'Base' }).click()
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Salut Camille')
    if (SHOTS) await page.screenshot({ path: `${SHOTS}/home-desktop.png` })
  })
})
