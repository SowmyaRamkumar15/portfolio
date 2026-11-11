import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/ProjectCard';
import ProjectWalkthrough from '../components/ProjectWalkthrough';
import { projects } from '../data/projects';
import './Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const categories = ['all', ...new Set(projects.map(p => p.category.split('|')[0].trim()))];
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category.includes(filter));

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        
        <div className="projects__header-row">
          <SectionHeading 
            number="03"
            label="Selected Works"
            title="Real-world engineering projects"
            serifAccent="& full-stack systems."
            subtitle="Authentic systems built with production-style MVC architecture, RAG pipelines, and responsive React clients."
          />

          <div className="projects__filter-strip">
            {categories.map(cat => (
              <button
                key={cat}
                className={`projects__filter-btn ${filter === cat ? 'projects__filter-btn--active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat === 'all' ? 'All Selected' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Showcase List (Asymmetric Editorial Flow) */}
        <div className="projects__flow">
          {filtered.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 80}>
              <ProjectCard 
                project={project} 
                index={i} 
                layoutType={i % 2 === 1 ? 'reverse' : 'standard'}
              />
            </AnimatedSection>
          ))}
        </div>

        {/* Architecture Deep Dive for Interviora */}
        <AnimatedSection delay={150}>
          <ProjectWalkthrough />
        </AnimatedSection>

      </div>
    </section>
  );
}
