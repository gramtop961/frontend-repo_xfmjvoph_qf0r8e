import PostCard from '../components/PostCard'

export default function PostPage() {
  const post = {
    id: '42',
    author: 'backend-sage',
    time: '3h',
    tag: 'Cloud',
    title: 'Designing multi-region architectures on a budget',
    type: 'text',
    content: 'CAP, latency, and failure domains. Here’s a playbook that worked for our startup moving to active-active.',
    upvotes: 342,
    downvotes: 4,
    comments: 89
  }
  return (
    <div className="space-y-4">
      <PostCard post={post} />
      <section className="rounded-2xl border border-black/5 dark:border-white/5 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-4">
        <h3 className="text-sm font-semibold mb-3">Comments</h3>
        <ul className="space-y-3 text-sm">
          <li>
            <div className="flex gap-3">
              <img src={`https://api.dicebear.com/7.x/identicon/svg?seed=alice`} className="w-8 h-8 rounded-full" />
              <div>
                <div className="font-medium">alice</div>
                <p className="text-neutral-600 dark:text-neutral-300">Love the practical tips. Any thoughts on DNS failover speed?</p>
              </div>
            </div>
          </li>
          <li>
            <div className="ml-11 border-l border-black/10 dark:border-white/10 pl-4">
              <div className="font-medium">bob</div>
              <p className="text-neutral-600 dark:text-neutral-300">We used latency-based routing with health checks, worked well.</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  )
}
