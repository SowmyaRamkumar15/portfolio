import { Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import './Footer.css';

const socialLinks = [
  { label: 'GitHub', icon: GithubIcon, href: 'https://github.com/SowmyaRamkumar15' },
  { label: 'LinkedIn', icon: LinkedinIcon, href: 'https://www.linkedin.com/in/sowmyaramkumar' },
  { label: 'LeetCode', icon: Code2, href: 'https://leetcode.com/u/Sowmyar15/' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        
        <div className="footer__top">
          <div className="footer__identity">
            <span className="footer__name">Sowmya R.</span>
            <span className="footer__title">Computer Science Engineering Student &bull; Java Full Stack Developer</span>
          </div>

          <div className="footer__links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link-item"
                aria-label={link.label}
              >
                <link.icon size={15} />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {currentYear} Sowmya R. Designed with clean engineering principles.
          </p>
          <span className="footer__location">Coimbatore, Tamil Nadu, India</span>
        </div>

      </div>
    </footer>
  );
}
