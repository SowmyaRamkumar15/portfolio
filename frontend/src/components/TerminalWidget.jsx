import { useState, useRef, useEffect } from 'react';
import './TerminalWidget.css';

const commandOutputs = {
  help: [
    'Available commands:',
    '  help        - Show this help menu',
    '  about       - Who am I?',
    '  skills      - My technical skills',
    '  projects    - My projects',
    '  education   - My education',
    '  contact     - Get in touch',
    '  github      - My GitHub profile',
    '  clear       - Clear terminal',
    '  exit        - Exit terminal',
  ],
  about: [
    "Hi! I'm Sowmya R 👋",
    'A passionate Full-Stack Developer with expertise in Java, Spring Boot,',
    'React, and cloud technologies. I love building scalable web applications',
    'and exploring AI/ML solutions.',
  ],
  skills: [
    '⚡ Languages:   Java, JavaScript, Python, SQL',
    '⚡ Frontend:    React, HTML5, CSS3, Vite',
    '⚡ Backend:     Spring Boot, Node.js, REST APIs',
    '⚡ Databases:   MySQL, MongoDB, PostgreSQL',
    '⚡ Cloud/Tools: AWS, Docker, Git, Jenkins',
  ],
  projects: [
    '📁 Campus Recruitment Management System (Spring Boot + React)',
    '📁 Interviora — AI Interview Trainer Agent (IBM watsonx + RAG)',
    '📁 Tourizo — Tourism Booking Web Application (React.js)',
  ],
  education: [
    '🎓 B.E. Computer Science and Engineering (2024 – 2028)',
    '   Sri Krishna College of Engineering and Technology | CGPA: 8.6',
    '🏫 Class XII — CS & Mathematics (2023 – 2024)',
    '   Srinivasa Vidhyalaya Matric Higher Secondary School | 91%',
  ],
  contact: [
    '📧 Email:    sowmyaramkumar15@gmail.com',
    '📞 Phone:    +91 6381836086',
    '🔗 LinkedIn: linkedin.com/in/sowmyaramkumar',
    '💻 GitHub:   github.com/SowmyaRamkumar15',
  ],
  github: [
    '🔗 https://github.com/SowmyaRamkumar15',
    '   Check out my real repositories, full-stack apps, and open-source contributions!',
  ],
  exit: [
    'Thanks for visiting! 👋',
    'Have a great day!',
  ],
};

export default function TerminalWidget() {
  const [history, setHistory] = useState([
    { command: null, output: ['Welcome to Sowmya\'s terminal! Type "help" for commands.'] },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isExited, setIsExited] = useState(false);
  const outputRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isExited) return;

    const cmd = inputValue.trim().toLowerCase();
    setInputValue('');

    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      return;
    }

    if (cmd === 'exit') {
      setHistory((prev) => [
        ...prev,
        { command: cmd, output: commandOutputs.exit },
      ]);
      setIsExited(true);
      return;
    }

    const output = commandOutputs[cmd];
    if (output) {
      setHistory((prev) => [...prev, { command: cmd, output }]);
    } else {
      setHistory((prev) => [
        ...prev,
        {
          command: cmd,
          output: [`Command not found: ${cmd}. Type "help" for available commands.`],
        },
      ]);
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="terminal" onClick={handleTerminalClick}>
      <div className="terminal__header">
        <div className="terminal__dots">
          <span className="terminal__dot terminal__dot--red" />
          <span className="terminal__dot terminal__dot--yellow" />
          <span className="terminal__dot terminal__dot--green" />
        </div>
        <span className="terminal__title">sowmya@portfolio:~$</span>
      </div>

      <div className="terminal__body" ref={outputRef}>
        {history.map((entry, i) => (
          <div key={i} className="terminal__entry">
            {entry.command !== null && (
              <div className="terminal__command-line">
                <span className="terminal__prompt">➜</span>
                <span className="terminal__user">sowmya</span>
                <span className="terminal__separator">:</span>
                <span className="terminal__dir">~</span>
                <span className="terminal__dollar">$</span>
                <span className="terminal__cmd">{entry.command}</span>
              </div>
            )}
            <div className="terminal__output">
              {entry.output.map((line, j) => (
                <div key={j} className="terminal__output-line">{line}</div>
              ))}
            </div>
          </div>
        ))}

        {!isExited && (
          <form className="terminal__input-line" onSubmit={handleSubmit}>
            <span className="terminal__prompt">➜</span>
            <span className="terminal__user">sowmya</span>
            <span className="terminal__separator">:</span>
            <span className="terminal__dir">~</span>
            <span className="terminal__dollar">$</span>
            <input
              ref={inputRef}
              type="text"
              className="terminal__input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
            <span className="terminal__cursor" />
          </form>
        )}
      </div>
    </div>
  );
}
