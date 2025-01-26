import React, { useState, useEffect } from "react";
import "./ParallaxSection.css";

const ParallaxSection = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="parallax-section">
      <div className="parallax-container">
        {/* Background Layer */}
        <div
          className={`parallax-layer layer-1 ${scrollY > 80 ? "fade-out" : ""}`}
        ></div>
        {/* Far Mountains */}
        <img
          src="mountains_behind.png"
          alt="Far Mountains"
          className={`parallax-layer layer-2 ${scrollY > 80 ? "fade-out" : ""}`}
        />
        {/* Mid Mountains */}
        <img
          src="mountains_front.png"
          alt="Mid Mountains"
          className={`parallax-layer layer-3 ${scrollY > 80 ? "fade-out" : ""}`}
        />
        {/* Drone */}
        {/* <img
  src="dron.png"
  alt="Drone"
  className={` parallax-layer drone-img ${scrollY > 80 ? "fade-out" : ""} `}
/> */}

        {/* Hero Text */}
        <div className={`hero-text ${scrollY > 50 ? "fade-out" : ""}`}>
          <h1 className="hero-title">DRONE & IOT CLUB</h1>
          <a href="#explore" className="explore-btn">
            Explore Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;
