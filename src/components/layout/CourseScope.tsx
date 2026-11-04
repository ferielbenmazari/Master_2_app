import { Navigate, Outlet, useParams } from 'react-router'
import { getCourse } from '@/content/loader'
import { courseStyle } from '@/lib/course-color'

/** Pose `--course` (couleur de la matière) pour toutes les routes `/matiere/:courseId/**`. */
export default function CourseScope() {
  const { courseId = '' } = useParams()
  const course = getCourse(courseId)
  if (!course) return <Navigate to="/" replace />
  return (
    <div style={courseStyle(course.color)}>
      <Outlet />
    </div>
  )
}
