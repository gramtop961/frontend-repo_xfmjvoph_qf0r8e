import { ThumbsUp, ThumbsDown, MessageCircle, BookmarkPlus } from 'lucide-react'

export default function PostCard({ post }) {
  return (
    <article className="rounded-2xl border border-black/5 dark:border-white/5 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-4">
      <div className="flex items-start gap-3">
        <img src={`https://api.dicebear.com/7.x/identicon/svg?seed=${post.author}`} alt="avatar" className="w-10 h-10 rounded-full" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{post.author}</div>
              <div className="text-xs text-neutral-500">{post.time} • {post.tag}</div>
            </div>
            <button className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" aria-label="Bookmark">
              <BookmarkPlus className="w-4 h-4" />
            </button>
          </div>

          <h3 className="mt-2 font-semibold text-neutral-900 dark:text-neutral-50">{post.title}</h3>
          {post.type === 'code' ? (
            <pre className="mt-3 text-xs md:text-sm p-3 rounded-xl bg-neutral-950 text-neutral-100 overflow-x-auto">
{post.content}
            </pre>
          ) : (
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">{post.content}</p>
          )}

          {post.image && (
            <img src={post.image} alt="" className="mt-3 rounded-xl border border-black/5 dark:border-white/5" />
          )}

          <div className="mt-3 flex items-center gap-4 text-neutral-600 dark:text-neutral-300">
            <button className="inline-flex items-center gap-2 hover:text-indigo-500"><ThumbsUp className="w-4 h-4" /><span className="text-sm">{post.upvotes}</span></button>
            <button className="inline-flex items-center gap-2 hover:text-fuchsia-500"><ThumbsDown className="w-4 h-4" /><span className="text-sm">{post.downvotes}</span></button>
            <a href={`/post/${post.id}`} className="inline-flex items-center gap-2 hover:text-cyan-500"><MessageCircle className="w-4 h-4" /><span className="text-sm">{post.comments} comments</span></a>
          </div>
        </div>
      </div>
    </article>
  )
}
