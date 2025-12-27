
import { services, serviceDetails } from '@/lib/data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ServicePageContent } from '@/components/manya/service-page-content';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = serviceDetails.find((p) => p.slug === params.slug);
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

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceDetails.find((p) => p.slug === params.slug);

  if (!service) {
    notFound();
  }

  return <ServicePageContent service={service} />;
}
