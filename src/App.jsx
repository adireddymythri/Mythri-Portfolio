import React, { useState, useEffect, useRef } from 'react'; 
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience"; 
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certifications from './components/Certifications';

// 🛑 UPDATED: List of all job IDs used in the Experience component (4 total)
const jobIds = ['job-1', 'job-2', 'job-3', 'job-4']; 

function App() { 
    
    // --- State and Refs for Intersection Observer ---
    // Note: 'job-1' is the ID of the first item in the experienceData array.
    const [activeJobId, setActiveJobId] = useState('job-1'); 
    
    // 2. Create a ref object where each key points to a unique ref
    const itemRefs = jobIds.reduce((acc, id) => {
        // Ensure a stable ref object across renders
        acc[id] = acc[id] || useRef(null); 
        return acc;
    }, {});

    // 3. Effect hook for Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // When an item becomes visible (intersects), set it as active
                        setActiveJobId(entry.target.id);
                    }
                });
            },
            {
                // Options: IntersectionObserver fires when element is 50% visible
                threshold: 0.5 
            }
        );
        
        // Start observing all job item refs
        jobIds.forEach(id => {
            // Check if the ref object exists and has a current DOM node
            if (itemRefs[id] && itemRefs[id].current) {
                observer.observe(itemRefs[id].current);
            }
        });

        // Cleanup: Stop observing when the component unmounts
        return () => {
            jobIds.forEach(id => {
                if (itemRefs[id] && itemRefs[id].current) {
                    observer.unobserve(itemRefs[id].current);
                }
            });
        };
    }, [itemRefs]); // itemRefs is now a dependency to ensure cleanup works reliably

    // --- Component JSX Return ---
    return (
        <div className="bg-black text-white">
            <Navbar />
            <Hero />
            <About />
            
            {/* 1. Experience Timeline */}
            <Experience 
                activeJobId={activeJobId} 
                itemRefs={itemRefs} 
            />
{/* 4. Projects (Fixed Horizontal Layout) */}
            <Projects />

            {/* 2. Certifications & Achievements Grid */}
            <Certifications />
            
            {/* 3. Skills (Floating Balls) */}
            <Skills />
            
            
            
            <Contact />
            <Footer />
        </div>
    );
}

export default App;