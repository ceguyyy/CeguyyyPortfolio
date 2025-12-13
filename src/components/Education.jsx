import GlassSurface from './GlassSurface';

const Education = () => {
    const education = [
        {
            type: 'education',
            role: 'Computer Science',
            company: 'Bina Nusantara University',
            period: 'Undergraduate',
            description: 'Major in Computer Science, Minor in Software Engineering. Building a strong foundation in algorithms, data structures, and software architecture.'
        },
        {
            type: 'education',
            role: 'High School',
            company: 'SMA Tarakanita',
            period: 'Graduated',
            description: 'Completed secondary education with a focus on sciences.'
        }
    ];

    return (
        <section id="education" className="education-section">
            <div className="container">
                <h2 className="section-title">Education<span className="text-accent">.</span></h2>

                <div className="timeline-grid">
                    {education.map((edu, index) => (
                        <GlassSurface
                            key={index}
                            width="100%"
                            height="auto"
                            borderRadius={20}
                            opacity={1}
                            backgroundOpacity={0.03}
                            blur={10}
                            borderWidth={0.08}
                            mixBlendMode="normal"
                            className="education-card"
                        >
                            <div className="exp-content">
                                <div className="exp-header">
                                    <span className={`exp-tag ${edu.type}`}>{edu.type}</span>
                                    <span className="exp-period">{edu.period}</span>
                                </div>
                                <h3>{edu.role}</h3>
                                <h4>{edu.company}</h4>
                                <p>{edu.description}</p>
                            </div>
                        </GlassSurface>
                    ))}
                </div>
            </div>

            <style>{`
        .education-section {
          padding: 6rem 0;
          position: relative;
        }

        .timeline-grid {
          display: grid;
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .exp-content {
          padding: 2rem;
          width: 100%;
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .exp-tag {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 4px 12px;
          border-radius: 50px;
          font-weight: 600;
        }

        .exp-tag.education {
          background: rgba(138, 92, 255, 0.1);
          color: #8a5cff;
          border: 1px solid rgba(138, 92, 255, 0.2);
        }

        .exp-period {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .exp-content h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: white;
        }

        .exp-content h4 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: var(--accent);
          font-weight: 500;
        }

        .exp-content p {
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
        </section>
    );
};

export default Education;
