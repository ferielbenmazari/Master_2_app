/** Génère les PNG de l'icône PWA depuis public/icon.svg (npm run icons). */
import { readFileSync } from 'node:fs'
import { chromium } from '@playwright/test'

const svg = readFileSync('public/icon.svg', 'utf8')
const browser = await chromium.launch()
const page = await browser.newPage()

async function render(size: number, file: string, scale = 1) {
  await page.setViewportSize({ width: size, height: size })
  const inner = Math.round(size * scale)
  const pad = (size - inner) / 2
  await page.setContent(
    `<body style="margin:0;background:#110e0c"><div style="position:absolute;left:${pad}px;top:${pad}px;width:${inner}px;height:${inner}px">${svg.replace('<svg ', '<svg width="100%" height="100%" ')}</div></body>`,
  )
  await page.screenshot({ path: file })
}

await render(192, 'public/icon-192.png')
await render(512, 'public/icon-512.png')
await render(512, 'public/icon-maskable-512.png', 0.8) // zone sûre des icônes maskable
await browser.close()
