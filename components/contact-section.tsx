'use client';

import { Mail, MessageCircle, Phone } from 'lucide-react';
import Image from 'next/image';

export function ContactSection() {
  return (
    <section id="contacto" className="py-16 sm:py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Contáctanos
          </h2>
          <p className="text-base sm:text-lg text-foreground/80">
            Estamos listos para atender tus pedidos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {[
            {
              icon: MessageCircle,
              title: 'WhatsApp',
              description: 'Chatea con nosotros directamente',
              action: 'https://wa.me/3126066360'
            },
            {
              icon: Phone,
              title: 'Teléfono',
              description: 'Llámanos para hacer tu pedido - 3126066360',
              action: 'tel:+573126066360'
            },
            {
              icon: Mail,
              title: 'Email',
              description: 'Envíanos un correo',
              action: 'mailto:info@arepasgusto.com'
            }
          ].map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.action}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card p-6 sm:p-8 rounded-lg border border-border text-center hover:shadow-lg hover:border-primary transition-all group"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-3 sm:p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-bold text-base sm:text-lg text-primary mb-2">
                  {contact.title}
                </h3>
                <p className="text-sm sm:text-base text-foreground/70">
                  {contact.description}
                </p>
              </a>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 flex justify-center px-4">
          <div className="w-full max-w-2xl">
            <Image
              src="/tarjeta-presentacion.jpg"
              alt="Tarjeta de presentación Arepas Da'Gusto2"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
