import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import AppLayout from '@/components/layout/AppLayout'
import CourseScope from '@/components/layout/CourseScope'
import { UI } from '@/i18n/ui'
import ChapterHub from '@/pages/ChapterHub'
import Course from '@/pages/Course'
import Home from '@/pages/Home'
import TitledSoon from '@/pages/TitledSoon'

// Routes lourdes chargées à la demande (précachées par le service worker : hors-ligne OK).
const Glossary = lazy(() => import('@/pages/Glossary'))
const ChapterSheet = lazy(() => import('@/pages/ChapterSheet'))
const ChapterFlashcards = lazy(() => import('@/features/flashcards/ChapterFlashcards'))
const ReviewPage = lazy(() => import('@/features/flashcards/ReviewPage'))
const ExpressRunner = lazy(() => import('@/features/express/ExpressRunner'))
const QuizRunner = lazy(() => import('@/features/quiz/QuizRunner'))
const ExercisesLayout = lazy(() => import('@/features/exercises/ExercisesLayout'))
const ExerciseList = lazy(() => import('@/features/exercises/ExerciseList'))
const ExerciseView = lazy(() => import('@/features/exercises/ExerciseView'))
const ExamList = lazy(() => import('@/features/exams/ExamList'))
const WritingRunner = lazy(() => import('@/features/writing/WritingRunner'))
const ExamRunner = lazy(() => import('@/features/exams/ExamRunner'))
const Profile = lazy(() => import('@/pages/Profile'))
const Reader = lazy(() => import('@/pages/Reader'))
const TransportTest = lazy(() => import('@/features/game/TransportTest'))
const ArenaPage = lazy(() => import('@/features/game/ArenaPage'))
const BattleHost = lazy(() => import('@/features/game/BattleHost'))
const BattleGuest = lazy(() => import('@/features/game/BattleGuest'))
const Styleguide = lazy(() => import('@/pages/Styleguide'))

/** Table des routes (à placer dans un routeur). Pages non réalisées : « Bientôt ici ». */
export default function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/styleguide" element={<Styleguide />} />
        {/* Express : plein écran, hors coquille (pas de barre de navigation) */}
        <Route path="/express" element={<ExpressRunner />} />
        <Route path="/matiere/:courseId/chapitre/:chapterId/express" element={<ExpressRunner />} />
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="reviser" element={<ReviewPage />} />
          <Route path="jouer/test" element={<TransportTest />} />
          <Route path="jouer" element={<ArenaPage />} />
          <Route path="jouer/creer" element={<BattleHost />} />
          <Route path="jouer/rejoindre/:code?" element={<BattleGuest />} />
          <Route path="jouer/*" element={<TitledSoon title={UI.arena.title} />} />
          <Route path="profil" element={<Profile />} />
          <Route path="matiere/:courseId" element={<CourseScope />}>
            <Route index element={<Course />} />
            <Route path="glossaire" element={<Glossary />} />
            <Route path="partiels" element={<ExamList />} />
            <Route path="partiel/:examId" element={<ExamRunner />} />
            <Route path="chapitre/:chapterId">
              <Route index element={<ChapterHub />} />
              <Route path="lire" element={<Reader />} />
              <Route path="quiz" element={<QuizRunner />} />
              <Route path="fiche" element={<ChapterSheet />} />
              <Route path="flashcards" element={<ChapterFlashcards />} />
              <Route path="exercices" element={<ExercisesLayout />}>
                <Route index element={<ExerciseList />} />
                <Route path=":exerciseId" element={<ExerciseView />} />
              </Route>
              <Route path="anglais" element={<WritingRunner />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
