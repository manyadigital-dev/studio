'use client';

import { Bot, Map, BarChart } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';

const reasons = [
  {
    icon: Bot,
    title: 'IA al servicio del marketing',
    description: 'No es moda, son resultados. Usamos IA para optimizar cada acción.',
  },
  {
    icon: Map,
    title: 'Presencia en toda Argentina',
    description: 'Con equipos distribuidos en 5 provincias, entendemos el mercado local.',
  },
  {
    icon: BarChart,
    title: 'Resultados medibles',
    description: 'Te damos acceso a un dashboard en tiempo real. Transparencia total.',
  },
];

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
};

export function WhyUsSection() {
  return (
    <section id="por-que-elegirnos" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="font-headline font-bold text-4xl md:text-5xl">
            ¿Por qué elegirnos?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-muted-foreground md:text-lg">
            Combinamos tecnología de punta, conocimiento local y un enfoque en
            resultados tangibles.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={cardVariants}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              >
                <Card className="h-full transform transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/10 bg-card border text-center">
                  <CardHeader className="p-8 items-center">
                    {Icon && (
                      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-8 w-8" strokeWidth={2} />
                      </div>
                    )}
                    <CardTitle className="text-xl font-bold font-headline">{reason.title}</CardTitle>
                    <CardDescription className="pt-2 text-base text-muted-foreground">
                      {reason.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
