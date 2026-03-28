import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants/index.js'; 
import { Menu, X, Download } from 'lucide-react'; 

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🛑 RESUME LINK 🛑
  const RESUME_DOWNLOAD_LINK = "/MAYTHRI_RESUME.pdf";

  // 🛑 BUTTON STYLES (Used for both Desktop and Mobile buttons) 🛑
  // Ensuring all classes are present and correct based on your previous code:
  const BUTTON_CLASSES = "items-center gap-2 py-3 px-6 rounded-full font-bold text-white shadow-lg bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 transition-colors duration-300 transform hover:scale-[1.03]";
  const MOBILE_BUTTON_CLASSES = "w-full mt-2 py-2 px-4 rounded-lg font-bold text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 transition-colors";


  // Effect for background transparency/blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // HELPER FUNCTION: Ensures 'achievements' links go to 'certifications' 
  const getTargetId = (id) => {
    return id.toLowerCase() === 'achievements' ? 'certifications' : id;
  };

  const handleNavLinkClick = (id, title) => {
    setActive(title);
    setToggle(false);
    window.location.hash = getTargetId(id); 
  };

  // NEW HANDLER FUNCTION: Opens the resume link in a new tab/window 
  const handleResumeDownload = () => {
    window.open(RESUME_DOWNLOAD_LINK, '_blank');
    setToggle(false); // Close mobile menu if open
  };

  return (
    <nav 
      className={`
        fixed w-full z-20 top-0 transition-all duration-300 py-4 
        ${scrolled ? "bg-background-dark/90" : "bg-transparent"}
      `}
    >
      <div className="w-full mx-auto flex justify-between items-center px-10 md:px-110 lg:px-10">
        
        {/* 1. NK Logo */}
        <a 
          href="#home" 
          className="text-white text-5xl font-extrabold"
          onClick={() => handleNavLinkClick("home", "home")}
        >
          <img 
                        src="/nm.png" 
                        alt="NK Monogram Logo"
                        className="w-20 h-20 object-contain"
                    />
        </a>

        {/* 2. Central Navigation Container */}
        <div className={`
          hidden lg:flex items-center h-16 
          px-12 rounded-full shadow-lg gap-10
          bg-white/15 border border-white/20 backdrop-blur-xl 
          transition-all duration-300
        `}>
          
          {/* Name/Branding */}
          <span className="text-xl font-semibold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Mythri Portfolio
            </span>
          </span>
          
          {/* Vertical Separator */}
          <div className="w-[1px] h-2/3 bg-white/20"></div>

          {/* Navigation Links */}
          <ul className="list-none flex flex-row gap-6">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`
                  ${active === link.title.toLowerCase() ? "text-white" : "text-text-light/70"} 
                  hover:text-white text-base font-medium cursor-pointer transition-colors
                `}
                onClick={() => handleNavLinkClick(link.id, link.title.toLowerCase())}
              >
                <a href={`#${getTargetId(link.id)}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* 3. Resume Button (Desktop) - Applying the combined BUTTON_CLASSES variable */}
        <button 
          className={`hidden lg:flex ${BUTTON_CLASSES}`}
          onClick={handleResumeDownload} 
        >
          <Download className="w-5 h-5" />
          Resume
        </button>

        {/* 📱 Mobile Menu Button & Dropdown */}
        <div className="lg:hidden flex justify-end items-center">
           <button 
                onClick={() => setToggle(!toggle)}
                className="text-white hover:text-primary-blue transition-colors"
            >
                {toggle ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8 text-white" />}
            </button>
        </div>
        <div
            className={`
            ${!toggle ? "hidden opacity-0 scale-y-95" : "flex opacity-100 scale-y-100"} 
            lg:hidden p-6 bg-card-dark/95 absolute top-16 right-4 mx-2 my-2 min-w-[170px] z-10 rounded-xl shadow-2xl 
            transition-all duration-300 transform origin-top border border-primary-blue/20
            `}
        >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => (
                <li
                    key={link.id}
                    className={`
                        ${active === link.title.toLowerCase() ? "text-primary-blue" : "text-white"} 
                        font-medium cursor-pointer text-base hover:text-primary-blue transition-colors
                    `}
                    onClick={() => handleNavLinkClick(link.id, link.title.toLowerCase())}
                >
                    <a href={`#${getTargetId(link.id)}`}>{link.title}</a>
                </li>
                ))}
                {/* Mobile Resume Button - Applying the combined MOBILE_BUTTON_CLASSES variable */}
                <button 
                    className={MOBILE_BUTTON_CLASSES}
                    onClick={handleResumeDownload} 
                >
                    <Download className="w-4 h-4 inline mr-2" /> Resume
                </button>
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;