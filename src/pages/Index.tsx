import { HeroSection } from "@/components/home/HeroSection";
import { SectorsSection } from "@/components/home/SectorsSection";
import { ImpactSection } from "@/components/home/ImpactSection";
import { FeaturedReports } from "@/components/home/FeaturedReports";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <HeroSection />
      <ImpactSection />
      <SectorsSection />
      <FeaturedReports />
      <CTASection />
    </>
  );
};

export default Index;
