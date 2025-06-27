import React from 'react';

// Smooth scroll to section
const scrollToSection = (id) => {
  const target = id === 'top' ? document.body : document.getElementById(id);
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

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Name (left) */}
        <button
          onClick={() => scrollToSection('top')}
          className="text-xl md:text-2xl font-bold hover:text-blue-300 transition duration-200"
        >
          JOSHUA ARNOLD LEO
        </button>

        {/* Navigation Links (right) */}
        <div className="flex space-x-2 md:space-x-4 text-sm hidden md:block md:text-base">
          <button
            onClick={() => scrollToSection('about')}
            className="px-4 py-1 rounded-full hover:bg-white hover:text-blue-900 transition duration-200"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="px-4 py-1 rounded-full hover:bg-white hover:text-blue-900 transition duration-200"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-4 py-1 rounded-full hover:bg-white hover:text-blue-900 transition duration-200"
          >
            Projects
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
