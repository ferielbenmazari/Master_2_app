import { test, expect, type Page } from '@playwright/test'

const EXAM = '/#/matiere/rec1/partiel/blanc-ch01'
const EXAM_ID = 'rec1-exam-ch01'

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
  test(`partiel REC1 de bout en bout, rechargement pendant le minuteur (${size.name})`, async ({ page }) => {
    await page.setViewportSize({ width: size.width, height: size.height })
    await onboard(page)

    // onglet Partiels de la matière → liste
    await page.goto('/#/matiere/rec1')
    await page.getByRole('link', { name: 'Partiels' }).click()
    const list = page.getByRole('list', { name: 'Liste des partiels' })
    await expect(list.getByRole('listitem')).toHaveCount(7)
    await page.waitForTimeout(900) // fin de l'animation en cascade
    await page.screenshot({ path: `tests/screens/T14-liste-${size.name}.png` })

    // consignes
    await page.goto(EXAM)
    await expect(page.getByRole('heading', { name: 'Consignes' })).toBeVisible()
    await page.screenshot({ path: `tests/screens/T14-consignes-${size.name}.png`, fullPage: true })

    // le minuteur démarre au clic
    await page.getByRole('button', { name: 'Commencer le partiel' }).click()
    await expect(page.getByRole('timer')).toBeVisible()
    await page.getByRole('group').filter({ has: page.getByRole('button', { name: 'Faux' }) }).first().getByRole('button', { name: 'Faux' }).click()
    await page.getByLabel('Justification (facultative)').first().fill('brouillon gardé')
    await page.waitForTimeout(2200)

    // rechargement : le minuteur continue, le brouillon est là
    await page.reload()
    await expect(page.getByRole('timer')).toBeVisible()
    await expect(page.getByLabel('Justification (facultative)').first()).toHaveValue('brouillon gardé')
    const clock = (await page.locator('.exam-clock').textContent()) ?? ''
    expect(clock).toMatch(/^T-(29:[0-5]\d)$/)
    expect(clock).not.toBe('T-30:00')
    await page.screenshot({ path: `tests/screens/T14-passage-${size.name}.png` })

    // sections B puis C
    await page.getByRole('button', { name: /^B\. QCM/ }).click()
    await page.getByRole('checkbox').nth(2).check()
    await page.getByRole('button', { name: /^C\. Questions ouvertes/ }).click()
    await page.getByLabel('Ta réponse').first().fill('Fondamentale : curiosité ; appliquée : problème précis.')

    // rendre la copie → correction
    await page.getByRole('button', { name: 'Rendre ma copie' }).click()
    await page.getByRole('button', { name: 'Oui, rendre' }).click()
    await expect(page.getByText('Corrigé proposé (non officiel)')).toBeVisible()
    await expect(page.getByText(/^Note : .* sur 20$/)).toBeAttached()
    await page.screenshot({ path: `tests/screens/T14-correction-${size.name}.png`, fullPage: true })

    // cocher tous les critères des questions ouvertes → (2 + 2 + 12) / 22 = 14,55, puis enregistrer
    for (const box of await page.getByRole('group', { name: /Auto-correction/ }).getByRole('checkbox').all()) await box.check()
    await expect(page.getByText('Note : 14,55 sur 20')).toBeAttached()
    await page.getByRole('button', { name: 'Enregistrer ma note' }).click()
    await expect(page.getByText('Note enregistrée : 14,55/20.')).toBeVisible()
    await expect(page.getByText('Meilleur : 14,55/20').first()).toBeVisible()
    expect(await page.evaluate((id) => localStorage.getItem(`m2rev:exam:${id}`), EXAM_ID)).toBeNull()
  })
}

test('minuteur : orange à 10 min, rouge à 2 min, copie rendue à 0 (copie ouverte avant le rechargement)', async ({ page }) => {
  await onboard(page)
  const seed = async (elapsedMin: number) =>
    page.evaluate(
      ([id, ms]) =>
        localStorage.setItem(`m2rev:exam:${id}`, JSON.stringify({ examId: id, startedAt: Date.now() - (ms as number), section: 0, answers: {}, grading: {} })),
      [EXAM_ID, elapsedMin * 60_000] as const,
    )

  await seed(12.5)
  await page.goto(EXAM)
  await page.reload()
  await expect(page.locator('.exam-clock')).toHaveText(/^T-17:[0-2]\d$/)
  await expect(page.locator('.exam-hud')).toHaveAttribute('data-tone', 'ok')

  await seed(21)
  await page.reload()
  await expect(page.locator('.exam-hud')).toHaveAttribute('data-tone', 'warn')

  await seed(28.5)
  await page.reload()
  await expect(page.locator('.exam-hud')).toHaveAttribute('data-tone', 'danger')
  await page.screenshot({ path: 'tests/screens/T14-rouge-mobile.png' })

  await seed(31)
  await page.reload()
  await expect(page.getByText('Temps écoulé : copie rendue automatiquement.')).toBeVisible()
})
