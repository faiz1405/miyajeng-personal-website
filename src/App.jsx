import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SmoothScroll from './components/SmoothScroll.jsx'
import PortfolioLayout from './layouts/PortfolioLayout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'

export default function App () {
  return (
    <SmoothScroll>
      <BrowserRouter>
        <Routes>
          <Route element={<PortfolioLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SmoothScroll>
  )
}
