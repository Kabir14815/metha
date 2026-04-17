import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/about' },
    { name: 'Doctors', href: '/#doctors' },
    { name: 'Emergency', href: '/#contact' },
    { name: 'Appointments', href: '/#contact' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href) => {
    if (href === '/contact') return location.pathname === '/contact';
    if (href === '/about') return location.pathname === '/about';
    if (href.startsWith('/#')) {
      return location.pathname === '/' && location.hash === href.slice(1);
    }
    return false;
  };

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    if (href.includes('#') && location.pathname === '/') {
      const id = href.split('#')[1];
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  };

  return (
    <motion.header
      className="header header-metha"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="header-bar">
        <div className="container header-content">
          <Link to="/" className="logo">
            <img
              className="logo-img"
              src="/mehta-hospital-logo.png"
              alt="Mehta Hospital — In Service of Humanity"
              width={52}
              height={52}
              decoding="async"
            />
          </Link>

          <nav className={`nav-wrap ${isMobileMenuOpen ? 'open' : ''}`} aria-label="Primary">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/#') ? (
                    <a
                      href={link.href}
                      className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
                      onClick={() => handleNavClick(link.href)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-tools">
            <button
              type="button"
              className="icon-btn"
              aria-label="Search"
              onClick={() => document.getElementById('doctors')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
            <button
              type="button"
              className="icon-btn desktop-only"
              aria-label="Quick links"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
            </button>
            <Link to="/#contact" className="btn-header-cta" onClick={() => handleNavClick('/#contact')}>
              Book visit
            </Link>
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
