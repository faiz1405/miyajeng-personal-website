import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import SmoothScroll from './components/SmoothScroll.jsx'
import PortfolioLayout from './layouts/PortfolioLayout.jsx'

const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage.jsx'))
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'))

function RouteFallback () {
  return (
    <div className="flex min-h-[40vh] items-center justify-center bg-[#FFFBEE] font-sans text-sm font-700 uppercase tracking-[0.12em] text-[#1A1020]/55">
      Loading…
    </div>
  )
}

function ScrollToTop () {
  const { pathname } = useLocation()

  useEffect(() => {
    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    // Lenis terkadang meng-override posisi scroll saat transisi route,
    // jadi kita reset segera + frame berikutnya.
    resetScroll()
    const rafId = window.requestAnimationFrame(resetScroll)

    return () => {
      window.cancelAnimationFrame(rafId)
    }
  }, [pathname])

  return null
}

export default function App () {
  return (
    <SmoothScroll>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route element={<PortfolioLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </SmoothScroll>
  )
}
