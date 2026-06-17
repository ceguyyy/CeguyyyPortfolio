const Education = () => {
    const education = [
        {
            type: 'Undergraduate',
            role: 'Computer Science',
            company: 'Bina Nusantara University',
            period: '2021 - 2025',
            description: 'Major in Computer Science, Minor in Software Engineering. Building a strong foundation in algorithms, data structures, and software architecture.'
        },
        {
            type: 'Graduated',
            role: 'High School',
            company: 'SMA Tarakanita',
            period: '2018 - 2021',
            description: 'Completed secondary education with a focus on sciences.'
        }
    ];

    return (
        <section id="education" className="education-section">
            <div className="container">
                <h2 className="section-title">Education.</h2>

                <div className="experience-list">
                    {education.map((edu, index) => (
                        <div key={index} className="experience-item">
                            <div className="exp-meta">
                                <span className="exp-period">{edu.period}</span>
                                <span className="exp-type">{edu.type}</span>
                            </div>
                            
                            <div className="exp-details">
                                <h3 className="exp-role">{edu.role}</h3>
                                <h4 className="exp-company">{edu.company}</h4>
                                <p className="exp-desc">{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .education-section {
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
          font-size: 1rem;
          color: var(--text-secondary);
        }

        .exp-type {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-tertiary);
          font-weight: 500;
        }

        .exp-role {
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .exp-company {
          font-size: 1.1rem;
          color: var(--text-secondary);
          font-weight: 400;
          margin-bottom: 1.25rem;
        }

        .exp-desc {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 1.05rem;
        }
      `}</style>
        </section>
    );
};

export default Education;
