import { test, expect, type BrowserContext, type Page } from '@playwright/test'

const SHOTS = process.env.T17_SHOTS
const TOTAL = 10

/** Une page = un joueur. Même contexte : les onglets se parlent par BroadcastChannel (transport « même appareil »). */
async function player(context: BrowserContext, pseudo: string, hash: string): Promise<Page> {
  const page = await context.newPage()
  await page.addInitScript(
    (name) => localStorage.setItem('m2rev:prefs', JSON.stringify({ pseudo: name })),
    pseudo,
  )
  await page.goto(hash)
  return page
}

async function useLocalTransport(page: Page) {
  await page.getByRole('button', { name: 'Même appareil / onglets' }).click()
}

/** Répond à la question affichée (vrai/faux : « Vrai » ; QCM : première option, validée si plusieurs réponses). */
async function answerCurrent(page: Page, n: number) {
  const region = page.getByRole('region', { name: `Question ${n} sur ${TOTAL}` })
  await expect(region).toBeVisible()
  const vrai = region.getByRole('button', { name: 'Vrai', exact: true })
  if (await vrai.isVisible()) {
    await vrai.click()
  } else {
    await region.getByRole('group').getByRole('button').first().click()
    const validate = region.getByRole('button', { name: 'Valider' })
    if (await validate.isVisible()) await validate.click()
  }
}

test('partie complète à trois onglets (hôte + 2 invités) jusqu’au podium, avec une déconnexion en cours de route', async ({
  context,
}) => {
  test.setTimeout(120_000)

  // --- hôte : crée la salle
  const host = await player(context, 'Hôtesse', '/#/jouer/creer')
  await expect(host.getByRole('heading', { name: 'Créer une partie' })).toBeVisible()
  await expect(host.getByRole('button', { name: 'Internet (PeerJS)' })).toHaveAttribute(
    'aria-pressed',
    'true',
  )
  await expect(host.getByText(/question(s)? disponible/)).toBeVisible()
  await useLocalTransport(host)
  if (SHOTS) {
    await host.screenshot({ path: `${SHOTS}/T17-creer-mobile.png`, fullPage: true })
  }
  await host.getByRole('button', { name: 'Ouvrir la salle' }).click()
  const radar = host.getByRole('img', { name: /^Code de la salle : [A-Z2-9]{4}$/ })
  await expect(radar).toBeVisible()
  const code = /: ([A-Z2-9]{4})$/.exec((await radar.getAttribute('aria-label')) ?? '')![1]!
  await expect(host.getByRole('img', { name: 'QR code pour rejoindre la salle' })).toBeVisible()
  await expect(host.getByRole('button', { name: 'Lancer le combat' })).toBeDisabled()

  // --- invités : rejoignent par le lien du QR (#/jouer/rejoindre/<CODE>)
  const alice = await player(context, 'Alice', `/#/jouer/rejoindre/${code}`)
  const bob = await player(context, 'Bob', `/#/jouer/rejoindre/${code}`)
  for (const [page, avatar] of [
    [alice, 'corail'],
    [bob, 'cyan'],
  ] as const) {
    await expect(page.getByLabel('Code de la salle')).toHaveValue(code)
    await page.getByRole('button', { name: `Avatar ${avatar}` }).click()
    await useLocalTransport(page)
    await page.getByRole('button', { name: 'Rejoindre', exact: true }).click()
    await expect(page.getByTestId('player').first()).toBeVisible()
  }
  await expect(alice.getByTestId('player')).toHaveCount(3)
  await expect(bob.getByTestId('player')).toHaveCount(3)
  await expect(host.getByTestId('player')).toHaveCount(3)
  await expect(host.getByTestId('player').filter({ hasText: 'Alice' })).toBeVisible()
  await expect(alice.getByText('En attente du lancement par l’hôte…')).toBeVisible()
  if (SHOTS) {
    await host.screenshot({ path: `${SHOTS}/T17-salon-mobile.png`, fullPage: true })
    await alice.screenshot({ path: `${SHOTS}/T17-invite-salon-mobile.png`, fullPage: true })
  }

  // --- partie
  await host.getByRole('button', { name: 'Lancer le combat' }).click()
  let bobLeft = false
  for (let n = 1; n <= TOTAL; n++) {
    await answerCurrent(host, n)
    await answerCurrent(alice, n)
    if (n === 1 && SHOTS) {
      await alice.screenshot({ path: `${SHOTS}/T17-question-mobile.png` })
    }
    if (n === 3) {
      // Bob se déconnecte (il quitte la page de jeu) sans répondre : la manche se termine quand même
      await bob.goto('/#/')
      bobLeft = true
    } else if (!bobLeft) {
      await answerCurrent(bob, n)
    }

    // correction : bonne réponse + justification pour tous, l'hôte seul avance
    for (const p of bobLeft ? [host, alice] : [host, alice, bob]) {
      await expect(p.getByTestId('right-answer')).toBeVisible()
      await expect(p.getByText('Explication du cours')).toBeVisible()
      await expect(p.getByRole('list', { name: 'Classement' })).toBeVisible()
    }
    await expect(alice.getByText('L’hôte lance la suite…')).toBeVisible()
    await expect(
      alice.getByRole('button', { name: /Question suivante|Voir le podium/ }),
    ).toHaveCount(0)
    if (n === 1 && SHOTS) {
      await alice.screenshot({ path: `${SHOTS}/T17-reveal-mobile.png`, fullPage: true })
    }
    const advance = host.getByRole('button', {
      name: n === TOTAL ? 'Voir le podium' : 'Question suivante',
    })
    await expect(advance).toBeVisible()
    await advance.click()
  }

  // --- podium
  for (const p of [host, alice]) {
    await expect(p.getByTestId('podium-headline')).toBeVisible()
    await expect(p.getByTestId('rank-row')).toHaveCount(3)
  }
  // Bob a quitté après 2 manches : il est dernier ou à égalité, jamais devant l'hôte qui a tout répondu
  const names = await host
    .getByTestId('rank-row')
    .evaluateAll((rows) => rows.map((r) => r.getAttribute('aria-label') ?? ''))
  expect(names).toHaveLength(3)
  expect(names.some((n) => n.includes('Bob'))).toBe(true)
  if (SHOTS) {
    await alice.screenshot({ path: `${SHOTS}/T17-podium-mobile.png`, fullPage: true })
    await alice.setViewportSize({ width: 1280, height: 800 })
    await alice.screenshot({ path: `${SHOTS}/T17-podium-desktop.png`, fullPage: true })
    await host.setViewportSize({ width: 1280, height: 800 })
    await host.screenshot({ path: `${SHOTS}/T17-reveal-desktop.png`, fullPage: true })
  }
  await expect(host.getByRole('link', { name: 'Retour à l’Arène' })).toBeVisible()
})

test('code inconnu → message d’erreur en français ; le lien « Jouer à plusieurs » mène à l’Arène', async ({
  page,
}) => {
  await page.addInitScript(() =>
    localStorage.setItem('m2rev:prefs', JSON.stringify({ pseudo: 'Léa' })),
  )
  await page.goto('/')
  await page.getByRole('link', { name: 'Jouer à plusieurs' }).click()
  await expect(page.getByRole('heading', { name: 'Créer une partie' })).toBeVisible()
  await page.getByLabel('Code de la salle').fill('zzzz')
  await page.getByRole('button', { name: 'Rejoindre', exact: true }).click()
  await useLocalTransport(page)
  await page.getByRole('button', { name: 'Rejoindre', exact: true }).click()
  await expect(page.getByRole('alert')).toContainText('Aucune salle avec ce code')
})
