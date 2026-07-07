import { useState, useEffect } from 'react';

const TopNav = ({ navItems }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`topnav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container topnav-container">
        <a href="#" className="brand">
          <span className="brand-text">CG.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item, idx) => (
            <div key={idx} className="nav-group">
              {item.links.map((link, linkIdx) => (
                <a key={linkIdx} href={link.href} className="nav-link">
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="mobile-nav">
          {navItems.map((item, idx) => (
            <div key={idx} className="mobile-nav-group">
              <div className="mobile-nav-group-label">{item.label}</div>
              {item.links.map((link, linkIdx) => (
                <a 
                  key={linkIdx} 
                  href={link.href} 
                  className="mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </nav>
      )}
      <style>{`
        .topnav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--nav-height, 80px);
          z-index: 100;
          transition: all 0.3s ease;
          border-bottom: 1px solid transparent;
        }
        
        .topnav.scrolled {
          background-color: var(--glass-bg, rgba(24, 24, 27, 0.8));
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-subtle, rgba(255,255,255,0.1));
        }

        .topnav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        .brand {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary, #fff);
          letter-spacing: -0.05em;
        }

        .desktop-nav {
          display: none;
        }

        @media (min-width: 768px) {
          .desktop-nav {
            display: flex;
            align-items: center;
            gap: 2rem;
          }
        }

        .nav-group {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-secondary, #a1a1aa);
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: var(--text-primary, #fff);
        }

        .mobile-toggle {
          display: block;
          color: var(--text-primary, #fff);
          font-size: 1.5rem;
        }

        @media (min-width: 768px) {
          .mobile-toggle {
            display: none;
          }
        }

        .mobile-nav {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: var(--bg-primary, #09090b);
          padding: 2rem 0;
          border-bottom: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .mobile-nav-group {
          display: flex;
          flex-direction: column;
          padding: 0 24px;
        }

        .mobile-nav-group-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          color: var(--accent, #3b82f6);
          margin-bottom: 1rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .mobile-nav-link {
          font-size: 1.25rem;
          font-weight: 600;
          padding: 0.5rem 0;
          color: var(--text-primary, #fff);
        }
      `}</style>
    </header>
  );
};

export default TopNav;
