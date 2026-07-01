'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Arepas Da&apos; Gusto2</h3>
            <p className="text-primary-foreground/80">
              Arepas artesanales de calidad para tu mesa.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><Link href="#inicio" className="hover:text-primary-foreground transition">Inicio</Link></li>
              <li><Link href="#productos" className="hover:text-primary-foreground transition">Productos</Link></li>
              <li><Link href="#historia" className="hover:text-primary-foreground transition">Nuestra Trayectoria</Link></li>
              <li><Link href="#contacto" className="hover:text-primary-foreground transition">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Síguenos</h3>
            <p className="text-primary-foreground/80">
              Mantente conectado con nuestras últimas ofertas y promociones.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70">
          <p>&copy; 2024 Arepas Da&apos; Gusto2. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
