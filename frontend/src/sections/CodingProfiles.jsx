import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import LeetCodeDashboard from '../components/LeetCodeDashboard';
import GitHubActivity from '../components/GitHubActivity';
import { codingProfiles } from '../data/codingProfiles';
import './CodingProfiles.css';

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="coding-profiles">
      <div className="coding-profiles__container">
        
        <AnimatedSection>
          <SectionHeading 
            number="08"
            label="Developer Profiles"
            title="Public coding platforms & algorithmic profiles"
            serifAccent="verified."
            subtitle="Persistent practice across LeetCode, GitHub, GeeksforGeeks, and HackerRank with genuine metrics."
          />
        </AnimatedSection>

        {/* Directory Row of Public Profiles */}
        <div className="coding-profiles__directory">
          {codingProfiles.map((profile, i) => (
            <AnimatedSection key={profile.id} delay={i * 60}>
              <a 
                href={profile.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="profile-directory-item"
              >
                <div className="profile-directory-item__header">
                  <span className="profile-directory-item__name">{profile.name}</span>
                  <ArrowUpRight size={14} className="profile-directory-item__arrow" />
                </div>
                <p className="profile-directory-item__desc">{profile.description}</p>
                <span className="profile-directory-item__link-text">Visit Verified Handle</span>
              </a>
            </AnimatedSection>
          ))}
        </div>

        {/* Verified LeetCode Metrics */}
        <AnimatedSection delay={120}>
          <LeetCodeDashboard />
        </AnimatedSection>

        {/* GitHub Engineering Activity */}
        <AnimatedSection delay={160}>
          <GitHubActivity />
        </AnimatedSection>

      </div>
    </section>
  );
}
