import GlassSurface from './GlassSurface';
import profileImg from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me<span className="text-accent">.</span></h2>

        <GlassSurface
          width="100%"
          height="auto"
          borderRadius={24}
          opacity={1}
          backgroundOpacity={0.05}
          blur={10}
          borderWidth={0.1}
          mixBlendMode="normal"
          className="about-card"
        >
          <div className="about-content-wrapper">
            <div className="about-image-container">
              <img src={profileImg} alt="Christian Gunawan" className="about-image" />
            </div>
            <div className="about-content">
              <p>
                I am a dedicated undergraduate student pursuing a major in <strong>Computer Science</strong> with a minor in <strong>Software Engineering</strong> and a <strong>Mobile Developer</strong> at <strong>Apple Developer Academy @ BINUS</strong>, blending my passion for technology with a strong academic foundation.
              </p>
              <p>
                My coursework has equipped me with a comprehensive understanding of computer science concepts and the practical skills needed for software development. With a desire to create innovative solutions and contribute to the ever-evolving tech landscape, I am enthusiastic about exploring opportunities in the industry and collaborating with like-minded professionals.
              </p>
            </div>
          </div>
        </GlassSurface>
      </div>

      <style>{`
        .about-section {
          padding: 6rem 0;
          position: relative;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
        }

        .about-content-wrapper {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            padding: 2.5rem;
            align-items: center;
        }

        .about-image-container {
            width: 200px;
            height: 200px;
            flex-shrink: 0;
            border-radius: 50%;
            overflow: hidden;
            border: 4px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .about-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .about-content {
          line-height: 1.8;
          color: var(--text-secondary);
          font-size: 1.1rem;
          text-align: center;
        }

        @media (min-width: 768px) {
            .about-content-wrapper {
                flex-direction: row;
                text-align: left;
                align-items: flex-start;
            }

            .about-content {
                text-align: left;
            }
        }

        .about-content p {
          margin-bottom: 1.5rem;
        }

        .about-content p:last-child {
          margin-bottom: 0;
        }

        .about-content strong {
          color: white;
          font-weight: 600;
        }
      `}</style>
    </section>
  );
};

export default About;
