import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react'; 
import { scrollingTitles, ringText1, ringText2, ringText3, ringText4, ringText5 } from '../constants/index.js'; 

// --- Sub-Component for the Scrolling Text Effect (UNMODIFIED) ---
const MarqueeText = ({ items }) => {
    // Combine the items and double the list for seamless continuous scrolling
    const marqueeContent = [...items, ...items]; 

    return (
        <div className="overflow-hidden whitespace-nowrap pt-2">
            <div className="inline-block animate-marquee hover:animation-play-state-paused">
                {/* DECREASED TEXT SIZE CLASSES: text-lg md:text-xl */}
                <span className="text-lg md:text-xl font-semibold text-white/70">
                    {marqueeContent.map((title, index) => (
                        <React.Fragment key={index}>
                            {title}
                            {/* Separator between titles */}
                            {index < marqueeContent.length - 1 && (
                                <span className="text-primary-blue mx-6">•</span>
                            )}
                        </React.Fragment>
                    ))}
                </span>
            </div>
        </div>
    );
};

const Hero = () => {
  return (
    <section id="home" className="section-padding min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* --- Main Content Area (Centered) --- */}
      <div className="relative z-10 text-center w-full max-w-4xl pt-20 -translate-y-16">
        
        {/* --- 1. Circular Photo and Rings --- */}
        {/* 🛑 DECREASED CONTAINER SIZE */}
        <div className="relative flex items-center justify-center 
             w-[320px] h-[320px] md:w-[400px] md:h-[400px] mx-auto mb-8">
          
          {/* Main Photo Container - 🛑 DECREASED PHOTO SIZE */}
          <div className="absolute w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden 
               border-4 border-primary-blue/50 shadow-custom z-70">
            
            <img 
              src="/my3.jpg" 
              alt="Navaneethakrishnan" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* --- ROTATING EFFECTS (Rings and Stars remain proportional) --- */}
          
          {/* Ring 1 (Inner) - Opacity /20 (VISIBLE) */}
          <div className="absolute w-[110%] h-[110%] rounded-full border-4 border-primary-blue/20 flex items-center justify-center animate-spin-slow">
            <span className="absolute text-[10px] text-white whitespace-nowrap p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[25deg]">
              {ringText1}
            </span>
            {/* Bright Stars */}
            <Sparkles className="absolute w-5 h-5 text-white top-[15%] right-[20%] transform rotate-[100deg]" />
            <Sparkles className="absolute w-4 h-4 text-primary-blue/90 bottom-[5%] left-[30%] transform rotate-[200deg]" />
            <Sparkles className="absolute w-3 h-3 text-white/80 top-[40%] left-[80%]" />
            {/* Bright Dot */}
            <div className="absolute w-2 h-2 rounded-full bg-primary-blue top-[50%] right-0 -mr-1"></div>
          </div>
          
          {/* Ring 2 (Middle) - Opacity /15 (VISIBLE) */}
          <div className="absolute w-[135%] h-[135%] rounded-full border-2 border-primary-blue/15 flex items-center justify-center animate-spin-reverse">
            <span className="absolute text-[10px] text-white whitespace-nowrap p-4 bottom-[5%] right-[20%] transform rotate-[-45deg]">
              {ringText2}
            </span>
            {/* Bright Stars */}
            <Sparkles className="absolute w-5 h-5 text-primary-blue top-[30%] right-[15%]" />
            <Sparkles className="absolute w-4 h-4 text-white/90 bottom-[20%] left-[10%]" />
            {/* Bright Dot */}
            <div className="absolute w-2 h-2 rounded-full bg-primary-blue top-[30%] right-[5%]"></div>
          </div>

          {/* Ring 3 (Outer) - Opacity /10 (VISIBLE) */}
          <div className="absolute w-[160%] h-[160%] rounded-full border border-primary-blue/10 flex items-center justify-center animate-spin-slow">
            <span className="absolute text-[10px] text-white/90 whitespace-nowrap p-4 top-[5%] left-[5%] transform rotate-[-120deg]">
              {ringText3}
            </span>
            <Sparkles className="absolute w-3 h-3 text-primary-blue/70 top-[15%] right-[40%]" />
            <div className="absolute w-2 h-2 rounded-full bg-primary-blue/50 bottom-[10%] left-[10%]"></div>
          </div>
          
          {/* Ring 4 (Extra Outer) - BORDER REMOVED */}
          <div className="absolute w-[185%] h-[185%] rounded-full border-0 flex items-center justify-center animate-spin-reverse">
            <span className="absolute text-[9px] text-white/80 whitespace-nowrap p-4 top-[30%] left-[10%] transform rotate-[90deg]">
              {ringText4}
            </span>
            <Sparkles className="absolute w-3 h-3 text-white/40 bottom-[10%] right-[30%]" />
            <div className="absolute w-1 h-1 rounded-full bg-primary-blue/20 top-[40%] right-[10%]"></div>
          </div>

          {/* Ring 5 (Farthest) - Border already removed (border-0) */}
          <div className="absolute w-[210%] h-[210%] rounded-full border-0 flex items-center justify-center animate-spin-slow">
            <span className="absolute text-[9px] text-white/80 whitespace-nowrap p-4 bottom-[15%] right-[25%] transform rotate-[-150deg]">
              {ringText5}
            </span>
            <Sparkles className="absolute w-2 h-2 text-primary-blue/70 bottom-[20%] left-[20%] transform rotate-[45deg]" />
          </div>

        </div>
        
        {/* --- 2. Name and Titles --- */}
        
        {/* Name */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-white mb-2">
          Hey, I'm <span className="text-primary-blue">Mythri Adireddi</span>
        </h1>
        
        {/* Scrolling Titles Area */}
        <div className="relative w-full overflow-hidden h-10 mb-8">
            <MarqueeText items={scrollingTitles} />
        </div>

        {/* --- 3. CTA Button (UNMODIFIED) --- */}
        <a 
            href="#contact"
            className="inline-flex items-center gap-3 py-3 px-8 rounded-full font-bold text-white text-lg mt-4 
                       bg-gradient-to-r from-pink-600 to-purple-600 shadow-custom
                       hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-[1.03]"
        >
          Let's Connect <ArrowRight className="w-5 h-5" />
        </a>

      </div>
      
      {/* Background Dots/Stars (Increased size and brightness) */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <Sparkles className="absolute top-10 right-20 w-10 h-10 text-white/50" />
          <Sparkles className="absolute top-1/4 left-1/4 w-6 h-6 text-primary-blue/70" />
          <div className="absolute bottom-1/4 right-1/4 w-4 h-4 rounded-full bg-white/50"></div>
          <div className="absolute top-2/3 left-1/2 w-3 h-3 rounded-full bg-primary-blue/30"></div>
      </div>
    </section>
  );
};

export default Hero;