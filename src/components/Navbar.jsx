import { useState, useEffect } from 'react';
import GlassSurface from './GlassSurface';

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
            CG<span className="text-accent">.</span>
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
          <a href="#contact" style={{ textDecoration: 'none' }}>
            <GlassSurface
              width="110px"
              height="38px"
              borderRadius={20}
              opacity={1}
              backgroundOpacity={0.1}
              blur={12}
              borderWidth={0.08}
              displace={20}
              distortionScale={10}
              mixBlendMode="normal"
              className="btn-glass-nav"
            >
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'white' }}>Let's Talk</span>
            </GlassSurface>
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
          transition: 0.3s ease;
        }
        
        .navbar.scrolled {
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--glass-border);
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
          font-weight: 800;
          letter-spacing: -0.03em;
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
          transition: 0.2s;
        }
        
        .nav-links a:hover {
          color: #fff;
        }

        .nav-actions {
            justify-self: end;
        }

        .btn-glass-nav {
            cursor: pointer;
            transition: transform 0.2s ease;
        }

        .btn-glass-nav:hover {
            transform: translateY(-1px);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
