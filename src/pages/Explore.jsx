import Trending from '../components/Trending'
import Feed from '../components/Feed'

export default function Explore() {
  return (
    <div className="space-y-4">
      <Trending />
      <Feed title="Explore Topics" />
    </div>
  )
}
