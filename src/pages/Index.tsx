import { JakartaHeader } from "@/components/JakartaHeader";
import { HeroSection } from "@/components/HeroSection";
import { NewsSection } from "@/components/NewsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <JakartaHeader />
      <HeroSection />
      <NewsSection />
    </div>
  );
};

export default Index;
