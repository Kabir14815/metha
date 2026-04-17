import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import './WhyChooseUs.css';
import { staggerContainer, staggerItem } from '../utils/animations';

const features = [
  {
    title: '16+ years serving Kharar',
    text: 'A steady presence in the community with protocols refined through real patient volume and feedback.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="20" r="12" />
        <path d="M16 36h16" strokeLinecap="round" />
        <path d="M18 28l4 4 8-10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Quality-focused processes',
    text: 'Checklists, infection control, and audit-ready documentation — so safety stays visible, not implied.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="18" />
        <path d="M16 24l6 6 10-12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Full-spectrum departments',
    text: 'Surgery, medicine, women and child health, ENT, orthopedics, and more — coordinated under one roof.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="10" y="12" width="20" height="26" rx="2" />
        <path d="M14 20h12M14 26h8" strokeLinecap="round" />
        <path d="M32 18l6-2v24l-6-2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Specialist network',
    text: 'When you need a superspecialist opinion, we help with referrals and follow-through — not a loose slip of paper.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 12c-6 0-10 4-10 10 0 6 4 10 10 10s10-4 10-10-4-10-10-10z" />
        <path d="M8 36c4-6 10-8 16-8s12 2 16 8" strokeLinecap="round" />
        <circle cx="38" cy="10" r="4" />
        <path d="M34 10h8M38 6v8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Personalized plans',
    text: 'We explain options in plain language and adapt plans to your work schedule, mobility, and family support.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 40c0-8 6-14 14-14h4" strokeLinecap="round" />
        <path d="M24 22c-4 0-8-3-8-8s3.5-8 8-8 8 3 8 8c0 3-1.5 5-4 6.5" strokeLinecap="round" />
        <path d="M32 34l6 6M38 34l-6 6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Continuity of care',
    text: 'Discharge notes, medication clarity, and follow-up appointments — so recovery doesn’t stall at the exit door.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20h24v18H12z" strokeLinejoin="round" />
        <path d="M18 14h12v6H18z" strokeLinejoin="round" />
        <path d="M16 32h8M16 36h16" strokeLinecap="round" />
      </svg>
    ),
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <section className="why-metha section" id="why-choose" ref={ref}>
      <div className="container">
        <motion.div
          className="why-metha-head"
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
        >
          <p className="section-label">Why choose us</p>
          <h2 className="why-metha-title">We prioritize your quality of life</h2>
          <p className="why-metha-desc">
            Mehta Hospital is built for families who want dependable care without the runaround — clear communication,
            modern infrastructure, and teams that remember your story.
          </p>
        </motion.div>

        <motion.div
          className="why-metha-grid"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {features.map((f) => (
            <motion.article key={f.title} className="why-metha-card" variants={staggerItem}>
              <div className="why-metha-icon">{f.icon}</div>
              <h3 className="why-metha-card-title">{f.title}</h3>
              <p className="why-metha-card-text">{f.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
