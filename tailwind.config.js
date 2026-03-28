/** @type {import('tailwindcss').Config} */
export default {
  // 1. CONTENT remains correct and is essential for purging
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <--- CRITICAL: Checks all your React component files
  ],
  
  // 🛑 2. SAFELIST MOVED TO THE TOP-LEVEL 🛑
  // This explicitly tells Tailwind to include these classes, which fixes the dynamic class issue in Skills.jsx
  safelist: [
    // Skills component colors
    'text-red-400', 
    'border-red-400',
    'text-blue-400',
    'border-blue-400',
    'text-purple-400',
    'border-purple-400',
    'text-yellow-400',
    'border-yellow-400',
    'text-green-400',
    'border-green-400',
    'text-pink-400',
    'border-pink-400',
  ],

  // 🛑 3. mode: "jit" is removed as it's the default in Tailwind CSS v3+
  // mode: "jit", 
  
  theme: {
    extend: {
      colors: {
        'background-dark': '#0a0b0f', 
        'primary-blue': '#00ffff',     
        'text-light': '#a1a1aa',       
        'card-dark': '#111215',        
        'border-dark': '#27272a',      
      },
      fontFamily: {
        // Poppins needs to be imported in your CSS or HTML to work correctly
        sans: ['Poppins', 'sans-serif'],
      },
      screens: {
        'xs': '450px',
      },
      boxShadow: {
        'custom': '0 5px 15px rgba(0, 255, 255, 0.2)', 
      },
      animation: {
        'shadow-pulse': 'shadow-pulse 4s ease-in-out infinite', // Slow, smooth loop
      },
      keyframes: {
        'shadow-pulse': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(76, 255, 137, 0.4)' }, // Soft shadow (using green-400 color)
          '50%': { boxShadow: '0 0 20px rgba(76, 255, 137, 0.8), 0 0 30px rgba(76, 255, 137, 0.4)' }, // Brighter, wider shadow
        },
      },
      // 🛑 The safelist array was removed from here.
    },
  },
  plugins: [],
}