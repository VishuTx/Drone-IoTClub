import React, { useEffect, useState } from 'react';
import { Bone as Drone } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1c0522]/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Drone size={32} className="text-white" />
            <span className="text-xl font-bold text-white">Drone & IOT Club</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-white hover:text-purple-300 transition-colors"
              aria-label="Navigate to Home"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-purple-300 transition-colors"
              aria-label="Navigate to About"
            >
              About
            </a>
            <a
              href="#events"
              className="text-white hover:text-purple-300 transition-colors"
              aria-label="Navigate to Events"
            >
              Events
            </a>
            <a
              href="#team"
              className="text-white hover:text-purple-300 transition-colors"
              aria-label="Navigate to Team"
            >
              Team
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
