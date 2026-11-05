import { UI } from '@/i18n/ui'
import FlashcardSession from './FlashcardSession'

/** `/reviser` : toutes les cartes à revoir aujourd'hui, toutes matières mélangées. */
export default function ReviewPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="display text-2xl">{UI.review.title}</h1>
      <FlashcardSession scope="all" />
    </div>
  )
}
