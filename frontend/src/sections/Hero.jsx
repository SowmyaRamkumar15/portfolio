import { useState, useRef } from 'react';
import { Download, Mail, ArrowUpRight, Camera } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import './Hero.css';

export default function Hero() {
  const [profileImg, setProfileImg] = useState(() => {
    return localStorage.getItem('sowmya_profile_photo') || null;
  });
  const fileInputRef = useRef(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImg(reader.result);
        try {
          localStorage.setItem('sowmya_profile_photo', reader.result);
        } catch (err) {
          // LocalStorage storage quota catch
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero__container">
        
        {/* Left Editorial Profile & Introduction */}
        <div className="hero__editorial">
          <div className="hero__kicker">
            <span className="hero__status-indicator" />
            <span className="hero__kicker-text">Computer Science Engineering Student</span>
          </div>

          <h1 className="hero__title">
            Sowmya R<span className="hero__period">.</span>
          </h1>

          <p className="hero__role">
            Aspiring Software Engineer <span className="hero__role-divider">—</span> <em>Java Full Stack Developer</em>
          </p>

          <p className="hero__bio">
            I enjoy building practical software solutions, exploring backend engineering, and solving problems through code. My interests lie in Java, full-stack development, and creating applications that solve real-world problems.
          </p>

          {/* Action Row */}
          <div className="hero__actions">
            <a
              href="#projects"
              className="hero__btn hero__btn--solid"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Projects
            </a>

            <a 
              href="/resume.pdf" 
              download="Sowmya_R_Resume.pdf" 
              className="hero__btn hero__btn--outline"
            >
              <Download size={15} />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="hero__btn hero__btn--text"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Social Proof & Profiles */}
          <div className="hero__connect-strip">
            <span className="hero__connect-label">Verified Networks:</span>
            <div className="hero__social-links">
              <a 
                href="https://github.com/SowmyaRamkumar15" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero__social-item"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/sowmyaramkumar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero__social-item"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>

              <a 
                href="mailto:sowmyaramkumar15@gmail.com" 
                className="hero__social-item"
                aria-label="Email Sowmya"
              >
                <Mail size={15} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Genuine Portrait / Identity Area */}
        <div className="hero__portrait-column">
          <div className="hero__portrait-frame">
            {profileImg ? (
              <img 
                src={profileImg} 
                alt="Sowmya R" 
                className="hero__portrait-image" 
              />
            ) : (
              <div className="hero__portrait-placeholder">
                <span className="hero__portrait-monogram">SR</span>
                <span className="hero__portrait-note">Profile Photograph</span>
              </div>
            )}

            {/* Photo Upload Trigger */}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handlePhotoUpload} 
              accept="image/*" 
              className="hero__file-input" 
              aria-label="Upload your profile photograph"
            />
            <button 
              type="button"
              className="hero__photo-badge"
              onClick={() => fileInputRef.current?.click()}
              title="Click to add or update photograph"
            >
              <Camera size={13} />
              <span>{profileImg ? 'Change Photo' : 'Add Photo'}</span>
            </button>
          </div>

          {/* Editorial Caption */}
          <div className="hero__portrait-caption">
            <span className="caption-tag">Coimbatore, India</span>
            <p className="caption-detail">Sri Krishna College of Engineering and Technology &bull; B.E. CSE</p>
          </div>
        </div>

      </div>
    </section>
  );
}
