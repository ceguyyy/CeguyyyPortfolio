import { useState } from 'react';
import MagicBento from './MagicBento';
import pawpalsImg from '../assets/pawpals.png';
import powercalsImg from '../assets/powercals.png';
import bicaraImg from '../assets/bicara.png';
import hanvestImg from '../assets/hanvest.png';

const personalProjects = [
    {
        id: 1,
        title: 'PawPals',
        category: 'SpriteKit Game Programmer',
        description: 'A fellowship game featuring two charming cats, Catio and Kitty. The game combines engaging storytelling with beautiful illustrations to teach the value of harmony and teamwork.',
        image: pawpalsImg,
        link: 'https://github.com/tandyys/MiniChallenge2-MonkStudio',
        linkLabel: 'View on GitHub'
    },
    {
        id: 2,
        title: 'PowerCals',
        category: 'SwiftUI Programmer',
        description: 'A cutting-edge app designed for athletes and fitness enthusiasts to accurately calculate their 1-Rep Max (1RM) for any exercise.',
        image: powercalsImg,
        link: 'https://github.com/Ragnarom-kun/Nano_3_Gymbro',
        linkLabel: 'View on GitHub'
    },
    {
        id: 3,
        title: 'Bicara AAC',
        category: 'Mobile UIKit Programmer',
        description: 'An AAC app designed to support communication for individuals with autism. Offers customizable communication boards with images and text-to-speech features.',
        image: bicaraImg,
        link: 'https://apps.apple.com/id/app/bicara-aac/id6654926035',
        linkLabel: 'View on App Store'
    },
    {
        id: 4,
        title: 'Hanvest App',
        category: 'App Developer',
        description: 'A gamification app helping users make clear, objective choices in investment instruments. Builds confidence and skill for smart decisions in the real stock market.',
        image: hanvestImg,
        link: 'https://github.com/hcupiter/hanvest',
        linkLabel: 'View on GitHub'
    },
    {
        id: 5,
        title: 'Borobudur Temple UI',
        category: 'Mobile UI/UX',
        description: 'Immersive mobile app interface design for exploring Borobudur Temple.',
        image: null,
        link: 'https://www.figma.com/proto/8QgHjS0WUU380aWLhdB1nD/UAS_Christian-Gunawan_2540115521_HCI?node-id=19%3A877&scaling=scale-down&page-id=0%3A1&starting-point-node-id=19%3A835',
        linkLabel: 'View Prototype'
    },
    {
        id: 6,
        title: 'Dietio',
        category: 'Mobile UI/UX',
        description: 'Modern diet and health tracking application design.',
        image: null,
        link: 'https://www.figma.com/proto/sxmRZK74dj7Ge2wYknXDfy/Christian-X-Ivan?scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A7&show-proto-sidebar=1&node-id=2%3A7',
        linkLabel: 'View Prototype'
    },
    {
        id: 7,
        title: 'ADEX LEGENDS',
        category: 'Web Development',
        description: 'A dynamic gaming website inspired by Apex Legends.',
        image: null,
        link: 'https://adex-legends-christian-gunawan-2540115521.netlify.app/',
        linkLabel: 'View Site'
    },
    {
        id: 8,
        title: 'Piscis Aquarium',
        category: 'Web Design',
        description: 'Elegant web design for a premium aquarium experience.',
        image: null,
        link: 'https://piscis-aquarium-christian-gunawan-2540115521.netlify.app/',
        linkLabel: 'View Site'
    },
    {
        id: 9,
        title: 'Kelana App Mobile',
        category: 'Mobile Design',
        description: 'Mobile user interface design for the Kelana travel application.',
        image: null,
        link: 'https://www.figma.com/proto/HuDgSnlEMSAkRbY9BxZ9eW/Kelana-App?node-id=36%3A1482&scaling=min-zoom&page-id=32%3A300&starting-point-node-id=36%3A1482',
        linkLabel: 'View Prototype'
    },
    {
        id: 10,
        title: 'Kelana App Web',
        category: 'Web Design',
        description: 'Web, desktop interface design for the Kelana travel platform.',
        image: null,
        link: 'https://www.figma.com/proto/HuDgSnlEMSAkRbY9BxZ9eW/Kelana-App?node-id=159-2825&scaling=min-zoom&page-id=159%3A1110&starting-point-node-id=159%3A2825&show-proto-sidebar=1',
        linkLabel: 'View Prototype'
    },
    {
        id: 11,
        title: 'Peta Stunting Indonesia',
        category: 'Data Visualization',
        description: 'Interactive map visualizing stunting prevalence across Indonesia to identify areas requiring attention.',
        image: null,
        link: 'https://rcsbinusem4.netlify.app/',
        linkLabel: 'View Map'
    }
];

const PersonalProjects = () => {
    const bentoItems = personalProjects.map(p => ({
        title: p.title,
        description: p.description,
        label: p.category,
        color: '#1a1a1a',
        image: p.image,
        onClick: () => window.open(p.link, '_blank')
    }));

    return (
        <section id="personal-projects" className="section personal-projects-section">
            <div className="container">
                <div className="section-header">
                    <h2>Side Projects</h2>
                    <p>Independent experiments, open source contributions, and fun hacks.</p>
                </div>

                <div className="bento-wrapper">
                    <MagicBento
                        items={bentoItems}
                        enableStars={true}
                        enableSpotlight={true}
                        enableBorderGlow={true}
                        enableTilt={true}
                        enableMagnetism={true}
                        clickEffect={true}
                        spotlightRadius={300}
                        particleCount={12}
                        glowColor="59, 130, 246" // Blue glow to match theme (converted from accent hex key)
                    />
                </div>
            </div>

            <style>{`
        .personal-projects-section {
          padding: 80px 0;
        }

        .section-header {
          margin-bottom: 60px;
          max-width: 600px;
        }
        
        .bento-wrapper {
            width: 100%;
            /* MagicBento handles responsiveness internally */
        }
      `}</style>
        </section>
    );
};

export default PersonalProjects;
