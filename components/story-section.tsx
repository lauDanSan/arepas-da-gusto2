'use client';

import Image from 'next/image';

export function StorySection() {
  return (
    <section id="historia" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center lg:order-2">
            <div className="w-80 h-80 relative">
              <Image
                src="/truck-drawing.jpg"
                alt="Camión de distribución de arepas"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-center">
              Nuestra Trayectoria
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed text-justify">
              Somos una empresa familiar con más de 15 años de experiencia en la producción y distribución de arepas crudas de alta calidad. Nuestro compromiso es brindar productos frescos, naturales y deliciosos a cada hogar.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed text-justify">
              Creemos que las arepas son más que comida, son momentos para compartir en familia. Por eso trabajamos con dedicación para ofrecerte lo mejor.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:col-span-2">
            {[
              { icon: '⭐', title: 'Calidad Garantizada', description: 'Seleccionamos los mejores ingredientes para ofrecerte arepas deliciosas' },
              { icon: '🚚', title: 'Distribución Confiable', description: 'Llevamos nuestros productos con puntualidad y cuidado' },
              { icon: '❤️', title: 'Hechas con Tradición', description: 'Recetas tradicionales pasadas de generación en generación' },
              { icon: '🌾', title: 'Ingredientes Frescos', description: 'Solo utilizamos los mejores ingredientes naturales y frescos' },
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg text-primary mb-2">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
