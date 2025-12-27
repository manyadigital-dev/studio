'use client';
import {
  TrendingUp,
  MousePointerClick,
  Share2,
  Mail,
  PenTool,
  BarChart3,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { services } from '@/lib/data';
import { motion } from 'framer-motion';

const iconMap: { [key: string]: React.ElementType } = {
  TrendingUp,
  MousePointerClick,
  Share2,
  Mail,
  PenTool,
  BarChart3,
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Un abanico de soluciones para impulsar tu presencia online y alcanzar
            tus objetivos de negocio.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <Card
                  className="h-full transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                >
                  <CardHeader>
                    {Icon && (
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                    )}
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription className="pt-2">
                      {service.description}
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
