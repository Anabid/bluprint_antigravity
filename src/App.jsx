import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Hero from './components/Hero'
import Features from './components/Features'
import Team from './components/Team'
import Results from './components/Results'
import CourseDetails from './components/CourseDetails'
import Enrollment from './components/Enrollment'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import TopicOutlinePage from './pages/TopicOutlinePage'

// ScrollToTop component to reset scroll position on navigation
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);
  return null;
}

const Home = () => (
  <>
    <Hero />
    <Features />
    <Team />
    <Results />
    <CourseDetails />
    <Enrollment />
    <Contact />
    <Footer />
  </>
)

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topic-outline" element={<TopicOutlinePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
