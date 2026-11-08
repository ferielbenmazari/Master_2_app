import { test, expect, type Page } from '@playwright/test'

const CH = 'rec1-05-qualite-validite-ethique'

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
  test(`atelier anglais : 4 niveaux jouables depuis le hub (${size.name})`, async ({ page }) => {
    await page.setViewportSize({ width: size.width, height: size.height })
    await onboard(page)
    await page.goto(`/#/matiere/rec1/chapitre/${CH}`)
    await page.getByRole('link', { name: /^Atelier anglais/ }).click()
    await expect(page.getByRole('heading', { name: 'Atelier anglais', level: 1 })).toBeVisible()

    // niveau 1 : on remet la phrase dans l'ordre
    const answer = 'External validity is about the generalisation of the findings.'.split(' ')
    const bank = page.getByRole('group', { name: 'Mots à placer' })
    await page.screenshot({ path: `tests/screens/T15-ordre-${size.name}.png` })
    for (const w of answer) {
      await bank.getByRole('button', { name: w, exact: true }).and(page.locator(':not([disabled])')).first().click()
    }
    await page.getByRole('button', { name: 'Vérifier' }).click()
    await expect(page.getByRole('group', { name: 'Correct' })).toBeVisible()

    // niveau 2 : trous
    await page.getByRole('tab', { name: /^Niveau 2/ }).click()
    await page.getByLabel('Trou 1 sur 2').fill('controls for')
    await page.getByLabel('Trou 2 sur 2').fill('rules out')
    await page.screenshot({ path: `tests/screens/T15-trous-${size.name}.png` })
    await page.getByRole('button', { name: 'Vérifier' }).click()
    await expect(page.getByRole('group', { name: 'Correct' })).toBeVisible()
    await expect(page.getByText(/contrôle les variables parasites/)).toBeVisible()

    // niveau 3 : repérer l'erreur
    await page.getByRole('tab', { name: /^Niveau 3/ }).click()
    await page.getByRole('button', { name: 'Actually,' }).click()
    await expect(page.getByRole('group', { name: 'Correct' })).toBeVisible()
    await page.screenshot({ path: `tests/screens/T15-erreur-${size.name}.png`, fullPage: true })

    // niveau 4 : rédaction libre
    await page.getByRole('tab', { name: /^Niveau 4/ }).click()
    await page
      .getByLabel('Ta rédaction en anglais')
      .fill('Internal validity controls extraneous variables. External validity is about whether findings can be generalized.')
    await page.getByRole('button', { name: 'Vérifier' }).click()
    await expect(page.getByRole('group', { name: '4 mots-clés sur 5' })).toBeVisible()
    await page.screenshot({ path: `tests/screens/T15-libre-${size.name}.png`, fullPage: true })
  })
}
