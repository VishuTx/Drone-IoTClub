import React, { useEffect } from "react";

const ParallaxImage: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const layer = document.querySelector<HTMLImageElement>(".parallax-layer");
      if (layer) {
        layer.style.transform = `translateX(${scrollY * 0.7}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="parallax-container">
      <img src="stars.png" alt="Stars" className="parallax-layer layer-1" />
    </div>
  );
};

export default ParallaxImage;
