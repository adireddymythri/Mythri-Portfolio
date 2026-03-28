import React from 'react';

// --- Project Data (No changes needed here, keeping for context) ---
const projectsData = [
    {
        id: 'proj-0',
        title: 'GovInsight – AI-Powered Government Budget Intelligence System',
        description: 'Built a Retrieval-Augmented Generation system to semantically query Indian government budget and policy PDFs, achieving 93% retrieval relevance and 87% factual response accuracy. Automated large-scale document analysis and information retrieval, reducing manual effort by 80% and query response time by 75%.',
        technologies: ['GenAI', 'RAG', 'NLP', 'Python', 'FastAPI'],
        githubUrl: 'https://github.com/adireddymythri/GOV-IN-Rag-Application-',
        imageUrl: '/govinsight.png', 
    },
    {
        id: 'proj-campusmart',
        title: 'Campus Mart',
        description: 'Advanced a full-stack campus marketplace platform with role-based access, product approvals, and favorite tracking using Django. Deployed the application on Render with secure environment configuration, delivering a responsive, dashboard-driven user experience.',
        technologies: ['Django', 'SQLite3', 'HTML', 'CSS', 'JavaScript'],
        githubUrl: 'https://github.com/adireddymythri/campus',
        imageUrl: '/campusmart.png', 
    },
    {
        id: 'proj-travelxplorer',
        title: 'TravelXplorer – Smart Tourism and Travel Planning Platform',
        description: 'Developed a comprehensive MERN stack tourism platform supporting over 500 global destinations. Designed intelligent itinerary planning features and integrated third-party APIs for real-time travel data. Implemented a robust authentication system using JSON Web Tokens (JWT) for secure user sessions, and utilized Tailwind CSS to create a responsive, modern user interface that enhances the overall booking and exploration experience.',
        technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS'],
        githubUrl: 'https://github.com/adireddymythri/TravelXplorer',
        imageUrl: '/travelxplorer.png', 
    },
    {
        id: 'proj-1',
        title: 'AI-Powered Visual Assistance System',
        description:"The AI-Powered Visual Assistance System is a Django-based application that helps visually impaired individuals navigate safely using real-time object detection. It uses YOLOv8 and OpenCV to identify obstacles and provides multilingual audio alerts to assist users in making informed decisions.",
        technologies: ['Python', 'YOLOv8', 'OpenCV', 'Django', 'gTTS'],
        githubUrl: 'https://github.com/adireddymythri/AI_Powered_Assistive_Mobility_Tool',
        imageUrl: '/proj1.png',
        imageLength: 50, 
        imageWidth: 50 
    },
    {
        id: 'proj-2',
        title: 'Smart Chatbot System',
        description: 'The Smart Chatbot System is an intelligent LLM-powered application that extracts insights from YouTube videos and PDF documents. It uses NLP pipelines to analyze long content and interacts with users through contextual conversations.',
        technologies: ['Python', 'NLP', 'LLMs'],
        githubUrl: 'https://github.com/adireddymythri/Y_Transcribe',
        imageUrl: '/smart_chatbot.png', 
        
    },
    {
        id: 'proj-3',
        title: 'Portfolio Website',
        description: 'A modern,portfolio built using React and Tailwind CSS featuring dynamic components like the scrolling timeline and neon-style UI elements.',
        technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Vite'],
        githubUrl: 'YOUR_GITHUB_URL_3',
        imageUrl: '/portofolio.png', 
    },
    {
        id: 'proj-4',
        title: 'Resume Matcher (AI-Based ATS Tool)',
        description: 'Resume Matcher is an AI-NLP tool that compares resumes with job descriptions to compute match scores and extract key skills. It uses text similarity techniques to help users understand their job readiness effectively',
        technologies: ['Python', 'NLP'],
        githubUrl: 'https://github.com/adireddymythri/ATS',
        imageUrl: '/ATS.png', 
    },
    {
        id: 'proj-5',
        title: 'Expense Tracker Web Application',
        description: 'The Expense Tracker is a simple and interactive web application for managing daily expenses. It allows users to add, edit, and delete transactions while dynamically calculating totals and highlighting categories.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        githubUrl: 'https://github.com/adireddymythri/Expense_TRK',
        imageUrl: '/exp.png', 
    },

    {
        id: 'proj-6',
        title: 'FestivePal – UI/UX Prototype Design',
        description: 'FestivePal is a festival planning and discovery application designed to help users explore cultural events and organize their celebrations effortlessly. The prototype focuses on intuitive navigation, smooth user flow, and a vibrant festive theme that enhances overall engagement.',
        technologies: ['Figma'],
        githubUrl: 'https://www.figma.com/design/DTjhSpXWGiTEKp9kxI1Wa0/FestivePal?node-id=0-1&p=f',
        imageUrl: '/festivepal.png', 
    },
];

