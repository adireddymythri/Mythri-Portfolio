import React from 'react';

// --- Data Structure (Same as above) ---
const skillsData = [
    {
        category: 'Languages',
        color: 'red-400', 
        skills: ['C', 'Java', 'Python', 'C++ (Basics)'],
    },
    {
        category: 'Web Development',
        color: 'blue-400',
        skills: ['HTML', 'CSS', 'JavaScript', 'Django', 'React.js', 'Node.js', 'Tailwind CSS'],
    },
    {
        category: 'AI / ML',
        color: 'teal-400',
        skills: ['Basics of NLP', 'RAG', 'YOLOv8', 'OpenCV'],
    },
    {
        category: 'Cloud Technologies',
        color: 'orange-400',
        skills: ['AWS EC2', 'AWS S3', 'AWS IAM (Basics)'],
    },
    {
        category: 'Core Subjects',
        color: 'purple-400',
        skills: ['DSA', 'OS', 'CN', 'DBMS', 'OOPS'],
    },
    {
        category: 'Databases',
        color: 'green-400',
        skills: ['MySQL', 'MongoDB',],
    },
    {
        category: 'Tools',
        color: 'yellow-400',
        skills: ['Git', 'GitHub', 'Render', 'Vercel', 'Google Colab', 'Jupyter Notebook', 'Figma', 'Eclipse', 'VS Code'],
    },
    {
        category: 'Soft Skills',
        color: 'indigo-400',
        skills: ['Communication', 'Time Management', 'Problem-Solving', 'Analytical Thinking', 'Team Collaboration'],
    },
    {
        category: 'Platforms',
        color: 'pink-400',
        skills: ['LeetCode', 'CodeChef', 'Codeforces', 'Hackerrank', 'GeeksforGeeks'],
    },
];

// --- Skill Ball Component ---
const SkillBall = ({ skill, color }) => {
    // Dynamic classes for neon glow and color
    const glowClass = `shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_20px_var(--tw-shadow-color)]`;
    const colorVariable = `shadow-${color}`;

    return (
        <div 
            className={`
                px-4 py-2 rounded-full text-sm font-semibold 
                bg-gray-900/80 border border-current 
                text-${color} 
                ${glowClass} 
                hover:scale-110 
                transition-all duration-300 ease-in-out
            `}
            style={{ 
                // Set the specific color variable for the glow effect
                '--tw-shadow-color': `rgb(var(--color-${color.split('-')[0]}-400))`,
                borderColor: `rgb(var(--color-${color.split('-')[0]}-400))`
            }}
        >
            {skill}
        </div>
    );
};

// --- Skills Category Container ---
const SkillCategory = ({ category, color, skills }) => {
    return (
        <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/50">
            <h3 className={`text-2xl font-bold mb-6 text-center text-${color}`}>{category}</h3>
            
            {/* Displaying skills as "floating" balls in a flexible container */}
            <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                    // Applying a small, random transform to simulate "floating" positions
                    <div 
                        key={index}
                        style={{
                            transform: `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px) rotate(${Math.random() * 6 - 3}deg)`
                        }}
                    >
                        <SkillBall skill={skill} color={color} />
                    </div>
                ))}
            </div>
        </div>
    );
};


// --- Main Skills Component ---
const Skills = () => {
    return (
        <section id="skills" className="section-padding py-20 min-h-screen bg-black text-white">
            <div className="container mx-auto px-6">
                
                {/* --- Section Title --- */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4">
                    <span className="text-white">Technical</span> <span className="text-green-400">Skills</span>
                </h2>
                <p className='text-center text-lg text-gray-400 mb-16'>
                    My expertise across development, core subjects, and competitive platforms.
                </p>

                {/* --- Skills Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map(data => (
                        <SkillCategory 
                            key={data.category}
                            category={data.category}
                            color={data.color}
                            skills={data.skills}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;