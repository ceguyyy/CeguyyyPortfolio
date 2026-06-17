const Experience = () => {
  const experiences = [
    {
      type: 'Full Time',
      role: 'Solution Architect',
      company: 'Cekat.AI',
      period: 'May 2026 - Present',
      description: 'Designed and implemented agentic AI systems and CRM integrations for multi-channel communication, specializing in Meta (WhatsApp) platform integrations.'
    },
    {
      type: 'Full Time',
      role: 'Enterprise Solution Architect',
      company: 'Mekari',
      period: 'Aug 2025 - May 2026',
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
        <h2 className="section-title">Experience.</h2>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="exp-meta">
                <span className="exp-period">{exp.period}</span>
                <span className="exp-type">{exp.type}</span>
              </div>
              
              <div className="exp-details">
                <h3 className="exp-role">{exp.role}</h3>
                <h4 className="exp-company">{exp.company}</h4>
                <p className="exp-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          padding: 8rem 0;
          border-top: 1px solid var(--border-subtle);
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 2.5rem);
          font-weight: 600;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          margin-bottom: 4rem;
        }

        .experience-list {
          display: flex;
          flex-direction: column;
        }

        .experience-item {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          padding: 3rem 0;
          border-top: 1px solid var(--border-subtle);
        }

        @media (min-width: 768px) {
          .experience-item {
            grid-template-columns: 1fr 3fr;
            gap: 4rem;
          }
        }

        .experience-item:last-child {
          border-bottom: 1px solid var(--border-subtle);
        }

        .exp-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .exp-period {
          font-size: 0.95rem;
          color: var(--text-secondary);
          font-family: var(--font-mono);
        }

        .exp-type {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-primary);
          font-weight: 600;
        }

        .exp-details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .exp-role {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .exp-company {
          font-size: 1.125rem;
          font-weight: 400;
          color: var(--accent);
          margin: 0 0 1rem;
        }

        .exp-desc {
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0;
          max-width: 60ch;
        }
      `}</style>
    </section>
  );
};

export default Experience;
