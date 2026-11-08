import { test, expect } from '@playwright/test'

const SHOTS = process.env.T16_SHOTS

// Transport « Cet appareil » : deux pages du même navigateur se parlent via BroadcastChannel.
// Le réseau PeerJS public n'est jamais sollicité.
test('ping entre deux onglets de la même machine (transport local)', async ({ context }) => {
  const host = await context.newPage()
  await host.goto('/')
  const dialog = host.getByRole('dialog', { name: 'Choisis ton pseudo' })
  await dialog.getByLabel('Pseudo').fill('Camille')
  await dialog.getByRole('button', { name: 'C’est parti' }).click()
  await expect(dialog).toBeHidden()

  await host.goto('/#/jouer/test')
  if (SHOTS) {
    await expect(host.getByRole('heading', { name: 'Test réseau' })).toBeVisible()
    await host.screenshot({ path: `${SHOTS}/T16-accueil-mobile.png` })
    await host.setViewportSize({ width: 1280, height: 800 })
    await host.screenshot({ path: `${SHOTS}/T16-accueil-desktop.png` })
    await host.setViewportSize({ width: 390, height: 844 })
  }
  await host.getByRole('button', { name: 'Cet appareil (onglets)' }).click()
  await host.getByRole('button', { name: 'Créer une salle' }).last().click()
  const heading = host.getByRole('heading', { name: /^Salle [A-Z2-9]{4}$/ })
  await expect(heading).toBeVisible()
  const code = (await heading.textContent())!.replace('Salle ', '')

  const guest = await context.newPage()
  await guest.goto('/#/jouer/test')
  await guest.getByRole('button', { name: 'Cet appareil (onglets)' }).click()
  await guest.getByLabel('Code de la salle').fill(code.toLowerCase())
  await guest.getByRole('button', { name: 'Rejoindre', exact: true }).click()
  await expect(guest.getByRole('heading', { name: `Salle ${code}` })).toBeVisible()

  // chacun voit l'autre
  await expect(host.getByTestId('peer')).toHaveCount(1)
  await expect(guest.getByTestId('peer')).toHaveCount(1)
  await expect(guest.getByTestId('peer')).toContainText('Hôte')

  // ping de l'invité → RTT affiché
  await expect(guest.getByTestId('rtt')).toHaveText('pas de mesure')
  await guest.getByRole('button', { name: 'Ping' }).click()
  await expect(guest.getByTestId('rtt')).toHaveText(/^\d+ ms$/)

  // ping de l'hôte → RTT affiché
  await host.getByRole('button', { name: 'Ping' }).click()
  await expect(host.getByTestId('rtt')).toHaveText(/^\d+ ms$/)
  if (SHOTS) {
    await host.screenshot({ path: `${SHOTS}/T16-salle-mobile.png` })
    await host.setViewportSize({ width: 1280, height: 800 })
    await host.screenshot({ path: `${SHOTS}/T16-salle-desktop.png` })
  }

  // départ de l'invité → l'hôte le voit partir
  await guest.getByRole('button', { name: 'Quitter la salle' }).click()
  await expect(host.getByTestId('peer')).toHaveCount(0)
})

test('code inexistant → message d’erreur en français', async ({ page }) => {
  await page.goto('/')
  const dialog = page.getByRole('dialog', { name: 'Choisis ton pseudo' })
  await dialog.getByLabel('Pseudo').fill('Camille')
  await dialog.getByRole('button', { name: 'C’est parti' }).click()
  await page.goto('/#/jouer/test')
  await page.getByRole('button', { name: 'Cet appareil (onglets)' }).click()
  await page.getByLabel('Code de la salle').fill('ZZZZ')
  await page.getByRole('button', { name: 'Rejoindre', exact: true }).click()
  await expect(page.getByRole('alert')).toContainText('Aucune salle avec ce code')

  await page.getByLabel('Code de la salle').fill('AB')
  await page.getByRole('button', { name: 'Rejoindre', exact: true }).click()
  await expect(page.getByRole('alert')).toContainText('Code invalide')
})
