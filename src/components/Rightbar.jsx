export default function Rightbar() {
  return (
    <aside className="hidden xl:block sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="space-y-4 p-3">
        <section className="rounded-xl border border-black/5 dark:border-white/5 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-4">
          <h3 className="text-sm font-semibold mb-3">Top Discussions</h3>
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
            <li className="hover:text-indigo-500 cursor-pointer">What’s new in React 19?</li>
            <li className="hover:text-indigo-500 cursor-pointer">Rust vs Go for systems dev</li>
            <li className="hover:text-indigo-500 cursor-pointer">LLM embeddings: best practices</li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 dark:border-white/5 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-4">
          <h3 className="text-sm font-semibold mb-3">Upcoming Tech Events</h3>
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
            <li>JSConf EU — May 18</li>
            <li>KubeCon — Jun 4</li>
            <li>Strange Loop — Sep 12</li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 dark:border-white/5 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-4">
          <h3 className="text-sm font-semibold mb-3">Top Libraries</h3>
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
            <li>tRPC, Tanstack Query, Zod</li>
            <li>shadcn/ui, Radix UI, Framer Motion</li>
            <li>LangChain, OpenAI, Vercel AI SDK</li>
          </ul>
        </section>
      </div>
    </aside>
  )
}
