import React, { useState, useEffect } from 'react';
import profileImg from '../assets/profile.jpg';

const ROLES = [
  "iOS Developer",
  "Product Manager",
  "Solution Architect",
  "Presales",
  "IT Business Consultant",
  "Digital Product",
  "Digital Business Transformation"
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % ROLES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-text-column animate-fade-in">
          <h1 className="hero-headline">
            Christian Gunawan. <br/>
            <span className="hero-subheadline">
              {ROLES[currentRole]}
            </span>
          </h1>

          <p className="hero-desc">
            Transforming complex problems into intuitive digital solutions. Focused on product strategy, user experience, and driving growth.
          </p>

          <div className="hero-actions">
            <a
              href={import.meta.env.VITE_CV_LINK || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download CV
            </a>

            <a href="#contact" className="btn-secondary">
              Contact
            </a>
          </div>
        </div>

        <div className="hero-image-column animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="hero-image-wrapper">
            <img src={profileImg} alt="Christian Gunawan" className="hero-image" />
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          min-height: 100dvh;
          display: flex;
          align-items: center;
          position: relative;
          padding-top: var(--nav-height);
        }

        .hero-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 1.5rem;
        }

        .hero-text-column {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        @media (min-width: 768px) {
          .hero-text-column {
            grid-column: 1 / 10;
          }
        }

        @media (min-width: 1024px) {
          .hero-text-column {
            grid-column: 1 / 8;
          }
        }

        .hero-image-column {
          grid-column: 1 / -1;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2rem;
        }

        @media (min-width: 768px) {
          .hero-image-column {
            grid-column: 8 / 13;
            margin-top: 0;
            justify-content: flex-end;
          }
        }

        .hero-image-wrapper {
          width: clamp(200px, 30vw, 320px);
          aspect-ratio: 1;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--border-subtle);
          background-color: var(--glass-bg);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(10%);
          transition: transform 0.5s ease;
        }

        .hero-image-wrapper:hover .hero-image {
          transform: scale(1.05);
          filter: grayscale(0%);
        }

        .hero-headline {
          font-size: clamp(3rem, 6vw, 5.5rem);
          line-height: 1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.04em;
          font-weight: 600;
          color: var(--text-primary);
        }
        
        .hero-subheadline {
          color: var(--text-secondary);
          font-weight: 400;
          display: inline-block;
          animation: roleFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes roleFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-desc {
          font-size: 1.125rem;
          margin: 0 0 2.5rem;
          max-width: 45ch;
          line-height: 1.6;
          color: var(--text-secondary);
          font-weight: 400;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 48px;
          padding: 0 24px;
          border-radius: var(--radius-md);
          background-color: var(--text-primary);
          color: var(--bg-primary);
          font-size: 0.95rem;
          font-weight: 500;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s;
        }

        .btn-primary:hover {
          opacity: 0.9;
        }
        
        .btn-primary:active {
          transform: scale(0.98);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 48px;
          padding: 0 24px;
          border-radius: var(--radius-md);
          background-color: transparent;
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          font-size: 0.95rem;
          font-weight: 500;
          transition: background-color 0.2s, transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-secondary:hover {
          background-color: var(--bg-secondary);
        }

        .btn-secondary:active {
          transform: scale(0.98);
        }

        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
