import { useState, useRef } from 'react';
import { ExternalLink, Check, Image as ImageIcon, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import './ProjectCard.css';

export default function ProjectCard({ project, index, layoutType = 'standard' }) {
  const [screenshot, setScreenshot] = useState(() => {
    return localStorage.getItem(`project_shot_${project.id}`) || null;
  });
  const fileInputRef = useRef(null);

  const handleScreenshotUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setScreenshot(reader.result);
        try {
          localStorage.setItem(`project_shot_${project.id}`, reader.result);
        } catch (err) {
          // LocalStorage storage quota
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <article className={`project-editorial ${project.featured ? 'project-editorial--featured' : ''} project-editorial--${layoutType}`}>
      
      {/* Content Column */}
      <div className="project-editorial__content">
        <div className="project-editorial__meta-bar">
          <span className="project-editorial__number">0{index + 1}</span>
          <span className="project-editorial__category">{project.category}</span>
          {project.featured && (
            <span className="project-editorial__featured-pill">Featured Work</span>
          )}
        </div>

        <h3 className="project-editorial__title">{project.title}</h3>

        <div className="project-editorial__section-block">
          <h4 className="project-editorial__section-label">Problem It Solves</h4>
          <p className="project-editorial__description">{project.description}</p>
        </div>

        {project.contributions && project.contributions.length > 0 && (
          <div className="project-editorial__section-block">
            <h4 className="project-editorial__section-label">Engineering Contributions</h4>
            <ul className="project-editorial__contributions-list">
              {project.contributions.map((item, i) => (
                <li key={i}>
                  <Check size={14} className="contrib-check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies Tag Group */}
        <div className="project-editorial__tech-group">
          {project.technologies.map((tech) => (
            <span key={tech} className="project-editorial__tech-badge">{tech}</span>
          ))}
        </div>

        {/* Links */}
        <div className="project-editorial__actions">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-editorial__btn project-editorial__btn--code"
            >
              <GithubIcon size={15} />
              <span>GitHub Repository</span>
            </a>
          )}
          {project.live && (
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-editorial__btn project-editorial__btn--live"
            >
              <span>Live Demonstration</span>
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>

      {/* Visual / Screenshot Showcase */}
      <div className="project-editorial__visual-pane">
        <div className="project-editorial__frame">
          {screenshot ? (
            <img 
              src={screenshot} 
              alt={`${project.title} Interface Screenshot`} 
              className="project-editorial__img" 
            />
          ) : (
            <div className="project-editorial__empty-state">
              <div className="project-editorial__empty-icon">
                <ImageIcon size={28} />
              </div>
              <span className="project-editorial__empty-title">Actual Project Screenshot</span>
              <p className="project-editorial__empty-desc">
                Upload genuine interface screenshots from this project when ready.
              </p>
            </div>
          )}

          {/* Screenshot Upload Button */}
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleScreenshotUpload} 
            accept="image/*" 
            className="project-editorial__file-input" 
            aria-label={`Upload screenshot for ${project.title}`}
          />
          <button 
            type="button"
            className="project-editorial__upload-btn"
            onClick={() => fileInputRef.current?.click()}
            title="Click to add or replace genuine project screenshot"
          >
            <ImageIcon size={13} />
            <span>{screenshot ? 'Replace Screenshot' : 'Upload Screenshot'}</span>
          </button>
        </div>
      </div>

    </article>
  );
}
