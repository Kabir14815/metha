import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './TrustBadges.css';

const TrustBadges = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const badges = [
    { label: '15+ Years of Excellence', icon: '🏆' },
    { label: 'NABH Accredited', icon: '✓' },
    { label: 'ISO 9001:2015 Certified', icon: '✓' },
    { label: 'Quality Certified', icon: '✓' },
    { label: '24/7 Emergency Care', icon: '🚑' },
  ];

  return (
    <section className="trust-badges" ref={ref}>
      <div className="container">
        <motion.div
          className="trust-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="trust-cta-text">Can&apos;t find what you&apos;re looking for?</p>
          <Link to="/contact" className="trust-cta-btn">Contact Us</Link>
        </motion.div>
        <motion.div
          className="trust-grid"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
          }}
        >
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              className="trust-badge"
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              <span className="trust-badge-icon">{badge.icon}</span>
              <span className="trust-badge-label">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;
