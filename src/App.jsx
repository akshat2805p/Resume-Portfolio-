import React, { useState, useEffect } from 'react';
import HoloBackground from './components/HoloBackground';
import AkshatNavbar from './components/AkshatNavbar';
import AkshatHero from './components/AkshatHero';
import AkshatProjects from './components/AkshatProjects';
import AkshatSkills from './components/AkshatSkills';
import AkshatExperience from './components/AkshatExperience';
import AkshatArchive from './components/AkshatArchive';
import AkshatContact from './components/AkshatContact';
import AkshatModals from './components/AkshatModals';

export default function App() {
  const [thesisOpen, setThesisOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('projects');

  // Scroll spy to update navbar dock highlight based on viewport position
  useEffect(() => {
    const sectionIds = ['top', 'projects', 'skills', 'experience', 'archive', 'contact'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 280;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            if (id === 'top') setActiveSection('projects');
            else setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global scroll reveal observer for buttery smooth scrolling animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.scroll-reveal, .scroll-scale');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="shivam-portfolio-root">
      {/* 1. Holo Mosaic Background Studio with Monochrome Holographic Tiles */}
      <HoloBackground />

      {/* 2. Floating Bottom Dock with Section Icons & Social Channels */}
      <header className="fold">
        <AkshatNavbar activeSection={activeSection} />
      </header>

      {/* 3. Hero Section with 3D Lanyard ID Badge & Interactive Glowing Tech Logos */}
      <AkshatHero
        onOpenThesis={() => setThesisOpen(true)}
        onOpenResume={() => setCvOpen(true)}
      />

      {/* 4. Flagship Projects with 3D Stage Carousel (Strictly 3 Projects) */}
      <div className="scroll-reveal">
        <AkshatProjects
          onSelectProject={(project) => setSelectedProject(project)}
        />
      </div>

      {/* 5. Technical Skills & Engineering Toolchain */}
      <div className="scroll-reveal">
        <AkshatSkills />
      </div>

      {/* 6. Trajectory & Milestones: Redesigned IIT Bombay Fellowship, VIT Bhopal, LeetCode Knight */}
      <AkshatExperience
        onOpenThesis={() => setThesisOpen(true)}
      />

      {/* 7. Complete 33-Repository GitHub Manifest with ChromaGrid */}
      <div className="scroll-reveal">
        <AkshatArchive />
      </div>

      {/* 8. Dedicated Contact Section with Interactive Spotlight Business Card & Form */}
      <div className="scroll-reveal">
        <AkshatContact />
      </div>

      {/* 9. Interactive Modals: FOSSEE Thesis Story, Printable CV, Case Studies */}
      <AkshatModals
        thesisOpen={thesisOpen}
        onCloseThesis={() => setThesisOpen(false)}
        cvOpen={cvOpen}
        onCloseCV={() => setCvOpen(false)}
        selectedProject={selectedProject}
        onCloseProject={() => setSelectedProject(null)}
      />
    </div>
  );
}
