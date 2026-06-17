import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="logo-area">
          <a href="#" className="logo">
            CG.
          </a>
        </div>

        <div className="nav-links centered">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-actions">
          <a href="#contact" className="btn-nav">
            Let's Talk
          </a>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--nav-height);
          z-index: 1000;
          transition: background-color 0.2s ease, border-bottom 0.2s ease;
        }
        
        .navbar.scrolled {
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-subtle);
        }

        .nav-content {
          height: 100%;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
        }

        .logo-area {
          justify-self: start;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: var(--text-primary);
        }

        .nav-links.centered {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          justify-self: center;
        }

        .nav-links a {
          color: var(--text-secondary);
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        
        .nav-links a:hover {
          color: var(--text-primary);
        }

        .nav-actions {
            justify-self: end;
        }

        .btn-nav {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem 1rem;
            border-radius: var(--radius-sm);
            background: var(--text-primary);
            color: var(--bg-primary);
            font-size: 0.9rem;
            font-weight: 500;
            transition: all 0.2s ease;
            text-decoration: none;
        }

        .btn-nav:hover {
            background: var(--text-secondary);
            color: var(--bg-primary);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
