import Card from './Card';
import hrisImg from '../assets/hris_system.png';
import vesselImg from '../assets/vessel_management.png';
import eprocurementImg from '../assets/eprocurement.png';
import healthImg from '../assets/health_analytics.png';
import docMgmtImg from '../assets/document_management.png';
import ebudgetingImg from '../assets/ebudgeting.png';
import hseImg from '../assets/hse_management.png';
import auditImg from '../assets/audit_system.png';
import workflowImg from '../assets/workflow_iso.png';
import agenticAiImg from '../assets/agentic_ai.png';
import wacommerceImg from '../assets/wacommerce_isometric.png';

const projects = [
    {
        id: 'wacommerce',
        title: 'WAcommerce',
        category: 'AI & Enterprise Solution',
        description: 'Customer purchasing platform via WhatsApp with open API integration for product and stock gathering.',
        image: wacommerceImg,
        techStack: ['Node.js', 'WhatsApp Business API', 'React', 'Open API'],
        details: [
            'Built a complete e-commerce checkout flow natively within WhatsApp conversations.',
            'Integrated open APIs to dynamically gather real-time stock and product catalogs from external applications.',
            'Automated order processing and payment confirmations seamlessly.'
        ],
        link: '#',
        linkLabel: 'View Case Study'
    },
    {
        id: 0,
        title: 'Agentic AI Agent & CRM',
        category: 'AI & Enterprise Solution',
        description: 'Intelligent multi-channel AI communication agent with CRM integration.',
        image: agenticAiImg,
        techStack: ['Python', 'LangChain', 'React', 'Node.js', 'Meta Graph API'],
        details: [
            'Designed and implemented agentic AI systems for dynamic customer interaction.',
            'Integrated seamlessly with Meta (WhatsApp) for multi-channel communication.',
            'Connected to CRM platforms to provide real-time context and automate workflows.'
        ],
        link: 'https://cekat.ai',
        linkLabel: 'View Live Solution'
    },
    {
        id: 1,
        title: 'HRIS System',
        category: 'Enterprise Software',
        description: 'Comprehensive Human Resource Information System for client.',
        image: hrisImg,
        techStack: ['React', 'Node.js', 'PostgreSQL', 'Redux Toolkit', 'Express'],
        details: [
            'Designed scalable system architecture supporting 5,000+ active employees.',
            'Built custom payroll automation module reducing processing time by 40%.',
            'Integrated secure OAuth2 authentication and granular RBAC permissions.'
        ],
        link: 'https://github.com',
        linkLabel: 'View Case Study'
    },
    {
        id: 2,
        title: 'Vessel Management System',
        category: 'Logistics Platform',
        description: 'End-to-end management solution for maritime vessel operations for client.',
        image: vesselImg,
        techStack: ['SwiftUI', 'Node.js', 'Docker', 'GraphQL', 'PostGIS'],
        details: [
            'Architected real-time vessel tracking platform utilizing geospatial telemetry.',
            'Optimized bunkering route planning algorithms saving up to 15% in fuel costs.',
            'Implemented offline-first sync engine for open ocean satellite internet conditions.'
        ],
        link: 'https://github.com',
        linkLabel: 'View Operations Dashboard'
    },
    {
        id: 3,
        title: 'Source to Pay E-procurement',
        category: 'FinTech Solution',
        description: 'Streamlined procurement process automation system for client.',
        image: eprocurementImg,
        techStack: ['React', 'Spring Boot', 'MySQL', 'Kafka', 'Kubernetes'],
        details: [
            'Automated end-to-end RFQ and bidding process for vendor selection.',
            'Integrated double-entry ledger database ensuring strict audit compliance.',
            'Built real-time analytics dashboard tracking corporate spending and budget variances.'
        ],
        link: 'https://github.com',
        linkLabel: 'View Architecture Plan'
    },
    {
        id: 4,
        title: 'Health Analytics',
        category: 'Mobile Analytics',
        description: 'Healthcare data analytics platform for Siloam Mobile.',
        image: healthImg,
        techStack: ['Swift', 'UIKit', 'CoreData', 'Combine', 'Firebase'],
        details: [
            'Developed key visual telemetry panels for monitoring patient diagnostic metrics.',
            'Adhered strictly to HIPAA guidelines regarding patient healthcare record encryption.',
            'Decreased memory footprint by 25% via lazy-loaded telemetry rendering pipelines.'
        ],
        link: 'https://apps.apple.com/id/app/mysiloam/id1220703816',
        linkLabel: 'View on App Store'
    },
    {
        id: 5,
        title: 'Document Management System',
        category: 'Enterprise Software',
        description: 'Secure digital document organization and archiving system for client.',
        image: docMgmtImg,
        techStack: ['React', 'Python', 'FastAPI', 'Elasticsearch', 'AWS S3'],
        details: [
            'Created robust document OCR pipeline automatically indexing uploaded PDF content.',
            'Implemented file-level AWS KMS encryption key rotation.',
            'Enhanced search queries using Elasticsearch fuzzy matching, cutting lookups down to <100ms.'
        ],
        link: 'https://github.com',
        linkLabel: 'View Case Study'
    },
    {
        id: 6,
        title: 'E-budgeting',
        category: 'FinTech Solution',
        description: 'Digital budgeting and forecasting tool for client enterprises.',
        image: ebudgetingImg,
        techStack: ['React', 'Go', 'PostgreSQL', 'Redis', 'Docker'],
        details: [
            'Engineered dynamic financial forecasting spreadsheets supporting complex multi-variable equations.',
            'Added snapshot history features enabling teams to visually roll back budget changes.',
            'Automated workflow approval pathways for department lead sign-off.'
        ],
        link: 'https://github.com',
        linkLabel: 'View System Architecture'
    },
    {
        id: 7,
        title: 'HSE End to End',
        category: 'Safety Management',
        description: 'Complete Health, Safety, and Environment management suite for client.',
        image: hseImg,
        techStack: ['React Native', 'Node.js', 'MongoDB', 'AWS S3', 'PWA'],
        details: [
            'Built offline safety incident reporter utilizing device camera and GPS telemetry.',
            'Generated automated regulatory compliance checklists conforming to ISO 45001 standards.',
            'Created real-time SMS alerts dispatching notifications for high-priority hazards.'
        ],
        link: 'https://github.com',
        linkLabel: 'View Mobile Solution'
    },
    {
        id: 8,
        title: 'Audit Management System',
        category: 'Enterprise Software',
        description: 'Digital auditing workflow and compliance tracking for client.',
        image: auditImg,
        techStack: ['React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Jest'],
        details: [
            'Created full-audit trail system logging every internal database mutation.',
            'Standardized compliance reporting schemas across multiple organizational branches.',
            'Achieved 90%+ test coverage using automated unit and integration tests.'
        ],
        link: 'https://github.com',
        linkLabel: 'View Compliance Flow'
    },
    {
        id: 9,
        title: 'Workflow Integration',
        category: 'Enterprise Software',
        description: 'Seamless integration of disparate business workflows for client efficiency.',
        image: workflowImg,
        techStack: ['Apache Camel', 'Java', 'RabbitMQ', 'Docker', 'Kubernetes'],
        details: [
            'Connected legacy ERP databases to modern front-facing CRM platform APIs.',
            'Designed fault-tolerant message queue mechanisms processing 10,000 requests/min.',
            'Reduced overall business workflow cycle duration by an average of 48%.'
        ],
        link: 'https://github.com',
        linkLabel: 'View API Spec'
    }
];

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const PortfolioGrid = ({ onProjectClick }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isHovered, setIsHovered] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const carouselRef = useRef(null);
    const progressBarRef = useRef(null);
    const scrollPosRef = useRef(0);
    
    const categories = ['All', 'AI & Enterprise Solution', 'Enterprise Software', 'Logistics Platform', 'FinTech Solution', 'Mobile Analytics', 'Safety Management'];

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    useEffect(() => {
        let animationId;
        if (carouselRef.current) {
            scrollPosRef.current = carouselRef.current.scrollLeft;
        }
        
        const scroll = () => {
            if (carouselRef.current && !isHovered && !isPaused && filteredProjects.length > 3) {
                scrollPosRef.current += 0.5; // 50% slower speed
                
                const maxScroll = carouselRef.current.scrollWidth / 2;
                if (scrollPosRef.current >= maxScroll) {
                    scrollPosRef.current = 0;
                }
                
                carouselRef.current.scrollLeft = scrollPosRef.current;
                
                if (progressBarRef.current) {
                    const progress = (scrollPosRef.current / maxScroll) * 100;
                    progressBarRef.current.style.width = `${progress}%`;
                }
            }
            animationId = requestAnimationFrame(scroll);
        };
        animationId = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationId);
    }, [isHovered, isPaused, filteredProjects.length]);

    const handleScroll = () => {
        if (carouselRef.current) {
            const currentScroll = carouselRef.current.scrollLeft;
            // Only update internal ref if user manually scrolled (jump > 1.5px)
            if (Math.abs(currentScroll - scrollPosRef.current) > 1.5) {
                scrollPosRef.current = currentScroll;
            }
            if (progressBarRef.current && filteredProjects.length > 3) {
                const maxScroll = carouselRef.current.scrollWidth / 2;
                const progress = (currentScroll / maxScroll) * 100;
                progressBarRef.current.style.width = `${Math.min(progress, 100)}%`;
            }
        }
    };

    const scrollByAmount = (amount) => {
        if (carouselRef.current) {
            // Temporarily flag as manual scroll so we don't fight the animation
            carouselRef.current.scrollBy({ left: amount, behavior: 'smooth' });
        }
    };

    return (
        <section id="work" className="section portfolio-section">
            <div className="container">
                <div className="section-header">
                    <div className="section-title-wrapper">
                        <h2 className="section-title">Selected Work.</h2>
                        <p className="section-subtitle">A collection of project case studies, solution architectures, and digital transformations.</p>
                    </div>
                </div>
            </div>

            <div className="filter-section-wrapper">
                <div className="filter-container">
                        <div className="filter-bar">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
            </div>

            <div className="carousel-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <div 
                    className="carousel-wrapper" 
                    ref={carouselRef}
                    onScroll={handleScroll}
                    style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}
                >
                    <div className="carousel-track">
                        <div className="carousel-group">
                            {filteredProjects.map(p => (
                                <div key={p.id} className="carousel-item">
                                    <Card 
                                        {...p} 
                                        onClick={() => onProjectClick(p)}
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Duplicate group for infinite scrolling effect */}
                        {filteredProjects.length > 3 && (
                            <div className="carousel-group" aria-hidden="true">
                                {filteredProjects.map(p => (
                                    <div key={`${p.id}-dup`} className="carousel-item">
                                        <Card 
                                            {...p} 
                                            onClick={() => onProjectClick(p)}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="container">
                {filteredProjects.length > 3 && (
                    <div className="media-player-bar">
                        <div className="media-nav-buttons">
                            <button className="nav-chevron" onClick={() => scrollByAmount(-400)}>
                                <ChevronLeft size={24} />
                            </button>
                            <button className="play-pause-btn" onClick={() => setIsPaused(!isPaused)} aria-label={isPaused ? "Play" : "Pause"}>
                                {isPaused ? <Play size={18} fill="currentColor" /> : <Pause size={18} fill="currentColor" />}
                            </button>
                            <button className="nav-chevron" onClick={() => scrollByAmount(400)}>
                                <ChevronRight size={24} />
                            </button>
                        </div>
                        <div className="progress-container">
                            <div className="progress-track">
                                <div className="progress-fill" ref={progressBarRef}>
                                    <div className="progress-knob"></div>
                                </div>
                            </div>
                        </div>
                        <div className="media-time">LIVE</div>
                    </div>
                )}
            </div>

            <style>{`
        .portfolio-section {
          padding: 8rem 0;
          border-top: 1px solid var(--border-subtle);
        }

        .section-header {
          margin-bottom: 3rem;
          max-width: 600px;
        }

        .section-title-wrapper {
          max-width: 600px;
        }

        .section-title {
          font-size: clamp(3rem, 7vw, 4.5rem);
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 1.05;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        .filter-section-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }

        .filter-container {
          display: flex;
          flex: 1;
          overflow-x: auto;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          padding-left: max(24px, calc((100vw - 1100px) / 2));
          padding-right: max(24px, calc((100vw - 1100px) / 2));
        }
        
        .filter-container::-webkit-scrollbar {
          display: none;
        }

        .filter-bar {
          display: inline-flex;
          flex-wrap: nowrap;
          gap: 6px;
          background: rgba(255, 255, 255, 0.05);
          padding: 6px;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .filter-btn {
          padding: 10px 24px;
          border-radius: 100px;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          white-space: nowrap;
        }

        .filter-btn:hover {
          color: var(--text-primary);
        }

        .filter-btn.active {
          background: var(--text-primary);
          color: var(--bg-primary);
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
        }

        .carousel-container {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
        }

        .media-player-bar {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          background: #1a1a1a;
          border: 1px solid rgba(255,255,255,0.05);
          padding: 12px 24px;
          border-radius: 12px;
          margin-top: 2rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1);
        }

        .media-nav-buttons {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .nav-chevron {
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          padding: 0;
        }

        .nav-chevron:hover {
          color: white;
          transform: scale(1.1);
        }

        .play-pause-btn {
          background: #111;
          border: 1px solid rgba(255,255,255,0.05);
          box-shadow: inset 0 2px 5px rgba(0,0,0,0.8), 0 1px 0 rgba(255,255,255,0.1);
          color: white;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: all 0.2s;
        }

        .play-pause-btn:hover {
          background: #151515;
          transform: scale(1.05);
        }

        .progress-container {
          flex: 1;
          display: flex;
          align-items: center;
        }

        .progress-track {
          width: 100%;
          height: 8px;
          background: #0a0a0a;
          border-radius: 4px;
          box-shadow: inset 0 1px 3px rgba(0,0,0,0.8), 0 1px 0 rgba(255,255,255,0.05);
          position: relative;
        }

        .progress-fill {
          height: 100%;
          width: 0%;
          background: #ffffff;
          border-radius: 4px;
          position: relative;
        }

        .progress-knob {
          width: 14px;
          height: 14px;
          background: linear-gradient(135deg, #e0e0e0, #888);
          border-radius: 50%;
          position: absolute;
          right: -7px;
          top: 50%;
          transform: translateY(-50%);
          box-shadow: 0 2px 4px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.8);
        }

        .media-time {
          font-family: 'Space Mono', monospace;
          color: rgba(255,255,255,0.4);
          font-size: 0.85rem;
          letter-spacing: 0.1em;
        }

        .carousel-wrapper {
          width: 100%;
          position: relative;
          padding: 1rem 0 3rem 0;
          display: flex;
          scrollbar-width: none;
        }
        
        .carousel-wrapper::-webkit-scrollbar {
          display: none;
        }

        .carousel-track {
          display: flex;
          width: max-content;
          gap: 2rem;
          padding-left: max(24px, calc((100vw - 1100px) / 2));
          padding-right: max(24px, calc((100vw - 1100px) / 2));
        }

        .carousel-group {
          display: flex;
          gap: 2rem;
        }

        .carousel-item {
          width: 400px;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .filter-section-wrapper {
            flex-direction: column;
            align-items: flex-start;
          }
          .filter-container {
            padding-left: 16px;
            padding-right: 16px;
            overflow: visible;
          }
          .filter-bar {
            flex-wrap: wrap;
            border-radius: 20px;
            padding: 8px;
            gap: 6px;
          }
          .filter-btn {
            font-size: 0.85rem;
            padding: 8px 16px;
          }
        }

        @media (max-width: 640px) {
            .carousel-item {
                width: 80vw;
                max-width: 320px;
                min-width: auto;
            }
        }
      `}</style>
        </section>
    );
};

export default PortfolioGrid;
