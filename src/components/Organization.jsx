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
        <h2 className="section-title">Organizations.</h2>

        <div className="org-list">
          {organizations.map((org, index) => (
            <div key={index} className="org-item">
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
                  <h3 className="org-name">{org.name}</h3>
                  <div className="org-meta">
                    <span className="org-role">{org.role}</span>
                    <span className="org-period">{org.period}</span>
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
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 2.5rem);
          font-weight: 600;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          margin-bottom: 4rem;
        }

        .org-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 800px;
        }

        .org-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          background-color: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          transition: border-color 0.2s ease;
        }

        .org-item:hover {
          border-color: var(--text-secondary);
        }

        .org-visual {
            flex-shrink: 0;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .org-logo {
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: var(--radius-sm);
        }

        .org-pill {
            width: 48px;
            height: 48px;
            background: var(--bg-primary);
            border: 1px solid var(--border-subtle);
            border-radius: var(--radius-sm);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            color: var(--text-secondary);
            font-size: 1rem;
            letter-spacing: 0.05em;
        }

        .org-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .org-name {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--text-primary);
          margin: 0;
        }

        .org-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .org-role {
          color: var(--text-primary);
          font-weight: 500;
          font-size: 0.9rem;
        }

        .org-period {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        @media (max-width: 640px) {
            .org-item {
                flex-direction: column;
                align-items: flex-start;
                gap: 1rem;
                padding: 1.25rem;
            }
            
            .org-meta {
                flex-direction: column;
                align-items: flex-start;
                gap: 0.25rem;
            }
        }
      `}</style>
    </section>
  );
};

export default Organization;
