import profileImg from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        
        <div className="about-left">
          <div className="sticky-content">
            <h2 className="section-title">About Me.</h2>
            <div className="about-skills">
              <span className="skill-tag">Solution Architecture</span>
              <span className="skill-tag">Product Strategy</span>
              <span className="skill-tag">Systems Design</span>
              <span className="skill-tag">API Integration</span>
              <span className="skill-tag">Mobile Development</span>
            </div>
          </div>
        </div>

        <div className="about-right">
          <p className="about-lead">
            Computer Science graduate with experience in Solution Architecture and Digital Product Development, specializing in translating complex business requirements into scalable and reliable technical solutions.
          </p>
          <div className="about-body">
            <p>
              Currently working as a Solutions Architect at <strong>Cekat.AI</strong>, with previous experience as an Enterprise Solutions Architect at <strong>Mekari</strong>, where I contributed to designing solution architectures, preparing technical documentation, supporting API integrations, and ensuring successful delivery of digital platforms aligned with business objectives.
            </p>
            <p>
              Previously, I gained product and digital transformation experience at <strong>Siloam International Hospitals Group</strong>, supporting digital initiatives and product development processes. My early technical foundation was built through the <strong>Apple Developer Academy Indonesia</strong>, where I focused on iOS development and user-centric application design.
            </p>
          </div>
        </div>

      </div>

      <style>{`
        .about-section {
          padding: 8rem 0;
          position: relative;
          border-top: 1px solid var(--border-subtle);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
        }

        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: repeat(12, 1fr);
            gap: 5rem;
          }
        }

        .about-left {
          display: flex;
          flex-direction: column;
        }

        .sticky-content {
          position: sticky;
          top: 120px;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        @media (min-width: 1024px) {
          .about-left {
            grid-column: 1 / 5;
          }
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: var(--text-primary);
          margin: 0;
        }

        .about-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-tag {
          padding: 0.5rem 1rem;
          background-color: var(--glass-bg);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid var(--border-subtle);
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .skill-tag:hover {
          color: var(--text-primary);
          border-color: var(--text-secondary);
          background-color: rgba(255, 255, 255, 0.05);
        }

        .about-image {
          display: none;
        }

        .about-right {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        @media (min-width: 1024px) {
          .about-right {
            grid-column: 6 / 13;
          }
        }

        .about-lead {
          font-size: 1.35rem;
          line-height: 1.7;
          color: var(--text-primary);
          font-weight: 400;
          margin: 0;
          max-width: 35ch;
        }

        .about-body {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .about-body p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin: 0;
          max-width: 60ch;
        }

        strong {
          color: var(--text-primary);
          font-weight: 600;
        }
      `}</style>
    </section>
  );
};

export default About;
