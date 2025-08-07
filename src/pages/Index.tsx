import { JakartaHeader } from "@/components/JakartaHeader";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { DataInfoSection } from "@/components/DataInfoSection";
import { NewsSection } from "@/components/NewsSection";
import { EventsSection } from "@/components/EventsSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <JakartaHeader />
      <HeroSection />
      <ServicesSection />
      <DataInfoSection />
      <NewsSection />
      <EventsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
