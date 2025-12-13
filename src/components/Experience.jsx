import GlassSurface from './GlassSurface';

const Experience = () => {
  const experiences = [
    {
      type: 'Full Time',
      role: 'Solution Architect',
      company: 'Mekari',
      period: 'Aug 2025 - Present',
      description: 'Designed and implemented scalable PAAS (Platform as a Service) solutions, optimizing infrastructure and ensuring robust system architecture.'
    },
    {
      type: 'Internship',
      role: 'Digital Product Manager',
      company: 'Siloam Hospitals',
      period: 'Feb 2025 - Aug 2025',
      description: 'Led digital product initiatives for the MySiloam app and website, managing product strategy and development lifecycles.'
    },
    {
      type: 'Internship',
      role: 'Mobile Developer',
      company: 'Apple Developer Academy @ BINUS',
      period: 'Feb 2024 - Dec 2024',
      description: 'Engaged in challenge-based learning to develop innovative iOS applications, focusing on coding, design, and professional skills.'
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience<span className="text-accent">.</span></h2>

        <div className="timeline-grid">
          {experiences.map((exp, index) => (
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
              className="experience-card"
            >
              <div className="exp-content">
                <div className="exp-header">
                  <span className={`exp-tag ${exp.type.toLowerCase().replace(/\s+/g, '-')}`}>{exp.type}</span>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
              </div>
            </GlassSurface>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          padding: 6rem 0;
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

        .exp-tag.work,
        .exp-tag.full-time,
        .exp-tag.internship {
          background: rgba(0, 255, 209, 0.1);
          color: #00ffd1;
          border: 1px solid rgba(0, 255, 209, 0.2);
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

export default Experience;
