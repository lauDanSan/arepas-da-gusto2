'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';

const products = [
  {
    id: 1,
    name: 'Arepa Normal',
    quantity: '5 unidades',
    description: 'Perfecta para una comida rápida',
    image: '/arepa-drawing.jpg'
  },
  {
    id: 2,
    name: 'Arepa Normal',
    quantity: '10 unidades',
    description: 'Para la familia completa',
    image: '/arepa-drawing.jpg'
  },
  {
    id: 3,
    name: 'Arepa Frisby',
    quantity: '50 unidades',
    description: 'Ideal para eventos y negocios',
    image: '/arepa-drawing.jpg'
  },
  {
    id: 4,
    name: 'Arepa Burger',
    quantity: '10 unidades',
    description: 'Rellenas y deliciosas',
    image: '/arepa-drawing.jpg'
  },
];

export function ProductsSection() {
  return (
    <section id="productos" className="py-16 sm:py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Nuestros Productos
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/80">
            Arepas crudas listas para preparar en casa
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <div key={product.id} className="hover:scale-105 sm:hover:scale-110 transition-transform duration-300">
              <Card 
                className="bg-card text-card-foreground border-0 h-full cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 flex flex-col h-full items-center text-center">
                  <div className="w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-primary mb-1 sm:mb-2">
                      {product.name}
                    </h3>
                    <p className="text-primary/60 font-semibold text-sm sm:text-base">
                      {product.quantity}
                    </p>
                  </div>
                  <p className="text-foreground/70 text-xs sm:text-sm mt-auto">
                    {product.description}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
