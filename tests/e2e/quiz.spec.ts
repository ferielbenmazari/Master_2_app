import { readFileSync } from 'node:fs'
import { test, expect, type Page } from '@playwright/test'

type L = { fr: string; en: string }
type Item =
  | { id: string; type: 'true_false'; statement: L; answer: boolean }
  | { id: string; type: 'mcq'; question: L; options: L[]; correct: number[] }

const CH = 'rec1-05-qualite-validite-ethique'
const QUIZ = `/#/matiere/rec1/chapitre/${CH}/quiz`
const items = (
  JSON.parse(readFileSync('content/rec1/chapters/05-qualite-validite-ethique.json', 'utf8')) as {
    quiz: Item[]
  }
).quiz

const norm = (s: string) =>
  s
    .replace(/\[\[[^|\]]*\|([^\]]*)\]\]/g, '$1')
    .toLowerCase()
    .replace(/[^a-z0-9àâçéèêëîïôûùüœ]/g, '')
const stem = (it: Item) => (it.type === 'true_false' ? it.statement.fr : it.question.fr)

async function onboard(page: Page) {
  await page.goto('/')
  const dialog = page.getByRole('dialog', { name: 'Choisis ton pseudo' })
  await dialog.getByLabel('Pseudo').fill('Léa')
  await dialog.getByRole('button', { name: 'C’est parti' }).click()
  await expect(dialog).toBeHidden()
}

async function current(page: Page): Promise<Item> {
  const text = norm((await page.locator('.stmt').first().innerText()) ?? '')
  const it = items.find((i) => text.startsWith(norm(stem(i)).slice(0, 25)))
  if (!it) throw new Error(`item introuvable : ${text}`)
  return it
}

async function play(page: Page, right: boolean) {
  const it = await current(page)
  if (it.type === 'true_false') {
    const v = right ? it.answer : !it.answer
    await page.getByRole('button', { name: v ? 'Vrai' : 'Faux', exact: true }).click()
    if (!v) await page.getByRole('button', { name: 'Valider' }).click()
  } else {
    const pick = right ? it.correct : [it.options.findIndex((_, i) => !it.correct.includes(i))]
    for (const c of pick) {
      await page
        .locator('label.opt')
        .filter({ hasText: it.options[c]!.fr.replace(/[*_`]/g, '').slice(0, 20) })
        .locator('input')
        .check()
    }
    await page.getByRole('button', { name: 'Valider' }).click()
  }
  await expect(page.locator('.fb')).toBeVisible()
  return it
}

test('quiz REC1-05 : 10 questions, bonnes et mauvaises réponses, puis « Refaire mes erreurs »', async ({ page }) => {
  await onboard(page)
  await page.goto(QUIZ)
  const wrong = new Set([1, 5, 8])
  const wrongIds: string[] = []
  for (let i = 0; i < 10; i++) {
    await expect(page.getByRole('status', { name: `Question ${i + 1} sur 10` })).toBeVisible()
    const it = await play(page, !wrong.has(i))
    if (wrong.has(i)) wrongIds.push(it.id)
    await expect(page.locator('.fb')).toContainText(wrong.has(i) ? 'Raté' : 'Correct')
    await expect(page.locator('.fb [lang="fr"]').first()).toBeVisible()
    await expect(page.locator('.fb [lang="en"]').first()).toBeVisible()
    await page.getByRole('button', { name: i === 9 ? 'Voir mon score' : 'Suivante' }).click()
  }
  await expect(page.getByLabel('Score : 7 bonnes réponses sur 10')).toBeVisible()
  const mistakes = page.getByRole('region', { name: 'À revoir' }).getByRole('listitem')
  await expect(mistakes).toHaveCount(3)

  await page.getByRole('button', { name: 'Refaire mes erreurs' }).click()
  const seen: string[] = []
  for (let i = 0; i < 3; i++) {
    await expect(page.getByRole('status', { name: `Question ${i + 1} sur 3` })).toBeVisible()
    seen.push((await play(page, true)).id)
    await page.getByRole('button', { name: i === 2 ? 'Voir mon score' : 'Suivante' }).click()
  }
  expect(seen.sort()).toEqual(wrongIds.sort())
  await expect(page.getByLabel('Score : 3 bonnes réponses sur 3')).toBeVisible()
  await expect(page.getByRole('button', { name: 'Refaire mes erreurs' })).toHaveCount(0)
})

test('quiz au clavier : vrai/faux, justification, validation, suivante', async ({ page }) => {
  await onboard(page)
  await page.goto(QUIZ)
  // avance jusqu'à un vrai/faux
  while ((await current(page)).type !== 'true_false') {
    await play(page, true)
    await page.getByRole('button', { name: 'Suivante' }).click()
  }
  await page.getByRole('button', { name: 'Vrai', exact: true }).focus()
  await page.keyboard.press('Tab')
  await expect(page.getByRole('button', { name: 'Faux', exact: true })).toBeFocused()
  await page.keyboard.press('Enter')
  await page.keyboard.press('Tab')
  await expect(page.getByLabel('Ta justification')).toBeFocused()
  await page.keyboard.type('mon avis')
  await page.keyboard.press('Tab')
  await expect(page.getByRole('button', { name: 'Valider' })).toBeFocused()
  await page.keyboard.press('Enter')
  const fb = page.locator('.fb')
  await expect(fb).toBeFocused()
  await expect(fb).toContainText('mon avis')
  await expect(fb).toContainText('Justification du cours')
})

test('reduced-motion : ni flash, ni confettis, ni secousse', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await onboard(page)
  await page.addInitScript(() => localStorage.setItem('m2.effects', 'full')) // même si l'utilisatrice force « plein »
  await page.goto(QUIZ)
  await page.reload()
  await play(page, false)
  // « plein » forcé : le flash est bien posé dans le DOM, mais masqué par prefers-reduced-motion
  const flashes = await page.locator('.flash').all()
  expect(flashes.length).toBeGreaterThan(0)
  for (const el of flashes) await expect(el).toHaveCSS('display', 'none')
  for (const el of await page.locator('.shake').all()) await expect(el).toHaveCSS('animation-name', 'none')
})

test('checkpoint du lecteur : question jouable sur place', async ({ page }) => {
  await onboard(page)
  await page.goto(`/#/matiere/rec1/chapitre/${CH}/lire`)
  const cp = page.locator('[id^="cp-"]').first()
  await cp.scrollIntoViewIfNeeded()
  await cp.getByRole('button', { name: 'Vrai', exact: true }).click()
  await expect(cp.locator('.fb')).toBeVisible()
})
