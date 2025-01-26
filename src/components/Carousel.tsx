import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const images = [
  "https://picsum.photos/id/237/800/400",
  "https://picsum.photos/id/238/800/400",
  "https://picsum.photos/id/239/800/400",
  "https://picsum.photos/id/240/800/400",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg">
      {/* Images */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-96 flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* Left Arrow Button */}
      <button
        onClick={prevImage}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow hover:bg-gray-700 focus:outline-none"
        aria-label="Previous Image"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={nextImage}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow hover:bg-gray-700 focus:outline-none"
        aria-label="Next Image"
      >
        <ArrowRight className="h-4 w-4" />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
