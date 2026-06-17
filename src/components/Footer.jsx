import { SiLinkedin, SiGithub } from 'react-icons/si';
import { MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
          <div className="footer-info" style={{ alignItems: 'center' }}>
            <div className="footer-brand animate-fade-in">
              <h3>Christian Gunawan</h3>
              <p className="footer-subtitle">Product Manager & Digital Strategist</p>
              <p className="footer-desc" style={{ margin: '0 auto', maxWidth: '600px' }}>
                Let's build something exceptional together. Feel free to reach out for consultations, collaborations, or structural inquiries.
              </p>
            </div>

            <div className="footer-contact-details" style={{ justifyContent: 'center', marginTop: '30px' }}>
              <a href="mailto:cg404cgunawan@gmail.com" className="contact-detail-link">
                <span className="contact-icon-wrapper"><MdEmail /></span>
                <span>cg404cgunawan@gmail.com</span>
              </a>
              <a href="tel:+6285157449632" className="contact-detail-link">
                <span className="contact-icon-wrapper"><MdPhone /></span>
                <span>+62 85157449632</span>
              </a>
            </div>

            <div className="footer-social-links" style={{ justifyContent: 'center', marginTop: '30px' }}>
              <a href="https://www.linkedin.com/in/christian404/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <SiLinkedin size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <SiGithub size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Christian Gunawan. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          padding: 8rem 0 2rem;
          border-top: 1px solid var(--border-subtle);
          position: relative;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        @media (min-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr;
            align-items: center;
          }
        }

        .footer-info {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .footer-brand h3 {
          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 8px;
          color: var(--text-primary);
        }

        .footer-subtitle {
          color: var(--text-primary);
          font-weight: 500;
          font-size: 1.1rem;
          margin-bottom: 16px;
        }

        .footer-desc {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-secondary);
          max-width: 480px;
        }

        .footer-contact-details {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-detail-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: var(--text-secondary);
          font-size: 1rem;
          transition: color 0.2s ease;
          width: fit-content;
        }

        .contact-detail-link:hover {
          color: var(--text-primary);
        }

        .contact-icon-wrapper {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
        }

        .footer-social-links {
          display: flex;
          gap: 16px;
        }

        .footer-social-links a {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .footer-social-links a:hover {
          background: var(--text-primary);
          color: var(--bg-primary);
          border-color: var(--text-primary);
        }

        .footer-bottom {
          padding-top: 40px;
          border-top: 1px solid var(--border-subtle);
          text-align: center;
          color: var(--text-tertiary);
          font-size: 0.9rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
