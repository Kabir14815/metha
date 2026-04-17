import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { motion, AnimatePresence } from 'framer-motion';
import './Services.css';

const slides = [
  [
    {
      title: 'Annual wellness & check-ups',
      text: 'Structured health reviews and follow-ups so your vitals, lifestyle risks, and chronic conditions stay on track.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="24" cy="14" r="7" />
          <path d="M12 40c2-9 8-13 12-13s10 4 12 13" strokeLinecap="round" />
          <path d="M30 22h8M34 18v8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Heart & vascular care',
      text: 'Evaluation and treatment plans for blood pressure, chest discomfort, and circulation — with clear next steps.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 22c0-8 8-14 16-6 8-8 16-2 16 6 0 10-16 18-16 18S8 32 8 22z" strokeLinejoin="round" />
          <path d="M12 26h24" strokeLinecap="round" />
          <path d="M16 30h4M22 30h4M28 30h4" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Diagnostics & screening',
      text: 'Imaging and lab pathways that help catch problems early — explained simply, scheduled conveniently.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="10" y="8" width="28" height="36" rx="2" />
          <path d="M14 16h20M14 22h12M14 28h16" strokeLinecap="round" />
          <path d="M14 34h8M26 34h4" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Women’s & family health',
      text: 'Gynecology, maternity support, and child health under one roof for families across Kharar and nearby areas.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="18" cy="14" r="5" />
          <circle cx="30" cy="14" r="5" />
          <path d="M14 40c2-8 7-12 10-12s8 4 10 12" strokeLinecap="round" />
        </svg>
      ),
    },
  ],
  [
    {
      title: 'General & laparoscopic surgery',
      text: 'Planned procedures with emphasis on recovery time, pain control, and clear discharge instructions.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 24h20M24 14v20" strokeLinecap="round" />
          <circle cx="24" cy="24" r="16" />
        </svg>
      ),
    },
    {
      title: 'ENT & head–neck',
      text: 'Hearing, sinus, throat, and allergy concerns managed with thorough examination and sensible treatment options.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 20c0-6 4-10 10-10s10 4 10 10v8c0 4-2 8-6 10" strokeLinecap="round" />
          <path d="M20 36h12" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: '24/7 emergency response',
      text: 'Round-the-clock triage for injuries, infections, and acute symptoms — stabilise first, then coordinate care.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M24 8l14 8v16c0 10-6 18-14 20-8-2-14-10-14-20V16l14-8z" strokeLinejoin="round" />
          <path d="M24 16v16M16 24h16" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Pediatrics & neonatology',
      text: 'Gentle care for newborns and children, including NICU support when every hour matters.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="24" cy="18" r="8" />
          <path d="M10 42c2-10 8-14 14-14s12 4 14 14" strokeLinecap="round" />
        </svg>
      ),
    },
  ],
];

const Services = () => {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="services services-metha section" id="services" ref={ref}>
      <div className="container">
        <motion.div
          className="services-metha-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="services-metha-heading">Care that fits your life</h2>
          <p className="services-metha-sub">
            From preventive visits to urgent needs, Mehta Hospital brings together departments that work as one team
            for patients in Kharar and the surrounding region.
          </p>
        </motion.div>

        <div className="services-carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="services-slide"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {slides[index].map((item) => (
                <article key={item.title} className="service-pillar">
                  <div className="service-pillar-icon" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3 className="service-pillar-title">{item.title}</h3>
                  <p className="service-pillar-text">{item.text}</p>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="services-dots" role="tablist" aria-label="Service slides">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                className={`services-dot ${i === index ? 'active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
