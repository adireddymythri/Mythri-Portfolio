import React, { useState } from 'react';
import { Award, GraduationCap, X, ChevronDown, ChevronUp, RotateCcw } from 'lucide-react'; 

// --- Constants for Initial Visibility ---
const INITIAL_CERT_COUNT = 4;
const INITIAL_ACHIEVEMENT_COUNT = 3;

const certificatesData = [
    // **CERT-7: GenAI Hackathon**
    { 
        id: 'cert-7', 
        title: 'Top 10 Finalist – GenAI Hackathon', 
        issuer: 'GenAIversity & JNTU-GV', 
        image: '/genai_hackathon.png', 
        type: 'cert', 
        details: 'Recognized as a Top 10 Finalist among 240 teams in a 48-hour Hackathon organized by GenAIversity at JNTU-GV Vizianagaram Campus.',
        verificationLink: 'https://drive.google.com/file/d/1HdRWrPIZp3czMbCeo4jORUXKZpqNCbqc/view?usp=sharing' 
    },
    // **CERT-1: Atlassian Agile Project Management**
    { 
        id: 'cert-1', 
        title: 'Atlassian Agile Project Management', 
        issuer: 'Atlassian', 
        image: '/Atlassian.png', 
        type: 'cert', 
        details: 'Agile methodologies, Scrum framework, and Jira best practices for project delivery.',
        // Placeholder link 1 (REPLACE THIS)
        verificationLink: 'https://drive.google.com/file/d/1R1yVgBP7N2hdNy62ST-2o14c4Q6rJilX/view?usp=sharing' 
    },
    // **CERT-3: Smart Interviews (Smart Coder) - Original Link**
    { 
        id: 'cert-3', 
        title: 'Smart Interviews (Smart Coder)', 
        issuer: 'Smart Interviews', 
        image: '/smart_silver.png', 
        type: 'cert', 
        details: 'Achieved a Smart Coder Silver certificate for exceptional performance in competitive coding and data structures.',
        // Your provided link
        verificationLink: 'https://smartinterviews.in/certificate/236ea8dd'
    },
    // **CERT-2: UI/UX Design**
    { 
        id: 'cert-2', 
        title: 'UI/UX Design', 
        issuer: 'GDG', 
        image: '/gdg certi.jpg', 
        type: 'cert', 
        details: 'Fundamentals of user interface and user experience design, wireframing, and prototyping tools.',
        // Placeholder link 2 (REPLACE THIS)
        verificationLink: 'https://drive.google.com/file/d/1Vcv-6ZvS3iMkb8cMUO8Iis-jQQqNoVXh/view?usp=sharing' 
    },
    // **CERT-4: Programming Using Java**
    { 
        id: 'cert-4', 
        title: 'Programming Using Java', 
        issuer: 'Infosys SpringBoard', 
        image: '/java_foun.png', 
        type: 'cert', 
        details: 'Completed comprehensive training on Java programming language fundamentals, OOP concepts, and standard libraries.',
        // Placeholder link 3 (REPLACE THIS)
        verificationLink: 'https://drive.google.com/file/d/1iUvKFTEB6w892GUGApBQNKIDNjURJJTE/view?usp=sharing' 
    },
    // **CERT-5: Career Essentials Github**
    { 
        id: 'cert-5', 
        title: 'Career Essentials Github', 
        issuer: 'Github', 
        image: '/githu.png', 
        type: 'cert', 
        details: 'Mastered essential GitHub skills for collaboration, version control, and repository management.',
        // Placeholder link 4 (REPLACE THIS)
        verificationLink: 'https://drive.google.com/file/d/1bmve0Qth9MsbL63koJBGyrgMNgFD2_Q7/view?usp=sharing' 
    },
    // **CERT-6: Career Essentials in Generative AI**
    { 
        id: 'cert-6', 
        title: 'Career Essentials in Generative AI', 
        issuer: 'Microsoft and Linkedin', 
        image: '/microsoft.png', 
        type: 'cert', 
        details: 'Explored core concepts, ethical considerations, and practical applications of Generative AI models.',
        // Placeholder link 5 (REPLACE THIS)
        verificationLink: 'https://drive.google.com/file/d/1vdBslNxlMeLsR5Uxx5vpT2o2_9CmBfSo/view?usp=sharing' 
    },
];

