import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import TimelineItem from '../components/TimelineItem';
import { experiences } from '../data/experience';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        
        <AnimatedSection>
          <SectionHeading 
            number="04"
            label="Work History"
            title="Industry internships & engineering roles"
            serifAccent="collaborations."
            subtitle="Hands-on full-stack development, AI agent orchestration, and Agile team contributions."
          />
        </AnimatedSection>

        <div className="experience__ledger">
          {experiences.map((exp, i) => (
            <AnimatedSection key={exp.id} delay={i * 80}>
              <TimelineItem 
                experience={exp} 
                index={i} 
                isLast={i === experiences.length - 1} 
              />
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
