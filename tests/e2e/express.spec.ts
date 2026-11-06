import { test, expect, type Page } from '@playwright/test'

async function onboard(page: Page) {
  await page.goto('/')
  const dialog = page.getByRole('dialog', { name: 'Choisis ton pseudo' })
  await dialog.getByLabel('Pseudo').fill('Léa')
  await dialog.getByRole('button', { name: 'C’est parti' }).click()
  await expect(dialog).toBeHidden()
}

test('Express : « Lancer » enchaîne 6 étapes jusqu’au récap, puis « Encore 5 min »', async ({ page }) => {
  await onboard(page)
  await page.getByRole('link', { name: 'Lancer' }).click()
  await expect(page.getByRole('timer')).toBeVisible()
  await expect(page.getByRole('navigation')).toHaveCount(0) // plein écran

  for (let i = 1; i <= 6; i++) {
    await expect(page.getByRole('progressbar', { name: `Étape ${i} sur 6` })).toBeVisible()
    const compris = page.getByRole('button', { name: 'Compris' })
    const flip = page.getByRole('button', { name: 'Retourner la carte' })
    const vrai = page.getByRole('button', { name: 'Vrai', exact: true })
    const valider = page.getByRole('button', { name: 'Valider' })
    await expect(compris.or(flip).or(vrai).or(valider).first()).toBeVisible()
    if (await compris.count()) await compris.click()
    else if (await flip.count()) {
      await page.keyboard.press('Space')
      await page.keyboard.press('3')
    } else {
      if (await vrai.count()) await vrai.click()
      else {
        await page.getByRole('checkbox').first().check()
        await valider.click()
      }
      await page.getByRole('button', { name: /^(Suivant|Voir mon score)$/ }).click()
    }
  }
  await expect(page.getByRole('heading', { name: 'Session terminée' })).toBeVisible()
  await expect(page.getByText('Notions vues')).toBeVisible()
  await page.getByRole('button', { name: 'Encore 5 min' }).click()
  await expect(page.getByRole('progressbar', { name: 'Étape 1 sur 6' })).toBeVisible()
})
