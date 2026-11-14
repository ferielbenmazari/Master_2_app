---
id: C15
title: "ISI7 — Systèmes décisionnels (R. Bijaoui) : reconstitution et intégration"
lot: contenu
status: doing
depends: [C00]
agent: main
---

# C15 — ISI7 — Systèmes décisionnels

## Objectif
Reconstituer le cours (diapositives partielles + compte rendu de séance), le compléter par des sources externes citées, et fournir cours, quiz, exercices et partiels blancs. Examen : 22 février 2027, 1 h 30. Voir `content/isi7/PLAN.md` (plan et niveaux de confiance), `PROFIL-PROF.md`.

## Critères d'acceptation
- [x] 2 sources du prof + 14 extraits externes classés dans `sources.json` (`cours` / `complement`), extraits dans `sources-texte/isi7/`
- [x] 17 chapitres (`status: draft`) : cours, glossaire, points clés, flashcards, quiz, exercices corrigés, atelier d'anglais, synthèse
- [x] 4 partiels blancs corrigés (`exams/blanc-01` à `blanc-04`)
- [x] `notions.json` (136 notions), `PROFIL-PROF.md`, `PLAN.md`
- [x] `npm run check` vert (0 erreur, 0 avertissement ; couverture des notions ★★★/★★ à 100 %)
- [ ] Validation par l'utilisatrice du PLAN et de `notions.json` (étapes 1 et 3 du pipeline)
- [ ] Passe `fact-checker` puis `content-reviewer` sur chaque chapitre et partiel → `reviewed`
- [ ] Confrontation aux notes de cours des séances 2 à 10 (chapitres 11 à 17 construits sur le séquencement + Kimball) ; compléter l'extrait D et les corrigés de l'atelier
- [ ] Vérifier en réel le rendu des schémas Mermaid (premiers blocs `diagram` des chapitres ISI7)

## Journal
2026-11-14 : matière créée. Sources : `isi7.md` (diapositives partielles) et `cours_14092026.md` (séance du 14 octobre). Recherche externe : Kimball & Ross (ch. 1, extrait éditeur), Kimball Group (techniques), Chaudhuri & Dayal 1997, Armbrust 2021, Dehghani 2020, Gruber 1993, Hogan 2021, RGPD (reproduction non officielle), Commission européenne (CSRD), Kaplan & Norton 1992, Strathern 1997, HBS (Porter), NIST, dbt. Échecs : Gartner (403), EUR-Lex (page de protection), HBS BSC (404), CIPD/PESTEL (403) : rien n'en est cité.
Chapitres 1 à 10 : contexte (confirmé par les sources du prof) ; 11 à 17 : architecture et modélisation, dont le contenu technique vient de Kimball (séances 2 à 10 absentes des sources, seul le séquencement existe) : signalé « complément » dans le texte. Écarts : extrait D de l'atelier absent (cas D inventé et marqué) ; corrigés des extraits A-C proposés ; variante simplifiée du prof inconnue ; estimations de temps de lecture recalculées à ~110 mots/min (chapitres plus courts que ceux des autres matières). Tests existants mis à jour (liste des matières de 4 à 5 : `loader.test.ts`, `pages.test.tsx`, `validate.test.ts`).
