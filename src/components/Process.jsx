import './Process.css';

const Process = () => {
  const processes = [
    {
      image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400&h=300&fit=crop',
      title: 'Comfortable Care',
      description: 'Experience Comfortable and Compassionate Care with Us'
    },
    {
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=300&fit=crop',
      title: 'Consultation',
      description: 'Our experienced doctors provide expert consultation services'
    },
    {
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop',
      title: 'Highest Quality',
      description: 'We are providing our patients with the best possible care.'
    },
    {
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
      title: 'Always Smiling',
      description: 'Every patient\'s experience a positive and satisfying one.'
    }
  ];

  return (
    <section className="process section" id="process">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Working Process</span>
          <h2 className="section-title">How It Helps You Stay Healthy</h2>
        </div>
        
        <div className="process-grid">
          {processes.map((process, index) => (
            <div key={index} className="process-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="process-image-wrapper">
                <img src={process.image} alt={process.title} className="process-img" />
                <div className="process-number">{String(index + 1).padStart(2, '0')}</div>
              </div>
              <div className="process-content">
                <h3 className="process-title">{process.title}</h3>
                <p className="process-description">{process.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
