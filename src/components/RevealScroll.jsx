import { useEffect, useRef, useState } from 'react';

const RevealScroll = ({ children, width = '100%', delay = 0 }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.15, // Trigger when 15% of the element is visible
                rootMargin: '0px 0px -50px 0px', // Offset to trigger slightly before bottom
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

    return (
        <div
            ref={ref}
            style={{
                width,
                opacity: 0,
                transform: 'translateY(30px)',
                transition: `opacity 0.8s cubic-bezier(0.5, 0, 0, 1) ${delay}s, transform 0.8s cubic-bezier(0.5, 0, 0, 1) ${delay}s`,
                ...(isVisible ? { opacity: 1, transform: 'translateY(0)' } : {}),
            }}
        >
            {children}
        </div>
    );
};

export default RevealScroll;
