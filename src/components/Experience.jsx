import React, { useState, useEffect } from 'react';
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

  // Reverse to go chronologically left to right
  const sortedExperiences = [...experiences].reverse();
  const [activeIndex, setActiveIndex] = useState(sortedExperiences.length - 1);
  const [isPaused, setIsPaused] = useState(false);

  const next = () => setActiveIndex((prev) => (prev + 1) % sortedExperiences.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + sortedExperiences.length) % sortedExperiences.length);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      // Disable auto-play on mobile to prevent extreme scroll jumping from the accordion
      if (typeof window !== 'undefined' && window.innerWidth <= 1024) return;
      setActiveIndex((prev) => (prev + 1) % sortedExperiences.length);
    }, 3000); // Auto-advance every 1.5 seconds
    return () => clearInterval(timer);
  }, [isPaused, sortedExperiences.length]);

  const extractDate = (period) => {
    // e.g. "May 2026 - Present" -> "May 2026"
    return period.split('-')[0].trim();
  };

  return (
    <section id="experience" className="history-section">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', height: '100%', maxWidth: '1400px' }}>

        <div className="history-header">
          <h2 className="history-title"><span>OUR</span> EXPERIENCE</h2>
          <div className="history-nav">
            <button onClick={prev}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button onClick={next}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>
        </div>

        <div className="history-body">
          <div className="active-year-display">
            {extractDate(sortedExperiences[activeIndex].period)}
          </div>

          <div
            className="history-tracks"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {sortedExperiences.map((exp, idx) => (
              <div
                key={idx}
                className={`history-track ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <div className="track-year">{extractDate(exp.period)}</div>

                {idx === activeIndex && (
                  <div className="track-content">
                    <h3 className="track-company">{exp.company}</h3>
                    <div className="track-image-wrapper">
                      <img src={exp.logo} alt={exp.company} />
                    </div>
                    <div className="track-details">
                      <div className="track-meta">
                        <span className="track-type">{exp.type}</span>
                        <span className="track-period">{exp.period}</span>
                      </div>
                      <h4 className="track-role">{exp.role}</h4>
                      <p className="track-desc">{exp.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .history-section {
          padding: 8rem 0;
          border-top: 1px solid var(--border-subtle);
          color: #fff;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
          background: transparent;
        }
        
        .history-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4rem;
        }

        .history-title {
          font-size: 1.5rem;
          color: #fff;
          font-weight: 700;
          letter-spacing: 0.1em;
          margin: 0;
        }
        
        .history-title span {
          color: rgba(255,255,255,0.7);
        }

        .history-nav {
          display: flex;
          gap: 1rem;
        }

        .history-nav button {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .history-nav button:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.5);
        }

        .history-body {
          display: flex;
          position: relative;
          height: 650px; /* Fixed height prevents scroll jumping on desktop */
        }

        .active-year-display {
          flex: 0 0 35%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          font-size: clamp(4rem, 6vw, 7rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          padding-right: 2rem;
          letter-spacing: -0.05em;
          word-wrap: break-word;
        }

        .history-tracks {
          flex: 1;
          display: flex;
          position: relative;
        }

        .history-track {
          flex: 1;
          border-left: 1px solid rgba(255,255,255,0.1);
          position: relative;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
        }

        .history-track:hover {
          background: rgba(255,255,255,0.02);
        }

        .history-track.active {
          flex: 4;
          border-left: 2px solid #fff;
          background: transparent;
          cursor: default;
        }

        .track-year {
          font-size: 1.2rem;
          color: rgba(255,255,255,0.3);
          font-weight: 600;
          margin-bottom: 3rem;
          margin-top: 0.5rem;
          transition: color 0.3s ease;
          white-space: nowrap;
        }

        .history-track.active .track-year {
          color: #fff;
        }

        .track-content {
          opacity: 0;
          animation: fadeIn 0.8s ease forwards 0.3s;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .track-company {
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 1.5rem 0;
          color: #fff;
          letter-spacing: -0.02em;
        }

        .track-image-wrapper {
          width: 100%;
          max-width: 400px;
          height: 220px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          margin-bottom: 2rem;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .track-image-wrapper img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .track-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .track-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .track-type {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
          padding: 4px 10px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          color: #fff;
        }

        .track-period {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.5);
        }

        .track-role {
          font-size: 1.5rem;
          color: #cccccc;
          margin: 0;
          font-weight: 600;
        }

        .track-desc {
          color: rgba(255,255,255,0.7);
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
          max-width: 90%;
        }

        @media (max-width: 1024px) {
          .history-body {
            flex-direction: column;
            height: auto;
            min-height: 800px;
          }
          
          .active-year-display {
            flex: 0 0 auto;
            font-size: 6rem;
            padding: 0 0 3rem 0;
            justify-content: flex-start;
          }
          
          .history-tracks {
            flex-direction: column;
            gap: 1rem;
          }
          
          .history-track {
            border-left: none;
            border-top: 1px solid rgba(255,255,255,0.1);
            padding: 1.5rem 0;
            flex: auto !important;
          }
          
          .history-track.active {
            border-top: 2px solid #fff;
          }

          .track-year {
            margin-bottom: 1.5rem;
            margin-top: 0;
          }
        }

        @media (max-width: 768px) {
          .history-section {
            padding: 4rem 0;
            overflow: visible;
          }
          .history-body {
            height: auto;
          }
          .active-year-display {
            font-size: 4rem;
            padding: 0 0 1.5rem 0;
          }
          .track-company {
            font-size: 1.5rem;
          }
          .track-image-wrapper {
            height: 140px;
            padding: 1rem;
            margin-bottom: 1.5rem;
          }
          .track-role {
            font-size: 1.2rem;
          }
          .track-desc {
            font-size: 0.9rem;
            max-width: 100%;
          }
          .history-header {
             margin-bottom: 2rem;
             flex-direction: column;
             align-items: flex-start;
             gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
