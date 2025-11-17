import { useEffect, useState } from 'react'
import { Search, Bell, User, Moon, Sun, Menu } from 'lucide-react'

export default function Header({ onMenu }) {
  const [query, setQuery] = useState('')
  const [theme, setTheme] = useState('system')

  useEffect(() => {
    // initialize theme from localStorage
    const saved = localStorage.getItem('theme') || 'dark'
    setTheme(saved)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else if (theme === 'light') {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-[120rem] px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center gap-3">
          <button className="lg:hidden p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5" onClick={onMenu} aria-label="Open menu">
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 shadow-lg" />
            <span className="font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">DevSphere</span>
          </div>

          <div className="flex-1" />

          <div className="hidden md:flex items-center max-w-xl w-full">
            <div className="relative w-full">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search posts, topics, people..."
                className="w-full rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-transparent focus:border-indigo-400/60 dark:focus:border-indigo-500/40 outline-none py-2.5 pl-10 pr-4 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 shadow-inner"
              />
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            </div>
          </div>

          <div className="flex items-center gap-2 ml-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" aria-label="Notifications">
              <Bell className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white shadow">
              <User className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
