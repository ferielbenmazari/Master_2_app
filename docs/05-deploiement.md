# 05 — Lancer et déployer

## En local (toi, sur Ubuntu)

```bash
# une seule fois : Node LTS via nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
nvm install 24      # Node ≥ 24 requis (ts-fsrs) ; voir .nvmrc
sudo apt install poppler-utils      # pdftotext, pour extraire les PDF

# à chaque fois
npm install
npm run dev          # http://localhost:5173
```

Scripts prévus (`package.json`) :

| Script | Rôle |
|---|---|
| `dev` | serveur de dev |
| `build` | build de production dans `dist/` |
| `preview` | sert `dist/` (tester la PWA) |
| `validate:content` | vérifie tout `content/` |
| `test` | Vitest |
| `e2e` | Playwright (smoke) |
| `check` | `tsc --noEmit` + lint + test + validate:content — **doit être vert avant chaque commit** |

## En ligne pour toi et tes amis — Cloudflare Pages (gratuit, repo privé OK)

1. Créer un compte sur dash.cloudflare.com → *Workers & Pages* → *Create* → *Pages* → *Connect to Git* → choisir `Master_2_app`.
2. Réglages de build : *Framework preset* `Vite` · *Build command* `npm run build` · *Output directory* `dist` · variable d'environnement **`NODE_VERSION=24`**.
3. Chaque `git push` sur `main` redéploie. URL du type `https://master-2-app.pages.dev`.
4. Sur téléphone : ouvrir l'URL → menu du navigateur → **« Ajouter à l'écran d'accueil »**. L'app marche ensuite hors-ligne.

**Restreindre l'accès à vous 3 (recommandé, gratuit)** : l'app publie des extraits des supports des profs, elle ne doit pas être publique. Cloudflare *Zero Trust* → *Access* → *Application* sur le domaine `*.pages.dev` → règle « emails = les 3 adresses ». Connexion par code reçu par mail.

## Alternative : GitHub Pages

Possible avec un repo privé seulement avec GitHub Pro (gratuit via le *GitHub Student Developer Pack*). Workflow `.github/workflows/deploy-gh-pages.yml.disabled` fourni (renommer en `.yml` pour l'activer). L'intégration continue `check.yml` tourne sur chaque push/PR.

## Prêter l'app à un ami

- Le plus simple : lui envoyer l'URL.
- Pour qu'il ait le code : l'ajouter comme *collaborator* sur le repo privé, puis `git clone` + `npm install` + `npm run dev`.
- Chacun garde sa progression sur son appareil (bouton *Exporter* pour la sauvegarder).
