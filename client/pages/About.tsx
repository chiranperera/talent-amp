import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ArrowRight, Users, Target, Globe, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-lg section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              About
              <span className="text-gradient"> TalentAmp</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're a Workforce Innovation Company redefining how organizations
              attract, engage, and evolve talent in today's digitally driven
              world.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <p className="text-orange-800 font-medium">
                🚧 This page is under construction. Continue prompting to have
                us build out the full About page with leadership team, company
                history, values, and more!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Preview Sections */}
      <section className="section-padding bg-white">
        <div className="container-lg">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Our Team
              </h3>
              <p className="text-gray-600">
                Leadership team and company culture
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Mission
              </h3>
              <p className="text-gray-600">Our purpose and vision statement</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Global Reach
              </h3>
              <p className="text-gray-600">
                Offices across US, Philippines, Mexico, Guatemala, Colombia
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-lime-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Certifications
              </h3>
              <p className="text-gray-600">
                MBE, NMSDC, and diversity certifications
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
