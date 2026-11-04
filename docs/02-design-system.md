# 02 — Design system « Arena Warm » (Style 3, validé le 2026-11-03)

> Référence visuelle vivante : **`docs/design/maquette.html`** (ouvrir dans un navigateur, tout est cliquable).
> Archives (ne pas utiliser) : `maquette-style1.html` (« Punk Study », trop web 2.0), `maquette-style2.html` (« Arena », trop froid).
> Les tokens ci-dessous sont **la source de vérité** → `src/styles/tokens.css`. Copier les valeurs exactes de la maquette.

## Intention

Interface de **jeu (HUD)** : panneaux aux coins coupés, boutons parallélogrammes, coins de viseur, barres d'XP, combos, effets (glitch, décodage, particules, bordures vivantes, tilt 3D, flash).
Réchauffée par le Style 1 : **palette café/crème**, **surligneur jaune** sur les termes, **gribouillis** sous les titres, **étiquettes inclinées** façon sticker, **ombres décalées** colorées, **auras** floues qui dérivent.
**Aucun emoji** dans l'interface : uniquement des icônes (`lucide-react`).
Règle d'or : **les effets sont dans le cadre, jamais dans le texte à lire.** Les zones de lecture restent calmes (Manrope, interligne 1.7, 68 caractères max).

## Couleurs

