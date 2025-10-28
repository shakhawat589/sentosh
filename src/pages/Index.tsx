import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PromiseSection from "@/components/PromiseSection";
import FeaturesSection from "@/components/FeaturesSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PromiseSection />
        <FeaturesSection />
        <ServicesSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;