import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import './Process.css';
import { staggerContainer, staggerItem } from '../utils/animations';

const Process = () => {
  const processes = [
    { image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400&h=300&fit=crop', title: 'Comfortable Care', description: 'Experience Comfortable and Compassionate Care with Us' },
    { image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=300&fit=crop', title: 'Consultation', description: 'Our experienced doctors provide expert consultation services' },
    { image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop', title: 'Highest Quality', description: 'We are providing our patients with the best possible care.' },
    { image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop', title: 'Always Smiling', description: "Every patient's experience a positive and satisfying one." },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="process section" id="process" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Working Process</span>
          <h2 className="section-title">How It Helps You Stay Healthy</h2>
        </motion.div>

        <motion.div
          className="process-grid"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {processes.map((process, index) => (
            <motion.div
              key={index}
              className="process-card"
              variants={staggerItem}
              whileHover={{ y: -6 }}
            >
              <div className="process-image-wrapper">
                <motion.img
                  src={process.image}
                  alt={process.title}
                  className="process-img"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="process-number">{String(index + 1).padStart(2, '0')}</div>
              </div>
              <div className="process-content">
                <h3 className="process-title">{process.title}</h3>
                <p className="process-description">{process.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
