import React from 'react';
// 🛑 IMPORTANT: Importing all required icons
import { Briefcase, Code, GraduationCap } from 'lucide-react'; 

// --- Define your professional experience data ---
const experienceData = [
    {
        id: 'job-1',
        title: ' AI-Powered Visual Assistance Tool (Virtual Internship)',
        company: 'Infosys Springboard',
        duration: 'sep 2025 - Nov 2025',
        description: [
            'Built an AI-driven assistive mobility system using YOLOv8, OpenCV, and Django, improving obstacle detection accuracy by 90%.',
            'Integrated multilingual audio feedback using gTTS, enhancing user response efficiency by 30%',
            'Developed real-time object detection pipelines for visually impaired users, ensuring fast, reliable, and safe navigation.',
            'Collaborated on model optimization and testing to support 100+ test users',
        ],
        technologies: ['Python', 'Django', 'YOLOv8', 'OpenCV', 'NLP', 'gTTS', 'AI Systems Development'],
        icon: Briefcase // 🛑 Icon for Senior Engineer
    },
    {
        id: 'job-2',
        title: 'Machine Learning Intern @ SkillDzire',
        company: 'SkillDzire',
        duration: 'May 2025 – Jun 2025',
        description: [
            'Completed a short-term internship focused on Machine Learning fundamentals, model development, and real-world ML workflows..',
            'Gained hands-on experience in building supervised and unsupervised ML models, including data preprocessing, feature engineering, and evaluation techniques.',
            'Worked with Python ML libraries to implement algorithms such as regression, classification, clustering, and decision trees..'
        ],
        technologies: ['Machine Learning', 'Python', 'Data Preprocessing', 'Model Evaluation', 'ML Algorithms'],
        icon: Code // 🛑 Icon for Developer role
    },
    {
        id: 'job-3',
        title: 'Club Coordinator @ MECOW Club',
        company: 'MECOW Club',
        duration: '2024 – Present',
        description: [
            'Coordinated and managed multiple campus-wide events, especially themed UNO Days and cultural celebrations.',
            'Led event planning, scheduling, and team coordination to ensure smooth execution and high student participation.',
        ],
        technologies: ['Event Management', 'Team Coordination', 'Leadership', 'Communication', 'Planning & Execution'],
        icon: GraduationCap // 🛑 Icon for Internship/Learning
    }
];

