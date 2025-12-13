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
        id: 1,
        title: 'HRIS System',
        category: 'Enterprise Software',
        description: 'Comprehensive Human Resource Information System for client.',
        image: hrisImg
    },
    {
        id: 2,
        title: 'Vessel Management System',
        category: 'Logistics Platform',
        description: 'End-to-end management solution for maritime vessel operations for client.',
        image: vesselImg
    },
    {
        id: 3,
        title: 'Source to Pay E-procurement',
        category: 'FinTech Solution',
        description: 'Streamlined procurement process automation system for client.',
        image: eprocurementImg
    },
    {
        id: 4,
        title: 'Health Analytics',
        category: 'Mobile Analytics',
        description: 'Healthcare data analytics platform for Siloam Mobile.',
        image: healthImg
    },
    {
        id: 5,
        title: 'Document Management System',
        category: 'Enterprise Tool',
        description: 'Secure digital document organization and archiving system for client.',
        image: docMgmtImg
    },
    {
        id: 6,
        title: 'E-budgeting',
        category: 'Financial Planning',
        description: 'Digital budgeting and forecasting tool for client enterprises.',
        image: ebudgetingImg
    },
    {
        id: 7,
        title: 'HSE End to End',
        category: 'Safety Management',
        description: 'Complete Health, Safety, and Environment management suite for client.',
        image: hseImg
    },
    {
        id: 8,
        title: 'Audit Management System',
        category: 'Compliance Tool',
        description: 'Digital auditing workflow and compliance tracking for client.',
        image: auditImg
    },
    {
        id: 9,
        title: 'Workflow Integration',
        category: 'System Integration',
        description: 'Seamless integration of disparate business workflows for client efficiency.',
        image: workflowImg
    }
];

const PortfolioGrid = () => {
    return (
        <section id="work" className="section portfolio-section">
            <div className="container">
                <div className="section-header">
                    <h2>Selected Work</h2>
                    <p>A collection of project case studies and experiments.</p>
                </div>

                <div className="grid">
                    {projects.map(p => (
                        <Card key={p.id} {...p} />
                    ))}
                </div>
            </div>

            <style>{`
        .portfolio-section {
          padding: 80px 0;
        }

        .section-header {
          margin-bottom: 60px;
          max-width: 600px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }

        @media (max-width: 640px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }
      `}</style>
        </section>
    );
};

export default PortfolioGrid;
