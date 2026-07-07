import React, { useState, useEffect } from 'react';
import profileImg from '../assets/profile.jpg';
import vid2 from '../assets/IMG_8708.MOV';
import vid3 from '../assets/IMG_8714.MOV';
import vid4 from '../assets/IMG_8726.MOV';
import vid5 from '../assets/2f7c3a8a-0af8-491e-b7b7-bbe6d4f17d21.MP4';
import vid6 from '../assets/IMG_2804.mov';
import vid7 from '../assets/IMG_2817.MOV';
import vid8 from '../assets/IMG_3109.MOV';
import vid9 from '../assets/IMG_3115.MOV';

const VIDEOS = [vid2, vid3, vid4, vid5, vid6, vid7, vid8, vid9];

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
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % ROLES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-video-bg">
        <video
          key={currentVideo}
          src={VIDEOS[currentVideo]}
          autoPlay
          muted
          playsInline
          onLoadedData={(e) => { e.target.playbackRate = 0.66; }}
          onEnded={() => setCurrentVideo((prev) => (prev + 1) % VIDEOS.length)}
          className="bg-video-element"
        />
        <div className="video-overlay" />
      </div>
      <div className="container hero-container">
        
        <div className="hero-parallax-wrapper">
          <div className="hero-content animate-fade-in">
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
        </div>

        <div className="hero-parallax-wrapper">
          <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="hero-image-wrapper">
              <img src={profileImg} alt="Christian Gunawan" className="hero-image" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          height: 100dvh;
          width: 100%;
          display: flex;
          align-items: center;
          padding-top: var(--nav-height);
          position: relative;
          overflow: hidden;
        }

        .hero-video-bg {
          position: absolute;
          top: 120px;
          left: 2%;
          width: 96%;
          height: calc(100% - 140px);
          z-index: 0;
          overflow: hidden;
          border-radius: 32px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
        }

        .bg-video-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          animation: videoFadeIn 1.5s ease-in-out forwards;
        }

        @keyframes videoFadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%);
          z-index: 1;
        }

        .hero-container {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          z-index: 2; /* Sit above the overlay layers initially */
        }

        .hero-content {
          max-width: 800px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-bottom: 2rem;
        }
        
        .hero-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--accent, #eab308);
          font-weight: 700;
          letter-spacing: 0.1em;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
        }
        
        .badge-dot {
          width: 8px;
          height: 8px;
          background-color: var(--accent, #eab308);
          border-radius: 50%;
        }

        .hero-headline {
          font-size: clamp(3rem, 7vw, 6.5rem);
          line-height: 1.05;
          margin-bottom: 1.5rem;
          letter-spacing: -0.04em;
          font-weight: 700;
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
          height: 54px;
          padding: 0 32px;
          border-radius: var(--radius-md);
          background-color: var(--text-primary);
          color: var(--bg-primary);
          font-size: 1.05rem;
          font-weight: 600;
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
          height: 54px;
          padding: 0 32px;
          border-radius: var(--radius-md);
          background-color: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          color: var(--text-primary);
          font-size: 1.05rem;
          font-weight: 600;
          transition: background-color 0.2s, transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-secondary:hover {
          background-color: rgba(255,255,255,0.05);
        }

        .btn-secondary:active {
          transform: scale(0.98);
        }
        
        .hero-visual {
          flex-shrink: 0;
        }

        .hero-image-wrapper {
          width: clamp(200px, 20vw, 300px);
          aspect-ratio: 1;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background-color: transparent;
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

        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1024px) {
          .hero-container {
            flex-direction: column-reverse;
            align-items: flex-start;
          }
          
          .hero-content {
            padding-bottom: 0;
          }
          
          .hero-visual {
            align-self: flex-end;
          }
          
          .hero-image-wrapper {
            width: clamp(150px, 30vw, 250px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
