
import { FinalCtaSection } from '@/components/manya/final-cta-section';

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
            <div className="text-center">
                <h1 className="font-headline text-4xl font-bold md:text-5xl">
                Servicios que <span className="text-primary">mañan</span> resultados
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                No solo hacemos marketing, creamos sistemas de crecimiento. Combinamos estrategia, creatividad y tecnología para llevar tu marca al siguiente nivel.
                </p>
            </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 pb-24">
          <main>{children}</main>
        </div>
        
        <FinalCtaSection />
    </div>
  );
}
