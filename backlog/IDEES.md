# Idées hors périmètre

> Les agents notent ici les bonnes idées qui ne font pas partie de leur tâche. L'utilisatrice décide plus tard.

- 
- **Compléter le chapitre REC1-05** (repéré par C00/T02) : 4 notions non couvertes — `n-validity-threats` (quiz), `n-plagiarism` (flashcard), `n-avoid-plagiarism` (quiz ou flashcard), `n-translation-rules` (bloc d'histoire + quiz/flashcard) ; et scinder la liste de 9 items `story[27]` (limite 7). Une fois fait, `npm run sources -- coverage rec1` affichera 12/12 (critère C00). Passe par `/ajouter-cours rec1 05` + fact-checker.
- **Classement BM25** : sur « internal validity », la slide « Internal vs External » devance « Validation of results » (10,0 vs 9,5). Défendable ; à réexaminer si les agents de contenu butent dessus.
- **Réserves de revue T04** : (1) le `Sheet` d'onboarding garde un bouton « fermer » sans effet et ne piège pas le focus (focus sur le conteneur, pas sur le champ pseudo) ; (2) `loadPrefs` accepte un pseudo fait d'espaces seuls, ce qui saute l'onboarding (faire un `trim`) ; (3) pas de `env(safe-area-inset-bottom)` sous la barre du bas (iPhone) ; (4) l'accueil affiche brièvement « Salut » sans pseudo derrière l'onboarding ; (5) « Base » n'a pas `aria-current` sur `/matiere/*` ; (6) thème sombre et focus clavier non vérifiés visuellement en revue.
