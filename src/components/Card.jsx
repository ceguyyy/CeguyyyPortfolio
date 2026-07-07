import React from 'react';
import { GoArrowRight } from 'react-icons/go';

const Card = ({ title, category, image, description, onClick, linkLabel }) => {
  return (
    <div className="deal-card" onClick={onClick}>
      <div className="card-bg">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="placeholder-bg"></div>
        )}
        <div className="card-gradient"></div>
      </div>
      
      <div className="card-content">
        <div className="card-text">
          <h3 className="card-title">{title}</h3>
          <p className="card-desc">{description}</p>
        </div>
        
        <div className="card-footer">
          <button className="shop-btn" onClick={(e) => {
            e.stopPropagation();
            if (onClick) onClick();
          }}>
            {linkLabel || 'View Case'} <GoArrowRight className="btn-icon" />
          </button>
          
          <div className="card-category">
            {category}
          </div>
        </div>
      </div>

      <style>{`
        .deal-card {
          position: relative;
          width: 100%;
          height: 550px;
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          background: var(--glass-bg);
        }

        .deal-card:hover {
          transform: translateY(-8px);
        }

        .card-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .card-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .deal-card:hover .card-bg img {
          transform: scale(1.05);
        }

        .placeholder-bg {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #2a2a2a, #1a1a1a);
        }

        .card-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 70%;
          background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 40%, transparent 100%);
        }

        .card-content {
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 32px 28px;
        }

        .card-title {
          font-size: 2.2rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 12px 0;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .card-desc {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.85);
          margin: 0 0 32px 0;
          line-height: 1.5;
          max-width: 90%;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .shop-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #fff;
          color: #000;
          border: none;
          padding: 10px 14px 10px 20px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .shop-btn:hover {
          background: #f0f0f0;
          transform: scale(1.02);
        }

        .btn-icon {
          background: #000;
          color: #fff;
          border-radius: 50%;
          padding: 6px;
          font-size: 1.4rem;
        }

        .card-category {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          font-weight: 500;
          max-width: 120px;
          text-align: right;
          line-height: 1.3;
          margin-bottom: 8px;
        }

        @media (max-width: 640px) {
          .deal-card {
            height: 480px;
          }
          .card-title {
            font-size: 1.8rem;
          }
          .card-content {
            padding: 24px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Card;
