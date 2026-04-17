import { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    { text: "It was a great experience delivering my 2nd child in the same hospital where I delivered my first child 6 years ago. Dr. Neera Verma and her team are very experienced and knowledgeable. The staff is so cooperative and friendly that I didn't face the slightest discomfort during my stay. The rooms are well equipped and all facilities are available inside the hospital premises. I would recommend this hospital to all pregnant mothers.", author: 'Inderpreet Kaur', role: 'Patient', rating: 5 },
    { text: "Excellent care and professional staff. Dr. Sunil Mehta is an exceptional pediatrician who took great care of my newborn. The facilities are modern and clean. The nursing staff was attentive and caring throughout our stay. Highly recommended for anyone looking for quality healthcare services.", author: 'Rajesh Kumar', role: 'Patient', rating: 5 },
    { text: "The emergency services at Mehta Hospital saved my father's life. Quick response, expert doctors, and compassionate care. We are forever grateful to the entire team. The 24/7 availability and modern equipment made all the difference. Best hospital in Kharar without a doubt!", author: 'Priya Sharma', role: 'Patient', rating: 5 },
    { text: "I had my knee surgery here and the experience was wonderful. The orthopedic team is skilled and the physiotherapy department helped me recover quickly. The entire team's dedication to patient care is commendable. Thank you Mehta Hospital!", author: 'Harpreet Singh', role: 'Patient', rating: 5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 600) setCardsToShow(1);
      else if (window.innerWidth < 900) setCardsToShow(2);
      else setCardsToShow(3);
    };
    updateCards();
    window.addEventListener('resize', updateCards);
    return () => window.removeEventListener('resize', updateCards);
  }, []);

  useEffect(() => {
    const total = Math.ceil(testimonials.length / cardsToShow);
    const max = Math.max(0, total - 1);
    setCurrentIndex((prev) => Math.min(prev, max));
  }, [cardsToShow, testimonials.length]);

  const totalSlides = Math.ceil(testimonials.length / cardsToShow);
  const maxIndex = Math.max(0, totalSlides - 1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Group testimonials into slides
  const getSlides = () => {
    const slides = [];
    for (let i = 0; i < testimonials.length; i += cardsToShow) {
      slides.push(testimonials.slice(i, i + cardsToShow));
    }
    return slides;
  };

  const slides = getSlides();

  return (
    <section className="testimonials testimonials-advamed section" id="testimonials" ref={ref}>
      <div className="container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="testimonials-pill">Testimonials</span>
          <h2 className="testimonials-title">What Our Patients Say!</h2>
          <p className="testimonials-subtitle">
            We value feedback from our patients for continuous improvement in our facilities.
          </p>
        </motion.div>

        <div className="testimonials-carousel">
          <motion.button
            className="carousel-btn prev"
            onClick={prevSlide}
            aria-label="Previous testimonials"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </motion.button>

          <div className="carousel-viewport">
            <motion.div
              className="carousel-track"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {slides.map((slide, slideIdx) => (
                <div key={slideIdx} className="carousel-slide">
                  {slide.map((item, i) => (
                    <div key={i} className="testimonial-card-advamed">
                      <div className="testimonial-quote-icon">
                        <span>&ldquo;</span>
                      </div>
                      <h4 className="testimonial-name">{item.author}</h4>
                      <p className="testimonial-quote">{item.text}</p>
                      <div className="testimonial-footer">
                        <strong>{item.author}</strong>
                        <span>{item.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.button
            className="carousel-btn next"
            onClick={nextSlide}
            aria-label="Next testimonials"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </motion.button>
        </div>

        <motion.div
          className="testimonials-cta"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="https://www.google.com/search?q=Mehta+Hospital+Kharar"
            target="_blank"
            rel="noopener noreferrer"
            className="testimonials-cta-btn"
          >
            Read Mehta Hospital Reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
