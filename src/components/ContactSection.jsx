import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:Mehtahospitalmohali@gmail.com?subject=${encodeURIComponent(formState.subject || 'Contact from Website')}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailto;
  };

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      title: 'Visit Us',
      value: '22 A, Sector 12, Garden Colony, Kharar, Punjab 140301',
      href: 'https://www.google.com/maps/search/22+A,+Sector+12,+Garden+Colony,+Kharar,+Punjab+140301',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      title: 'Call Us',
      value: '+91 98551 21155',
      href: 'tel:9855121155',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      title: 'Email Us',
      value: 'Mehtahospitalmohali@gmail.com',
      href: 'mailto:Mehtahospitalmohali@gmail.com',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: 'Working Hours',
      value: 'Open 24 Hours • 7 Days a Week',
      href: null,
    },
  ];

  return (
    <section className="contact-section section" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Contact Us</h2>
          <p className="contact-subtitle">
            Have questions or need to schedule an appointment? Reach out and we&apos;ll respond as soon as possible.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email *</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-phone">Phone</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Appointment / Inquiry"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="How can we help you?"
                />
              </div>
              <button type="submit" className="btn btn-primary contact-submit">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            className="contact-info-wrapper"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="contact-info-cards">
              {contactInfo.map((item, i) => (
                <div key={i} className="contact-info-card">
                  <div className="contact-info-icon">{item.icon}</div>
                  <div>
                    <h4 className="contact-info-title">{item.title}</h4>
                    {item.href ? (
                      <a href={item.href} className="contact-info-value">{item.value}</a>
                    ) : (
                      <span className="contact-info-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-quick-actions">
              <a href="tel:9855121155" className="contact-quick-btn primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call: 98551 21155
              </a>
              <a href="https://wa.me/919855121155" target="_blank" rel="noopener noreferrer" className="contact-quick-btn whatsapp">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="contact-map-section"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div className="contact-map-wrapper">
            <iframe
              title="Mehta Hospital Location - 22 A, Sector 12, Garden Colony, Kharar, Punjab"
              className="contact-map"
              src="https://www.google.com/maps?q=22+A,+Sector+12,+Garden+Colony,+Kharar,+Punjab+140301&output=embed"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href="https://www.google.com/maps/search/22+A,+Sector+12,+Garden+Colony,+Kharar,+Punjab+140301"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-map-link"
            >
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
