import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-text-card">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            Welcome to Excellence in Healthcare
          </div>
          
          <h1 className="hero-title">
            We Take Care Of Your
            <span className="text-gradient"> Healthy Health</span>
          </h1>
          
          <p className="hero-description">
            Welcome to Mehta Hospital, where we prioritize the health and wellbeing 
            of our patients above all else. Our state-of-the-art facilities and 
            experienced medical professionals ensure you receive the best care possible.
          </p>
          
          <div className="hero-cta">
            <a href="#services" className="btn btn-primary">
              See All Services
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <a href="#about" className="btn btn-outline">
              Learn More
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Expert Doctors</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Happy Patients</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hospital-image-wrapper">
            <div className="image-frame">
              <div className="image-glow"></div>
              <img 
                src="/mehta-hospital.jpg" 
                alt="Mehta Hospital - Modern healthcare facility in Kharar, Punjab" 
                className="hospital-image"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="floating-card card-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
              <span>24/7 Emergency</span>
            </div>
            <div className="floating-card card-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <span>Expert Team</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
