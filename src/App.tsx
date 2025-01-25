import React, { useEffect } from "react";
import { Bone as Drone } from "lucide-react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar.tsx";
import Faculty from "./components/Faculty.tsx";
import ParallaxImage from "./components/ParallaxImage.tsx";
import SideBySideContainers from "./components/SideBySideContainers.tsx"

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;

      // Parallax elements
      const layers = document.querySelectorAll(".parallax-layer");
      const moon = document.querySelector(".moon-img") as HTMLElement;
      const text = document.querySelector(".hero-text") as HTMLElement;

      // Different scroll speeds for each layer
      const speeds = [0.1, 0.2, 0.3, 0.4, 0.5];

      // Apply parallax to background layers
      layers.forEach((layer, index) => {
        const speed = speeds[index] || 0.1;
        const yPos = -(scrolled * speed);
        (layer as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });

      // Special transforms for moon and text
      if (moon) {
        moon.style.transform = `translate(-50%, ${scrolled * 0.8}px)`;
      }

      if (text) {
        text.style.transform = `translateY(${scrolled * 0.5}px)`;
        text.style.opacity = (1 - scrolled * 0.003).toString();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#1c0522]">
      <Navbar />

      {/* Parallax Hero Section */}
     
      <section className="parallax-section">
        <div>
          
         <ParallaxImage/>
          

          <img
            src="mountains_behind.png"
            alt="Far Mountains"
            className="parallax-layer layer-2"
          />
          <img
            src="mountains_front.png"
            alt="Mid Mountains"
            className="parallax-layer layer-3"
          />
          <img src="public\dron.png" alt="Drone" className="moon-img" />
          <div className="hero-text">
            <h1 className="hero-title">Drone & IOT Club</h1>
            <a href="#explore" className="explore-btn">
              Explore Now
            </a>
          </div>
        </div>
      </section>

      

      {/* Content Section */}
      <section id="explore" className="content-section">

      <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Column 1 */}

          <div className="flex items-center justify-center bg-purple-700 p-4 rounded-lg">
            <h2 className="text-2xl font-bold text-white">Top Column 1</h2>
           
          </div>


          {/* Column 2 */}
          <div className="flex items-center justify-center bg-black-700 p-4 rounded-lg">
          <div className="flex items-center justify-center">
              
              
              
              <div className="w-full max-w-md">
                <h2 className="text-3xl font-bold mb-8 text-white">
                  Our Activities
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    "3D Printing",
                    "MultiRotor Drone",
                    "Fixed Wing",
                    "AI Workshop",
                    "IOT Workshop",
                    "And More!",
                  ].map((activity, index) => (
                    <div key={index} className="card p-4">
                      <div className="aspect-square rounded-lg bg-purple-900/50 mb-2" />
                      <p className="text-center text-sm text-white">
                        {activity}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            
            
            
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
  {/* Outer grid container for two columns */}
  <div className="grid md:grid-cols-2 gap-8">
    {/* Left Column */}
    <div className="flex items-center justify-center w-full">
      {/* Inner container for the news card */}
      <div className="space-y-8 w-full">
        {/* News card */}
        <div className="news-card">
          <h3 className="text-2xl font-bold mb-4 text-white">Latest News</h3>
          {/* List of news items */}
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-white hover:text-purple-300">
                SWIFTWINGS'24 from 12th to 14th December 2024
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-purple-300">
                National Conference on AI
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-purple-300">
                Guest Lecture on 5G Networks
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-purple-300">
                Hackathon 2024
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Right Column */}
    <div className="flex items-center justify-center w-full">
      {/* Inner container for the news card */}
      <div className="space-y-8 w-full">
        {/* News card */}
        <div className="news-card">
          <h3 className="text-2xl font-bold mb-4 text-white">Latest News</h3>
          {/* List of news items */}
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-white hover:text-purple-300">
                SWIFTWINGS'24 from 12th to 14th December 2024
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-purple-300">
                National Conference on AI
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-purple-300">
                Guest Lecture on 5G Networks
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-purple-300">
                Hackathon 2024
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
      </section>

      <Faculty />

      <Footer />
    </div>
  );
}

export default App;
