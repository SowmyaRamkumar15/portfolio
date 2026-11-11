import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        
        <AnimatedSection>
          <SectionHeading 
            number="09"
            label="Get in Touch"
            title="Have an interesting opportunity or technical discussion?"
            serifAccent="Let's connect."
            subtitle="I am actively seeking software engineering and full-stack development opportunities. Open to technical conversations and collaborative projects."
          />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="contact__editorial-card">
            
            <div className="contact__status-strip">
              <span className="contact__dot" />
              <span className="contact__status-label">Open to full-time and internship software engineering roles</span>
            </div>

            <div className="contact__channels">
              
              {/* Email */}
              <a href="mailto:sowmyaramkumar15@gmail.com" className="contact-channel">
                <div className="contact-channel__info">
                  <span className="contact-channel__label">Direct Email</span>
                  <span className="contact-channel__value">sowmyaramkumar15@gmail.com</span>
                </div>
                <ArrowUpRight size={16} className="contact-channel__arrow" />
              </a>

              {/* Phone */}
              <a href="tel:+916381836086" className="contact-channel">
                <div className="contact-channel__info">
                  <span className="contact-channel__label">Phone / WhatsApp</span>
                  <span className="contact-channel__value">+91 6381836086</span>
                </div>
                <ArrowUpRight size={16} className="contact-channel__arrow" />
              </a>

              {/* Location */}
              <div className="contact-channel contact-channel--static">
                <div className="contact-channel__info">
                  <span className="contact-channel__label">Location</span>
                  <span className="contact-channel__value">Coimbatore, Tamil Nadu, India</span>
                </div>
              </div>

            </div>

            {/* Professional Profiles */}
            <div className="contact__networks-footer">
              <span className="networks-label">Professional Profiles:</span>
              <div className="networks-row">
                <a 
                  href="https://www.linkedin.com/in/sowmyaramkumar" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="network-link"
                >
                  <LinkedinIcon size={14} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={12} />
                </a>

                <a 
                  href="https://github.com/SowmyaRamkumar15" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="network-link"
                >
                  <GithubIcon size={14} />
                  <span>GitHub</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
