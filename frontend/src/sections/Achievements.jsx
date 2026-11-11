import { Trophy, Code2, ExternalLink, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import { achievements } from '../data/achievements';
import './Achievements.css';

export default function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <div className="achievements__container">
        
        <AnimatedSection>
          <SectionHeading 
            number="06"
            label="Honors & Milestones"
            title="Recognitions in competitive programming"
            serifAccent="& hackathons."
            subtitle="Verified milestones across intercollegiate hackathons, algorithm contests, and competitive coding practice."
          />
        </AnimatedSection>

        <div className="achievements__flow">
          {achievements.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 80}>
              <article className="achievement-highlight">
                <div className="achievement-highlight__meta">
                  <span className="achievement-highlight__num">0{i + 1}</span>
                  <span className="achievement-highlight__type">
                    {item.type === 'hackathon' ? 'Hackathon Recognition' : 'Problem Solving Milestone'}
                  </span>
                </div>

                <div className="achievement-highlight__content">
                  <h3 className="achievement-highlight__title">{item.title}</h3>
                  <p className="achievement-highlight__desc">{item.description}</p>

                  {item.profiles && item.profiles.length > 0 && (
                    <div className="achievement-highlight__links">
                      <span className="links-label">Verified Profiles:</span>
                      <div className="links-row">
                        {item.profiles.map(p => (
                          <a 
                            key={p.name} 
                            href={p.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="achievement-profile-pill"
                          >
                            <span>{p.name}</span>
                            <ArrowUpRight size={12} />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
