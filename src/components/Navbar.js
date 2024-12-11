import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Hamburger and cross icons
import { FaEnvelope, FaPhone, FaLinkedin, FaResearchgate } from 'react-icons/fa'; // FontAwesome icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 h-screen bg-gradient-to-b from-teal-800 to-teal-900 text-white shadow-xl z-50">
      {/* Hamburger button for mobile */}
      <button
        onClick={toggleMenu}
        className="absolute top-4 left-4 text-3xl md:hidden hover:text-teal-300 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Side menu */}
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-teal-800 to-teal-900 transition-transform duration-300 shadow-lg`}
      >
        <div className="p-6 space-y-8">

          {/* Navigation Links */}
          <ul className="space-y-6">
            {['About', 'Publications', 'Projects', 'Achievements', 'Hobbies'].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="block text-lg font-medium hover:bg-teal-700 p-2 rounded-md transition-all shadow-sm hover:shadow-lg"
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg font-medium hover:bg-teal-700 p-2 rounded-md transition-all shadow-sm hover:shadow-lg"
              >
                CV
              </a>
            </li>
          </ul>

          {/* Contact Icons */}
          <div className="flex flex-col space-y-4 mt-6">
            <a
              href="mailto:example@example.com"
              className="flex items-center gap-3 text-lg hover:text-teal-300 transition-colors"
            >
              <FaEnvelope size={20} /> Email
            </a>
            <a
              href="tel:+123456789"
              className="flex items-center gap-3 text-lg hover:text-teal-300 transition-colors"
            >
              <FaPhone size={20} /> Call
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg hover:text-teal-300 transition-colors"
            >
              <FaLinkedin size={20} /> LinkedIn
            </a>
            <a
              href="https://researchgate.net"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg hover:text-teal-300 transition-colors"
            >
              <FaResearchgate size={20} /> ResearchGate
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
