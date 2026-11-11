import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import SkillGroup from '../components/SkillGroup';
import { skillCategories } from '../data/skills';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        
        <AnimatedSection>
          <SectionHeading 
            number="02"
            label="Technical Stack"
            title="Categorized engineering capabilities"
            serifAccent="& tools."
            subtitle="Real tools, languages, and frameworks applied across academic projects, competitive programming, and internships."
          />
        </AnimatedSection>

        <div className="skills__categories-flow">
          {skillCategories.map((category, i) => (
            <AnimatedSection key={category.id} delay={i * 60}>
              <SkillGroup category={category} index={i} />
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
