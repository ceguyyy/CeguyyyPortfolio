import Card from './Card';
import hrisImg from '../assets/hris_system.png';
import vesselImg from '../assets/vessel_management.png';
import eprocurementImg from '../assets/eprocurement.png';
import healthImg from '../assets/health_analytics.png';
import docMgmtImg from '../assets/document_management.png';
import ebudgetingImg from '../assets/ebudgeting.png';
import hseImg from '../assets/hse_management.png';
import auditImg from '../assets/audit_system.png';
import workflowImg from '../assets/workflow_integration.png';

const projects = [
    {
        id: 0,
        title: 'Agentic AI Agent & CRM',
        category: 'AI & Enterprise Solution',
        description: 'Intelligent multi-channel AI communication agent with CRM integration.',
        image: null,
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

import { useState } from 'react';

const PortfolioGrid = ({ onProjectClick }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    
    const categories = ['All', 'AI & Enterprise Solution', 'Enterprise Software', 'Logistics Platform', 'FinTech Solution', 'Mobile Analytics', 'Safety Management'];

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <section id="work" className="section portfolio-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Selected Work.</h2>
                    <p className="section-subtitle">A collection of project case studies, solution architectures, and digital transformations.</p>
                </div>

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

                <div className="grid">
                    {filteredProjects.map(p => (
                        <Card 
                            key={p.id} 
                            {...p} 
                            onClick={() => onProjectClick(p)}
                        />
                    ))}
                </div>
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

        .section-title {
          font-size: clamp(2rem, 4vw, 2.5rem);
          font-weight: 600;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        .filter-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 40px;
        }

        .filter-btn {
          padding: 8px 18px;
          border-radius: var(--radius-sm);
          background: var(--bg-primary);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .filter-btn:hover {
          background: var(--bg-secondary);
          color: var(--text-primary);
        }

        .filter-btn.active {
          background: var(--text-primary);
          color: var(--bg-primary);
          border-color: var(--text-primary);
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
        }

        @media (max-width: 640px) {
            .grid {
                grid-template-columns: 1fr;
            }
            .filter-bar {
                gap: 8px;
            }
            .filter-btn {
                font-size: 0.8rem;
                padding: 6px 14px;
            }
        }
      `}</style>
        </section>
    );
};

export default PortfolioGrid;
