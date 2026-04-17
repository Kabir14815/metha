import { useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import './FAQ.css';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const faqs = [
    {
      q: 'What are the hospital timings?',
      a: 'Mehta Hospital is open 24 hours, 7 days a week. We provide continuous medical care and emergency services around the clock.',
    },
    {
      q: 'Do I need a prior appointment?',
      a: 'While we accept walk-ins for emergencies, we recommend booking an appointment for routine visits to minimize wait time. Call us at 98551 21155 to schedule.',
    },
    {
      q: 'What medical services do you provide?',
      a: 'We offer General Surgery, ENT, Laparoscopy, Orthopedic, OBS/Gynecology, Pediatrics, Neonatology, Physiotherapy, and 24/7 Emergency Care.',
    },
    {
      q: 'Is there emergency medical care available?',
      a: 'Yes, we provide 24/7 emergency services. For critical emergencies, please call 98551 21155 immediately.',
    },
    {
      q: 'Are health checkup packages available?',
      a: 'Yes, we offer comprehensive health checkup packages including blood tests, ECG, and physician consultation. Contact us for details.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq section" id="faq" ref={ref}>
      <div className="container">
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Common Questions</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Everything you need to know about our services. Have other questions? Feel free to contact us.
          </p>
        </motion.div>

        <motion.div
          className="faq-list"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              className={`faq-item ${openIndex === i ? 'open' : ''}`}
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{item.q}</span>
                <svg className="faq-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="faq-cta"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          <p>Still have questions? Can&apos;t find the answer you&apos;re looking for?</p>
          <a href="https://wa.me/919855121155" target="_blank" rel="noopener noreferrer" className="faq-whatsapp">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
