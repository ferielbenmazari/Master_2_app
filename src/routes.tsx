import { Navigate, Route, Routes } from 'react-router'
import AppLayout from '@/components/layout/AppLayout'
import CourseScope from '@/components/layout/CourseScope'
import { UI } from '@/i18n/ui'
import Home from '@/pages/Home'
import Profile from '@/pages/Profile'
import Soon from '@/pages/Soon'
import Styleguide from '@/pages/Styleguide'
import TitledSoon from '@/pages/TitledSoon'

const CHAPTER_VIEWS = ['lire', 'fiche', 'flashcards', 'quiz', 'exercices', 'anglais']

/** Table des routes (à placer dans un routeur). Pages non réalisées : « Bientôt ici ». */
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/styleguide" element={<Styleguide />} />
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="reviser" element={<TitledSoon title={UI.review.title} />} />
        <Route path="jouer/*" element={<TitledSoon title={UI.arena.title} />} />
        <Route path="profil" element={<Profile />} />
        <Route path="matiere/:courseId" element={<CourseScope />}>
          <Route index element={<Soon />} />
          <Route path="glossaire" element={<Soon />} />
          <Route path="partiel/:examId" element={<Soon />} />
          <Route path="chapitre/:chapterId">
            <Route index element={<Soon />} />
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
