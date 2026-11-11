import { Calendar, MapPin, Check } from 'lucide-react';
import './TimelineItem.css';

export default function TimelineItem({ experience, index, isLast }) {
  return (
    <article className={`timeline-entry ${isLast ? 'timeline-entry--last' : ''}`}>
      
      {/* Date & Meta Column */}
      <div className="timeline-entry__time-column">
        <span className="timeline-entry__period">{experience.period}</span>
        {experience.location && (
          <span className="timeline-entry__location">
            <MapPin size={12} />
            <span>{experience.location}</span>
          </span>
        )}
      </div>

      {/* Role & Contributions Body */}
      <div className="timeline-entry__body">
        <div className="timeline-entry__header">
          <h3 className="timeline-entry__company">{experience.company}</h3>
          <span className="timeline-entry__role">{experience.role}</span>
        </div>

        {experience.project && (
          <div className="timeline-entry__project-note">
            <span className="project-note-label">Project:</span>
            <span className="project-note-title">{experience.project}</span>
          </div>
        )}

        {experience.responsibilities && experience.responsibilities.length > 0 && (
          <ul className="timeline-entry__responsibilities">
            {experience.responsibilities.map((item, i) => (
              <li key={i}>
                <Check size={14} className="timeline-check" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {experience.technologies && experience.technologies.length > 0 && (
          <div className="timeline-entry__technologies">
            {experience.technologies.map((tech) => (
              <span key={tech} className="timeline-tech-pill">{tech}</span>
            ))}
          </div>
        )}
      </div>

    </article>
  );
}
