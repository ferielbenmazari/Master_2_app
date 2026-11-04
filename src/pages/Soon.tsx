import { Hourglass } from 'lucide-react'
import { Link } from 'react-router'
import EmptyState from '@/components/ui/EmptyState'
import { UI } from '@/i18n/ui'

/** Page pas encore réalisée. */
export default function Soon() {
  return (
    <EmptyState icon={Hourglass} title={UI.soon.title} text={UI.soon.text}>
      <Link to="/" className="btn">
        {UI.soon.back}
      </Link>
    </EmptyState>
  )
}
