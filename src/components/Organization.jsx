import React from 'react';
import himtiImg from '../assets/himti.png';
import bnccImg from '../assets/bncc.png';
import paskibraImg from '../assets/paskibra.png';
import osisImg from '../assets/osis.png';
import { User, Calendar } from 'lucide-react';

const Organization = () => {
  const organizations = [
    {
      role: 'Member',
      name: 'Himpunan Tehnik Informatika (HIMTI)',
      period: 'May 2022 - Jan 2024',
      image: himtiImg
    },
    {
      role: 'Member',
      name: 'BNCC (Bina Nusantara Computer Club)',
      period: 'Sep 2021 - Mar 2022',
      image: bnccImg
    },
    {
      role: 'Vice Chairman',
      name: 'Paskibra SMA Tarakanita Citra Raya',
      period: 'High School',
      image: paskibraImg
    },
    {
      role: 'Lead Design Division',
      name: 'OSIS Student Council',
      period: 'High School',
      image: osisImg
    }
  ];

  return (
    <section id="organization" className="organization-section">
      <div className="container">
        <h2 className="section-title">Organizations.</h2>

        <div className="cards-grid">
          {organizations.map((org, index) => (
            <div key={index} className="org-card">
              <div className="card-bg-layer">
                {org.image ? (
                  <img src={org.image} alt={org.name} className="card-bg-img" />
                ) : (
                  <div className="card-bg-placeholder">
                    {org.name.substring(0, 2).toUpperCase()}
                  </div>
                )}
              </div>
              
              <div className="card-content">
                <h3 className="card-company">{org.name}</h3>
                
                <div className="card-tags">
                  <span className="card-tag">
                    <User size={14} /> {org.role}
                  </span>
                  <span className="card-tag">
                    <Calendar size={14} /> {org.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .organization-section {
          padding: 8rem 0;
          border-top: 1px solid var(--border-subtle);
          color: #fff;
          font-family: var(--font-main, 'Inter', sans-serif);
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #fff;
          margin-bottom: 4rem;
          font-family: var(--font-display, sans-serif);
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2.5rem;
          width: 100%;
        }

        .org-card {
          position: relative;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 36px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          width: 100%;
          min-height: 420px;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.4), 
            inset 0 0 0 1px rgba(255, 255, 255, 0.05),
            inset 0 2px 20px rgba(255, 255, 255, 0.1); /* Inner glass glare */
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
          justify-content: flex-end;
        }

        .org-card:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.5), 
            inset 0 0 0 1px rgba(255, 255, 255, 0.1),
            inset 0 2px 20px rgba(255, 255, 255, 0.15);
        }

        .card-bg-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          background: rgba(255, 255, 255, 0.03); /* Subtle glass tint */
          backdrop-filter: blur(24px) saturate(150%); /* Heavy glass blur */
          -webkit-backdrop-filter: blur(24px) saturate(150%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          padding-bottom: 10rem;
        }

        .card-bg-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.15));
          image-rendering: high-quality;
        }

        .card-bg-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8rem;
          font-weight: 800;
          color: rgba(0, 0, 0, 0.05);
          background: #f5f5f5;
        }

        .card-content {
          position: relative;
          z-index: 10;
          padding: 3rem 2rem 2rem 2rem;
          display: flex;
          flex-direction: column;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.8) 40%, transparent 100%);
          backdrop-filter: blur(1.5px);
          -webkit-backdrop-filter: blur(1.5px);
          margin-top: auto;
          min-height: 40%;
          justify-content: flex-end;
        }

        .card-company {
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
          margin: 0 0 0.5rem 0;
          font-family: var(--font-display, sans-serif);
          letter-spacing: -0.02em;
          line-height: 1.1;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }

        .card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
        }

        .card-tag {
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.9rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 6px;
          text-shadow: 0 2px 5px rgba(0,0,0,0.5);
        }
        
        @media (max-width: 768px) {
          .cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Organization;
