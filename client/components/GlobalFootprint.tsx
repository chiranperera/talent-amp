import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { MapPin, Users, Building2, Globe, Star, CheckCircle } from "lucide-react";

const GlobalFootprint = () => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  });

  const locations = [
    {
      country: "United States",
      role: "Global Headquarters",
      specialization: "Strategic Operations & Client Management",
      icon: "🇺🇸",
      color: "from-blue-500 to-blue-600",
      coordinates: { x: "25%", y: "35%" }
    },
    {
      country: "Philippines",
      role: "Technology Hub",
      specialization: "SaaS, FinTech & HealthTech Specialists",
      icon: "🇵🇭",
      color: "from-green-500 to-green-600",
      coordinates: { x: "75%", y: "55%" }
    },
    {
      country: "Mexico",
      role: "Nearshore Center",
      specialization: "Application Development & Support",
      icon: "🇲🇽",
      color: "from-red-500 to-red-600",
      coordinates: { x: "20%", y: "50%" }
    },
    {
      country: "Guatemala",
      role: "Service Excellence",
      specialization: "Customer Experience & Quality Assurance",
      icon: "🇬🇹",
      color: "from-purple-500 to-purple-600",
      coordinates: { x: "22%", y: "58%" }
    },
    {
      country: "Colombia",
      role: "Innovation Lab",
      specialization: "Emerging Technologies & R&D",
      icon: "🇨🇴",
      color: "from-yellow-500 to-yellow-600",
      coordinates: { x: "28%", y: "68%" }
    }
  ];

  const globalStats = [
    {
      number: "2,500+",
      label: "Full-Time Employees",
      description: "Across all global locations",
      icon: Users,
      color: "from-orange-500 to-orange-600"
    },
    {
      number: "2",
      label: "On-Site Offices",
      description: "Hybrid, work-at-home, and office-based",
      icon: Building2,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "40+",
      label: "Service Partners",
      description: "Strategic partnerships worldwide",
      icon: Star,
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "15",
      label: "Years in Service",
      description: "Proven track record of excellence",
      icon: CheckCircle,
      color: "from-green-500 to-green-600"
    }
  ];

  const capabilities = [
    "Highly specialized in SaaS (FinTech, HealthTech)",
    "Hybrid, Work-at-Home, and Office-Based operations",
    "24/7 global coverage and support",
    "Multi-timezone collaboration excellence",
    "Cultural diversity and language capabilities",
    "Regulatory compliance across all regions"
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <pattern id="world-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="1" fill="url(#world-gradient)" />
              </pattern>
              <linearGradient id="world-gradient">
                <stop offset="0%" stopColor="#FF4500" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#world-grid)" />
          </svg>
        </div>
      </div>

      <div className="container-lg relative z-10">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            TalentAmp
            <span className="text-gradient bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent"> Global Footprint</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our global presence enables us to deliver world-class talent solutions with local expertise 
            and cultural understanding across five strategic locations.
          </p>
        </div>

        {/* Interactive World Map */}
        <div className="relative mb-20">
          {/* World Map Container */}
          <div className="relative w-full max-w-6xl mx-auto h-96 bg-gray-800/50 rounded-3xl border border-gray-700 overflow-hidden">
            {/* Simplified World Map SVG */}
            <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1000 500">
              <path
                d="M150,100 Q200,80 250,100 L300,120 Q350,110 400,120 L450,110 Q500,100 550,110 L600,120 Q650,110 700,120 L750,110 Q800,100 850,110 L900,120"
                stroke="rgba(255, 69, 0, 0.3)"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M100,200 Q200,180 300,200 L400,220 Q500,210 600,220 L700,210 Q800,200 900,210"
                stroke="rgba(255, 69, 0, 0.3)"
                strokeWidth="2"
                fill="none"
              />
            </svg>

            {/* Location Markers */}
            {locations.map((location, index) => (
              <div
                key={index}
                className="absolute group cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: location.coordinates.x,
                  top: location.coordinates.y,
                }}
              >
                {/* Pulsing Marker */}
                <div className="relative">
                  <div className="w-4 h-4 bg-orange-500 rounded-full animate-ping absolute"></div>
                  <div className="w-4 h-4 bg-orange-400 rounded-full relative z-10"></div>
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-white rounded-xl p-4 shadow-xl border border-gray-200 min-w-64">
                    <div className="text-center">
                      <div className="text-2xl mb-2">{location.icon}</div>
                      <h4 className="font-bold text-gray-900 mb-1">{location.country}</h4>
                      <p className="text-orange-600 font-medium text-sm mb-2">{location.role}</p>
                      <p className="text-gray-600 text-xs">{location.specialization}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="connection-gradient">
                  <stop offset="0%" stopColor="rgba(255, 69, 0, 0.6)" />
                  <stop offset="100%" stopColor="rgba(255, 69, 0, 0.1)" />
                </linearGradient>
              </defs>
              <path
                d="M 250 175 Q 400 150 750 275"
                stroke="url(#connection-gradient)"
                strokeWidth="1"
                fill="none"
                className="animate-pulse"
              />
              <path
                d="M 200 250 Q 350 200 220 290"
                stroke="url(#connection-gradient)"
                strokeWidth="1"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
            </svg>
          </div>
        </div>

        {/* Global Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {globalStats.map((stat, index) => (
            <div
              key={index}
              className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 card-hover hover:bg-white/10 transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>

              {/* Number */}
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                {stat.number}
              </div>

              {/* Label */}
              <h3 className="text-lg font-semibold text-orange-400 mb-2">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Global Capabilities */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10">
          <div className="text-center mb-8">
            <Globe className="w-16 h-16 text-orange-400 mx-auto mb-4" />
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Global Delivery Excellence
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our worldwide presence ensures seamless service delivery with local expertise and global standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalFootprint;
