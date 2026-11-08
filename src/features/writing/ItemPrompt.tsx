import RichText from '@/components/content/RichText'
import type { L } from '@/content/schema'

interface Props {
  prompt: L
  /** Rappel de la manipulation attendue (texte d'interface). */
  hint: string
}

/** Consigne en français (l'anglais est la langue de la réponse), puis rappel de la manipulation. */
export default function ItemPrompt({ prompt, hint }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <p className="stmt" lang="fr">
        <RichText lang="fr" text={prompt.fr} noTerms />
      </p>
      <p className="text-sm text-ink-soft">{hint}</p>
    </div>
  )
}
