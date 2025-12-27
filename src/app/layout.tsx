import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/manya/header';
import { Footer } from '@/components/manya/footer';
import { Toaster } from '@/components/ui/toaster';
import { Inter, Raleway } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-headline',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Manya Digital | Agencia de Marketing Digital en Argentina',
  description:
    'Potenciamos tu marca con estrategias de marketing digital a medida. Somos expertos en SEO, SEM, Redes Sociales y más, enfocados en el mercado argentino.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="!scroll-smooth">
      <head>
      </head>
      <body
        className={`${inter.variable} ${raleway.variable} font-body bg-background text-foreground antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
