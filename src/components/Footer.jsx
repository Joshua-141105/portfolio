import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Joshua Arnold Leo</h3>
            <p className="text-gray-400">Computer Science Engineering Student</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/Joshua-141105" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/joshua-arnold-leo" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:727823tucs122@skct.edu.in" className="hover:text-blue-400 transition duration-300">
              <Mail size={24} />
            </a>
            <a href="tel:+916369211344" className="hover:text-blue-400 transition duration-300">
              <Phone size={24} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Joshua Arnold Leo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;