import {
  BookOpen,
  Brain,
  ClipboardList,
  Cpu,
  Database,
  FlaskConical,
  GitBranch,
  Globe,
  GraduationCap,
  Languages,
  Network,
  Scale,
  Shield,
  type LucideIcon,
} from 'lucide-react'

/** Liste blanche des icônes autorisées dans `course.json.icon` (évite d'importer toute la bibliothèque). */
const COURSE_ICONS: Record<string, LucideIcon> = {
  BookOpen,
  Brain,
  ClipboardList,
  Cpu,
  Database,
  FlaskConical,
  GitBranch,
  Globe,
  GraduationCap,
  Languages,
  Network,
  Scale,
  Shield,
}

/** Icône d'une matière à partir de son nom lucide ; icône de repli si le nom est inconnu. */
export function courseIcon(name: string): LucideIcon {
  return Object.hasOwn(COURSE_ICONS, name) ? (COURSE_ICONS[name] as LucideIcon) : BookOpen
}
