const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Christian Gunawan</h3>
            <p>Product Manager & Digital Strategist.</p>
          </div>

          <div className="footer-links">
            <div className="col">
              <h4>Social</h4>
              <a href="https://www.linkedin.com/in/christian404/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="col">
              <h4>Connect</h4>
              <a href="mailto:cg404cgunawan@gmail.com">cg404cgunawan@gmail.com</a>
              <a href="tel:+6285157449632">+62 85157449632</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Christian Gunawan. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: rgba(15, 15, 15, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 80px 0 40px;
          border-top: 1px solid var(--glass-border);
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 40px;
          margin-bottom: 60px;
        }

        .footer-brand {
          max-width: 300px;
        }
        
        .footer-brand h3 {
          margin-bottom: 1rem;
        }

        .footer-links {
          display: flex;
          gap: 60px;
        }

        .col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .col h4 {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .footer-bottom {
          padding-top: 40px;
          border-top: 1px solid var(--glass-border);
          text-align: center;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
