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
  celebrate: {
    combo: (n: number) => `Combo x${n}`,
    xp: (n: number) => `+${n} XP`,
  },
} as const
