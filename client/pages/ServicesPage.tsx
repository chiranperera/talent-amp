import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-lg section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our
              <span className="text-gradient"> Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive IT staffing solutions tailored to your business
              needs, from contract staffing to permanent placements and managed
              services.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <p className="text-orange-800 font-medium">
                🚧 This page is under construction. Continue prompting to have
                us build out the detailed services page with service categories,
                process visualization, industry focus, and case studies!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
