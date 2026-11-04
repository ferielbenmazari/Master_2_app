# 00 — Besoin (vision produit)

> Document de référence. Toute fonctionnalité doit pouvoir se rattacher à une ligne de ce fichier.
> Validé avec l'utilisatrice le 2026-11-03.

## Contexte

- Master 2 MIAGE SBI (Paris 1 Panthéon-Sorbonne), année 2026-2027.
- Cours **en anglais** (certains supports déjà traduits en français dans `ressources/**/Markdown`).
- Examens **en français ou en anglais** : il faut **comprendre** (FR) et **savoir écrire des phrases simples et justes** (EN).
- 3 utilisateurs (l'autrice + 2 amis). Pas de nom personnalisé dans l'UI : chacun choisit un **pseudo + avatar** au premier lancement.
- Des cours seront **ajoutés au fil de l'année** → l'ajout d'un cours ne doit demander **aucune modification de code**.
- Budget : **0 €**. Aucune IA payante à l'usage. L'IA (Claude Code) sert uniquement à **produire le contenu en amont**.

## Matières (S3)

| Id | Code | Matière | Prof | Priorité |
|---|---|---|---|---|
| `isi1` | S3-ISI1 | Ingénierie des exigences | C. Salinesi | 1 — contrôle semaine du 9 nov. |
| `rec1` | S3-REC1 | Méthodes de recherche | I. Rychkova | 2 — contrôle semaine du 9 nov. |
| `inf4` | S3-INF4 | (Software) Product Line Engineering | C. Salinesi, C. Correa | 3 — contrôle semaine du 9 nov. |
| `isi5` | S3-ISI5 | Sécurité des SI / IA agentique offensive | F. Pizzi | 4 — plus tard |

## Fonctionnalités attendues

Tout contenu existe **en FR et en EN simultanément** (voir « Règle bilingue »).

| # | Mode | Description | Lot |
|---|---|---|---|
| F1 | **Cours narratif** | Le chapitre raconté comme une histoire : simple, agréable, avec un fil rouge. Chaque terme technique est surligné, cliquable, défini dans les deux langues. | 1 |
| F2 | **Fiche synthèse** | 5 à 10 points clés par chapitre + glossaire du chapitre. | 1 |
| F3 | **Glossaire** | Tous les termes d'une matière, recherche FR/EN. | 1 |
| F4 | **Flashcards** | Répétition espacée (algorithme FSRS) : l'app re-propose ce qu'on oublie. | 1 |
| F5 | **Vrai/Faux justifié + QCM** | Format exact des partiels ISI1 (« justifiez si FAUX »), correction expliquée. | 1 |
| F6 | **Exercices corrigés** | Niveau Master, indices progressifs, solution détaillée, auto-évaluation. | 2 |
| F7 | **Partiels blancs corrigés** | Annales réelles + partiels générés au même format, minuteur, barème. | 2 |
| F8 | **Atelier anglais** | Écrire des phrases d'examen justes, **corrigé sans IA** (4 niveaux, voir plus bas). | 2 |
| F9 | **Tableau de bord** | « À revoir aujourd'hui », série de jours, progression par matière. | 1 |
| F10 | **Mode jeu à plusieurs** | Quiz Battle en salle (code ou QR) sur partage de connexion + mode passe-téléphone hors-ligne. *Keep it simple.* | 3 |
| F11 | **Sauvegarde** | Progression locale à l'appareil, export/import d'un fichier JSON. | 1 |
| F12 | **Express 5 min** | Session courte et intense (1 point clé, 3 flashcards, 2 quiz) pour garder l'élan chaque jour. | 1 |
| F13 | **Sources visibles** | Chaque définition, question et corrigé montre l'extrait exact du cours d'où il vient. | 1 |
| F14 | **Signaler une erreur** | Un tap → issue GitHub pré-remplie, corrigée par les agents. | 2 |

## Exigence n°1 : un fond irréprochable (2026-11-03)

« Le fond doit être aussi parfait que la forme. » Le contenu doit être **100 % exact et aligné sur le cours et les idées des professeurs**, la fidélité doit **se voir**, les quiz/exercices/partiels doivent être **au niveau et dans le style des profs** (ni trop faciles, ni évidents), et l'app doit faire apprendre **beaucoup en peu de temps sans assommer**. → Garanties détaillées dans `docs/06-qualite-contenu.md`.

## Règle bilingue (décision pédagogique)

1. **Lire** (cours, fiches, glossaire, corrections) → **FR et EN affichés ensemble** : deux colonnes sur grand écran, paragraphe FR puis EN (plus discret) sur téléphone. Les termes techniques sont surlignés de la même couleur dans les deux langues pour faire le lien.
2. **S'entraîner** (flashcards, quiz, atelier anglais) → la question s'affiche dans **la langue d'entraînement choisie**, la réponse/correction s'affiche **dans les deux langues**. *Pourquoi :* voir l'anglais avant de chercher, c'est le reconnaître, pas le produire.
3. Un sélecteur global **FR · FR+EN · EN** permet toujours de forcer un affichage.

## Atelier anglais sans IA (F8)

| Niveau | Exercice | Correction automatique |
|---|---|---|
| 1 | **Remettre les mots dans l'ordre** | Comparaison exacte normalisée |
| 2 | **Phrase à trous** (vocabulaire technique) | Réponses acceptées multiples |
| 3 | **Repérer l'erreur** (grammaire / faux-ami / mauvais terme) | Choix de l'erreur + correction affichée |
| 4 | **Rédaction libre** (1-3 phrases) | Détection des mots-clés attendus + réponse modèle + checklist d'auto-correction |

## Contraintes non fonctionnelles

- **PC + téléphone**, mobile-first, installable (PWA), **fonctionne hors-ligne**.
- **Très beau** : style « Arena Warm » (Style 3, voté à l'unanimité) — interface de jeu, effets impressionnants, icônes (aucun emoji), palette chaude (voir `02-design-system.md`). Respect de `prefers-reduced-motion`.
- **Facile à lancer** : `npm install && npm run dev` en local ; une URL pour les amis.
- **Évolutif** : ajouter une matière = déposer les sources + lancer `/ajouter-cours`.
- **Fiable** : contenu validé par schéma, tests automatiques, `npm run check` vert avant tout commit.
- Repo **privé**. Hébergement gratuit compatible repo privé.

## Hors périmètre (volontairement)

- Comptes utilisateurs, serveur, base de données distante.
- Correction par IA à l'usage.
- Classements en ligne persistants.
