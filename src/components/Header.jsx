import React, { forwardRef } from 'react';
import { Code } from 'lucide-react';

const Header = forwardRef((props, ref) => {
  return (
    <header ref={ref} className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">JOSHUA ARNOLD LEO</h1>
            <h2 className="text-xl md:text-2xl mb-6">Computer Science Engineering Student</h2>
            <p className="text-lg mb-6">
              Pursuing BE in Computer Science Engineering at SKCT with a passion for technology and problem-solving.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="bg-white text-blue-900 px-6 py-2 rounded-full font-medium hover:bg-blue-100 transition duration-300">
                Contact Me
              </a>
              <a href="#projects" className="bg-transparent border-2 border-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-blue-900 transition duration-300" onClick={() => {scrollToSection('projects')}}>
                View Projects
              </a>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-blue-800 border-4 border-white overflow-hidden flex items-center justify-center">
              <Code size={80} className="text-white opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;