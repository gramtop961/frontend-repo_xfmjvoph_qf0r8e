import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20 blur-3xl" />
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center py-10 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-4 sm:px-6 lg:px-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-300 mb-4">
            Where developers discuss, discover, and build
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-neutral-900 dark:text-neutral-50">
            A modern home for dev conversations
          </h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-prose">
            High-signal threads, curated digests, clean code snippets, and a community built for engineers. No noise—just the good stuff.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#feed" className="px-4 py-2.5 rounded-xl bg-indigo-600 text-white shadow hover:bg-indigo-500">Browse Feed</a>
            <a href="/about" className="px-4 py-2.5 rounded-xl border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5">Learn More</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative h-[420px] md:h-[520px] lg:h-[560px]"
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden border border-black/5 dark:border-white/5 shadow-xl">
            <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
