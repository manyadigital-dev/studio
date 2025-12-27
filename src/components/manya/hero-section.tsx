'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[700px] w-full overflow-hidden flex items-center justify-center bg-background">
       <div className="absolute inset-0 z-0 opacity-15">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(244,81,30,0.2),_transparent_40%)]"
          style={{ y: offsetY * 0.3 }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.7, 0.5],
            transformOrigin: "center",
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[10%] left-[5%] h-32 w-32 rounded-full bg-primary/20 blur-2xl"
          style={{ y: offsetY * 0.5 }}
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-[15%] right-[10%] h-40 w-40 rounded-full bg-accent/20 blur-2xl"
          style={{ y: offsetY * 0.2 }}
           animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "mirror", delay: 3 }}
        ></motion.div>
         <motion.div
          className="absolute top-[20%] right-[20%] h-24 w-24 border-2 border-primary/30 rounded-full"
          style={{ y: offsetY * 0.4 }}
           animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </div>
      <div className="container relative z-10 flex flex-col items-center justify-center text-center text-foreground">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="font-headline text-5xl font-bold leading-tight drop-shadow-sm md:text-6xl lg:text-7xl">
            Manyamos tu Crecimiento Digital
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
            Agencia de marketing digital impulsada por IA. Innovación real desde
            Argentina para el mundo.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-10 bg-gradient-to-r from-primary to-accent text-lg font-bold text-primary-foreground transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-primary/40 rounded-full px-8 py-6"
          >
            <Link href="#contacto">Hablemos de tu proyecto</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
