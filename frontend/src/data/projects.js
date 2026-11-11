export const projects = [
  {
    id: "campus-recruitment",
    title: "Campus Recruitment Management System",
    category: "Java Full Stack Development",
    featured: false,
    description: "Designed and developed a full-stack recruitment platform enabling student registration, job postings, and interview scheduling through RESTful APIs.",
    contributions: [
      "Implemented JWT-based authentication for secure access",
      "Developed role-based access control for Admin, Recruiter, and Student modules",
      "Built backend using Controller-Service-Repository architecture",
      "Integrated React.js frontend with Spring Boot backend",
      "Automated interview scheduling through role-based dashboards"
    ],
    technologies: ["Java", "Spring Boot", "React.js", "REST APIs", "JWT", "MySQL"],
    color: "#A3E635",
    visual: "recruitment"
  },
  {
    id: "interviora",
    title: "Interviora — AI Interview Trainer Agent",
    category: "AI + Java Full Stack | IBM SkillsBuild AICTE Internship",
    featured: true,
    description: "Developed an AI-powered interview preparation platform using IBM watsonx Orchestrate and RAG to provide personalized technical, HR, and behavioral interview coaching.",
    contributions: [
      "Designed AI agent workflows for interview simulation",
      "Integrated a knowledge base for comprehensive interview preparation",
      "Generated role-specific interview questions using AI",
      "Analyzed responses and provided structured feedback",
      "Integrated React.js, Spring Boot, REST APIs, and MySQL",
      "Developed personalized interview preparation experiences"
    ],
    technologies: ["IBM watsonx Orchestrate", "RAG", "React.js", "Spring Boot", "Java", "REST APIs", "MySQL"],
    color: "#72DDF7",
    visual: "ai-interview"
  },
  {
    id: "tourizo",
    title: "Tourizo — Tourism Booking Web Application",
    category: "Frontend Development | Infosys Internship",
    featured: false,
    description: "Developed a responsive travel booking web application using React.js, focusing on reusable UI components, intuitive navigation, and an enhanced user experience.",
    contributions: [
      "Developed reusable React components for scalable UI",
      "Implemented React Router for seamless navigation",
      "Built destination search and filtering functionality",
      "Created booking and contact forms with validation",
      "Improved responsiveness and usability across devices"
    ],
    technologies: ["React.js", "JavaScript", "React Router", "HTML5", "CSS3"],
    color: "#F59E0B",
    visual: "travel"
  }
];
