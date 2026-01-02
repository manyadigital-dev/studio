
import { services, serviceDetails } from '@/lib/data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ServicePageContent } from '@/components/manya/service-page-content';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails.find((p) => p.slug === slug);
  if (!service) {
    return {
      title: 'Servicio no encontrado',
    }
  }
  return {
    title: service.meta.title,
    description: service.meta.description,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceDetails.find((p) => p.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServicePageContent service={service} />;
}
