'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const originalImages = [
  { src: '/carousel-1.png', alt: 'Arepas paquete 10 unidades' },
  { src: '/carousel-2.png', alt: 'Arepas paquete 50 unidades' },
  { src: '/carousel-3.png', alt: 'Arepas paquete individual' },
  { src: '/carousel-4.png', alt: 'Arepas paquete individual rojo' },
];

const IMAGES_TO_SHOW = 3;

// Add edge clones to create a seamless infinite loop.
const carouselImages = [
  ...originalImages.slice(-IMAGES_TO_SHOW),
  ...originalImages,
  ...originalImages.slice(0, IMAGES_TO_SHOW),
];

const START_INDEX = IMAGES_TO_SHOW;

export function CarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(START_INDEX);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev: number) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const jumpWithoutAnimation = (nextIndex: number) => {
    setIsTransitioning(false);
    setCurrentIndex(nextIndex);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    });
  };

  const handleTransitionEnd = () => {
    if (currentIndex === START_INDEX + originalImages.length) {
      jumpWithoutAnimation(START_INDEX);
    }

    if (currentIndex === START_INDEX - 1) {
      jumpWithoutAnimation(START_INDEX + originalImages.length - 1);
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prev: number) => prev - 1);
  };

  const goToNext = () => {
    setCurrentIndex((prev: number) => prev + 1);
  };

  const activeDotIndex =
    ((currentIndex - START_INDEX) % originalImages.length + originalImages.length) % originalImages.length;

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="relative w-full group">
        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
          <div
            className={`flex ease-in-out ${isTransitioning ? 'transition-transform duration-500' : ''}`}
            onTransitionEnd={handleTransitionEnd}
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
              onClick={() => setCurrentIndex(START_INDEX + index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                index === activeDotIndex ? 'bg-primary' : 'bg-primary/30'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
