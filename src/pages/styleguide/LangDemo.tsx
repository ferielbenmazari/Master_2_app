import { useState } from 'react'
import LangToggle, { type LangMode } from '@/components/ui/LangToggle'

export default function LangDemo() {
  const [lang, setLang] = useState<LangMode>('both')
  return <LangToggle value={lang} onChange={setLang} />
}
