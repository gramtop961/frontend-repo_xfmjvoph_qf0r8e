import PostCard from './PostCard'

const demo = [
  {
    id: '1',
    author: 'santi.dev',
    time: '2h',
    tag: 'JavaScript',
    title: 'React 19: What changes for everyday devs?',
    type: 'text',
    content: 'Server actions, better form handling, and compiler hints. My take after migrating a mid-size app...'
  },
  {
    id: '2',
    author: 'ai-ml-guy',
    time: '5h',
    tag: 'AI/ML',
    title: 'Embeddings: Which dimension should you choose?',
    type: 'code',
    content: `python\n# Cosine similarity and dimensionality trade-offs\nfrom sklearn.metrics.pairwise import cosine_similarity\n\nemb1 = model.embed(text1, dim=768)\nemb2 = model.embed(text2, dim=1536)\nprint(cosine_similarity([emb1], [emb2]))`,
    upvotes: 128,
    downvotes: 3,
    comments: 42
  },
  {
    id: '3',
    author: 'frontend-witch',
    time: '1d',
    tag: 'Web Dev',
    title: 'CSS container queries finally clicked for me',
    type: 'text',
    content: 'Built a responsive card system without media queries. Sharing patterns and gotchas.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop'
  }
]

export default function Feed({ title = 'Latest Posts' }) {
  return (
    <section id="feed" className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex gap-2 text-xs">
          <button className="px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5">All</button>
          <button className="px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5">Following</button>
          <button className="px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5">Digest</button>
        </div>
      </div>
      {demo.map((p) => (
        <PostCard key={p.id} post={{ upvotes: 54, downvotes: 1, comments: 12, ...p }} />
      ))}
    </section>
  )
}
