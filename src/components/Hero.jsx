import { motion } from 'framer-motion';
import './Hero.css';
import { heroTextVariants, heroImageVariants } from '../utils/animations';

const HERO_IMG = '/dr-sunil-mehta.png';

const Hero = () => {
  return (
    <section className="hero hero-metha" id="home">
      <div className="hero-inner">
        <div className="hero-copy">
          <motion.p
            className="hero-eyebrow"
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Welcome to Mehta Hospital
          </motion.p>
          <motion.h1
            className="hero-title"
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
            custom={0.5}
          >
            The cornerstone of healthier communities in Kharar.
          </motion.h1>
          <motion.p
            className="hero-lede"
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Emergency care, surgery, women and children’s health, and diagnostics — delivered with modern
            facilities and a team that puts patients first.
          </motion.p>
          <motion.div
            className="hero-cta-row"
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
            custom={1.5}
          >
            <a href="#services" className="btn-hero-pill">
              <span>Explore our services</span>
              <span className="btn-hero-pill-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          variants={heroImageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-deco hero-deco--doc" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="14" r="8" stroke="#94a3b8" strokeWidth="1.5" />
              <path d="M8 44c2-10 10-14 16-14s14 4 16 14" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="hero-deco hero-deco--shield" aria-hidden="true">
            <svg viewBox="0 0 40 48" fill="none">
              <path d="M20 4L6 10v12c0 10 8 18 14 20 6-2 14-10 14-20V10L20 4z" stroke="#2563eb" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="hero-deco hero-deco--ring" aria-hidden="true" />
          <div className="hero-deco hero-deco--tooth" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none">
              <path
                d="M24 8c-6 0-10 4-10 10 0 4 2 8 2 14 0 4 2 8 8 8s8-4 8-8c0-6 2-10 2-14 0-6-4-10-10-10z"
                stroke="#f472b6"
                strokeWidth="1.4"
              />
            </svg>
          </div>
          <div className="hero-deco hero-deco--award" aria-hidden="true">
            <svg viewBox="0 0 44 52" fill="none">
              <circle cx="22" cy="18" r="14" stroke="#2563eb" strokeWidth="1.5" />
              <path d="M14 30v10l8-4 8 4V30" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>

          <div className="hero-circle-frame">
            <img
              src={HERO_IMG}
              alt="Professional portrait of Dr. Sunil Mehta with a stethoscope, seated at Mehta Hospital, Kharar"
              className="hero-circle-img hero-circle-img--portrait"
              width={420}
              height={420}
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="https://wa.me/919855121155"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.45 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>
    </section>
  );
};

export default Hero;