| Token | Sombre (défaut) | Clair (« mode jour ») | Usage |
|---|---|---|---|
| `--bg` | `#110E0C` | `#F4EFE6` | fond de page |
| `--bg-2` | `#171310` | `#ECE5D9` | fond d'écran d'app |
| `--surface` | `#1F1A16` | `#FFFDF8` | panneaux |
| `--surface-2` | `#28221D` | `#F2ECE1` | zones secondaires, barres vides |
| `--line` / `--line-hi` | `#3A3129` / `#56493D` | `#DCD2C2` / `#B7AA95` | bordures |
| `--ink` | `#F6EFE4` | `#17130F` | texte |
| `--ink-soft` / `--ink-dim` | `#B8AB9B` / `#857868` | `#5B5044` / `#8A7D6C` | texte secondaire, version EN |
| `--on-accent` | `#17130F` | `#17130F` | texte posé sur une couleur d'accent |
| `--acid` | `#C8FF3D` | | **ISI1**, action principale, succès |
| `--coral` | `#FF6B5A` | | **REC1** |
| `--cyan` | `#3DE3F0` | | **INF4**, atelier anglais |
| `--gold` | `#FFC23D` | | **ISI5**, rangs |
| `--orange` | `#FF8A3D` | | série de jours, minuteur |
| `--red` | `#FF4D5E` | | **erreur uniquement** (+ pièges d'examen) |
| `--marker` | `#FFD23D` (34 % en sombre, 80 % en clair) | | surligneur des termes |

Règles : en mode clair, **jamais de texte en couleur d'accent** → texte `--ink` + soulignement/fond accent (classe `.hl` de la maquette). La couleur d'une matière vient de `course.json.color` et est posée en `--course` sur le conteneur. Valeurs autorisées pour `color` : `lime` (= acid), `coral`, `cyan`, `gold`, `orange`.

## Typographie (auto-hébergée via @fontsource)

| Rôle | Police | Graisse | Taille mobile / desktop |
|---|---|---|---|
| Display (titres, chiffres, boutons) | **Unbounded** | 500 · 700 · 800 | titres 24 / 32 px ; gros chiffres 72 px ; boutons 13 px MAJUSCULES |
| Lecture | **Manrope** | 400 · 700 · 800 | 16 / 17 px, interligne 1.7 |
| HUD, étiquettes, compteurs | **JetBrains Mono** | 400 · 700, MAJUSCULES, `letter-spacing:.12em` | 10–12 px |

Titres en casse normale (pas tout en majuscules). Paquets : `@fontsource/unbounded`, `@fontsource/manrope`, `@fontsource/jetbrains-mono`.

## Formes

- **Panneau chanfreiné** (`.panel`) : coins haut-gauche et bas-droit coupés à 14 px ; bordure 1 px via `::before`, fond via `::after` (voir maquette). Variantes : `.hi` (bordure en dégradé de la couleur de matière), `.live` (bordure qui tourne, `@property --ang`), `.drop` (ombre décalée `drop-shadow(5px 5px 0 couleur 38 %)`).
- **Coins de viseur** (`.brackets`) sur les éléments-clés (mission du jour, carte retournable).
- **Bouton parallélogramme** (`.btn`) avec reflet qui balaie au survol ; `primary` = fond `--course`, lueur en sombre.
- **Étiquette** (`.tag`) mono, fond accent 14 %, `.tilt` = inclinée −4°/+3° (stickers « J-6 », « Chapitre 05 »).
- **Avatar** : hexagone avec initiales sur dégradé de la couleur choisie (pas d'emoji).
- **Barres** : XP continue avec reflet qui balaie ; progression en segments (`.segbar`).
- **Décor** (`aria-hidden`) : 2 auras floues (acid + coral) qui dérivent, grille fine masquée en dégradé, fines lignes d'écran, particules chaudes (canvas), trame de points dans les panneaux mis en avant, gribouillis SVG sous les titres de chapitre.
- **Terme technique** (`TermChip`) : surligneur `--marker` sur 58 % bas + pointillés ; tap → popover bilingue.

## Icônes

`lucide-react`, trait 2 px, 20 px (14 px dans les étiquettes). Correspondances : accueil `Home` · réviser `Layers` · arène `Gamepad2` · profil `User` · série `Flame` · action `Zap` · cours `BookOpen` · mission `Target` · ISI1 `ClipboardList` · REC1 `FlaskConical` · INF4 `GitBranch` · ISI5 `Shield` · anglais `Languages` · rédaction `PenLine` · multijoueur `Wifi` · retourner `RefreshCw` · piège `TriangleAlert` · minuteur `Clock` · trophée `Trophy` · source `Quote`. L'icône d'une matière vient de `course.json.icon` (nom Lucide).

## Mouvement

| Token | Valeur |
|---|---|
| `--dur-fast` / `--dur-med` / `--dur-slow` | 120 / 220 / 480 ms |
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` |

Catalogue (tous présents dans la maquette) : glitch du logo · texte qui se « décode » à l'apparition des titres · compteurs qui montent · ligne de journal tapée · bordure vivante · tilt 3D + reflet sur les cartes matières · flip 3D des flashcards · **bonne réponse** : flash vert, « COMBO xN · +XP » qui explose · **mauvaise** : vignette rouge + secousse · minuteur circulaire · radar de la salle multijoueur · gribouillis qui se dessine · auras et particules.
**Obligatoire :** `prefers-reduced-motion: reduce` coupe tout sauf des fondus ; réglage « Effets : plein / léger / off » dans le profil (léger = pas de particules, glitch, auras).

## Composants (kit `src/components/ui`)

`Panel` (variants hi/live/drop, brackets) · `Button` (primary/secondary/ghost, block) · `Tag` (tilt) · `XpBar` · `SegBar` · `HexAvatar` · `LangToggle` (FR · FR+EN · EN) · `ThemeToggle` · `TimerRing` · `Radar` · `GlitchText` · `ScrambleText` · `CountUp` · `TypeLine` · `Squiggle` · `Ambient` (auras + grille + lignes + particules, un seul canvas) · `Popover` · `Sheet` · `Toast` · `EmptyState` · `Icon` (wrapper lucide).
Contenu (`src/components/content`) : `Bilingual` · `RichText` · `TermChip` · `SourceChip` (voir `06-qualite-contenu.md`) · `Callout` (tip / warning / exam / analogy) · `Diagram` · `DataTable`.

## Mise en page

- **Mobile (< 768 px)** : barre du bas Base · Réviser · Arène · Profil (indicateur lumineux sur l'onglet actif).
- **Desktop (≥ 1024 px)** : rail d'icônes à gauche (76 px), contenu `max-width: 1100px`, lecteur en **2 colonnes FR | EN** alignées bloc par bloc.
- Cible tactile ≥ 44 px. Focus visible `outline: 2px solid var(--acid); outline-offset: 3px`.

## Vocabulaire de l'interface

Accueil = **Base** · tâche du jour = **Mission du jour** · multijoueur = **Arène** · niveau = **Rang** (Novice → Analyste I/II/III → Expert → Maître) · série de bonnes réponses = **Combo**. XP : quiz juste +10 (+5 par combo), flashcard revue +2, chapitre lu +30, partiel terminé +100.

## Écrans (voir la maquette)

1. **Base** — avatar hexagone, rang + XP, série, ligne de journal (« CONTRÔLE ISI1 DANS 6J // 23 CARTES EN ATTENTE »), Mission du jour (gros chiffre + Lancer), cartes matières (icône, %, segments, sticker J-n).
2. **Matière** — chapitres (numéro géant, titre, accroche, durée, état), onglets Chapitres · Glossaire · Partiels.
3. **Chapitre (hub)** — tuiles : Lire · Fiche · Flashcards · Quiz · Exercices · Atelier anglais · Express 5 min.
4. **Lecteur** — progression, épisodes, blocs bilingues, `TermChip`, `SourceChip`, pièges d'examen, checkpoints.
5. **Flashcards** — carte avec coins de viseur, flip 3D, 4 boutons FSRS.
6. **Quiz V/F justifié** — Q.04/10, combo, minuteur, VRAI/FAUX, correction bilingue + source.
7. **Atelier anglais** — 4 niveaux, exercice, correction.
8. **Partiel blanc** — HUD minuteur, sections, barème.
9. **Arène** — radar + code, joueurs, lancer / passe-téléphone.
