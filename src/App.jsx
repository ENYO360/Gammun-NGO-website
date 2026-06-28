import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Programs from './pages/Programs'
import LatestNews from './pages/LatestNews'
import Team from './pages/Team'
import BoardOfTrustees from './pages/BoardOfTrustees'
import Support from './pages/Support'

export default function App() {
  return (
    <div className="font-sans">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/news" element={<LatestNews />} />
        <Route path="/team" element={<Team />} />
        <Route path="/board" element={<BoardOfTrustees />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </div>
  )
}
