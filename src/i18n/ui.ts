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
