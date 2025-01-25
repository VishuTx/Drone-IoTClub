import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

// Initialize components
document.getElementById('navbar').appendChild(Navbar());
document.getElementById('footer').appendChild(Footer());

// Parallax effect
const handleParallax = () => {
  const scrolled = window.scrollY;
  
  const backMountain = document.querySelector('.back-mountain');
  const midMountain = document.querySelector('.mid-mountain');
  const frontMountain = document.querySelector('.front-mountain');
  const drone = document.querySelector('.drone');
  const heroText = document.querySelector('.hero-text');
  
  if (backMountain && midMountain && frontMountain && drone && heroText) {
    backMountain.style.transform = `translateY(${scrolled * 0.3}px)`;
    midMountain.style.transform = `translateY(${scrolled * 0.2}px)`;
    frontMountain.style.transform = `translateY(${scrolled * 0.1}px)`;
    drone.style.transform = `translate(-50%, ${scrolled * 0.4}px)`;
    heroText.style.transform = `translateY(${scrolled * 0.5}px)`;
    heroText.style.opacity = 1 - (scrolled * 0.003);
  }
};

window.addEventListener('scroll', handleParallax);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});