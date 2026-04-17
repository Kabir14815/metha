import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import TopBanner from './components/TopBanner'
import Header from './components/Header'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'
import './App.css'

function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        {/* Skip Navigation Link for Accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <TopBanner />
        <Header />
        <main id="main-content">
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <BackToTop />
        <Footer />
      </Router>
    </ErrorBoundary>
  )
}

export default App

