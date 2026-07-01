'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const originalImages = [
  { src: '/carousel-1.jpg', alt: 'Arepas paquete 10 unidades' },
  { src: '/carousel-2.jpg', alt: 'Arepas paquete 50 unidades' },
  { src: '/carousel-3.jpg', alt: 'Arepas paquete individual' },
  { src: '/carousel-4.jpg', alt: 'Arepas paquete individual rojo' },
];

const IMAGES_TO_SHOW = 3;

// Duplicate images for infinite carousel
const carouselImages = [...originalImages, ...originalImages, ...originalImages];

export function CarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Reset to beginning when reaching the end for infinite loop
    if (currentIndex >= originalImages.length * 2) {
      setCurrentIndex(0);
    }
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="relative w-full group">
        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
          <div className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / IMAGES_TO_SHOW)}%)` }}>
            {carouselImages.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0" style={{ width: `${100 / IMAGES_TO_SHOW}%` }}>
                <div className="relative w-full h-64 sm:h-80 lg:h-96">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain bg-white"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {originalImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                index === (currentIndex % originalImages.length) ? 'bg-primary' : 'bg-primary/30'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
