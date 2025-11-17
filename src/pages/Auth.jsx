export default function Auth() {
  return (
    <div className="max-w-md mx-auto rounded-2xl border border-black/5 dark:border-white/5 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-6">
      <h1 className="text-xl font-bold">Welcome back</h1>
      <p className="text-sm text-neutral-600 dark:text-neutral-300">Sign in to continue</p>
      <form className="mt-4 space-y-3">
        <div>
          <label className="text-sm">Email</label>
          <input className="mt-1 w-full rounded-xl bg-neutral-100 dark:bg-neutral-800 px-3 py-2 outline-none" />
        </div>
        <div>
          <label className="text-sm">Password</label>
          <input type="password" className="mt-1 w-full rounded-xl bg-neutral-100 dark:bg-neutral-800 px-3 py-2 outline-none" />
        </div>
        <button className="w-full mt-2 rounded-xl bg-indigo-600 text-white py-2.5">Sign In</button>
      </form>
      <div className="mt-4 text-xs text-neutral-600 dark:text-neutral-400">Don't have an account? <a href="#" className="underline">Create one</a></div>
    </div>
  )
}
