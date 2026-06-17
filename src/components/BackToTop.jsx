import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`back-to-top-btn ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <div className="btt-container">
        <FaArrowUp size={16} color="var(--bg-primary)" />
      </div>

      <style>{`
        .back-to-top-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 999;
          cursor: pointer;
          opacity: 0;
          transform: translateY(20px) scale(0.8);
          pointer-events: none;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .back-to-top-btn.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }

        .btt-container {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-sm);
          background-color: var(--text-primary);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .back-to-top-btn:hover .btt-container {
          background-color: var(--text-secondary);
          transform: translateY(-4px);
        }

        @media (max-width: 768px) {
          .back-to-top-btn {
            bottom: 20px;
            right: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default BackToTop;
