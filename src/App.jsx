import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <ErrorBoundary>
      <Router>
        {/* Skip Navigation Link for Accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ErrorBoundary>
  )
}

export default App