// --- Sub-Component for a single Project Item (Optimized for performance) ---
const ProjectCard = ({ data }) => {
    // Base classes for the details box
    const boxBaseClasses = 'rounded-xl border-2 border-gray-800 bg-gray-900/70 p-6 shadow-xl';

    return (
        // Outer Container is now a group 
        <div className="group flex flex-col lg:flex-row items-start gap-8 mb-20 max-w-5xl mx-auto">
            
            {/* --- 1. Project Image / Graphic (Left Side) --- */}
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-start p-4 lg:p-0">
                {data.imageUrl && (
                <img
                    src={data.imageUrl}
                    alt={data.title}
                    // **Optimization:** Only transition transform, and add translate-z-0 for hardware acceleration.
                    className="w-150 h-150 object-contain rounded-lg border border-gray-700/50 p-4 transform transition-transform duration-500 ease-out translate-z-0 group-hover:scale-[1.05] group-hover:shadow-[0_0_20px_rgba(76,255,137,0.3)]" 
                />
                )}
            </div>

            {/* --- 2. Project Details Box (Right Side) --- */}
            <div className="w-full lg:w-2/3 text-left">
                
                {/* 🛑 Main content box with hardware-accelerated transitions 🛑 */}
                <div 
                    className={`${boxBaseClasses} 
                        // **Optimization:** Limit transitions to transform, border, and shadow. Add translate-z-0.
                        transform transition-[transform,border-color,box-shadow] duration-500 ease-out translate-z-0 
                        group-hover:-translate-y-2 
                        group-hover:border-green-400 
                        group-hover:shadow-[0_0_25px_rgba(76,255,137,0.7)]
                    `}
                >
                    
                    <h3 className="text-3xl font-bold text-white mb-2">{data.title}</h3>
                    
                    <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                        {data.description}
                    </p>

                    {/* Technologies Badges (Left-aligned) */}
                    <div className="mt-4 flex flex-wrap gap-2 justify-start">
                        {data.technologies.map((tech, index) => (
                            <span 
                                key={index} 
                                className="px-3 py-1 text-xs font-semibold rounded-full bg-green-600/30 text-green-400"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    
                    {/* Action Links (GitHub, Video) (Left-aligned) */}
                    <div className="mt-6 flex gap-4 text-lg font-medium justify-start">
                        {data.githubUrl && (
                            <a 
                                href={data.githubUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-green-400 hover:text-green-300 underline"
                            >
                                View on GitHub
                            </a>
                        )}
                        {data.videoUrl && (
                            <a 
                                href={data.videoUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-green-400 hover:text-green-300 underline"
                            >
                                Watch Video
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Main Projects Component ---
const Projects = () => {
    return (
        <section id="projects" className="section-padding py-20 min-h-screen bg-black text-white">
            <div className="container mx-auto px-6">
                
                {/* --- Section Title --- */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4">
                    <span className="text-white">My</span> <span className="text-green-400">Projects</span>
                </h2>
                <p className='text-center text-lg text-gray-400 mb-16'>
                    Showcasing key works and technical explorations.
                </p>

                {/* --- Projects List --- */}
                <div className="space-y-16">
                    {projectsData.map((project) => (
                        <ProjectCard 
                            key={project.id} 
                            data={project} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;