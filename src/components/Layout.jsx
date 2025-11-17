import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Rightbar from './Rightbar'

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Header onMenu={() => setOpen(!open)} />
      <main className="mx-auto max-w-[120rem] px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 py-6">
        <div className="lg:col-span-2">
          <Sidebar open={open} />
        </div>
        <div className="lg:col-span-7">
          {children}
        </div>
        <div className="lg:col-span-3">
          <Rightbar />
        </div>
      </main>
    </div>
  )
}
