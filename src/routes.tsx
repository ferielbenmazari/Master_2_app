import { Navigate, Route, Routes } from 'react-router'
import AppLayout from '@/components/layout/AppLayout'
import CourseScope from '@/components/layout/CourseScope'
import { UI } from '@/i18n/ui'
import ChapterHub from '@/pages/ChapterHub'
import ChapterSheet from '@/pages/ChapterSheet'
import Glossary from '@/pages/Glossary'
import ChapterFlashcards from '@/features/flashcards/ChapterFlashcards'
import ReviewPage from '@/features/flashcards/ReviewPage'
import QuizRunner from '@/features/quiz/QuizRunner'
import Course from '@/pages/Course'
import Home from '@/pages/Home'
import Profile from '@/pages/Profile'
import Reader from '@/pages/Reader'
import Soon from '@/pages/Soon'
import Styleguide from '@/pages/Styleguide'
import TitledSoon from '@/pages/TitledSoon'

const CHAPTER_VIEWS = ['express', 'exercices', 'anglais']

/** Table des routes (à placer dans un routeur). Pages non réalisées : « Bientôt ici ». */
export default function AppRoutes() {
  return (
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
  )
}
