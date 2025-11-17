import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Trending from './pages/Trending'
import Explore from './pages/Explore'
import About from './pages/About'
import Post from './pages/Post'
import Profile from './pages/Profile'
import Auth from './pages/Auth'
import Digest from './pages/Digest'
import Ask from './pages/Ask'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/digest" element={<Digest />} />
        <Route path="/ask" element={<Ask />} />
      </Routes>
    </Layout>
  )
}

export default App
