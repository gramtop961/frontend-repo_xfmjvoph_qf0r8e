import Feed from '../components/Feed'

export default function Digest() {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-indigo-500/30 bg-indigo-500/10 p-4 text-sm text-indigo-700 dark:text-indigo-300">
        Daily Digest: Handpicked highlights from across the community.
      </div>
      <Feed title="Today’s Digest" />
    </div>
  )
}
