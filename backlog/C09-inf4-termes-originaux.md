---
id: C09
title: "INF4 — extraire les PDF et aligner les termes anglais sur le cours original"
lot: contenu
status: todo
depends: [C05]
agent: content-extractor puis fact-checker
---

# C09 — INF4 : termes anglais du cours original

## Constat (revue du 2026-11-06)
- Les Markdown INF4 (`ressources/S3__INF4/mardown/`) sont des **transcriptions traduites en français**, avec des passages qui **décrivent les schémas** (« Description et explication du schéma… ») : ce ne sont pas les mots du prof.
- `sources-texte/inf4/` n'existe pas : le recoupement avec le PDF original (docs/06 §2, « le PDF fait foi ») est impossible.
- Conséquence : la version EN du contenu est parfois **retraduite**. Ex. glossaire INF4-03 : *extensive representation* alors que le PDF dit *Extensive specification*.
- Même situation pour REC1 : un seul PDF extrait dans `sources-texte/rec1/`.

## À faire
1. `content-extractor` (mode extraction) : `pdftotext -layout` des 7 PDF de `ressources/S3__INF4/epi/` vers `sources-texte/inf4/` (noms déjà prévus dans `sources.json`), puis REC1 1 à 5. `npm run sources -- index inf4` / `rec1`.
2. `fact-checker`, chapitre par chapitre INF4 : pour chaque `glossary[].en` et chaque terme `**gras**` de la version EN, chercher le terme dans le PDF original ; s'il diffère, prendre celui du PDF et ajouter une `src` vers `sources-texte/inf4/…`.
3. Les citations prises dans une « Description et explication du schéma » des Markdown : les remplacer par une citation du PDF original, ou marquer le paragraphe `narrative: true` s'il ne porte aucun fait.

## Critères d'acceptation
- [ ] `sources-texte/inf4/*.md` présents (7 fichiers), `sources-texte/rec1/1…5`
- [ ] Glossaires INF4 : chaque terme EN retrouvé tel quel dans un PDF original
- [ ] 0 citation tirée d'une description de schéma générée
- [ ] `npm run validate:content` : 0 erreur

## Journal
