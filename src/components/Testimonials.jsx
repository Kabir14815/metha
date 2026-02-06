import { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      text: "It was a great experience delivering my 2nd child in the same hospital where I delivered my first child 6 years ago. Dr. Neera Mehta and her husband are very experienced and knowledgeable doctors and the staff is so cooperative and friendly that I didn't face a slightest discomfort during my stay there. The rooms are very well equipped and all the facilities are available inside the hospital premises only. I would recommend this hospital to all the pregnant mothers out there who are yet confused regarding the selection of hospital for their deliveries.",
      author: 'Inderpreet Kaur',
      role: 'Patient',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face'
    },
    {
      text: "Excellent care and professional staff. Dr. Sunil Mehta is an exceptional pediatrician who took great care of my newborn. The facilities are modern and clean. The nursing staff was attentive and caring throughout our stay. Highly recommended for anyone looking for quality healthcare services.",
      author: 'Rajesh Kumar',
      role: 'Patient',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      text: "The emergency services at Mehta Hospital saved my father's life. Quick response, expert doctors, and compassionate care. We are forever grateful to the entire team. The 24/7 availability and modern equipment made all the difference. Best hospital in Kharar without a doubt!",
      author: 'Priya Sharma',
      role: 'Patient',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    {
      text: "I had my knee surgery here and the experience was wonderful. Dr. D P Singh is a skilled orthopedic surgeon. The physiotherapy department helped me recover quickly. The entire team's dedication to patient care is commendable. Thank you Mehta Hospital!",
      author: 'Harpreet Singh',
      role: 'Patient',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill={index < rating ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={index < rating ? 'star filled' : 'star'}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ));
  };

  return (
    <section className="testimonials section" id="testimonials">
      <div className="testimonials-bg">
        <div className="bg-pattern"></div>
      </div>
      
      <div className="container">
        <div className="section-header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-description">
            Real experiences from our valued patients who trusted us with their healthcare needs.
          </p>
        </div>
        
        <div className="testimonials-slider">
          <button className="slider-btn prev" onClick={prevSlide} aria-label="Previous testimonial">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          
          <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
                style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
              >
                <div className="testimonial-header">
                  <div className="quote-mark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l-.007.003z"/>
                    </svg>
                  </div>
                  <div className="rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                
                <p className="testimonial-text">{testimonial.text}</p>
                
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.author} className="author-image" />
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.author}</h4>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="slider-btn next" onClick={nextSlide} aria-label="Next testimonial">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Trust Badges */}
        <div className="trust-badges">
          <div className="badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <polyline points="9 12 12 15 17 9"/>
            </svg>
            <span>Verified Reviews</span>
          </div>
          <div className="badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="7"/>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
            </svg>
            <span>5-Star Rated</span>
          </div>
          <div className="badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span>50,000+ Happy Patients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
