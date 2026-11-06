import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import AppLayout from '@/components/layout/AppLayout'
import CourseScope from '@/components/layout/CourseScope'
import { UI } from '@/i18n/ui'
import ChapterHub from '@/pages/ChapterHub'
import Course from '@/pages/Course'
import Home from '@/pages/Home'
import Soon from '@/pages/Soon'
import TitledSoon from '@/pages/TitledSoon'

// Routes lourdes chargées à la demande (précachées par le service worker : hors-ligne OK).
const Glossary = lazy(() => import('@/pages/Glossary'))
const ChapterSheet = lazy(() => import('@/pages/ChapterSheet'))
const ChapterFlashcards = lazy(() => import('@/features/flashcards/ChapterFlashcards'))
const ReviewPage = lazy(() => import('@/features/flashcards/ReviewPage'))
const QuizRunner = lazy(() => import('@/features/quiz/QuizRunner'))
const Profile = lazy(() => import('@/pages/Profile'))
const Reader = lazy(() => import('@/pages/Reader'))
const Styleguide = lazy(() => import('@/pages/Styleguide'))

const CHAPTER_VIEWS = ['express', 'exercices', 'anglais']

/** Table des routes (à placer dans un routeur). Pages non réalisées : « Bientôt ici ». */
export default function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/styleguide" element={<Styleguide />} />
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="reviser" element={<ReviewPage />} />
          <Route path="jouer/*" element={<TitledSoon title={UI.arena.title} />} />
          <Route path="profil" element={<Profile />} />
          <Route path="matiere/:courseId" element={<CourseScope />}>
            <Route index element={<Course />} />
            <Route path="glossaire" element={<Glossary />} />
            <Route path="partiel/:examId" element={<Soon />} />
            <Route path="chapitre/:chapterId">
              <Route index element={<ChapterHub />} />
              <Route path="lire" element={<Reader />} />
              <Route path="quiz" element={<QuizRunner />} />
              <Route path="fiche" element={<ChapterSheet />} />
              <Route path="flashcards" element={<ChapterFlashcards />} />
              {CHAPTER_VIEWS.map((v) => (
                <Route key={v} path={v} element={<Soon />} />
              ))}
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
