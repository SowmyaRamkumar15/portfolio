import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Achievements from './sections/Achievements';
import Certifications from './sections/Certifications';
import CodingProfiles from './sections/CodingProfiles';
import Contact from './sections/Contact';
import { useActiveSection } from './hooks/useActiveSection';

const SECTION_IDS = [
  'home',
  'about',
  'skills',
  'projects',
  'experience',
  'education',
  'achievements',
  'certifications',
  'coding-profiles',
  'contact'
];

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="portfolio-app">
      <Navbar 
        activeSection={activeSection} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Certifications />
        <CodingProfiles />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
