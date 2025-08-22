import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Award, Globe, Users, Heart, CheckCircle, Target } from "lucide-react";

const DEI = () => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  });

  const certifications = [
    {
      name: "MBE Certified",
      fullName: "Minority Business Enterprise",
      icon: Award,
      color: "from-orange-500 to-orange-600",
      description: "Certified minority-owned business enterprise",
    },
    {
      name: "NMSDC Member",
      fullName: "National Minority Supplier Development Council",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      description: "Member of leading minority supplier organization",
    },
    {
      name: "State Certified",
      fullName: "Texas State Certification",
      icon: CheckCircle,
      color: "from-green-500 to-green-600",
      description: "State-level diversity supplier certification",
    },
  ];

  const deiServices = [
    {
      title: "Talent Sourcing & Training",
      description:
        "Specialized talent sourcing strategies ensure diverse and inclusive candidate pools",
      icon: Target,
      features: [
        "Diverse candidate sourcing",
        "Inclusive recruitment practices",
        "Skills-based hiring",
      ],
    },
    {
      title: "Treasury Services",
      description:
        "Designed to unearth hidden talents within your organization",
      icon: Globe,
      features: [
        "Internal talent discovery",
        "Diversity analytics",
        "Potential assessment",
      ],
    },
    {
      title: "AOR/EOR Payroll",
      description: "Seamless and compliant approach to managing diverse teams",
      icon: CheckCircle,
      features: [
        "Equitable pay practices",
        "Global compliance",
        "Reduced admin burden",
      ],
    },
    {
      title: "Blended Teams",
      description: "Foster environments where diverse talents create synergy",
      icon: Users,
      features: [
        "Enhanced creativity",
        "Increased productivity",
        "Innovation boost",
      ],
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 69, 0, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="container-lg relative z-10">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Partner for
            <span className="text-gradient"> Global Diverse Talent</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            As a certified diverse supplier, TalentAmp proudly holds multiple
            diversity certifications, empowering organizations to access a wider
            spectrum of skills, perspectives, and experiences.
          </p>
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-8 border border-gray-200 hover:border-orange-200 card-hover hover:shadow-orange/10 transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Certification Badge */}
              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <cert.icon className="w-10 h-10 text-white relative z-10" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {cert.name}
              </h3>
              <p className="text-sm font-medium text-orange-600 mb-4">
                {cert.fullName}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* DEI Service Offering Circle */}
        <div className="relative mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              DEI Service Offering
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions that foster diversity, equity, and
              inclusion across your workforce
            </p>
          </div>

          {/* Service Circle Layout */}
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center z-10">
              <div className="text-center">
                <Heart className="w-8 h-8 text-white mx-auto mb-1" />
                <span className="text-white font-bold text-sm">DEI</span>
                <span className="text-orange-100 text-xs block">Services</span>
              </div>
            </div>

            {/* Service Cards in Circle */}
            <div className="grid md:grid-cols-2 gap-8 pt-16">
              {deiServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-orange-200 card-hover hover:shadow-orange/10 relative"
                >
                  {/* Service Icon */}
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-orange-600" />
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Impact Statement */}
        <div className="bg-gradient-to-r from-orange-50 to-purple-50 rounded-3xl p-8 lg:p-12 text-center border border-orange-100">
          <div className="max-w-4xl mx-auto">
            <Globe className="w-16 h-16 text-orange-500 mx-auto mb-6" />
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Ensuring Equitable Access and Opportunity
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We partner with organizations committed to supplier diversity and
              inclusive hiring practices, ensuring equitable access and
              opportunity across the workforce. Our global footprint spans the
              United States, Philippines, Mexico, Guatemala, and Colombia.
            </p>

            {/* Global Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "5", label: "Global Locations" },
                { number: "2,500+", label: "FTEs" },
                { number: "40+", label: "Service Partners" },
                { number: "15", label: "Years Experience" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DEI;
