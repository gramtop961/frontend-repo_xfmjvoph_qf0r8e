export default function Profile() {
  const user = {
    name: 'Taylor Swift.dev',
    bio: 'Building delightful developer experiences. TypeScript, Rust, Edge runtimes.',
    skills: ['TypeScript', 'Rust', 'React', 'Kubernetes'],
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/',
    badges: ['Top Writer – Backend', 'Early Builder']
  }
  return (
    <div className="space-y-4">
      <section className="rounded-2xl border border-black/5 dark:border-white/5 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-6">
        <div className="flex items-start gap-4">
          <img src={`https://api.dicebear.com/7.x/identicon/svg?seed=${user.name}`} className="w-20 h-20 rounded-xl" />
          <div className="flex-1">
            <h1 className="text-xl font-bold">{user.name}</h1>
            <p className="text-neutral-600 dark:text-neutral-300 mt-1">{user.bio}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {user.skills.map((s) => (
                <span key={s} className="px-2.5 py-1 text-xs rounded-lg bg-neutral-100 dark:bg-neutral-800">{s}</span>
              ))}
            </div>
            <div className="mt-3 flex gap-3 text-sm">
              <a href={user.github} className="underline">GitHub</a>
              <a href={user.linkedin} className="underline">LinkedIn</a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {user.badges.map((b) => (
              <span key={b} className="px-2 py-1 text-xs rounded-md bg-amber-500/15 text-amber-600 border border-amber-500/20">{b}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-black/5 dark:border-white/5 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-4">
        <h3 className="text-sm font-semibold mb-3">Recent Activity</h3>
        <ul className="text-sm space-y-2 text-neutral-600 dark:text-neutral-300">
          <li>Posted “Edge workers: battle-tested patterns”</li>
          <li>Commented on “Rust vs Go”</li>
          <li>Bookmarked “Prompt engineering field notes”</li>
        </ul>
      </section>
    </div>
  )
}
