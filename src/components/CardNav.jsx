import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';
import './CardNav.css';

const CardNav = ({
    items,
    className = '',
    ease = 'power3.out',
    menuColor = '#fff',
    buttonBgColor = 'rgba(255,255,255,0.1)',
    buttonTextColor = '#fff'
}) => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeHash, setActiveHash] = useState('');
    const navRef = useRef(null);
    const cardsRef = useRef([]);
    const tlRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'work', 'personal-projects', 'experience', 'education', 'organization', 'certificates', 'contact'];
            const scrollPos = window.scrollY + window.innerHeight / 3;

            let currentSection = '';
            for (const sectionId of sections) {
                const el = document.getElementById(sectionId);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPos >= top && scrollPos < top + height) {
                        currentSection = `#${sectionId}`;
                        break;
                    }
                }
            }
            if (currentSection) {
                setActiveHash(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Call it immediately
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const calculateHeight = () => {
        const navEl = navRef.current;
        if (!navEl) return 260;

        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        if (isMobile) {
            const contentEl = navEl.querySelector('.card-nav-content');
            if (contentEl) {
                const wasVisible = contentEl.style.visibility;
                const wasPointerEvents = contentEl.style.pointerEvents;
                const wasPosition = contentEl.style.position;
                const wasHeight = contentEl.style.height;

                contentEl.style.visibility = 'visible';
                contentEl.style.pointerEvents = 'auto';
                contentEl.style.position = 'static';
                contentEl.style.height = 'auto';

                // Force reflow
                console.log(contentEl.offsetHeight);

                const topBar = 60;
                const padding = 16;
                const contentHeight = contentEl.scrollHeight;

                contentEl.style.visibility = wasVisible;
                contentEl.style.pointerEvents = wasPointerEvents;
                contentEl.style.position = wasPosition;
                contentEl.style.height = wasHeight;

                return topBar + contentHeight + padding + 50; // Extra padding
            }
        }
        return 320; // Desktop expanded height
    };

    const createTimeline = () => {
        const navEl = navRef.current;
        if (!navEl) return null;

        gsap.set(navEl, { height: 60, overflow: 'hidden' });
        gsap.set(cardsRef.current, { y: 50, opacity: 0 });

        const tl = gsap.timeline({ paused: true });

        tl.to(navEl, {
            height: calculateHeight,
            duration: 0.4,
            ease
        });

        tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.2');

        return tl;
    };

    useLayoutEffect(() => {
        const tl = createTimeline();
        tlRef.current = tl;

        return () => {
            tl?.kill();
            tlRef.current = null;
        };
    }, [ease, items]);

    // Handle Resize
    useLayoutEffect(() => {
        const handleResize = () => {
            if (!tlRef.current) return;

            // Kill existing timeline
            tlRef.current.kill();

            // Create new one
            const newTl = createTimeline();
            tlRef.current = newTl;

            if (isExpanded) {
                const newHeight = calculateHeight();
                gsap.set(navRef.current, { height: newHeight });
                newTl?.progress(1); // Jump to end state
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isExpanded, items]);

    const toggleMenu = () => {
        const tl = tlRef.current;
        if (!tl) return;
        if (!isExpanded) {
            setIsHamburgerOpen(true);
            setIsExpanded(true);
            tl.play(0);
        } else {
            setIsHamburgerOpen(false);
            tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
            tl.reverse();
        }
    };

    const setCardRef = i => el => {
        if (el) cardsRef.current[i] = el;
    };

    return (
        <div className={`card-nav-container ${className}`}>
            <nav ref={navRef} className={`card-nav ${isExpanded ? 'open' : ''}`}>
                <div className="card-nav-top">
                    <div
                        className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                        role="button"
                        aria-label={isExpanded ? 'Close menu' : 'Open menu'}
                        tabIndex={0}
                        style={{ color: menuColor }}
                    >
                        <div className="hamburger-line" />
                        <div className="hamburger-line" />
                    </div>

                    <div className="logo-container">
                        <a href="#" className="logo-text">
                            CG<span className="text-accent">.</span>
                        </a>
                    </div>

                    <a href="#contact" style={{ textDecoration: 'none' }}>
                        <button
                            type="button"
                            className="card-nav-cta-button"
                        >
                            Let's Talk
                        </button>
                    </a>
                </div>

                <div className="card-nav-content" aria-hidden={!isExpanded}>
                    {(items || []).map((item, idx) => (
                        <div
                            key={`${item.label}-${idx}`}
                            className="nav-card"
                            ref={setCardRef(idx)}
                            style={{ backgroundColor: item.bgColor, color: item.textColor }}
                        >
                            <div className="nav-card-label">{item.label}</div>
                            <div className="nav-card-links">
                                {item.links?.map((lnk, i) => {
                                    const isActive = lnk.href === activeHash;
                                    return (
                                        <a
                                            key={`${lnk.label}-${i}`}
                                            className={`nav-card-link ${isActive ? 'active' : ''}`}
                                            href={lnk.href}
                                            aria-label={lnk.ariaLabel}
                                            onClick={toggleMenu}
                                        >
                                            <GoArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                                            {lnk.label}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default CardNav;
