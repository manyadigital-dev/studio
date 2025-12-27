import { HeroSection } from '@/components/manya/hero-section';
import { ServicesSection } from '@/components/manya/services-section';
import { StatsSection } from '@/components/manya/stats-section';
import { WhyUsSection } from '@/components/manya/why-us-section';
import { FinalCtaSection } from '@/components/manya/final-cta-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <WhyUsSection />
      <FinalCtaSection />
    </>
  );
}
