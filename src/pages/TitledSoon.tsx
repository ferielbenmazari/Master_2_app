import Soon from './Soon'

/** Page « Bientôt » précédée d'un titre. */
export default function TitledSoon({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="display text-2xl">{title}</h1>
      <Soon />
    </div>
  )
}
