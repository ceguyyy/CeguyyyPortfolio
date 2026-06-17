import React from 'react';
import './MagicBento.css';

const BentoCardGrid = ({ children }) => (
    <div className="card-grid bento-section">
        {children}
    </div>
);

const MagicBento = ({ items = [] }) => {
    return (
        <BentoCardGrid>
            {items.map((card, index) => {
                const baseClassName = "magic-bento-card";
                
                return (
                    <div
                        key={index}
                        className={baseClassName}
                        onClick={card.onClick}
                    >
                        {card.image ? (
                            <>
                                <div className="magic-bento-card__bg" style={{ backgroundImage: `url(${card.image})` }} />
                                <div className="magic-bento-card__overlay" />
                            </>
                        ) : (
                            <div className="magic-bento-card__fallback">{card.title.charAt(0)}</div>
                        )}
                        <div className="magic-bento-card__header">
                            <div className="magic-bento-card__label">{card.category || card.label}</div>
                        </div>
                        <div className="magic-bento-card__content">
                            <h2 className="magic-bento-card__title">{card.title}</h2>
                            <p className="magic-bento-card__description">{card.description}</p>
                        </div>
                    </div>
                );
            })}
        </BentoCardGrid>
    );
};

export default MagicBento;
