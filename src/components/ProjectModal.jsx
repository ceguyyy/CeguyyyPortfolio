import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';
import { GoArrowUpRight } from 'react-icons/go';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  const modalContent = (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-wrapper animate-zoom-in" onClick={(e) => e.stopPropagation()}>
        <div className="modal-glass-container">
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <IoClose size={24} />
          </button>

          <div className="modal-body">
            {project.image ? (
              <div className="modal-image-container">
                <img src={project.image} alt={project.title} className="modal-image" />
              </div>
            ) : (
              <div className="modal-image-placeholder">
                <span className="placeholder-letter">{project.title.charAt(0)}</span>
              </div>
            )}

            <div className="modal-content">
              <span className="modal-category">{project.category}</span>
              <h2 className="modal-title">{project.title}</h2>
              
              <div className="modal-description">
                <p>{project.description}</p>
                {project.details && (
                  <div className="modal-details-extra">
                    <h4>Key Accomplishments & Scope</h4>
                    <ul>
                      {project.details.map((detail, idx) => (
                        <li key={idx}>
                          <svg className="custom-bullet" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(5, 5, 5, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .modal-wrapper {
          width: 100%;
          max-width: 800px;
          position: relative;
        }

        .modal-glass-container {
          overflow: hidden;
        }

        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .modal-close-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: rotate(90deg);
        }

        .modal-body {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          padding: 32px;
          max-height: 85vh;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.2) transparent;
        }

        .modal-body::-webkit-scrollbar {
          width: 6px;
        }
        .modal-body::-webkit-scrollbar-thumb {
          background-color: rgba(255,255,255,0.2);
          border-radius: 10px;
        }

        @media (min-width: 860px) {
          .modal-body {
            grid-template-columns: 1fr 1.3fr;
            padding: 48px;
            gap: 48px;
            align-items: stretch;
          }
        }

        .modal-image-container, .modal-image-placeholder {
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: 16px;
          overflow: hidden;
          background: #0a0a0a;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: inset 0 0 40px rgba(0,0,0,0.5);
        }

        .modal-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-image-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(0, 255, 209, 0.08));
        }

        .modal-image-placeholder .placeholder-letter {
          font-size: 6rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.15);
          text-transform: uppercase;
        }

        .modal-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .modal-category {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent);
          font-weight: 700;
        }

        .modal-title {
          font-size: 2rem;
          line-height: 1.2;
          font-weight: 800;
          color: #fff;
        }

        .modal-description {
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--text-secondary);
        }

        .modal-details-extra {
          margin-top: 28px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .modal-details-extra h4 {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #fff;
          margin-bottom: 16px;
          font-weight: 700;
        }

        .modal-details-extra ul {
          padding-left: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
          list-style: none;
        }

        .modal-details-extra li {
          color: #d1d5db;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .custom-bullet {
          flex-shrink: 0;
          margin-top: 3px;
        }

        .modal-tech-stack {
          margin-top: 20px;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          font-size: 0.75rem;
          padding: 4px 10px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-secondary);
        }

        .modal-actions {
          margin-top: 24px;
        }

        .modal-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          color: #000;
          padding: 12px 24px;
          border-radius: 30px;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 1px solid #fff;
        }

        .modal-cta-btn:hover {
          background: transparent;
          color: #fff;
        }

        /* Animations */
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-zoom-in {
          animation: zoomIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ProjectModal;
