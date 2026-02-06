import { useState } from 'react';
import './Stats.css';

const Stats = () => {
  const stats = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6"/>
          <path d="M12 2v2"/>
          <path d="M12 14v8"/>
          <path d="M8 22h8"/>
        </svg>
      ),
      number: '20+',
      label: 'Years of Experience'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      number: '10+',
      label: 'Medical Specialist'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      number: '17',
      label: 'Modern Rooms'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      number: '50000+',
      label: 'Happy Patients'
    }
  ];

  const testimonials = [
    {
      text: "It was a great experience delivering my 2nd child in the same hospital where I delivered my first child 6 years ago. Dr. Neera Mehta and her husband are very experienced and knowledgeable doctors and the staff is so cooperative and friendly that I didn't face a slightest discomfort during my stay there. The rooms are very well equipped and all the facilities are available inside the hospital premises only. I would recommend this hospital to all the pregnant mothers out there who are yet confused regarding the selection of hospital for their deliveries.",
      author: 'Inderpreet Kaur'
    },
    {
      text: "Excellent care and professional staff. Dr. Sunil Mehta is an exceptional pediatrician who took great care of my newborn. The facilities are modern and clean. Highly recommended for anyone looking for quality healthcare.",
      author: 'Rajesh Kumar'
    },
    {
      text: "The emergency services at Mehta Hospital saved my father's life. Quick response, expert doctors, and compassionate care. We are forever grateful to the entire team. Best hospital in Kharar!",
      author: 'Priya Sharma'
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="stats" id="stats">
      <div className="stats-bg"></div>
      <div className="container">
        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="testimonials">
          <div className="testimonial-content">
            <div className="quote-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l-.007.003z"/>
              </svg>
            </div>
            <p className="testimonial-text">{testimonials[currentTestimonial].text}</p>
            <p className="testimonial-author">{testimonials[currentTestimonial].author}</p>
            
            <div className="testimonial-nav">
              <button className="nav-btn" onClick={prevTestimonial} aria-label="Previous testimonial">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </button>
              <div className="testimonial-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                    onClick={() => setCurrentTestimonial(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button className="nav-btn" onClick={nextTestimonial} aria-label="Next testimonial">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
