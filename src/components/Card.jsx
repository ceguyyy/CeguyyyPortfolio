const Card = ({ title, category, image, description, onClick }) => {
  return (
    <div className="card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="card-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="placeholder-img">
            <span className="placeholder-letter">{title.charAt(0)}</span>
          </div>
        )}
      </div>
      <div className="card-content">
        <span className="card-category">{category}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <button 
          className="card-link-visual"
          onClick={(e) => {
            e.stopPropagation();
            if (onClick) onClick();
          }}
        >
          View Case Study &rarr;
        </button>
      </div>

      <style>{`
        .card {
          display: flex;
          flex-direction: column;
          height: 100%;
          background-color: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .card:hover {
          border-color: var(--text-secondary);
          transform: translateY(-4px);
        }

        .card-image {
          width: 100%;
          height: 240px;
          background-color: var(--glass-bg);
          border-bottom: 1px solid var(--border-subtle);
          position: relative;
          overflow: hidden;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .card:hover .card-image img {
          transform: scale(1.05);
        }

        .placeholder-img {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--glass-bg);
        }

        .placeholder-letter {
          color: var(--text-tertiary);
          font-size: 4rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .card-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-category {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
        }

        .card-content h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .card-content p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .card-link-visual {
          align-self: flex-start;
          color: var(--text-primary);
          font-weight: 500;
          font-size: 0.9rem;
          padding: 0;
          transition: color 0.2s;
          background: none;
          border: none;
          cursor: pointer;
        }

        .card:hover .card-link-visual {
          background: rgba(59, 130, 246, 0.8);
          border-color: rgba(59, 130, 246, 1);
          transform: translateX(4px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Card;
