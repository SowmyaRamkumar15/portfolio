import { Calendar, Award } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import { education } from '../data/education';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="education__container">
        
        <AnimatedSection>
          <SectionHeading 
            number="05"
            label="Academic Record"
            title="Formal engineering education"
            serifAccent="& foundations."
            subtitle="Degree coursework in Computer Science & Engineering emphasizing algorithms, OOP, database design, and systems architecture."
          />
        </AnimatedSection>

        <div className="education__table-wrap">
          <div className="education__ledger">
            {education.map((edu, i) => (
              <AnimatedSection key={edu.id} delay={i * 80}>
                <div className="education__row">
                  <div className="education__period-col">
                    <span className="education__period">{edu.period}</span>
                    <span className="education__tag">{edu.type === 'undergraduate' ? 'Undergraduate Degree' : 'Secondary Schooling'}</span>
                  </div>

                  <div className="education__details-col">
                    <h3 className="education__institution">{edu.institution}</h3>
                    <p className="education__degree">{edu.degree}</p>
                  </div>

                  <div className="education__score-col">
                    <span className="education__score-label">Evaluation</span>
                    <span className="education__score-value">{edu.score}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
