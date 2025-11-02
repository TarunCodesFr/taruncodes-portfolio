import React from 'react';
import { Laptop, Code, Database } from 'lucide-react';


export default function AboutSection() {
  return (
    
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4 md:px-10" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="inline-block text-sm font-medium tracking-wider text-blue-400 uppercase mb-2">
            Who I Am
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative">
            About Me
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></span>
          </h1>
        </div>

        {/* Content container */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* PC/Image component replacement */}
          <div className="w-full lg:w-1/2 h-80 md:h-96 overflow-hidden rounded-lg shadow-xl bg-gray-800 border border-gray-700 p-6 flex items-center justify-center">
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              {/* Decorative background elements */}
              <div className="absolute opacity-10 top-0 right-0">
                <Code size={120} />
              </div>
              <div className="absolute opacity-10 bottom-0 left-0">
                <Database size={100} />
              </div>
              
              {/* Main laptop illustration */}
              <div className="flex flex-col items-center justify-center">
                <Laptop size={160} className="text-blue-400 mb-6" />
                <div className="text-center">
                  <p className="text-gray-300 text-sm mb-2">Developer Portfolio</p>
                  <div className="flex gap-2 justify-center">
                    <span className="px-2 py-1 bg-blue-500 rounded-md text-xs text-white">PHP</span>
                    <span className="px-2 py-1 bg-orange-500 rounded-md text-xs text-white">Backend</span>
                    <span className="px-2 py-1 bg-gray-500 rounded-md text-xs text-white">NextJS</span>
                    <span className="px-2 py-1 bg-purple-500 rounded-md text-xs text-white">PocketMine</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-500 bg-opacity-20 text-blue-400 text-sm font-medium">
                Software Engineer
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Hey! I'm a software engineer from <span className="text-blue-400 font-medium">India</span> specializing in <span className="text-blue-400 font-medium">PHP, Javascript & React</span>.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                As a Junior Backend Developer and <a href="https://github.com/pmmp/PocketMine-MP" className="text-blue-400 font-medium underline hover:text-blue-300 transition-colors">PocketMine-MP</a> Developer for years, I'm passionate about creating web applications and plugins that make tasks easier and more productive.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                At just <span className="text-blue-400 font-medium">16 years old</span>, I'm thriving to become a recognized self-taught developer who creates solutions for common problems in the tech industry.
              </p>
              
              <div className="pt-4">
                <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-lg">
                  Let's Connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add this CSS for the fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}