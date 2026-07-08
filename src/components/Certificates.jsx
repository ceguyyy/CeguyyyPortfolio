import { GoVerified } from 'react-icons/go';

const Certificates = () => {
    const certs = [
        {
            title: 'IT BOX Certificate',
            issuer: 'IT BOX',
            link: 'https://itbox.id/certificate-verifier/13EDBBE24-13EF9A344-12D271D0A'
        },
        {
            title: 'COE Indonesia Product Conference 2024',
            issuer: 'COE Indonesia',
            link: 'https://credential.certifyme.online/verify/69a2e50418460'
        },
        {
            title: 'Java Basic',
            issuer: 'HackerRank',
            link: 'https://www.hackerrank.com/certificates/12df2e603433'
        },
        {
            title: 'Apple Developer Academy',
            issuer: 'Apple',
            link: 'https://media.licdn.com/dms/image/v2/D562DAQGgEDYfLszSyQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1738846013068?e=1766134800&v=beta&t=0by-uXdILmmjktJeDgvRskcFEhBvKIs1jvdtNEFs2mY'
        },
        {
            title: 'Becoming a Trusted Enterprise Consultant',
            issuer: 'Dale Carnegie Training',
            link: '/dale-carnegie-certificate.jpg'
        }
    ];

    return (
        <section id="certificates" className="certificates-section">
            <div className="container">
                <h2 className="section-title">Certifications.</h2>

                <div className="certs-grid">
                    {certs.map((cert, index) => (
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" key={index} className="cert-link">
                            <div className="cert-card">
                                <div className="cert-content">
                                    <GoVerified className="cert-icon" />
                                    <h3 className="cert-title">{cert.title}</h3>
                                    <p className="cert-issuer">{cert.issuer}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <style>{`
        .certificates-section {
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

        .certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .cert-link {
            text-decoration: none;
            color: inherit;
            display: block;
            height: 100%;
            transition: transform 0.2s ease;
        }
        
        .cert-link:hover {
            transform: translateY(-4px);
        }
        
        .cert-link:hover .cert-card {
            border-color: var(--text-secondary);
        }

        .cert-card {
            height: 100%;
            background-color: var(--glass-bg);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid var(--border-subtle);
            border-radius: var(--radius-md);
            transition: border-color 0.2s ease;
        }

        .cert-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          height: 100%;
        }

        .cert-icon {
            font-size: 1.5rem;
            color: var(--text-primary);
            margin-bottom: 1.5rem;
        }

        .cert-title {
          font-size: 1.1rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          line-height: 1.4;
        }

        .cert-issuer {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 0;
          margin-top: auto;
        }
      `}</style>
        </section>
    );
};

export default Certificates;
