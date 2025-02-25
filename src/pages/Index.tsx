import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Booking from "@/components/sections/Booking";
import FAQ from "@/components/sections/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Booking />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
