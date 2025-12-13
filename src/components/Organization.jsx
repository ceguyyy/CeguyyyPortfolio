import GlassSurface from './GlassSurface';
import himtiImg from '../assets/himti.png';
import bnccImg from '../assets/bncc.png';

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
      image: null
    },
    {
      role: 'Lead Design Division',
      name: 'OSIS Student Council',
      period: 'High School',
      image: null
    }
  ];

  return (
    <section id="organization" className="organization-section">
      <div className="container">
        <h2 className="section-title">Organization<span className="text-accent">.</span></h2>

        <div className="org-grid">
          {organizations.map((org, index) => (
            <GlassSurface
              key={index}
              width="100%"
              height="auto"
              borderRadius={16}
              opacity={1}
              backgroundOpacity={0.03}
              blur={10}
              borderWidth={0.05}
              mixBlendMode="normal"
              className="org-card"
            >
              <div className="org-card-inner">
                <div className="org-visual">
                  {org.image ? (
                    <img src={org.image} alt={org.name} className="org-logo" />
                  ) : (
                    <div className="org-pill">
                      {org.name.substring(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>
                <div className="org-content">
                  <h3>{org.name}</h3>
                  <div className="org-meta">
                    <span className="org-role">{org.role}</span>
                    <span className="org-period">{org.period}</span>
                  </div>
                </div>
              </div>
            </GlassSurface>
          ))}
        </div>
      </div>

      <style>{`
        .organization-section {
          padding: 6rem 0;
        }

        .org-grid {
          display: grid;
          gap: 1.5rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .org-card-inner {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            padding: 1.5rem;
        }

        .org-visual {
            flex-shrink: 0;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .org-logo {
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 8px; /* Slight rounding for logos */
        }

        .org-pill {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(0, 255, 209, 0.1));
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            color: white;
            font-size: 1.2rem;
            letter-spacing: 0.05em;
        }

        .org-content {
          flex: 1;
        }

        .org-content h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: white;
        }

        .org-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .org-role {
          color: var(--accent);
          font-weight: 600;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .org-period {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        @media (max-width: 640px) {
            .org-card-inner {
                flex-direction: column;
                align-items: flex-start;
                text-align: left;
            }
            
            .org-meta {
                flex-direction: column;
                align-items: flex-start;
            }
        }
      `}</style>
    </section>
  );
};

export default Organization;
