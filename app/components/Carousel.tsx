import { useState, useEffect } from "react";

interface CarouselProps {
  images: string[];
  title?: string;
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export default function Carousel({ images, title, autoSlide = false, autoSlideInterval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, autoSlideInterval, images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-3xl h-[28rem] md:h-[30rem]">
        <img src={images[currentIndex]} alt={`slide-${currentIndex}`} className="w-full h-full object-cover" />

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 ml-2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 mr-2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Title */}
      {title && <h2 className="text-left text-xl font-bold pl-5 mt-3">{title}</h2>}

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3 mt-4 pb-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-[#A36C2E] w-8" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
