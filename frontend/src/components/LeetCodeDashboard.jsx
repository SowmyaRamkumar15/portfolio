import { useState, useEffect } from 'react';
import { Code2, Award, Zap, CheckCircle2, ExternalLink, RefreshCw } from 'lucide-react';
import './LeetCodeDashboard.css';

export default function LeetCodeDashboard() {
  const [stats, setStats] = useState({
    totalSolved: 422,
    easySolved: 207,
    mediumSolved: 197,
    hardSolved: 18,
    ranking: 300459,
    contestRating: 1508,
    contestAttend: 9,
    topPercentage: 42.46,
    loading: false,
    updated: true
  });

  useEffect(() => {
    let isMounted = true;
    async function fetchLiveLeetCode() {
      try {
        const [profileRes, contestRes] = await Promise.allSettled([
          fetch('https://alfa-leetcode-api.onrender.com/userProfile/Sowmyar15'),
          fetch('https://alfa-leetcode-api.onrender.com/Sowmyar15/contest')
        ]);

        let profileData = null;
        let contestData = null;

        if (profileRes.status === 'fulfilled' && profileRes.value.ok) {
          profileData = await profileRes.value.json();
        }
        if (contestRes.status === 'fulfilled' && contestRes.value.ok) {
          contestData = await contestRes.value.json();
        }

        if (isMounted && profileData && profileData.totalSolved) {
          setStats(prev => ({
            ...prev,
            totalSolved: profileData.totalSolved || prev.totalSolved,
            easySolved: profileData.easySolved || prev.easySolved,
            mediumSolved: profileData.mediumSolved || prev.mediumSolved,
            hardSolved: profileData.hardSolved || prev.hardSolved,
            ranking: profileData.ranking || prev.ranking,
            contestRating: contestData?.contestRating ? Math.round(contestData.contestRating) : prev.contestRating,
            contestAttend: contestData?.contestAttend || prev.contestAttend,
            topPercentage: contestData?.contestTopPercentage || prev.topPercentage,
          }));
        }
      } catch (e) {
        // Fallback to verified cached metrics
      }
    }

    fetchLiveLeetCode();
    return () => { isMounted = false; };
  }, []);

  const total = stats.totalSolved || 422;
  const easyPct = Math.round((stats.easySolved / total) * 100);
  const medPct = Math.round((stats.mediumSolved / total) * 100);
  const hardPct = Math.round((stats.hardSolved / total) * 100);

  return (
    <div className="leetcode-dashboard">
      <div className="leetcode-dashboard__header">
        <div className="leetcode-dashboard__brand">
          <div className="leetcode-dashboard__logo-box">
            <Code2 size={24} />
          </div>
          <div>
            <h4 className="leetcode-dashboard__title">LeetCode Metrics Dashboard</h4>
            <span className="leetcode-dashboard__handle">@Sowmyar15 &bull; Verified Public Data</span>
          </div>
        </div>
        <a 
          href="https://leetcode.com/u/Sowmyar15/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="leetcode-dashboard__profile-btn"
        >
          <span>Live LeetCode Profile</span>
          <ExternalLink size={14} />
        </a>
      </div>

      <div className="leetcode-dashboard__stats-grid">
        <div className="leetcode-dashboard__main-stat">
          <div className="leetcode-dashboard__circle-progress">
            <svg viewBox="0 0 100 100" className="leetcode-dashboard__circular-chart">
              <circle
                className="circle-bg"
                cx="50"
                cy="50"
                r="40"
              />
              <circle
                className="circle-easy"
                cx="50"
                cy="50"
                r="40"
                strokeDasharray={`${(easyPct / 100) * 251.2} 251.2`}
                strokeDashoffset="0"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="leetcode-dashboard__circle-content">
              <span className="leetcode-dashboard__total-num">{stats.totalSolved}</span>
              <span className="leetcode-dashboard__total-label">Solved</span>
            </div>
          </div>

          <div className="leetcode-dashboard__rankings">
            <div className="leetcode-dashboard__substat">
              <span className="leetcode-dashboard__substat-label">Global Ranking</span>
              <span className="leetcode-dashboard__substat-val">~{stats.ranking.toLocaleString()}</span>
            </div>
            <div className="leetcode-dashboard__substat">
              <span className="leetcode-dashboard__substat-label">Contest Rating</span>
              <span className="leetcode-dashboard__substat-val accent-lime">{stats.contestRating}</span>
            </div>
          </div>
        </div>

        <div className="leetcode-dashboard__breakdown">
          <div className="leetcode-dashboard__bar-item">
            <div className="leetcode-dashboard__bar-meta">
              <span className="difficulty-tag easy">Easy</span>
              <span className="problem-count"><strong>{stats.easySolved}</strong> solved</span>
            </div>
            <div className="leetcode-dashboard__progress-track">
              <div className="leetcode-dashboard__progress-fill easy-fill" style={{ width: `${easyPct}%` }} />
            </div>
          </div>

          <div className="leetcode-dashboard__bar-item">
            <div className="leetcode-dashboard__bar-meta">
              <span className="difficulty-tag medium">Medium</span>
              <span className="problem-count"><strong>{stats.mediumSolved}</strong> solved</span>
            </div>
            <div className="leetcode-dashboard__progress-track">
              <div className="leetcode-dashboard__progress-fill med-fill" style={{ width: `${medPct}%` }} />
            </div>
          </div>

          <div className="leetcode-dashboard__bar-item">
            <div className="leetcode-dashboard__bar-meta">
              <span className="difficulty-tag hard">Hard</span>
              <span className="problem-count"><strong>{stats.hardSolved}</strong> solved</span>
            </div>
            <div className="leetcode-dashboard__progress-track">
              <div className="leetcode-dashboard__progress-fill hard-fill" style={{ width: `${hardPct}%` }} />
            </div>
          </div>

          <div className="leetcode-dashboard__badges-row">
            <div className="leetcode-dashboard__pill">
              <Award size={14} className="accent-gold" />
              <span>{stats.contestAttend} Contests Attended</span>
            </div>
            <div className="leetcode-dashboard__pill">
              <Zap size={14} className="accent-cyan" />
              <span>Top {stats.topPercentage}% Contestant</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