const achievementsData = [
    { id: 'ach-0', title: 'Top 10 Finalist – GenAI Hackathon (48 hrs)', description: 'Recognized as a Top 10 Finalist among 240 teams for developing GovInsight.', details: 'Developed GovInsight, an AI-Powered Government Budget Intelligence System using GenAI, RAG, and FastAPI.', fullDetails: 'GovInsight: AI-Powered Government Budget Intelligence System. Built a Retrieval-Augmented Generation (RAG) system using GenAI, NLP, Python, and FastAPI to semantically query Indian government budget and policy PDFs, achieving 93% retrieval relevance and 87% factual response accuracy. Automated large-scale document analysis and information retrieval, reducing manual effort by 80% and query response time by 75%.', icon: Award, type: 'ach' },
    { id: 'ach-1', title: 'UI/UX Design Winner', description: 'Designed the FestivePal UI/UX prototype, focusing on intuitive navigation and vibrant user experience.', details: 'Secured 2nd place in a GDG-hosted design challenge, demonstrating proficiency in design principles and prototyping tools.', icon: Award, type: 'ach' },
    { id: 'ach-2', title: '300+ Problems Solved on LeetCode', description: 'Actively participated in 50+ competitive programming contests', details: 'Solved over 300 coding problems across major platforms, consistently improving DSA skills through challenge-based learning.', icon: GraduationCap, type: 'ach' },
    { id: 'ach-3', title: 'Short Film Winner', description: 'Created a short film that won 1st prize in a college-level competition.', details: 'The film, organized by the Splash Out Club, showcased creativity and storytelling, winning 1st prize among multiple participating teams.', icon: GraduationCap, type: 'ach' },
    { id: 'ach-4', title: 'Treasure Hunt Winner', description: 'Won 1st prize in a college-level Treasure Hunt competition organized by the Mathlets Club.', details: 'The event tested logical thinking, problem-solving, and teamwork across multiple challenging rounds, resulting in 1st prize.', icon: Award, type: 'ach' },
];

