import { useEffect, useRef, useState } from 'react';

const RevealScroll = ({ children, width = '100%', delay = 0 }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [exitDir, setExitDir] = useState('down'); 

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                    const windowCenter = window.innerHeight / 2;
                    if (entry.boundingClientRect.top < windowCenter) {
                        setExitDir('up');
                    } else {
                        setExitDir('down');
                    }
                }
            },
            {
                threshold: 0,
                // Wait until it's a bit further into the screen for a more deliberate reveal
                rootMargin: '-15% 0px -15% 0px', 
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    // Increased intensity for a more dramatic, eye-catching feel
    const yOffset = exitDir === 'down' ? 120 : -120;
    const rotateX = exitDir === 'down' ? 15 : -15;
    
    return (
        <div style={{ perspective: '1500px', width }}>
            <div
                ref={ref}
                style={{
                    width: '100%',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible 
                        ? 'translate3d(0, 0, 0) scale(1) rotateX(0deg)' 
                        : `translate3d(0, ${yOffset}px, 0) scale(0.9) rotateX(${rotateX}deg)`,
                    filter: isVisible ? 'blur(0px)' : 'blur(16px)',
                    // Extra smooth easeOutQuint curve for buttery motion
                    transition: `all 1.4s cubic-bezier(0.23, 1, 0.32, 1) ${delay}s`,
                    transformOrigin: 'center center',
                    willChange: 'opacity, transform, filter'
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default RevealScroll;
