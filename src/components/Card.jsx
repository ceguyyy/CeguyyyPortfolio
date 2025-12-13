const Card = ({ title, category, image, description, link, linkLabel = "View Case Study" }) => {
  return (
    <div className="card glass">
      <div className="card-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="placeholder-img">
            <span className="placeholder-letter">{title.charAt(0)}</span>
          </div>
        )}
        <span className="card-category">{category}</span>
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {link && (
          <a href={link} className="card-link" target="_blank" rel="noopener noreferrer">
            {linkLabel} &rarr;
          </a>
        )}
      </div>

      <style>{`
        .card {
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: 0.4s ease;
          position: relative;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.4);
        }

        .card-image {
          height: 240px;
          background: #1a1a1a;
          position: relative;
          overflow: hidden;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.5s ease;
        }

        .card:hover .card-image img {
          transform: scale(1.05);
        }

        .placeholder-img {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(0, 255, 209, 0.05));
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .placeholder-letter {
            font-size: 6rem;
            font-weight: 800;
            color: rgba(255, 255, 255, 0.1);
            text-transform: uppercase;
        }

        .card-category {
          position: absolute;
          top: 16px;
          left: 16px;
          padding: 4px 12px;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .card-content {
          padding: 24px;
        }

        .card-content h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .card-content p {
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-link {
          color: var(--accent);
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .card-link:hover {
          color: var(--accent-hover);
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Card;
