import { useState } from 'react';
import CardNav from './components/CardNav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import PortfolioGrid from './components/PortfolioGrid';
import PersonalProjects from './components/PersonalProjects';
import Organization from './components/Organization';
import DoodleBoard from './components/DoodleBoard';
import Certificates from './components/Certificates';
import Footer from './components/Footer';
import RevealScroll from './components/RevealScroll';
import LogoLoop from './components/LogoLoop';
import ProjectModal from './components/ProjectModal';
import BackToTop from './components/BackToTop';
import ColorBends from './components/ColorBends';
import AudioPlayer from './components/AudioPlayer';
import WhatsAppWidget from './components/WhatsAppWidget';
import { SiGithub, SiMysql, SiSwift, SiNotion, SiMiro, SiConfluence, SiFigma, SiGoogle, SiOpenai, SiN8N } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const navItems = [
    {
      label: "Portfolio",
      bgColor: "#1a1a1a",
      textColor: "#fff",
      links: [
        { label: "About Me", href: "#about", ariaLabel: "Go to About" },
        { label: "My Work", href: "#work", ariaLabel: "View Portfolio" },
        { label: "Side Projects", href: "#personal-projects", ariaLabel: "View Personal Projects" }
      ]
    },
    {
      label: "Journey",
      bgColor: "#242424",
      textColor: "#fff",
      links: [
        { label: "Experience", href: "#experience", ariaLabel: "View Experience" },
        { label: "Education", href: "#education", ariaLabel: "View Education" },
        { label: "Organization", href: "#organization", ariaLabel: "View Organization" },
        { label: "Certificates", href: "#certificates", ariaLabel: "View Certificates" }
      ]
    },
    {
      label: "Connect",
      bgColor: "#2d2d2d",
      textColor: "#fff",
      links: [
        { label: "Contact Me", href: "#contact", ariaLabel: "Contact Section" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/christian404/", ariaLabel: "LinkedIn Profile" }
      ]
    }
  ];

  const techLogos = [
    { node: <SiGithub />, title: "Github", href: "https://github.com" },
    { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
    { node: <SiSwift />, title: "Swift", href: "https://developer.apple.com/swift/" },
    { node: <SiNotion />, title: "Notion", href: "https://www.notion.so" },
    { node: <SiMiro />, title: "Miro", href: "https://miro.com" },
    { node: <SiConfluence />, title: "Confluence", href: "https://www.atlassian.com/software/confluence" },
    { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
    { node: <FaJava />, title: "Java", href: "https://www.java.com" },
    { node: <SiGoogle />, title: "Gemini", href: "https://deepmind.google/technologies/gemini/" },
    { node: <SiOpenai />, title: "ChatGPT", href: "https://openai.com/chatgpt" },
    { node: <SiN8N />, title: "n8n", href: "https://n8n.io" },
  ];

  return (
    <div className="app">
      <ColorBends
        colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
        rotation={30}
        speed={0.3}
        scale={0.5}
        frequency={1.4}
        warpStrength={1.2}
        mouseInfluence={0.8}
        parallax={0.6}
        noise={0.00}
        transparent={false}
      />
      <CardNav items={navItems} />
      <Hero />

      <div style={{ padding: '2rem 0', opacity: 0.7 }}>
        <LogoLoop
          logos={techLogos}
          speed={50}
          direction="left"
          logoHeight={32}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut={true}
          fadeOutColor="transparent"
          ariaLabel="Technology Stack"
        />
      </div>

      <RevealScroll><About /></RevealScroll>
      <RevealScroll><Experience /></RevealScroll>
      <RevealScroll><PortfolioGrid onProjectClick={setSelectedProject} /></RevealScroll>
      <RevealScroll><PersonalProjects /></RevealScroll>
      <RevealScroll><Organization /></RevealScroll>
      <RevealScroll><Education /></RevealScroll>
      <RevealScroll><Certificates /></RevealScroll>
      <RevealScroll><DoodleBoard /></RevealScroll>
      <div className="container" style={{ margin: '4rem auto' }}>
        <div className="elfsight-app-c85c0ff1-1439-4c21-b4a5-362efceee87b" data-elfsight-app-lazy></div>
      </div>
      <Footer />
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      <AudioPlayer />
      <WhatsAppWidget />
      <BackToTop />
    </div>
  );
}

export default App;
