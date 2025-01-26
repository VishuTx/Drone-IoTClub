import React from "react";

const ScrollingList = () => {
  const items = [
    { text: "SWIFTWINGS'24 from 12th to 14th December 2024", link: "#" },
    { text: "National Conference on AI", link: "#" },
    { text: "Guest Lecture on 5G Networks", link: "#" },
    { text: "Hackathon 2024", link: "#" },
    { text: "Workshop on Drone Technology", link: "#" },
    { text: "SWIFTWINGS'24 from 12th to 14th December 2024", link: "#" },
    { text: "IoT Devices Showcase", link: "#" },
    { text: "Cybersecurity Awareness Seminar", link: "#" },
    { text: "Innovative Tech Expo 2024", link: "#" },
  ];

  return (
    <div className="relative h-48 overflow-hidden">
      <div className="absolute animate-scroll">
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="text-lg text-white hover:text-purple-300 transition-colors"
              >
                {item.text}
              </a>
            </li>
          ))}
          {/* Duplicate items for seamless scrolling */}
          {items.map((item, index) => (
            <li key={`${index}-duplicate`}>
              <a
                href={item.link}
                className="text-lg text-white hover:text-purple-300 transition-colors"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScrollingList;
