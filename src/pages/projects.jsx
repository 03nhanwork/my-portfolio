import { useEffect, useRef } from 'react';
import './projects.css';
import SideNav from '../components/sideNav';
import resumePdf from '../components/resume.pdf';

// --- DATA FOR YOUR CARDS ---
// You can easily add, remove, or edit projects and jobs here.

const jobsData = [
  {
    id: 'job-1',
    title: 'Frontend Lead - Imagination Canvas',
    description: "Independently learned and built the frontend from design to implementation using the ReactJS framework, creating a responsive and user-friendly interface, tailored to the client company's theme.\nDesigned the backend architecture to optimize load time and conserve token cost by more than 30%.\nIntegrated OpenAI’s API for interactive AI-driven features.\nDelivered weekly progress updates and product demos directly to the cofounders.",
    skills: ['React.Js', 'Node.Js', 'JavaScript', 'CSS', 'HTML', 'OpenAI API', 'Backend Design', 'Responsive Design', 'UI/UX', 'Scrum Methodology', 'Application Documentation'],
    companySite: 'https://www.balnce.ai/',
  },
  {
    id: 'job-2',
    title: 'Technician at USAV Solutions',
    description: 'Conducted rigorous testing and diagnostic procedures, such as deconstructing a few hundred machines monthly and inspecting  each component to single out the vulnerability of various electronic systems to ensure optimal functionality and reliability. Construct an assembly line to streamline the testing operations, optimizing the process by reducing time by 30-40%. Utilized soldering techniques to assemble and repair electronic circuitry, achieving precise and durable connections. Managed inventory and optimized warehouse operations to improve efficiency and ensure the availability of electronic components for product assemblies during business hours. Acquired adaptive learning abilities in response to the dynamic and demanding environment.',
    skills: ['Hardware Diagnostics', 'Process Optimization', 'Soldering', 'Warehouse Management', 'Inventory Control', 'Adaptive Learning'],
    companySite: 'https://usavshop.com/', // Link to the company's website
  },
  {
    id: 'job-3',
    title: 'California Talent Collab Tutor',
    description: 'Provided individualized instruction in STEM subjects for elementary students (grades 1–5), promoting academic growth and problem-solving skills. Implemented effective behavioral management strategies to maintain engagement and focus. Delivered technical support to facilitate smooth use of digital learning tools and platforms.',
    skills: ['STEM Education', 'Tutoring', 'Mentoring', 'Problem Solving', 'Classroom Management', 'Technical Support'],
    companySite: 'https://talentcollab.org/'// No company site provided
  },
];

const projectsData = [
  {
    id: 'proj-1',
    title: 'Personal Portfolio Website',
    description: 'A responsive personal portfolio built with React and Vite. It features a clean design, smooth scrolling animations, and a component-based architecture to showcase my skills and experience.',
    skills: ['React', 'Vite', 'CSS', 'JavaScript', 'UI/UX'],
    liveSite: 'https://your-username.github.io/your-portfolio-repo/', // Link to the live demo
  },
  {
    id: 'proj-3',
    title: 'Lisps Compiler',
    description: 'Developed an interpreter for Common Lisp, applying recursion, parsing algorithms, and compiler design principles. Enhanced debugging workflows and demonstrated structural patterns in programming language decomposition.',
    skills: ['Common Lisp', 'Recursion', 'Parsing', 'Compiler Design', 'Debugging'],
  },
  {
    id: 'proj-4',
    title: 'Search Engine (Group Project)',
    description: 'Built a web crawler and ETL pipeline to collect, process, and store a searchable corpus. Applied lemmatization and TF-IDF scoring to improve query accuracy. Developed a Google/Bing-style UI connected to a backend retrieval service. Managed Agile sprints for work distribution, data processing, and debugging.',
    skills: ['Python', 'Web Crawler', 'ETL', 'TF-IDF', 'UI/UX', 'Agile'],
  },
  {
    id: 'proj-5',
    title: 'Custom Priority Queue',
    description: 'Engineered a custom scoring algorithm for prioritized data retrieval, outperforming standard library implementations. Applied to search and optimization problems, such as the word ladder puzzle, to achieve reduced runtime.',
    skills: ['C++', 'Algorithms', 'Data Structures', 'Optimization'],
  },
  {
    id: 'proj-6',
    title: 'Chatting Application',
    description: 'Built a real-time messaging app with local credential storage and persistent chat logs. Enabled connections via shared server and integrated APIs for weather updates and song recommendations.',
    skills: ['Python', 'Real-time Messaging', 'API Integration', 'Databases', 'Directory management'],
  },
];

// Combine all items to be rendered
const allItems = [...jobsData, ...projectsData];

function Projects() {
  const cardsRef = useRef([]);

  // Add a fade-in animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="experience-page-container">
      <header className="top-nav-header">
        <SideNav />
      </header>
      <main className="experience-main-content">
        <h1>Experience & Projects</h1>
        <div className="card-grid">
          {allItems.map((item, index) => (
            <div
              key={item.id}
              className="card"
              ref={(el) => (cardsRef.current[index] = el)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="card-skills">
                {item.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
              <div className="card-buttons">
                {item.github && (
                  <a href={item.github} target="_blank" rel="noopener noreferrer" className="card-button">
                    GitHub
                  </a>
                )}
                {item.liveSite && (
                  <a href={item.liveSite} target="_blank" rel="noopener noreferrer" className="card-button">
                    Live Site
                  </a>
                )}
                {item.companySite && (
                  <a href={item.companySite} target="_blank" rel="noopener noreferrer" className="card-button">
                    Company Site
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="page-bottom-buttons">
          <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="subtle-button">
            Resume
          </a>
          <a href="https://github.com/theDude03" target="_blank" rel="noopener noreferrer" className="subtle-button">
            GitHub
          </a>
        </div>
      </main>
    </div>
  );
}

export default Projects;