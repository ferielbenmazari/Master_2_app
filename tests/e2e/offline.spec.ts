import { test, expect } from '@playwright/test'

const BASE = 'http://localhost:4173'
const READ = `${BASE}/#/matiere/rec1/chapitre/rec1-05-qualite-validite-ethique/lire`

test('hors-ligne : l’app et REC1-05 restent lisibles', async ({ page, context }) => {
  await page.goto(BASE)
  const dialog = page.getByRole('dialog', { name: 'Choisis ton pseudo' })
  await dialog.getByLabel('Pseudo').fill('Léa')
  await dialog.getByRole('button', { name: 'C’est parti' }).click()
  await expect(dialog).toBeHidden()

  // attendre que le service worker contrôle la page (précache terminé)
  await page.evaluate(`navigator.serviceWorker.ready`)
  await page.reload()
  await expect.poll(() => page.evaluate(`!!navigator.serviceWorker.controller`)).toBe(true)

  await context.setOffline(true)
  await page.goto(READ)
  await page.reload()
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Ta recherche tient-elle debout')
})

test('manifeste PWA valide', async ({ request }) => {
  const m = await (await request.get(`${BASE}/manifest.webmanifest`)).json()
  expect(m.short_name).toBe('Révision')
  expect(m.display).toBe('standalone')
  expect(m.icons.length).toBeGreaterThanOrEqual(3)
})
