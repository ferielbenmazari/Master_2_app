---
id: C13
title: "Refonte pédagogique ISI1"
lot: refonte-pedagogique
status: doing
depends: [T25, C11]
agent: main
---

# C13 — Refonte pédagogique ISI1

## Objectif
Appliquer l'architecture validée (audit du 2026-11-12) : chapitres réorganisés par problématique, chapitre priorisation et modèles de buts (sources externes citées), annales 2013 et 2014 jouables.

## Critères d'acceptation
- [ ] Chaque chapitre : question directrice, objectifs, au partiel, avant/après, synthèse
- [ ] Notions hiérarchisées (preuve A-E) ; contexte en encadré « repère », jamais quizzé
- [ ] Méthodes pas à pas + corrigé commenté + exercice de transfert pour chaque compétence
- [ ] Quiz rattachés à un objectif, avec confusion à éviter
- [ ] Fidélité : 0 citation invalide, `npm run check` vert

## Journal
2026-11-13 : sources externes enregistrées pour les notions d'annale absentes des supports : `sources-texte/isi1/ext-van-lamsweerde-2001-kaos.md` (raffinement ET/OU, soft goals), `ext-yu-1997-istar.md` (i*, softgoals). À faire : déclarer ces fichiers dans `sources.json` (tier `complement`), extrait du cours SEG3101 d'Ottawa (triage, AHP : échelle 1-9, réciprocité, normalisation, moyenne des lignes) déjà téléchargé mais pas encore enregistré, nouveau chapitre 10 (priorisation, modèles de buts), annales 2013 et 2014 en partiels, puis transformation des 9 chapitres (objectifs, méthodes, exercices). Sans source fiable trouvée : top 10 / 100 $, matrice d'Eisenhower.
