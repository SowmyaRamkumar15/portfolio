import { useState } from 'react';
import { Bot, Sparkles, Send, X, MessageSquare, ChevronRight, CornerDownLeft } from 'lucide-react';
import './PortfolioAssistant.css';

const PRESET_QUESTIONS = [
  "What is Sowmya's core tech stack?",
  "Tell me about the Interviora AI project.",
  "What was her role at Infosys Springboard?",
  "How can I contact or hire Sowmya?"
];

export default function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Hi there! I'm Sowmya's AI Portfolio Assistant. Ask me about her Java Full Stack projects, internship experience, skills, or problem-solving milestones!"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const getAssistantResponse = (query) => {
    const q = query.toLowerCase();

    if (q.includes('stack') || q.includes('skill') || q.includes('technolog')) {
      return "Sowmya specializes in Java Full Stack development. Her core stack includes Java, Spring Boot, REST APIs, JWT, MySQL on the backend, and React.js, JavaScript (ES6+), HTML5, and CSS3 on the frontend, alongside Git, GitHub, VS Code, and Figma.";
    }

    if (q.includes('interviora') || q.includes('ai') || q.includes('watsonx') || q.includes('rag')) {
      return "Interviora is an AI-powered Interview Trainer Agent built during her IBM SkillsBuild AICTE internship. It uses IBM watsonx Orchestrate & RAG (Retrieval-Augmented Generation) coupled with a Spring Boot backend and React.js frontend to deliver personalized mock interviews and automated candidate feedback.";
    }

    if (q.includes('infosys') || q.includes('tourizo') || q.includes('travel')) {
      return "During her Infosys Springboard internship (Sep 2025 – Nov 2025), Sowmya developed Tourizo, a responsive travel booking web app using React.js and React Router, creating reusable components, dynamic filtering, and validated booking workflows.";
    }

    if (q.includes('hgrd') || q.includes('saloon')) {
      return "At HGRD EduTech (Jan 2026 – Feb 2026), Sowmya worked as a Java Full Stack Intern in an 8-member Agile team on a Saloon Management System, building Spring Boot User & Home management modules and REST API integrations.";
    }

    if (q.includes('education') || q.includes('college') || q.includes('degree') || q.includes('cgpa')) {
      return "Sowmya is pursuing her B.E. in Computer Science and Engineering at Sri Krishna College of Engineering and Technology (2024–2028) with a strong CGPA of 8.6. She completed Class XII at Srinivasa Vidhyalaya with 91%.";
    }

    if (q.includes('leetcode') || q.includes('hackathon') || q.includes('achievement') || q.includes('rank')) {
      return "Sowmya has solved 420+ problems on LeetCode with an active contest rating (~1508) and was a Finalist at the Dr. Dev Hackathon (SRM). She actively codes across LeetCode, GeeksforGeeks, and HackerRank.";
    }

    if (q.includes('hire') || q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach')) {
      return "You can reach Sowmya directly via email at sowmyaramkumar15@gmail.com or by phone at +91 6381836086. She is open to software development opportunities, full-stack roles, and internships!";
    }

    if (q.includes('campus') || q.includes('recruitment')) {
      return "Her Campus Recruitment Management System is a full-stack platform built with Java, Spring Boot, React.js, JWT, and MySQL featuring role-based dashboards for Admins, Recruiters, and Students, automated interview scheduling, and secure auth.";
    }

    return "Sowmya R is a passionate Computer Science Engineering student and Java Full Stack Developer skilled in Spring Boot, React.js, and Data Structures. Would you like to know about her projects, internships, or contact details?";
  };

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMessage = { role: 'user', text: query };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = getAssistantResponse(query);
      setMessages((prev) => [...prev, { role: 'assistant', text: reply }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="portfolio-assistant">
      {!isOpen && (
        <button 
          className="portfolio-assistant__trigger" 
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Portfolio Assistant"
        >
          <div className="portfolio-assistant__trigger-icon">
            <Bot size={22} />
          </div>
          <span className="portfolio-assistant__trigger-text">Ask AI Assistant</span>
          <span className="portfolio-assistant__trigger-pulse" />
        </button>
      )}

      {isOpen && (
        <div className="portfolio-assistant__window">
          <div className="portfolio-assistant__topbar">
            <div className="portfolio-assistant__brand">
              <div className="portfolio-assistant__avatar">
                <Sparkles size={16} />
              </div>
              <div>
                <h4 className="portfolio-assistant__title">Sowmya's AI Assistant</h4>
                <span className="portfolio-assistant__status">Online &bull; Ready to assist</span>
              </div>
            </div>
            <button 
              className="portfolio-assistant__close-btn" 
              onClick={() => setIsOpen(false)}
              aria-label="Close assistant"
            >
              <X size={18} />
            </button>
          </div>

          <div className="portfolio-assistant__messages">
            {messages.map((m, i) => (
              <div 
                key={i} 
                className={`portfolio-assistant__message portfolio-assistant__message--${m.role}`}
              >
                <div className="portfolio-assistant__bubble">{m.text}</div>
              </div>
            ))}
            {isTyping && (
              <div className="portfolio-assistant__message portfolio-assistant__message--assistant">
                <div className="portfolio-assistant__bubble portfolio-assistant__typing">
                  <span /><span /><span />
                </div>
              </div>
            )}
          </div>

          <div className="portfolio-assistant__presets">
            {PRESET_QUESTIONS.map((q, idx) => (
              <button 
                key={idx} 
                className="portfolio-assistant__preset-btn"
                onClick={() => handleSend(q)}
              >
                {q}
              </button>
            ))}
          </div>

          <form 
            className="portfolio-assistant__input-row"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Sowmya's work..."
              className="portfolio-assistant__input"
            />
            <button 
              type="submit" 
              className="portfolio-assistant__send-btn"
              disabled={!input.trim()}
              aria-label="Send query"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

