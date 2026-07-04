'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Arepas que unen hogares
            </h1>
            
            <p className="text-base sm:text-lg text-foreground/80">
              Distribuimos arepas crudas de calidad para que disfrutes donde estés.
            </p>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-primary">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">100% Naturales</p>
                  <p className="text-foreground/70">Hechas con ingredientes frescos y naturales</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-primary">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">Sin Conservantes</p>
                  <p className="text-foreground/70">Arepas puras sin aditivos</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-primary">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">Hechas con Amor</p>
                  <p className="text-foreground/70">Preparadas con dedicación y cuidado</p>
                </div>
              </div>
            </div>

            <Button 
              className="gap-2 text-sm sm:text-base px-4 sm:px-8 py-3 sm:py-6 bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
              asChild
            >
              <a href="https://wa.me/3126066360" target="_blank" rel="noopener noreferrer">
                Da clic aqui y pide por WhatsApp
              </a>
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative h-96 lg:h-screen flex items-center justify-center">
            <div className="relative w-full h-full max-w-md">
              <Image
                src="/bultos.jpeg"
                alt="Arepas Da' Gusto2"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <svg 
        className="absolute bottom-0 w-full text-primary"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path 
          d="M0,30 Q300,60 600,30 T1200,30 L1200,100 L0,100 Z"
          fill="currentColor"
          opacity="0.3"
        />
      </svg>
    </section>
  );
}
