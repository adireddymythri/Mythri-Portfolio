import React from 'react';
// Note: All 'lucide-react' imports are intentionally removed

const About = () => {
    // Content exactly matching the screenshot
    const introduction = "I am Adireddi Naga Mythri, a passionate software developer driven by curiosity, discipline, and a strong commitment to solving real-world problems. I constantly look for opportunities to learn, grow, and refine my skills";
    const experience = "I thrive in building intelligent and user-centric applications that combine clean functionality with meaningful impact, especially in areas like AI, web development, and NLP. I enjoy turning ideas into solutions that are efficient, scalable, and easy to use.";

    // Social/Resource Links - All entries use 'src'
    const socialLinks = [
        // Ensure these files exist in your public directory!
        { src: "/github.png", url: "https://github.com/adireddymythri", name: "GitHub" },
        { src: "/leetcode.png", url: "https://leetcode.com/u/adireddymythri/", name: "Portfolio/É" },
        { src: "/Hackerrank.png", url: "https://www.hackerrank.com/profile/adireddymythri", name: "HackerRank/H-Logo" },
        { src: "/geeksforgeeks.png", url: "https://www.geeksforgeeks.org/profile/adireddy56nj", name: "CodeChef/Æ-Logo" },
        { src: "/linkedin.png", url: "https://www.linkedin.com/in/mythri-adireddy-14b75631b/", name: "LinkedIn" },
    ];


    return (
        <section id="about" className="section-padding py-20 min-h-screen bg-black text-white">
            <div className="container mx-auto px-6">
                
                {/* --- Two-Column Layout Container --- */}
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    
                    {/* --- Left Column: Text and Social Links --- */}
                    <div className="lg:w-1/2 pt-0 lg:pl-0 lg:-ml-6 lg:pr-6"> 
                        
                        {/* Section Title */}
                        <h2 className="text-5xl font-extrabold mb-12">
                            <span className="text-white">About</span> <span className="text-green-400">Me</span>
                        </h2>

                        {/* Introduction Text */}
                        <p className="text-xl mb-6 leading-relaxed">
                            {introduction}
                        </p>

                        {/* Experience/Motto Text */}
                        <p className="text-xl mb-12 leading-relaxed">
                            {experience}
                        </p>

                        {/* Social Links/Icons */}
                        <div className="flex space-x-6 text-white">
                            {socialLinks.map((link, index) => (
                                <a 
                                    key={index}
                                    href={link.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-3xl hover:text-green-400 transition-colors"
                                    title={link.name}
                                >
                                    {/* 🛑 Width and Height explicitly set using Tailwind classes w-9 and h-9 */}
                                    <img 
                                        src={link.src} 
                                        alt={link.name + " icon"} 
                                        className="w-10 h-10 opacity-80 hover:opacity-100 transition-opacity" 
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    {/* --- Right Column: Illustration Image --- */}
                    <div className="lg:w-1/2 flex justify-center items-start p-4"> 
                        
                        {/* Image Container with Animated Outer Line */}
                        <div className="rounded-2xl overflow-hidden shadow-2xl bg-indigo-900/20 w-full max-w-lg animate-shadow-pulse">
                            
                            <img 
                                src="/illustration.png" // Replace with your actual file path
                                alt="Front-end, Back-end, Full Stack Illustration" 
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;