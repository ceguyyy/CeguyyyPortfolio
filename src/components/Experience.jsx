import React from 'react';
import cekatLogo from '../assets/cekat.png';
import mekariLogo from '../assets/mekari.png';
import siloamLogo from '../assets/siloam.png';
import appleLogo from '../assets/apple_academy.png';

const Experience = () => {
  const experiences = [
    {
      type: 'Full Time',
      role: 'Solution Architect',
      company: 'Cekat.AI',
      period: 'May 2026 - Present',
      description: 'Designed and implemented agentic AI systems and CRM integrations for multi-channel communication, specializing in Meta (WhatsApp) platform integrations.',
      logo: cekatLogo
    },
    {
      type: 'Full Time',
      role: 'Enterprise Solution Architect',
      company: 'Mekari',
      period: 'Aug 2025 - May 2026',
      description: 'Designed and implemented scalable PAAS (Platform as a Service) solutions, optimizing infrastructure and ensuring robust system architecture.',
      logo: mekariLogo
    },
    {
      type: 'Internship',
      role: 'Digital Product Manager',
      company: 'Siloam Hospitals',
      period: 'Feb 2025 - Aug 2025',
      description: 'Led digital product initiatives for the MySiloam app and website, managing product strategy and development lifecycles.',
      logo: siloamLogo
    },
    {
      type: 'Internship',
      role: 'Mobile Developer',
      company: 'Apple Developer Academy @ BINUS',
      period: 'Feb 2024 - Dec 2024',
      description: 'Engaged in challenge-based learning to develop innovative iOS applications, focusing on coding, design, and professional skills.',
      logo: appleLogo
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience.</h2>
        
        <div className="timeline-zigzag">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-row ${index % 2 === 0 ? 'row-left' : 'row-right'}`}>
              
              <div className="timeline-card">
                <div className="exp-meta">
                  <span className="exp-period">{exp.period}</span>
                  <span className="exp-type">{exp.type}</span>
                </div>
                <h3 className="exp-role">{exp.role}</h3>
                <h4 className="exp-company">{exp.company}</h4>
                <p className="exp-desc">{exp.description}</p>
              </div>

              <div className="timeline-logo">
                <img src={exp.logo} alt={exp.company} />
              </div>

              <div className="timeline-empty"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          padding: 8rem 0 4rem;
          border-top: 1px solid var(--border-subtle);
          overflow: hidden;
        }

        .section-title {
          font-size: clamp(3rem, 7vw, 4.5rem);
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 1.05;
          color: var(--text-primary);
          margin-bottom: 4rem;
          text-align: center;
        }

        .timeline-zigzag {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .timeline-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(-50%);
        }

        .timeline-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4rem;
          position: relative;
          width: 100%;
        }

        .timeline-row:last-child {
          margin-bottom: 0;
        }

        .timeline-card {
          width: 45%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 2.5rem;
          transition: transform 0.3s ease, background 0.3s ease;
          position: relative;
          z-index: 2;
        }

        .timeline-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .timeline-empty {
          width: 45%;
        }

        .timeline-logo {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 100px;
          background: #111;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0,0,0,0.5);
          padding: 16px;
        }

        .timeline-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .row-left {
          flex-direction: row;
        }

        .row-right {
          flex-direction: row-reverse;
        }

        .row-left .timeline-card {
          text-align: right;
        }
        
        .row-left .exp-meta {
          justify-content: flex-end;
        }

        .row-right .timeline-card {
          text-align: left;
        }
        
        .row-right .exp-meta {
          justify-content: flex-start;
        }

        .exp-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .exp-period {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .exp-type {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-primary);
          font-weight: 600;
          padding: 4px 10px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50px;
        }

        .exp-role {
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.2;
          margin: 0 0 0.5rem 0;
          letter-spacing: -0.02em;
        }

        .exp-company {
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--accent);
          margin: 0 0 1.5rem;
        }

        .exp-desc {
          font-size: 1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.75);
          margin: 0;
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 50px;
          }
          
          .timeline-row {
            flex-direction: row !important;
            justify-content: flex-start;
          }
          
          .timeline-card {
            width: calc(100% - 120px);
            margin-left: 120px;
            text-align: left !important;
            padding: 2rem 1.5rem;
          }
          
          .row-left .exp-meta, .row-right .exp-meta {
            justify-content: flex-start !important;
          }
          
          .timeline-logo {
            left: 50px;
          }
          
          .timeline-empty {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
