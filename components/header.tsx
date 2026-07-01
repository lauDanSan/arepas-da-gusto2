'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
            <div className="w-12 sm:w-20 lg:w-28 h-12 sm:h-20 lg:h-28 relative flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Logo Arepas Da'Gusto2"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-primary group-hover:scale-105 transition-transform duration-300 line-clamp-2 sm:line-clamp-none">
              Arepas Da&apos; Gusto2
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#inicio" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group">
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#productos" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group">
              Productos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#historia" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group">
              Nuestra Trayectoria
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#contacto" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group">
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          <Button 
            className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-2"
            asChild
          >
            <a href="https://wa.me/3126066360" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
