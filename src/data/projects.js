// src/data/projects.js
export const projectData = [
  {
    id: 1,
    title: "Telefonica E-commerce App",
    company: "Tech Mahindra",
    imageUrl: "/images/ecommerce-placeholder.png",
    description: "Contributed to the development of a high-traffic, customer-facing mobile e-commerce platform, aimed at enhancing the online purchasing journey and user engagement for Telefonica customers across various regions.", // <-- Example Elaboration
    role: "Frontend Engineer within a large Agile team. Developed and maintained key UI components for product listings, shopping cart interactions, user authentication, and account management sections using React. Collaborated closely with UX/UI designers and backend developers on API integration and feature implementation across multiple regional markets.",
    techStack: ["React", "JavaScript", "HTML", "CSS", "REST APIs"],
    liveUrl: "https://www.o2online.de/",
  },
  {
    id: 2,
    title: "Operational Command Platform (OCP)",
    company: "Cloud4C",
    imageUrl: "/images/ocp-placeholder.png",
    description: "A mission-critical web application enabling Cloud4C clients to perform complex server operations remotely via an intuitive interface, significantly reducing the need for manual intervention and potential downtime at physical data centers.",
    role: "Sole Frontend Developer driving the entire UI development lifecycle. Responsibilities included requirements analysis, component architecture design using React, complex state management implementation, seamless integration with backend APIs for real-time data and operations, and designing the user flow for the Role-Based Access Control system.",
    techStack: ["React", "JavaScript", "State Management", "CSS Modules", "REST APIs"],
    liveUrl: null,
  },
  {
    id: 3,
    title: "ProAgentAI - Company Landing Page",
    company: "ProAgentAI (Freelance)",
    imageUrl: "/images/proagentai-placeholder.png",
    description: "Designed and developed a fully responsive landing page for ProAgentAI, a B2B AI automation company. Set up a complete CI/CD pipeline using Vercel for automated deployments on every push, and configured the site to serve on a custom domain.",
    role: "Sole Developer responsible for the full project lifecycle — from UI design and React development to deployment infrastructure. Configured Vercel's CI/CD pipeline with GitHub integration for zero-downtime automated deploys and set up the custom domain with DNS configuration.",
    techStack: ["React", "JavaScript", "CSS", "Vercel", "CI/CD", "Custom Domain"],
    liveUrl: "https://proagentai.in",
  },
  {
    id: 4,
    title: "Music Library Application",
    company: "Individual Client (Freelance)",
    imageUrl: "/images/music-library-placeholder.png",
    description: "A full-stack music library application allowing users to browse, search, add, and manage their music collections. Features a React frontend with a RESTful Node.js backend and persistent data storage using MongoDB.",
    role: "Full-Stack Developer responsible for both frontend and backend. Built the React UI with search, filtering, and CRUD operations for managing music tracks. Developed the Node.js/Express REST API and designed the MongoDB schema for storing and querying music data.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "JavaScript"],
    liveUrl: null,
  },
  {
    id: 5,
    title: "Lloyds Project (Banking)",
    company: "Lloyds Technology Centre",
    imageUrl: "/images/lloyds-placeholder.png",
    description: "Developed frontend features for a critical internal banking application used for managing customer accounts, focusing on data security and workflow efficiency within the financial services sector.", // <-- Example
    role: "Frontend Developer implementing user interface components and features according to enterprise standards. Responsibilities included creating reusable React components, ensuring WCAG accessibility compliance, collaborating on API design, and participating actively in Agile ceremonies like code reviews and sprint planning.", // <-- Example
    techStack: ["React", "TypeScript", "Styled Components"],
    liveUrl: "https://businessbanking.lloydsbank.co.uk/bds/online-for-business/register/get-started",
  }
];