import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Stats from "../components/Stats";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Stats Section */}
      <Stats />

      {/* Call to Action Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
