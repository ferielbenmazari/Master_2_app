/** Textes d'interface (français). Le contenu de cours vient des JSON, jamais d'ici. */
export const UI = {
  theme: {
    toLight: 'Mode jour',
    toDark: 'Mode nuit',
  },
  lang: {
    label: 'Langue du contenu',
    fr: 'FR',
    frEn: 'FR+EN',
    en: 'EN',
  },
  effects: {
    label: 'Effets',
    full: 'Plein',
    light: 'Léger',
    off: 'Off',
  },
  timer: {
    remaining: (n: number) => `${n} secondes restantes`,
  },
  radar: {
    label: (code: string) => `Code de la salle : ${code}`,
  },
  progress: {
    segments: (done: number, total: number) => `${done} sur ${total}`,
  },
  dialog: {
    close: 'Fermer',
  },
  nav: {
    label: 'Navigation principale',
    base: 'Base',
    review: 'Réviser',
    arena: 'Arène',
    profile: 'Profil',
  },
  soon: {
    title: 'Bientôt ici',
    text: 'Cette page arrive dans une prochaine étape.',
    back: 'Retour à la base',
  },
  home: {
    title: 'Base',
    greeting: (pseudo: string) => `Salut ${pseudo}`,
  },
  review: { title: 'Réviser' },
  arena: { title: 'Arène' },
  profile: {
    title: 'Profil',
    theme: 'Thème',
    langMode: 'Langue du contenu',
    trainLang: 'Langue d’entraînement',
    pseudo: 'Pseudo',
    avatar: 'Couleur de l’avatar',
    data: 'Mes données',
    export: 'Exporter ma progression',
    import: 'Importer',
    reset: 'Réinitialiser',
    exported: 'Progression exportée',
    imported: 'Progression restaurée',
    importConfirmTitle: 'Remplacer ta progression ?',
    importConfirmText: (name: string) =>
      `Le fichier « ${name} » va remplacer toute la progression et les préférences de cet appareil.`,
    importConfirm: 'Remplacer',
    resetTitle: 'Tout effacer ?',
    resetText1: 'Ta progression et tes préférences seront supprimées de cet appareil.',
    resetText2: 'Dernière chance : cette action est définitive. Pense à exporter avant.',
    resetNext: 'Continuer',
    resetConfirm: 'Tout effacer définitivement',
    cancel: 'Annuler',
  },
  backup: {
    errCorrupt: 'Ce fichier n’est pas un JSON lisible.',
    errVersion: 'Ce fichier vient d’une autre version de l’app et ne peut pas être importé.',
    errShape: 'Ce fichier n’est pas une sauvegarde valide de Révision M2.',
    errWrite: 'L’écriture a échoué : tes données actuelles sont intactes.',
  },
  onboarding: {
    title: 'Choisis ton pseudo',
    pseudoLabel: 'Pseudo',
    colorLabel: 'Couleur de ton avatar',
    color: (c: string) => `Couleur ${c}`,
    colors: { lime: 'vert', coral: 'corail', cyan: 'cyan', gold: 'or', orange: 'orange' },
    submit: 'C’est parti',
  },
  celebrate: {
    combo: (n: number) => `Combo x${n}`,
    xp: (n: number) => `+${n} XP`,
  },
} as const
