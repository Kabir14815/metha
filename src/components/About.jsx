import './About.css';

const About = () => {
  const quickActions = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      ),
      title: 'Request Appointment',
      href: '#appointment'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      title: 'About Hospital',
      href: '#about'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      title: 'Find Locations',
      href: '#contact'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      title: 'Emergency Contact',
      href: 'tel:9855121155'
    }
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-content">
          {/* Doctor Image */}
          <div className="about-image">
            <div className="image-decoration">
              <div className="deco-line deco-line-1"></div>
              <div className="deco-line deco-line-2"></div>
              <div className="deco-dot deco-dot-1"></div>
              <div className="deco-dot deco-dot-2"></div>
            </div>
            <div className="doctor-frame">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop" 
                alt="Dr. Mehta - Chief Medical Officer" 
                className="doctor-image"
              />
            </div>
            <div className="experience-badge">
              <span className="exp-number">15+</span>
              <span className="exp-text">Years of Excellence</span>
            </div>
          </div>
          
          {/* About Text */}
          <div className="about-text">
            <div className="section-label">About Us</div>
            <h2 className="about-title">
              Welcome To <span className="text-gradient">Mehta Hospital</span>
            </h2>
            <p className="about-description">
              At our hospital, we understand that being a patient can be stressful, 
              so we strive to create a supportive and caring atmosphere for all who 
              enter our doors. Our team is committed to treating each patient with 
              respect and dignity, and we work tirelessly to ensure that every person 
              who comes to us for care receives the best possible treatment.
            </p>
            <p className="about-description">
              With state-of-the-art facilities and a team of experienced medical 
              professionals, we provide comprehensive healthcare services to our 
              community. Your health and wellbeing are our top priorities.
            </p>
            
            <div className="about-features">
              <div className="feature-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Qualified Doctors</span>
              </div>
              <div className="feature-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>24/7 Emergency Service</span>
              </div>
              <div className="feature-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Modern Equipment</span>
              </div>
              <div className="feature-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Affordable Prices</span>
              </div>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="quick-actions">
            {quickActions.map((action, index) => (
              <a 
                key={index} 
                href={action.href} 
                className="quick-action-btn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="action-content">
                  {action.icon}
                  <span>{action.title}</span>
                </span>
                <svg className="action-arrow" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
