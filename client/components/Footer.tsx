import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  ArrowRight,
  Award,
  Users,
  Globe,
} from "lucide-react";

const Footer = () => {
  const services = [
    "Contract & Contract-to-Hire",
    "Direct Hire Services",
    "Statement of Work (SOW)",
    "Managed Services",
    "Employer of Record (EOR)",
    "Hire Train Deploy",
  ];

  const company = [
    "About Us",
    "Leadership Team",
    "Careers",
    "News & Events",
    "Case Studies",
    "Contact",
  ];

  const resources = [
    "Blog",
    "Industry Insights",
    "Salary Guides",
    "Whitepapers",
    "Webinars",
    "FAQs",
  ];

  const locations = [
    "United States",
    "Philippines",
    "Mexico",
    "Guatemala",
    "Colombia",
  ];

  const certifications = [
    { name: "MBE Certified", icon: Award },
    { name: "NMSDC Member", icon: Users },
    { name: "Diverse Supplier", icon: Globe },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-lg px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-4">
            {/* Logo with Sound Wave Pattern */}
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              {/* Sound Wave Icon */}
              <div className="flex items-end space-x-0.5">
                {[12, 16, 8, 20, 6, 18, 14].map((height, index) => (
                  <div
                    key={index}
                    className="w-1.5 bg-gradient-to-t from-orange-500 to-orange-400 rounded-t group-hover:animate-pulse transition-all duration-200"
                    style={{ height: `${height}px` }}
                  />
                ))}
              </div>
              <span className="font-bold text-2xl text-white group-hover:text-orange-400 transition-colors duration-200">
                TalentAmp
              </span>
            </Link>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Amplifying IT talent at scale through AI-powered staffing
              solutions and global delivery excellence.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-orange-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-orange-400" />
                <span>hello@talentamp.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span>Global Headquarters, USA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Facebook, href: "#", label: "Facebook" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to="/services"
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
              <ul className="space-y-3">
                {company.map((item, index) => (
                  <li key={index}>
                    <Link
                      to="/about"
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Resources
              </h3>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <Link
                      to="/blog"
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                    >
                      {resource}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Global Reach */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Global Reach
              </h3>
              <ul className="space-y-3">
                {locations.map((location, index) => (
                  <li
                    key={index}
                    className="text-gray-300 text-sm flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>{location}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-xl font-semibold text-white mb-2">
                Stay Connected
              </h3>
              <p className="text-gray-300">
                Get the latest insights on IT talent trends and workforce
                solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:max-w-md lg:w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors duration-200"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h4 className="text-lg font-semibold text-white mb-6">
            Certifications & Partnerships
          </h4>
          <div className="flex flex-wrap gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-gray-300"
              >
                <cert.icon className="w-5 h-5 text-orange-400" />
                <span className="text-sm">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container-lg px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="text-gray-400 text-sm mb-4 lg:mb-0">
              © 2024 TalentAmp. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
              >
                Cookie Policy
              </Link>
              <Link
                to="/accessibility"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
