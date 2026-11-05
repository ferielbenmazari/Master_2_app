import { ChevronLeft } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router'
import Icon from '@/components/ui/Icon'
import { getChapterIndex, getCourse } from '@/content/loader'
import { UI } from '@/i18n/ui'
import FlashcardSession from './FlashcardSession'

/** `…/chapitre/:chapterId/flashcards` : cartes du chapitre (dues + nouvelles dans la limite du jour). */
export default function ChapterFlashcards() {
  const { courseId = '', chapterId = '' } = useParams()
  const course = getCourse(courseId)
  const ref = getChapterIndex(courseId).find((c) => c.id === chapterId)
  if (!course || !ref) return <Navigate to={`/matiere/${courseId}`} replace />
  const code = course.code.replace(/^S\d+-/, '')
  return (
    <div className="mx-auto flex max-w-xl flex-col gap-4">
      <Link to={`/matiere/${courseId}/chapitre/${chapterId}`} className="mono dim inline-flex min-h-11 items-center gap-1.5 self-start">
        <Icon icon={ChevronLeft} size={14} />
        {UI.quiz.back(code)}
        {String(ref.order).padStart(2, '0')}
      </Link>
      <FlashcardSession scope={{ courseId, chapterId }} />
    </div>
  )
}
