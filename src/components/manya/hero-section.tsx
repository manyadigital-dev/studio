'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-background');
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden md:h-screen">
      <div className="absolute inset-0 z-0">
        {heroImage && (
          <motion.div 
            className="absolute inset-0"
            style={{ y: offsetY * 0.3 }}
          >
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          </motion.div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      </div>
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white md:items-start md:text-left">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-headline text-4xl font-bold leading-tight drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
            Llevamos tu Marca al Siguiente Nivel Digital
          </h1>
          <p className="mt-4 max-w-xl text-lg text-gray-200 drop-shadow-md md:text-xl">
            Estrategias de marketing innovadoras para que tu negocio se destaque
            en el mercado argentino.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-primary/90">
            <Link href="#contacto">Hablemos de tu Proyecto</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
