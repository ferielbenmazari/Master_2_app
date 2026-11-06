---
id: C01
title: "ISI1 — sources, extraction et analyse (notions + profil du prof)"
lot: contenu
status: doing
depends: [C00]
agent: /ajouter-cours isi1 (étapes 1 à 3)
---

# C01 — ISI1 — sources, extraction et analyse (notions + profil du prof)

## Objectif
Valider `content/isi1/sources.json` (proposé par l'architecte), extraire le texte des PDF de cours, puis produire `notions.json` et compléter `PROFIL-PROF.md` (une première version issue des 4 annales existe déjà).

## Comment
Lancer `/ajouter-cours isi1 (étapes 1 à 3)` dans Claude Code (session Sonnet). Peut tourner **dans une autre session en parallèle** des tâches T** (fichiers différents). Règles : `docs/06-qualite-contenu.md`.

## Critères d'acceptation
- [ ] `sources.json` validé par l'utilisatrice (`status: validé`)
- [ ] Un fichier `sources-texte/isi1/*.md` par source non ignorée ; problèmes (scans) signalés
- [ ] `notions.json` : toutes les notions des supports, citations vérifiées, ★★★ justifiées
- [ ] `PROFIL-PROF.md` complété (sections 4-6 avec les supports), mentions *à confirmer* résolues
- [ ] Validation de l'utilisatrice sur les notions ★★★ et le profil

## Journal
2026-11-06 (revue) : `sources.json` validé et 16 PDF extraits dans `sources-texte/isi1/` (texte abîmé : `=`/`M` à la place de « ti », voir C08). **Reste** : `notions.json` ISI1 (absent), `PROFIL-PROF.md` encore « première version » (sections 4-6 à compléter avec les supports).
