import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LivelongWealthSection from "@/components/LivelongWealthSection";
import WelcomeSection from "@/components/WelcomeSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="main-content">
      <Header />
      <HeroSection />
      <LivelongWealthSection />
      <WelcomeSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <Footer />
    </main>
  );
}
