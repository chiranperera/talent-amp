import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-lg section-padding">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get in
              <span className="text-gradient"> Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ready to amplify your talent strategy? Our experts are here to
              help you find the perfect IT professionals for your team.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-2">+1 (555) 123-4567</p>
              <p className="text-gray-500 text-xs">Mon-Fri 9AM-6PM EST</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-2">hello@talentamp.com</p>
              <p className="text-gray-500 text-xs">24/7 Response</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm mb-2">Global HQ, USA</p>
              <p className="text-gray-500 text-xs">5 Global Locations</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-lime-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Schedule</h3>
              <p className="text-gray-600 text-sm mb-2">Book a Meeting</p>
              <p className="text-gray-500 text-xs">Free Consultation</p>
            </div>
          </div>

          {/* Construction Notice */}
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <p className="text-orange-800 font-medium text-center">
              🚧 This page is under construction. Continue prompting to have us
              build out the full contact page with contact forms, office
              locations map, and calendar integration!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
