import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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

export default function App () {
  return (
    <SmoothScroll>
      <BrowserRouter>
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
