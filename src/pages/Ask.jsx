export default function Ask() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-xl font-bold mb-3">Ask a Question</h1>
      <form className="space-y-3">
        <div>
          <label className="text-sm">Title</label>
          <input className="mt-1 w-full rounded-xl bg-neutral-100 dark:bg-neutral-800 px-3 py-2 outline-none" />
        </div>
        <div>
          <label className="text-sm">Details</label>
          <textarea rows={6} className="mt-1 w-full rounded-xl bg-neutral-100 dark:bg-neutral-800 px-3 py-2 outline-none"></textarea>
        </div>
        <div>
          <label className="text-sm">Tags</label>
          <input placeholder="e.g., react, performance" className="mt-1 w-full rounded-xl bg-neutral-100 dark:bg-neutral-800 px-3 py-2 outline-none" />
        </div>
        <button className="rounded-xl bg-indigo-600 text-white px-4 py-2.5">Post Question</button>
      </form>
    </div>
  )
}
