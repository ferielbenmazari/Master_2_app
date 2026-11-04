import { useState } from 'react'
import LangToggle, { type LangMode } from '@/components/ui/LangToggle'

export default function LangDemo() {
  const [lang, setLang] = useState<LangMode>('fr-en')
  return <LangToggle value={lang} onChange={setLang} />
}
