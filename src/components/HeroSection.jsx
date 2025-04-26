import React, { useState, useEffect } from 'react';
import tarunImg from '../assets/taruncodes.jpg';

// Custom typewriter effect without external library
function TypewriterEffect({ words, loop }) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        
        if (text === currentWord) {
          setIsDeleting(true);
          setTypingSpeed(50);
          setTimeout(() => {}, 1500); // Delay before deleting
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(100);
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed]);

  return (
    <span>
      {text}<span className="animate-pulse">|</span>
    </span>
  );
}

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen flex items-center justify-center p-5" id="home">
      <div className="w-full max-w-6xl mx-auto">
        <div className="relative rounded-2xl p-8 md:p-12 lg:p-16 bg-gray-800 border border-gray-700 shadow-xl bg-opacity-70">
          {/* Top decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-1 bg-blue-500 rounded-tr-full rounded-tl-full transform translate-y-0"></div>
          <div className="absolute top-0 right-0 w-32 h-1 bg-blue-500 rounded-tr-full rounded-tl-full transform translate-y-0"></div>

          <div className="flex flex-col md:flex-col lg:flex-row-reverse items-center lg:justify-between gap-10 lg:gap-16">
            {/* Image with your imported image */}
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 opacity-20 blur-xl rounded-full"></div>
              <div className="relative w-36 h-36 md:w-44 md:h-44 lg:w-60 lg:h-60 rounded-full border-4 border-blue-500 shadow-lg overflow-hidden">
                {/* Using your imported image */}
                <img src={tarunImg} alt="TarunCodes Logo" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Content section */}
            <div className="flex flex-col max-w-xl">
              {/* Small badge */}
              <div className="mb-4 inline-block px-3 py-1 rounded-full bg-blue-500 bg-opacity-20 text-blue-400 text-sm font-medium self-center lg:self-start">
                Software Engineer
              </div>
              
              {/* Title with typewriter */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400 text-center lg:text-left mb-4">
                Hi there 👋 I'm <br />
                <span className="text-white">
                  <TypewriterEffect
                    words={['TarunCodes.', 'Backend Developer.', 'Junior Software Engineer.', 'Minecraft Enthusiast.']}
                    loop={true}
                  />
                </span>
              </h1>

              {/* Introduction */}
              <p className="text-gray-300 text-center lg:text-left mt-3 text-base md:text-lg font-medium leading-relaxed mb-6">
                Passionate coder aspiring to architect software solutions that seamlessly blend functionality and solve problems. Let's build the future together!
              </p>

              {/* Social links */}
              <div className="flex justify-center lg:justify-start space-x-6 mt-2 mb-6">
                <a 
                  href="https://github.com/TarunCodesFr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-all duration-300"
                >
                  {/* GitHub icon as SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a 
                  href="https://discordapp.com/users/847373992787705876" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-all duration-300"
                >
                  {/* Discord icon as SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </a>
                
                {/* CTA Button */}
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-lg transition-all duration-300 flex items-center"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-900 bg-opacity-50 rounded-xl p-8 border border-gray-700">
            <div className="text-center p-4 relative">
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-blue-500 bg-opacity-20"></div>
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">3+</h2>
              <p className="text-gray-300 font-medium">Years of Experience</p>
            </div>
            
            <div className="text-center p-4 relative">
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-blue-500 bg-opacity-20"></div>
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">20+</h2>
              <p className="text-gray-300 font-medium">Client Projects</p>
            </div>
            
            <div className="text-center p-4 relative">
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-blue-500 bg-opacity-20"></div>
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">100+</h2>
              <p className="text-gray-300 font-medium">Github Contributions</p>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="flex flex-col items-center">
              <p className="text-gray-400 text-sm mb-1">Scroll Down</p>
              {/* Chevron down icon as SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}