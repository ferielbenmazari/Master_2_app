import type { ReactNode } from 'react'

type SampleProps = {
  num: string
  title: string
  children: ReactNode
}

/** Rend un échantillon deux fois : thème sombre puis thème clair. */
export default function Sample({ num, title, children }: SampleProps) {
  return (
    <section className="mt-11">
      <div className="mb-4 flex items-center gap-3">
        <span className="font-mono text-[11px] text-acid [[data-theme='light']_&]:text-ink">
          {num}
        </span>
        <h2 className="font-display text-[19px] font-bold">{title}</h2>
        <span
          className="h-px flex-1 bg-gradient-to-r from-line-hi to-transparent"
          aria-hidden="true"
        />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {(['dark', 'light'] as const).map((theme) => (
          <div key={theme} data-theme={theme} className="border border-line bg-bg-2 p-4 text-ink">
            <p className="mono dim mb-3">{theme === 'dark' ? 'Sombre' : 'Clair'}</p>
            {children}
          </div>
        ))}
      </div>
    </section>
  )
}
