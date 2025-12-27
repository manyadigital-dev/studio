'use client';
import {
  TrendingUp,
  Globe,
  Share2,
  Users,
  Bot,
  Layers,
  Component,
  Database,
  PencilRuler,
  MousePointerClick
} from 'lucide-react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const services = [
    {
        icon: TrendingUp,
        title: "SEO",
        description: "Posicionamiento orgánico con estrategias basadas en datos e IA.",
    },
    {
        icon: PencilRuler,
        title: "Diseño Web",
        description: "Sitios web que convierten, diseñados para la experiencia del usuario.",
    },
    {
        icon: Share2,
        title: "Gestión de RRSS",
        description: "Community management estratégico que genera engagement real.",
    },
    {
        icon: MousePointerClick,
        title: "Performance Marketing",
        description: "Meta Ads y Google Ads optimizados con machine learning.",
    },
    {
        icon: Users,
        title: "CRM",
        description: "Gestión inteligente de clientes que maximiza el lifetime value.",
    },
    {
        icon: Component,
        title: "Automatizaciones",
        description: "Workflows inteligentes con IA que escalan tu operación.",
    },
];


const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Nuestros Servicios
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
              Soluciones integrales para llevar tu negocio al siguiente nivel.
            </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
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
                  className="h-full transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 bg-card border border-border/50"
                >
                  <CardHeader className="p-8">
                    {Icon && (
                      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                        <Icon className="h-8 w-8" strokeWidth={2} />
                      </div>
                    )}
                    <CardTitle className="text-xl font-bold font-headline">{service.title}</CardTitle>
                    <CardDescription className="pt-2 text-base text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
            <Button asChild size="lg" variant="outline" className="transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary hover:text-primary-foreground">
                <Link href="/servicios">Ver todos los servicios</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
