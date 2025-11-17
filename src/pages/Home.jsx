import Hero from '../components/Hero'
import Feed from '../components/Feed'
import Trending from '../components/Trending'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="space-y-4">
        <Trending />
        <Feed />
      </div>
    </>
  )
}
