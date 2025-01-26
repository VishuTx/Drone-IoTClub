import React, { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white py-4 bg-opacity-40	">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <a href="index.html" className="flex items-center">
          <img
            src="iot.png"
            alt="Logo"
            className="h-12 w-auto"
          />
          



        </a>

        {/* Hamburger Icon for small screens */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="text-white h-6 w-6" />
        </button>

        {/* Nav Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center w-full lg:w-auto mt-4 lg:mt-0`}
        >
          <ul className="lg:flex lg:space-x-8">
            <li>
              <a
                href="index.html"
                className="block px-4 py-2 text-lg hover:text-gray-400"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="AboutUS.html"
                className="block px-4 py-2 text-lg hover:text-gray-400"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="events.html"
                className="block px-4 py-2 text-lg text-blue-400 hover:text-blue-300"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="teams.html"
                className="block px-4 py-2 text-lg hover:text-gray-400"
              >
                Team
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





// import React, { useEffect, useState } from 'react';
// import { Bone as Drone } from 'lucide-react';

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled ? 'bg-[#1c0522]/90 backdrop-blur-sm' : 'bg-transparent'
//       }`}
//     >
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo Section */}
//           <div className="flex items-center space-x-2">
//             <Drone size={32} className="text-white" />
//             <span className="text-xl font-bold text-white">Drone & IOT Club</span>
//           </div>

//           {/* Navigation Links */}
//           <div className="hidden md:flex space-x-8">
//             <a
//               href="#home"
//               className="text-white hover:text-purple-300 transition-colors"
//               aria-label="Navigate to Home"
//             >
//               Home
//             </a>
//             <a
//               href="#about"
//               className="text-white hover:text-purple-300 transition-colors"
//               aria-label="Navigate to About"
//             >
//               About
//             </a>
//             <a
//               href="#events"
//               className="text-white hover:text-purple-300 transition-colors"
//               aria-label="Navigate to Events"
//             >
//               Events
//             </a>
//             <a
//               href="#team"
//               className="text-white hover:text-purple-300 transition-colors"
//               aria-label="Navigate to Team"
//             >
//               Team
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
