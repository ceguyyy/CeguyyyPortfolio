import GlassSurface from './GlassSurface';
import ModelViewer from './ModelViewer';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text animate-fade-in">
          <div className="hero-roles">
            <span className="hero-label">iOS Developer</span>
            <span className="hero-label">Product Manager</span>
            <span className="hero-label">Solution Architect</span>
            <span className="hero-label">Presales</span>
            <span className="hero-label">IT Business Consultant</span>
            <span className="hero-label">Digital Product</span>
            <span className="hero-label">Digital Business Transformation</span>
          </div>
          <h1>
            Hi, I'm <span className="text-gradient">Christian Gunawan</span>.
          </h1>
          <p className="hero-desc">
            Transforming complex problems into intuitive digital solutions.
            Focused on product strategy, user experience, and driving growth.
          </p>

          <div className="hero-actions">
            <a
              href="https://drive.google.com/file/d/1cFB76GK1uJ59CU9lutTOGv4aTWwhWrR_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <GlassSurface
                width="160px"
                height="50px"
                borderRadius={30}
                opacity={1}
                backgroundOpacity={0.1}
                blur={15}
                borderWidth={0.1}
                displace={25}
                distortionScale={15}
                mixBlendMode="normal"
                className="btn-glass"
              >
                <span style={{ fontWeight: 600, color: 'white' }}>Download CV</span>
              </GlassSurface>
            </a>

            <a href="#contact" style={{ textDecoration: 'none' }}>
              <GlassSurface
                width="160px"
                height="50px"
                borderRadius={30}
                opacity={1}
                backgroundOpacity={0.05}
                blur={10}
                borderWidth={0.1}
                displace={20}
                distortionScale={10}
                mixBlendMode="normal"
                className="btn-glass-outline"
              >
                <span style={{ fontWeight: 600, color: '#e5e5e5' }}>Contact Me</span>
              </GlassSurface>
            </a>
          </div>
        </div>
      </div>

      <div className="hero-model animate-fade-in delay-200">
        <ModelViewer
          url="/models/carno.glb"
          width="100%"
          height="100%"
          modelXOffset={0}
          modelYOffset={-1.5} /* Move down further (turunin lagi) */
          modelRotation={[-Math.PI / 2, 0, 0]} /* Rotate mesh internally so Z-up becomes Y-up */
          defaultRotationX={0} /* Reset container tilt so autoRotate spins around vertical Y */
          defaultRotationY={30}
          defaultZoom={12} /* Target ~30% screen size */
          minZoomDistance={0.5}
          maxZoomDistance={20}
          enableManualZoom={false} /* Keep scroll safety */
          ambientIntensity={0.6} /* 60% brightness */
          keyLightIntensity={1.2} /* 60% brightness */
          fillLightIntensity={0.6} /* 60% brightness */
          rimLightIntensity={1.2} /* 60% brightness */
          autoRotate={true}
          autoRotateSpeed={2}
          environmentPreset="city"
          showScreenshotButton={false}
          fadeIn={true}
          autoFrame={false} /* Disable auto-fit to use manual zoom */
          style={{ background: 'transparent' }}
        />
      </div>

      <style>{`
        .hero {
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding-top: var(--nav-height);
          overflow: hidden;
          isolation: isolate; /* Create new stacking context */
        }

        .hero-content {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          position: relative;
          z-index: 2; /* Content sits above model */
          pointer-events: none; /* Let clicks pass through empty space */
        }

        /* Re-enable clicks for interactive elements */
        .hero-text, .hero-actions {
            pointer-events: auto;
        }

        .hero-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            max-width: 800px;
        }

        .hero-model {
            position: absolute;
            inset: 0; /* Cover entire hero section */
            width: 100%;
            height: 100%;
            z-index: 1; /* Behind content (content is z-index 2) */
            opacity: 0.8; 
            pointer-events: auto; /* Allow interaction with model */
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .delay-200 { animation-delay: 0.2s; }

        @media (min-width: 1024px) {
            .hero-content {
                justify-content: center;
                text-align: center;
            }
            
            .hero-text {
                align-items: center;
                text-align: center;
                max-width: 900px;
            }
            
            .hero-roles {
                justify-content: center;
            }
            
            .hero-actions {
                justify-content: center;
            }
        }

        .hero-roles {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .hero-label {
          display: inline-block;
          padding: 8px 18px;
          border-radius: 50px;
          background: rgba(10, 10, 10, 0.6);
          border: 1px solid rgba(59, 130, 246, 0.3);
          color: #3b82f6;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        h1 {
            font-size: 4.5rem;
            line-height: 1.1;
            margin-bottom: 1.5rem;
            letter-spacing: -0.02em;
        }

        .hero-desc {
            font-size: 1.35rem;
            margin: 0 0 3rem;
            max-width: 640px;
            line-height: 1.6;
            color: var(--text-secondary);
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .btn-glass, .btn-glass-outline {
            transition: transform 0.2s ease, opacity 0.2s ease;
            cursor: pointer;
        }

        .btn-glass:hover, .btn-glass-outline:hover {
            transform: translateY(-2px);
            opacity: 0.8 !important; /* Override inline prop slightly */
        }
      `}</style>
    </section>
  );
};

export default Hero;
