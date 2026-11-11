import { MapPin, GraduationCap, Code2, Heart, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        
        <AnimatedSection>
          <SectionHeading 
            number="01"
            label="Background"
            title="Building with intention and engineering discipline"
            serifAccent="from the core."
          />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="about__layout">
            
            {/* Left Narrative Column */}
            <div className="about__narrative">
              <p className="about__lead">
                I am a Computer Science Engineering student at <strong>Sri Krishna College of Engineering and Technology</strong> with a strong commitment to backend engineering, robust API development, and reliable full-stack architecture.
              </p>

              <p className="about__body">
                My day-to-day engineering focuses on Java, Spring Boot, MySQL, and Data Structures & Algorithms. Through hands-on internships and independent projects, I have developed production-style RESTful services, designed role-based access architectures, integrated modern React frontends, and applied clean code patterns within Agile team workflows.
              </p>

              <p className="about__body">
                I approach software with an engineering mindset: preferring clean, maintainable systems over superficial complexity. Outside coursework, I dedicate consistent practice to competitive problem solving and exploring cloud deployment paradigms.
              </p>

              <div className="about__signature">
                <span className="about__sig-name">Sowmya R.</span>
                <span className="about__sig-role">Coimbatore, Tamil Nadu, India</span>
              </div>
            </div>

            {/* Right Information Ledger */}
            <aside className="about__ledger">
              <div className="about__ledger-header">
                <span className="about__ledger-title">Quick Overview</span>
              </div>

              <dl className="about__ledger-list">
                <div className="about__ledger-row">
                  <dt>Current Status</dt>
                  <dd>B.E. Computer Science & Engineering (Final Year)</dd>
                </div>

                <div className="about__ledger-row">
                  <dt>Institution</dt>
                  <dd>Sri Krishna College of Engineering & Technology</dd>
                </div>

                <div className="about__ledger-row">
                  <dt>Core Specialization</dt>
                  <dd>Java Full Stack & Backend Systems</dd>
                </div>

                <div className="about__ledger-row">
                  <dt>Location</dt>
                  <dd>Coimbatore, Tamil Nadu, India</dd>
                </div>

                <div className="about__ledger-row">
                  <dt>Availability</dt>
                  <dd className="highlight-text">Open to Software Engineering Opportunities</dd>
                </div>
              </dl>
            </aside>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
