import React, { forwardRef } from 'react';
import profileImg from '../assets/profile.jpg';

// Scroll to section with variable speed
const scrollToSection = (id) => {
  const target = document.getElementById(id);
  if (!target) return;

  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;

  const baseSpeed = 1;
  const minDuration = 300;
  const maxDuration = 1500;
  const duration = Math.min(maxDuration, Math.max(minDuration, Math.abs(distance) / baseSpeed));

  let start = null;

  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const percent = Math.min(progress / duration, 1);
    const ease = 1 - Math.pow(1 - percent, 3); // easeOutCubic

    window.scrollTo(0, startPosition + distance * ease);

    if (percent < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

const Header = forwardRef((props, ref) => {
  return (
    <header ref={ref} className="bg-blue-900 text-white py-16 pt-36">
      <div className="container mx-auto px-2 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="md:w-2/3 mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">JOSHUA ARNOLD LEO</h1>
            <h2 className="text-xl md:text-2xl mb-6">Computer Science Engineering Student</h2>
            <p className="text-lg mb-6">
              Pursuing BE in Computer Science Engineering at SKCT with a passion for technology and problem-solving.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="bg-white text-blue-900 px-6 py-2 rounded-full font-medium hover:bg-blue-100 transition duration-300"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
                className="bg-transparent border-2 border-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-blue-900 transition duration-300"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="md:w-1/3 flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-blue-800 border-4 border-white overflow-hidden flex items-center justify-center">
              <img
                src={profileImg}
                alt="Joshua Arnold Leo"
                className="object-cover object-[center_20%] w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
