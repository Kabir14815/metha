import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import './About.css';
import { fadeInLeft, fadeInRight } from '../utils/animations';

const IMG_TEAM = '/dr-sunil-mehta.png';
const IMG_LAB =
  'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=520&h=380&fit=crop&q=80';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="about about-metha section" id="about" ref={ref}>
      <div className="container">
        <div className="about-metha-grid">
          <motion.div
            className="about-metha-copy"
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={0}
          >
            <p className="about-metha-label">About us</p>
            <h2 className="about-metha-title">Committed to excellent healthcare in Punjab</h2>
            <p className="about-metha-lede">
              Mehta Hospital combines evidence-based medicine with a practical focus on diet, movement, and follow-up —
              so treatment plans don’t end at the prescription. We serve families, workers, and seniors who want clear
              answers and respectful care.
            </p>

            <div className="about-metha-mv">
              <div className="about-metha-block">
                <div className="about-metha-icon">
                  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M16 4L6 9v10c0 7 5 13 10 15 5-2 10-8 10-15V9L16 4z" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="about-metha-block-title">Our mission</h3>
                <p className="about-metha-block-text">
                  Accessible, ethical care that improves day-to-day quality of life — not just test results.
                </p>
              </div>
              <div className="about-metha-block">
                <div className="about-metha-icon">
                  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <circle cx="16" cy="16" r="12" />
                    <path d="M16 10v12M10 16h12" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="about-metha-block-title">Our vision</h3>
                <p className="about-metha-block-text">
                  A trusted hospital neighbours recommend — known for safety, coordination, and continuity.
                </p>
              </div>
            </div>

            <div className="about-metha-actions">
              <Link to="/about" className="btn-about-outline">
                <span>Learn more about us</span>
                <span className="btn-about-outline-arrow" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
              <a
                href="tel:+919855121155"
                className="btn-about-play"
                aria-label="Call Mehta Hospital"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="about-metha-visual"
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={0.15}
          >
            <div className="about-metha-collage">
              <div className="about-metha-photo about-metha-photo--top">
                <img src={IMG_TEAM} alt="Dr. Sunil Mehta at Mehta Hospital" width={480} height={320} loading="lazy" />
              </div>
              <div className="about-metha-photo about-metha-photo--bl">
                <img src={IMG_LAB} alt="Laboratory diagnostics" width={360} height={260} loading="lazy" />
              </div>
              <div className="about-metha-stat">
                <div className="about-metha-stat-inner">
                  <span className="about-metha-stat-num">50K+</span>
                  <span className="about-metha-stat-label">Patients served</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
