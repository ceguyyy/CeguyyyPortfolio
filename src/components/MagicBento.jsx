import React, { useState, useEffect } from 'react';
import { Gamepad2, Code2, Smartphone, LayoutTemplate, Globe, LineChart, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './MagicBento.css';

const BentoCardGrid = ({ children }) => (
    <div className="card-grid bento-section">
        {children}
    </div>
);

const getIconForCategory = (category) => {
    const cat = (category || '').toLowerCase();
    if (cat.includes('game')) return <Gamepad2 strokeWidth={1.5} className="magic-bento-card__icon" />;
    if (cat.includes('swift') || cat.includes('programmer')) return <Code2 strokeWidth={1.5} className="magic-bento-card__icon" />;
    if (cat.includes('mobile') || cat.includes('app')) return <Smartphone strokeWidth={1.5} className="magic-bento-card__icon" />;
    if (cat.includes('web')) return <Globe strokeWidth={1.5} className="magic-bento-card__icon" />;
    if (cat.includes('ui/ux') || cat.includes('design')) return <LayoutTemplate strokeWidth={1.5} className="magic-bento-card__icon" />;
    if (cat.includes('data')) return <LineChart strokeWidth={1.5} className="magic-bento-card__icon" />;
    return <FileText strokeWidth={1.5} className="magic-bento-card__icon" />;
};

const MagicBento = ({ items = [] }) => {
    const [bentoItems, setBentoItems] = useState(items);
    const [draggedIdx, setDraggedIdx] = useState(null);
    const [isDraggingAction, setIsDraggingAction] = useState(false);
    const [showTutorial, setShowTutorial] = useState(true);

    // Sync state if props change
    useEffect(() => {
        setBentoItems(items);
    }, [items]);

    const handleDragStart = (e, index) => {
        setDraggedIdx(index);
        setIsDraggingAction(true);
        e.dataTransfer.effectAllowed = "move";
        // setTimeout is needed to allow the drag image to be generated before we hide the original
        setTimeout(() => {
            if (e.target && e.target.style) {
                e.target.style.opacity = '0.01'; // Make it almost invisible for smoother look, instead of 0.4
            }
        }, 0);
        setShowTutorial(false); // Hide tutorial as soon as they start dragging
    };

    const handleDragEnd = (e) => {
        if (e.target && e.target.style) {
            e.target.style.opacity = '1';
        }
        setDraggedIdx(null);
        setTimeout(() => setIsDraggingAction(false), 150); // slight delay to prevent click firing after drop
    };

    const handleDragOver = (e, index) => {
        e.preventDefault(); // Necessary to allow dropping
    };

    const handleDrop = (e, dropIdx) => {
        e.preventDefault();
        if (draggedIdx === null || draggedIdx === dropIdx) return;
        
        const newItems = [...bentoItems];
        const draggedItem = newItems[draggedIdx];
        
        // Remove from old index
        newItems.splice(draggedIdx, 1);
        // Insert at new drop index
        newItems.splice(dropIdx, 0, draggedItem);
        
        setBentoItems(newItems);
    };

    const handleCardClick = (e, onClick) => {
        if (isDraggingAction) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        if (onClick) onClick();
    };

    return (
        <div className="magic-bento-wrapper" style={{ position: 'relative' }}>
            <AnimatePresence>
                {showTutorial && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="drag-tutorial-overlay"
                        onClick={() => setShowTutorial(false)}
                    >
                        <div className="tutorial-content">
                            <span className="tutorial-icon">👆</span>
                            <h3>Interactive Grid</h3>
                            <p>Drag and drop cards to rearrange</p>
                            <button className="tutorial-btn" onClick={() => setShowTutorial(false)}>Got it</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <BentoCardGrid>
                {bentoItems.map((card, index) => {
                    const baseClassName = "magic-bento-card";
                    
                    return (
                        <motion.div
                            layout
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            key={card.title + card.description}
                            className={`${baseClassName} ${card.sizeClass || ''}`}
                        onClick={(e) => handleCardClick(e, card.onClick)}
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragEnd={handleDragEnd}
                        onDragOver={(e) => handleDragOver(e, index)}
                        onDrop={(e) => handleDrop(e, index)}
                        style={{ cursor: isDraggingAction ? 'grabbing' : 'grab' }}
                        title="Drag to reorder"
                    >
                        {(card.image || card.bgGradient) && (
                            <div 
                                className="magic-bento-card__bg" 
                                style={{ 
                                    backgroundImage: card.image ? `url(${card.image})` : card.bgGradient,
                                    opacity: card.bgGradient ? 0.8 : 0.6
                                }} 
                            />
                        )}
                        <div className="magic-bento-card__content">
                            {getIconForCategory(card.category)}
                            <h2 className="magic-bento-card__title">{card.title}</h2>
                            <p className="magic-bento-card__description">{card.description}</p>
                        </div>
                    </motion.div>
                );
            })}
            </BentoCardGrid>
        </div>
    );
};

export default MagicBento;
