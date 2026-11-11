export const certificationCategories = [
  {
    id: "core",
    name: "Software & Web Development",
    description: "Core algorithms, Java OOP, full-stack architecture, and databases"
  },
  {
    id: "cloud",
    name: "Cloud Computing",
    description: "Cloud infrastructure, AWS services, and distributed architectures"
  },
  {
    id: "testing",
    name: "Software Testing & QA",
    description: "Test automation, quality engineering, Selenium, JUnit, and STLC"
  }
];

export const certifications = [
  {
    id: 1,
    title: "Data Structures & Algorithms",
    issuer: "Infosys Springboard",
    category: "core",
    date: "Completed",
    icon: "BookOpen",
    link: "", // Credential verification URL (editable)
    image: "" // Certificate image or PDF preview URL (editable)
  },
  {
    id: 2,
    title: "Java Programming: Advanced OOP, Multithreading & Collections",
    issuer: "Infosys Springboard",
    category: "core",
    date: "Completed",
    icon: "BrainCircuit",
    link: "",
    image: ""
  },
  {
    id: 3,
    title: "Frontend Development with React: Components, Hooks, State Management",
    issuer: "freeCodeCamp",
    category: "core",
    date: "Completed",
    icon: "LayoutGrid",
    link: "",
    image: ""
  },
  {
    id: 4,
    title: "Backend Development with Spring Boot: RESTful API Development",
    issuer: "Udemy",
    category: "core",
    date: "Completed",
    icon: "Server",
    link: "",
    image: ""
  },
  {
    id: 5,
    title: "SQL & Database Management: Query Optimization & Design",
    issuer: "Coursera",
    category: "core",
    date: "Completed",
    icon: "Database",
    link: "",
    image: ""
  },
  {
    id: 6,
    title: "Git & Version Control: Branching Strategies & Collaborative Workflows",
    issuer: "Coursera",
    category: "core",
    date: "Completed",
    icon: "GitBranch",
    link: "",
    image: ""
  },

  // 1. Cloud Computing Certifications Grouping
  // Add your Cloud Computing credentials here by setting title, issuer, completion date, verification URL and certificate file
  {
    id: 7,
    title: "Cloud Computing Fundamentals & AWS Architecture",
    issuer: "AWS / Industry Certification (Editable)",
    category: "cloud",
    date: "In Progress / Verified Upon Completion",
    icon: "Cloud",
    link: "", // Add credential URL when ready
    image: "", // Add certificate image/PDF path
    isPending: true
  },

  // 2. Software Testing Certifications Grouping
  // Add your Software Testing & QA credentials here
  {
    id: 8,
    title: "Software Testing, Automation & Quality Assurance",
    issuer: "QA Certification Board / Industry Academy (Editable)",
    category: "testing",
    date: "In Progress / Verified Upon Completion",
    icon: "CheckCircle2",
    link: "", // Add credential URL when ready
    image: "", // Add certificate image/PDF path
    isPending: true
  }
];
