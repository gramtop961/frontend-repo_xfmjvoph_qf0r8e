export default function Trending() {
  const topics = [
    { tag: 'AI/ML', count: '12.3k' },
    { tag: 'React', count: '9.7k' },
    { tag: 'Rust', count: '7.1k' },
    { tag: 'Web Dev', count: '6.4k' },
    { tag: 'Cloud', count: '5.8k' },
  ]
  return (
    <section className="rounded-2xl border border-black/5 dark:border-white/5 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-4">
      <h3 className="text-sm font-semibold mb-3">Trending Topics</h3>
      <div className="flex flex-wrap gap-2">
        {topics.map((t) => (
          <a key={t.tag} href={`/topic/${t.tag}`} className="px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20 text-xs">
            #{t.tag} · {t.count}
          </a>
        ))}
      </div>
    </section>
  )
}
