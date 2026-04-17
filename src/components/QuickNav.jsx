import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './QuickNav.css';

const QuickNav = () => {
  const links = [
    { icon: '🏥', label: 'Departments', href: '/#services' },
    { icon: '📋', label: 'Health Packages', href: '/#services' },
    { icon: '👨‍⚕️', label: 'Find Doctor', href: '/#doctors' },
    { icon: '📍', label: 'Locate Us', href: '/contact' },
  ];

  return (
    <motion.nav
      className="quick-nav"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="container">
        <div className="quick-nav-inner">
          {links.map((link, i) => (
            <Link key={i} to={link.href} className="quick-nav-link">
              <span className="quick-nav-icon">{link.icon}</span>
              <span className="quick-nav-label">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default QuickNav;