// --- Sub-Component: Individual Card (FINAL VERSION - Hover Flip) ---
const Card = ({ item, openModal }) => {
    const isCert = item.type === 'cert';
    const baseClasses = isCert 
        ? 'bg-gray-900/80 border-green-500/50' 
        : 'bg-indigo-900/80 border-indigo-500/50';
    
    // Dynamic height. Certs use h-96, Achievements now use h-40.
    const cardHeight = isCert ? 'h-96' : 'h-40'; 
    
    const handleDetailClick = (e) => {
        e.stopPropagation(); 
        openModal(item);
    };

    return (
        // 1. Outer Wrapper: Sets 3D context and adds 'group' class.
        <div 
            className={`group ${baseClasses} rounded-xl border-2 p-0 ${cardHeight} w-full cursor-pointer transition-all duration-300 transform hover:shadow-[0_0_15px_rgba(100,100,255,0.7)] hover:scale-[1.02]`}
            style={{ perspective: '1000px' }} 
        >
            {/* 2. Inner Wrapper: Rotates and preserves 3D space. */}
            <div 
                className={`relative w-full h-full transition-transform duration-700 group-hover:rotate-y-180`}
                style={{ 
                    transformStyle: 'preserve-3d', 
                }} 
            >
                {/* --- CARD FRONT --- */}
                <div 
                    className="absolute w-full h-full p-4 flex flex-col justify-between"
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }} 
                >
                    <div>
                        <div className="flex items-start mb-2">
                            {isCert ? (
                                <GraduationCap className="w-6 h-6 text-green-400 mr-3" />
                            ) : (
                                <item.icon className="w-6 h-6 text-indigo-400 mr-3" />
                            )}
                            <h3 className="text-xl font-bold text-white leading-snug">{item.title}</h3>
                        </div>
                        
                        <p className="text-sm text-gray-400 mt-1">
                            {isCert ? item.issuer : item.description}
                        </p>
                    </div>

                    {/* Image is only rendered for certifications */}
                    {item.image && (
                        <div className="mt-4 h-40 w-full flex items-center justify-center bg-black/30 rounded-lg overflow-hidden">
                            <img 
                                src={item.image} 
                                alt={`${item.title} logo/badge`} 
                                className="h-full w-auto object-contain" 
                            />
                        </div>
                    )}
                    
                    <div className='flex justify-end text-sm text-gray-500 pt-2 items-center'>
                        <RotateCcw className="w-4 h-4 mr-1"/>
                        **Hover to see details**
                    </div>
                </div>

                {/* --- CARD BACK (DETAILS) --- */}
                <div 
                    className="absolute w-full h-full p-4 flex flex-col justify-between"
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }} 
                >
                    <div>
                        <h3 className={`text-xl font-bold leading-snug ${isCert ? 'text-green-400' : 'text-indigo-400'} mb-3`}>
                            {item.title}
                        </h3>
                        <p className='text-md text-gray-300'>
                            **Key Details:**
                        </p>
                        <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                            {item.details}
                        </p>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4 border-t border-gray-700 pt-3">
                        <button 
                            onClick={handleDetailClick}
                            className={`px-3 py-1 text-xs font-semibold rounded ${isCert ? 'bg-green-600 hover:bg-green-700' : 'bg-indigo-600 hover:bg-indigo-700'} transition`}
                        >
                            View Full Info
                        </button>
                        <div className='flex items-center text-sm text-gray-500'>
                            <RotateCcw className="w-4 h-4 mr-1"/>
                            Remove mouse to flip back
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Sub-Component: Modal for Details (Uses generic link logic) ---
const DetailModal = ({ item, onClose }) => {
    if (!item) return null;

    const modalColor = item.type === 'cert' ? 'border-green-400' : 'border-indigo-400';
    // Checks if it's a certificate AND has a verification link
    const hasVerificationLink = item.type === 'cert' && item.verificationLink;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <div 
                className={`bg-gray-900 p-8 rounded-xl border-4 ${modalColor} max-w-lg w-full shadow-2xl`}
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-3xl font-bold text-white">{item.title}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <p className="text-md text-gray-300 mb-4">
                    {item.type === 'cert' ? `Issued by: ${item.issuer}` : item.description}
                </p>
                
                <div className="mt-6 border-t border-gray-700 pt-4">
                    {item.type === 'cert' ? (
                        <>
                            <p className='text-lg font-medium text-green-300'>Details:</p>
                            <p className='text-gray-400 mt-1'>{item.fullDetails || item.details}</p>
                            
                            {/* Renders the clickable link if item.verificationLink exists */}
                            {hasVerificationLink ? (
                                <a 
                                    href={item.verificationLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className='inline-block mt-4 px-4 py-2 text-sm font-semibold rounded bg-green-600 hover:bg-green-700 transition text-white'
                                >
                                    Verify Certificate (External Link)
                                </a>
                            ) : (
                                <p className='text-sm text-green-400 font-medium mt-3'>
                                    Verification link not available.
                                </p>
                            )}
                        </>
                    ) : (
                        <>
                            <p className='text-lg font-medium text-indigo-300'>Full Details:</p>
                            <p className='text-gray-400 mt-1'>{item.fullDetails || item.details}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};


// --- Main Certifications Component ---
const Certifications = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    
    // State to control visibility counts
    const [visibleCertCount, setVisibleCertCount] = useState(INITIAL_CERT_COUNT);
    const [visibleAchieveCount, setVisibleAchieveCount] = useState(INITIAL_ACHIEVEMENT_COUNT);

    // Handlers for Modal
    const handleCardClick = (item) => setSelectedItem(item); 
    const handleCloseModal = () => setSelectedItem(null);

    // Handlers for Show More/Less
    const handleShowMoreCerts = () => setVisibleCertCount(certificatesData.length);
    const handleShowLessCerts = () => setVisibleCertCount(INITIAL_CERT_COUNT);

    const handleShowMoreAchieves = () => setVisibleAchieveCount(achievementsData.length);
    const handleShowLessAchieves = () => setVisibleAchieveCount(INITIAL_ACHIEVEMENT_COUNT);

    // Derived State (Sliced Data)
    const visibleCerts = certificatesData.slice(0, visibleCertCount);
    const visibleAchieves = achievementsData.slice(0, visibleAchieveCount);

    // Control flags
    const showMoreCertsButton = visibleCertCount < certificatesData.length;
    const showLessCertsButton = visibleCertCount > INITIAL_CERT_COUNT;
    
    const showMoreAchievesButton = visibleAchieveCount < achievementsData.length;
    const showLessAchievesButton = visibleAchieveCount > INITIAL_ACHIEVEMENT_COUNT;


    return (
        <section id="certifications" className="section-padding py-20 min-h-screen bg-black text-white">
            <div className="container mx-auto px-6">
                
                {/* --- Section Title --- */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4">
                    <span className="text-white">Certifications &amp;</span> <span className="text-green-400">Achievements</span>
                </h2>
                <p className='text-center text-lg text-gray-400 mb-16'>
                    A showcase of my certifications and achievements across learning, competitions, and projects.
                </p>

                {/* --- Content Grid Container --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* 1. Certifications Column */}
                    <div>
                        <h3 className="text-3xl font-bold text-center lg:text-left text-green-400 mb-6">Certifications</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {visibleCerts.map(cert => (
                                <Card key={cert.id} item={cert} openModal={handleCardClick} />
                            ))}
                        </div>
                        
                        {/* Show More/Less Buttons for Certifications */}
                        <div className="text-center mt-6 flex justify-center space-x-4">
                            {showMoreCertsButton && (
                                <button 
                                    onClick={handleShowMoreCerts}
                                    className="px-6 py-2 border border-green-400 text-green-400 rounded-full hover:bg-green-900/30 transition flex items-center"
                                >
                                    Show More <ChevronDown className="w-4 h-4 ml-2" />
                                </button>
                            )}
                            {showLessCertsButton && (
                                <button 
                                    onClick={handleShowLessCerts}
                                    className="px-6 py-2 border border-green-400 text-green-400 rounded-full hover:bg-green-900/30 transition flex items-center"
                                >
                                    Show Less <ChevronUp className="w-4 h-4 ml-2" />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* 2. Achievements Column */}
                    <div>
                        <h3 className="text-3xl font-bold text-center lg:text-left text-indigo-400 mb-6">Achievements</h3>
                        <div className="grid grid-cols-1 gap-6">
                            {visibleAchieves.map(ach => (
                                <Card key={ach.id} item={ach} openModal={handleCardClick} />
                            ))}
                        </div>
                        
                        {/* Show More/Less Buttons for Achievements */}
                        <div className="text-center mt-6 flex justify-center space-x-4">
                            {showMoreAchievesButton && (
                                <button 
                                    onClick={handleShowMoreAchieves}
                                    className="px-6 py-2 border border-indigo-400 text-indigo-400 rounded-full hover:bg-indigo-900/30 transition flex items-center"
                                >
                                    Show More <ChevronDown className="w-4 h-4 ml-2" />
                                </button>
                            )}
                            {showLessAchievesButton && (
                                <button 
                                    onClick={handleShowLessAchieves}
                                    className="px-6 py-2 border border-indigo-400 text-indigo-400 rounded-full hover:bg-indigo-900/30 transition flex items-center"
                                >
                                    Show Less <ChevronUp className="w-4 h-4 ml-2" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Renderer */}
            <DetailModal item={selectedItem} onClose={handleCloseModal} />
        </section>
    );
};

export default Certifications;