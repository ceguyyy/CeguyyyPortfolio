import { GoVerified } from 'react-icons/go';
import GlassSurface from './GlassSurface';

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
        }
    ];

    return (
        <section id="certificates" className="certificates-section">
            <div className="container">
                <h2 className="section-title">Certifications<span className="text-accent">.</span></h2>

                <div className="certs-grid">
                    {certs.map((cert, index) => (
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" key={index} className="cert-link">
                            <GlassSurface
                                width="100%"
                                height="100%"
                                borderRadius={16}
                                opacity={1}
                                backgroundOpacity={0.03}
                                blur={10}
                                borderWidth={0.05}
                                mixBlendMode="normal"
                                className="cert-card"
                            >
                                <div className="cert-content">
                                    <GoVerified className="cert-icon" />
                                    <h3>{cert.title}</h3>
                                    <p>{cert.issuer}</p>
                                </div>
                            </GlassSurface>
                        </a>
                    ))}
                </div>
            </div>

            <style>{`
        .certificates-section {
          padding: 6rem 0;
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

        .cert-card {
            height: 100%;
        }

        .cert-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          height: 100%;
        }

        .cert-icon {
            font-size: 2rem;
            color: var(--accent);
            margin-bottom: 1rem;
        }

        .cert-content h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: white;
          line-height: 1.4;
        }

        .cert-content p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 0;
          margin-top: auto;
        }
      `}</style>
        </section>
    );
};

export default Certificates;
