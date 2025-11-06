import HeroSection from "@/components/HeroSection";
import InfoCards from "@/components/InfoCards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <InfoCards />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
