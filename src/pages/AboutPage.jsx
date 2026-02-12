import './AboutPage.css';

const AboutPage = () => {
  const values = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
      title: 'Compassionate Care',
      description: 'We treat every patient with kindness, empathy, and respect, understanding that healing involves both body and mind.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7"/>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
        </svg>
      ),
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from medical procedures to patient communication and facility maintenance.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Trust & Safety',
      description: 'Patient safety is our top priority. We maintain the highest standards of hygiene and medical protocols.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Teamwork',
      description: 'Our doctors, nurses, and staff work together seamlessly to provide comprehensive care for every patient.'
    }
  ];

  const milestones = [
    { year: '2008', event: 'Mehta Hospital was founded in Kharar, Punjab' },
    { year: '2012', event: 'Expanded to include specialized departments' },
    { year: '2015', event: 'Introduced advanced laparoscopic surgery facilities' },
    { year: '2018', event: 'Celebrated 10,000 successful surgeries' },
    { year: '2020', event: 'Opened new pediatric and neonatal care unit' },
    { year: '2024', event: 'Crossed 50,000 happy patients milestone' }
  ];

  const team = [
    {
      name: 'Dr. Sunil Mehta',
      role: 'Founder & Chief Medical Officer',
      specialty: 'Neonatology, Pediatrics',
      image: '/dr-sunil-mehta.jpg',
      description: 'With over 20 years of experience, Dr. Sunil Mehta founded Mehta Hospital with a vision to provide quality healthcare accessible to all.'
    },
    {
      name: 'Dr. Neera Verma',
      role: 'Director of Women\'s Health',
      specialty: 'OBS/Gynecology',
      image: '/dr-neera-verma.jpg',
      description: 'Dr. Neera Verma leads our obstetrics and gynecology department with expertise and a patient-first approach.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="container">
          <div className="about-hero-content">
            <span className="page-label">About Us</span>
            <h1 className="page-title">
              Welcome to <span className="text-gradient">Mehta Hospital</span>
            </h1>
            <p className="page-subtitle">
              Providing quality healthcare services to our community since 2008. 
              Your health and wellbeing are our top priorities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-image">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop" 
                alt="Mehta Hospital Building" 
              />
              <div className="mission-badge">
                <span className="badge-number">20+</span>
                <span className="badge-text">Years of Excellence</span>
              </div>
            </div>
            <div className="mission-text">
              <span className="section-label">Our Mission</span>
              <h2>Committed to Your Health & Well-being</h2>
              <p>
                At Mehta Hospital, we understand that being a patient can be stressful, 
                so we strive to create a supportive and caring atmosphere for all who 
                enter our doors. Our team is committed to treating each patient with 
                respect and dignity.
              </p>
              <p>
                We work tirelessly to ensure that every person who comes to us for care 
                receives the best possible treatment. With state-of-the-art facilities 
                and a team of experienced medical professionals, we provide comprehensive 
                healthcare services to our community.
              </p>
              <div className="mission-stats">
                <div className="stat">
                  <span className="stat-number">50,000+</span>
                  <span className="stat-label">Happy Patients</span>
                </div>
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Specialists</span>
                </div>
                <div className="stat">
                  <span className="stat-number">17</span>
                  <span className="stat-label">Modern Rooms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Core Values</span>
            <h2 className="section-title">What We Stand For</h2>
            <p className="section-description">
              These principles guide everything we do at Mehta Hospital.
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="about-leadership section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Leadership</span>
            <h2 className="section-title">Meet the Founders</h2>
            <p className="section-description">
              The visionaries behind Mehta Hospital's commitment to excellence.
            </p>
          </div>
          <div className="leadership-grid">
            {team.map((member, index) => (
              <div key={index} className="leader-card">
                <div className="leader-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="leader-info">
                  <h3 className="leader-name">{member.name}</h3>
                  <p className="leader-role">{member.role}</p>
                  <p className="leader-specialty">{member.specialty}</p>
                  <p className="leader-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="about-timeline section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">Milestones & Achievements</h2>
          </div>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{milestone.year}</span>
                  <p className="timeline-event">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience Quality Healthcare?</h2>
            <p>Book an appointment with our expert doctors today.</p>
            <div className="cta-buttons">
              <a href="tel:9855121155" className="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call Now: 98551 21155
              </a>
              <a href="/" className="btn btn-outline">
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
