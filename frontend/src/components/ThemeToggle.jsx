import { Sun, Moon } from 'lucide-react';
import './ThemeToggle.css';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <span className={`theme-toggle__icon ${theme === 'dark' ? 'theme-toggle__icon--active' : ''}`}>
        <Sun size={18} />
      </span>
      <span className={`theme-toggle__icon ${theme === 'light' ? 'theme-toggle__icon--active' : ''}`}>
        <Moon size={18} />
      </span>
    </button>
  );
}