// --- Sub-Component for a single Timeline Item ---
const ExperienceItem = ({ data, index, isActive = false, itemRef }) => {
    const isLeft = index % 2 === 0; 

    // Conditional classes for highlighting and box styling
    const dotClass = isActive 
        ? 'bg-green-400 border-green-400 shadow-[0_0_15px_rgba(76,255,137,0.8)]' // Brighter neon glow
        : 'bg-black border-gray-700'; 

    const durationClass = isActive ? 'text-green-400 font-bold' : 'text-gray-500';

    // Box highlighting effect (Now includes hover shadow and active neon border)
    const boxHighlightClass = isActive 
        ? 'border-green-400 shadow-green-400/40' // Active neon border/shadow
        : 'border-gray-800 hover:border-green-500/50 hover:shadow-green-500/20'; // Hover effect

    const contentPlacement = isLeft 
        ? 'lg:pr-12'
        : 'lg:pl-12 lg:ml-auto';

    const animationAlignment = isLeft 
        ? (isActive ? 'translate-x-0' : 'lg:-translate-x-4') 
        : (isActive ? 'translate-x-0' : 'lg:translate-x-4');
        
    const iconClass = isActive 
        ? 'text-green-400 shadow-[0_0_10px_rgba(76,255,137,0.7)]' // Active icon neon glow
        : 'text-gray-400';

    // 🛑 Destructure the Icon Component
    const IconComponent = data.icon; 

    return (
        <div ref={itemRef} id={data.id} className={`relative mb-16 flex w-full`}>
            
            {/* 🛑 CENTRAL ICON (Dynamic based on data.icon) 🛑 */}
            <div className="hidden lg:flex flex-col items-center absolute h-full w-0.5 top-0 left-1/2 transform -translate-x-1/2 z-30">
                {/* Icon positioned at the top of the item container */}
                <div className={`w-12 h-12 rounded-full bg-black border-2 border-green-400 flex items-center justify-center 
                                ${iconClass} transition-all duration-500`}>
                    {/* 🛑 Rendering the dynamic component here 🛑 */}
                    <IconComponent className="w-6 h-6 transition-colors duration-500" />
                </div>
            </div>
            
            {/* --- Duration (Always opposite the content box on LG screens) --- */}
            <div className={`hidden lg:flex absolute w-1/2 top-0 pt-2 text-xl ${isLeft ? 'right-0 justify-start pl-16' : 'left-0 justify-end pr-16'}`}>
                <p className={`p-2 rounded-lg ${durationClass} transition-colors duration-500`}>{data.duration}</p>
            </div>


            {/* --- Content Box --- */}
            <div 
                className={`w-full lg:w-1/2 relative z-10 
                           ${contentPlacement} 
                           ${isLeft ? '' : 'lg:order-2'} 
                           transition-all duration-500 transform ${animationAlignment}`}
            >
                {/* The actual content box */}
                <div className={`group p-6 rounded-xl border-2 bg-gray-900/70 shadow-xl 
                                ${boxHighlightClass} transition-all duration-500 hover:shadow-green-400/30`}>
                    
                    {/* Mobile-only Duration */}
                    <p className={`lg:hidden text-sm italic ${durationClass} mb-3`}>{data.duration}</p>

                    {/* Title and Company */}
                    <h3 className={`text-2xl font-bold text-white mb-1`}>
                        {data.title} @ <span className="text-green-400">{data.company}</span>
                    </h3>
                    
                    {/* Description Points */}
                    <ul className="list-disc ml-5 space-y-2 mt-4">
                        {data.description.map((point, index) => (
                            <li 
                                key={index} 
                                className={`text-base text-gray-300 transition-all duration-700 ease-out`}
                                style={{ 
                                    opacity: isActive ? 1 : 0.8,
                                    transform: isActive ? 'translateX(0)' : 'translateX(-10px)',
                                    transitionDelay: `${index * 0.1}s` 
                                }}
                            >
                                {point}
                            </li>
                        ))}
                    </ul>

                    {/* Technologies Badges */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {data.technologies.map((tech, index) => (
                            <span 
                                key={index} 
                                className={`px-3 py-1 text-xs font-semibold rounded-full 
                                    ${isActive ? 'bg-green-600/30 text-green-400' : 'bg-gray-800 text-gray-400'} 
                                    transition-colors duration-500`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Main Experience Component ---
const Experience = ({ activeJobId, itemRefs }) => {

    return (
        <section id="experience" className="section-padding py-20 min-h-screen bg-black text-white">
            <div className="container mx-auto px-6">
                
                {/* --- Section Title --- */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4">
                    <span className="text-white">My</span> <span className="text-green-400">Experience</span>
                </h2>
                <p className='text-center text-lg text-gray-400 mb-16'>
                    A journey through innovative roles and impactful contributions in the tech industry
                </p>

                {/* --- Timeline Container (Parent of all items) --- */}
                <div className="relative">
                    
                    {/* Central Vertical Line (Neon Glow Effect) */}
                    <div 
                        className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-0.5 bg-gray-700 hidden lg:block"
                    >
                        {/* Neon Line Effect using a shadow */}
                        <div className="absolute inset-0 shadow-[0_0_10px_rgba(76,255,137,0.5)] opacity-50"></div>
                    </div>
                    
                    {experienceData.map((job, index) => (
                        <ExperienceItem 
                            key={job.id} 
                            data={job} 
                            index={index} 
                            itemRef={itemRefs[job.id]}
                            isActive={job.id === activeJobId} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;