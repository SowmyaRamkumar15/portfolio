import { useState, useEffect } from 'react';
import { GitCommit, GitPullRequest, GitFork, Star, ExternalLink, Calendar } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import './GitHubActivity.css';

export default function GitHubActivity() {
  const [userData, setUserData] = useState({
    publicRepos: 18,
    bio: 'CSE Student | Java Full Stack Developer | DSA | Spring Boot | React.js | MySQL',
    topRepos: [
      {
        name: 'Honey-Trackability-System',
        description: 'Trackability & verification system with structured backend logging and modular architecture.',
        language: 'Java',
        stars: 0,
        forks: 0,
        url: 'https://github.com/SowmyaRamkumar15/Honey-Trackability-System'
      },
      {
        name: 'Campus-Recruitment-System',
        description: 'Full-stack campus recruitment suite with JWT auth and Spring Boot RESTful services.',
        language: 'Java',
        stars: 0,
        forks: 0,
        url: 'https://github.com/SowmyaRamkumar15'
      },
      {
        name: 'Tourizo-Travel-App',
        description: 'Responsive travel booking web application built with React.js & modern UI components.',
        language: 'JavaScript',
        stars: 0,
        forks: 0,
        url: 'https://github.com/SowmyaRamkumar15'
      }
    ]
  });

  useEffect(() => {
    let isMounted = true;
    async function fetchGitHubData() {
      try {
        const [userRes, reposRes] = await Promise.allSettled([
          fetch('https://api.github.com/users/SowmyaRamkumar15'),
          fetch('https://api.github.com/users/SowmyaRamkumar15/repos?sort=updated&per_page=6')
        ]);

        if (userRes.status === 'fulfilled' && userRes.value.ok) {
          const user = await userRes.value.json();
          if (isMounted) {
            setUserData(prev => ({
              ...prev,
              publicRepos: user.public_repos || prev.publicRepos,
              bio: user.bio || prev.bio
            }));
          }
        }

        if (reposRes.status === 'fulfilled' && reposRes.value.ok) {
          const repos = await reposRes.value.json();
          if (isMounted && Array.isArray(repos) && repos.length > 0) {
            const mapped = repos.slice(0, 3).map(r => ({
              name: r.name,
              description: r.description || 'Public repository showcasing software engineering and clean code practices.',
              language: r.language || 'Java',
              stars: r.stargazers_count || 0,
              forks: r.forks_count || 0,
              url: r.html_url
            }));
            setUserData(prev => ({ ...prev, topRepos: mapped }));
          }
        }
      } catch (e) {
        // Fallback to verified information
      }
    }
    fetchGitHubData();
    return () => { isMounted = false; };
  }, []);

  return (
    <div className="github-activity">
      <div className="github-activity__header">
        <div className="github-activity__identity">
          <div className="github-activity__icon-wrap">
            <GithubIcon size={24} />
          </div>
          <div>
            <h4 className="github-activity__title">GitHub Engineering Activity</h4>
            <span className="github-activity__sub">@SowmyaRamkumar15 &bull; {userData.publicRepos} Public Repositories</span>
          </div>
        </div>

        <a 
          href="https://github.com/SowmyaRamkumar15" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="github-activity__link"
        >
          <span>View GitHub Profile</span>
          <ExternalLink size={14} />
        </a>
      </div>

      <div className="github-activity__graph-card">
        <div className="github-activity__graph-header">
          <div className="github-activity__commit-badge">
            <GitCommit size={14} className="accent-lime" />
            <span>Public Contributions & Consistency</span>
          </div>
          <span className="github-activity__badge-status">Active Codebase Activity</span>
        </div>
        
        {/* Responsive Contribution Graph Visualizer */}
        <div className="github-activity__visual-canvas">
          <img 
            src="https://ghchart.rshah.org/A3E635/SowmyaRamkumar15" 
            alt="Sowmya R's GitHub Contributions Chart"
            className="github-activity__chart-img"
            onError={(e) => {
              e.target.style.display = 'none';
              const fallback = e.target.nextSibling;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div className="github-activity__chart-fallback" style={{ display: 'none' }}>
            <Calendar size={18} />
            <span>Contributions actively maintained across Java, React, and Full Stack repositories.</span>
          </div>
        </div>
      </div>

      <div className="github-activity__repos-grid">
        {userData.topRepos.map((repo) => (
          <a 
            key={repo.name} 
            href={repo.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="github-activity__repo-card"
          >
            <div className="github-activity__repo-top">
              <span className="github-activity__repo-name">{repo.name}</span>
              <ExternalLink size={13} className="github-activity__repo-arrow" />
            </div>
            <p className="github-activity__repo-desc">{repo.description}</p>
            <div className="github-activity__repo-meta">
              <span className="github-activity__lang-pill">
                <span className="lang-dot" /> {repo.language}
              </span>
              <span className="github-activity__star-pill">
                <Star size={12} /> {repo.stars}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

