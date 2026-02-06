import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Doctors', href: '/#doctors' },
    { name: 'Departments', href: '/#services' },
    { name: 'Blog', href: '/#blog' },
    { name: 'Contact', href: '/#contact' },
  ];

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    if (href.startsWith('/#')) return location.pathname === '/' && location.hash === href.slice(1);
    return location.pathname === href;
  };

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    
    // Handle hash links for scroll
    if (href.includes('#') && location.pathname === '/') {
      const elementId = href.split('#')[1];
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Info Bar */}
      <div className="header-top">
        <div className="container header-top-content">
          <div className="info-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Kharar, Punjab</span>
          </div>
          <div className="info-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>Any Question: 98551 21155</span>
          </div>
          <div className="info-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>Mehtahospitalmohali@gmail.com</span>
          </div>
          <div className="info-item highlight">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>Open 24 hours</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="nav">
        <div className="container nav-content">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-name">Mehta</span>
              <span className="logo-tagline">Hospital</span>
            </div>
          </Link>

          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link, index) => (
              <li key={index}>
                {link.href.startsWith('/#') ? (
                  <a 
                    href={link.href}
                    className={isActive(link.href) ? 'active' : ''}
                    onClick={() => handleNavClick(link.href)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    to={link.href}
                    className={isActive(link.href) ? 'active' : ''}
                    onClick={() => handleNavClick(link.href)}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button className="btn btn-primary appointment-btn">
              Appointment
            </button>
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
