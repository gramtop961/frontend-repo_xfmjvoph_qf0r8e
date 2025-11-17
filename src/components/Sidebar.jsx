import { Home, Compass, Flame, Tags, Layers, HelpCircle, Newspaper } from 'lucide-react'

const items = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Compass, label: 'Explore', path: '/explore' },
  { icon: Flame, label: 'Trending', path: '/trending' },
  { icon: Layers, label: 'Languages', path: '/languages' },
  { icon: Tags, label: 'Frameworks', path: '/frameworks' },
  { icon: HelpCircle, label: 'Ask a Question', path: '/ask' },
  { icon: Newspaper, label: 'Dev Digest', path: '/digest' },
]

export default function Sidebar({ open }) {
  return (
    <aside className={`$${open ? 'block' : 'hidden'} lg:block sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto`}> 
      <nav className="p-3">
        <ul className="space-y-1">
          {items.map(({ icon: Icon, label, path }) => (
            <li key={label}>
              <a href={path} className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-neutral-700 dark:text-neutral-200">
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-3">
        <div className="rounded-xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-fuchsia-500/10 border border-indigo-500/20 dark:border-indigo-400/20 p-4">
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            Tip: Use tags to curate your feed. Follow topics like Rust, AI/ML, Web3.
          </p>
        </div>
      </div>
    </aside>
  )
}
