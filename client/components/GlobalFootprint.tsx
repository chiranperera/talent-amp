import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  MapPin,
  Users,
  Building2,
  Globe,
  Star,
  CheckCircle,
} from "lucide-react";

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
      coordinates: { x: "25%", y: "35%" },
    },
    {
      country: "Philippines",
      role: "Technology Hub",
      specialization: "SaaS, FinTech & HealthTech Specialists",
      icon: "🇵🇭",
      color: "from-green-500 to-green-600",
      coordinates: { x: "75%", y: "55%" },
    },
    {
      country: "Mexico",
      role: "Nearshore Center",
      specialization: "Application Development & Support",
      icon: "🇲🇽",
      color: "from-red-500 to-red-600",
      coordinates: { x: "20%", y: "50%" },
    },
    {
      country: "Guatemala",
      role: "Service Excellence",
      specialization: "Customer Experience & Quality Assurance",
      icon: "🇬🇹",
      color: "from-purple-500 to-purple-600",
      coordinates: { x: "22%", y: "58%" },
    },
    {
      country: "Colombia",
      role: "Innovation Lab",
      specialization: "Emerging Technologies & R&D",
      icon: "🇨🇴",
      color: "from-yellow-500 to-yellow-600",
      coordinates: { x: "28%", y: "68%" },
    },
  ];

  const globalStats = [
    {
      number: "2,500+",
      label: "Full-Time Employees",
      description: "Across all global locations",
      icon: Users,
      color: "from-orange-500 to-orange-600",
    },
    {
      number: "2",
      label: "On-Site Offices",
      description: "Hybrid, work-at-home, and office-based",
      icon: Building2,
      color: "from-blue-500 to-blue-600",
    },
    {
      number: "40+",
      label: "Service Partners",
      description: "Strategic partnerships worldwide",
      icon: Star,
      color: "from-purple-500 to-purple-600",
    },
    {
      number: "15",
      label: "Years in Service",
      description: "Proven track record of excellence",
      icon: CheckCircle,
      color: "from-green-500 to-green-600",
    },
  ];

  const capabilities = [
    "Highly specialized in SaaS (FinTech, HealthTech)",
    "Hybrid, Work-at-Home, and Office-Based operations",
    "24/7 global coverage and support",
    "Multi-timezone collaboration excellence",
    "Cultural diversity and language capabilities",
    "Regulatory compliance across all regions",
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <pattern
                id="world-grid"
                x="0"
                y="0"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
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
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            TalentAmp
            <span className="text-gradient bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              {" "}
              Global Footprint
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our global presence enables us to deliver world-class talent
            solutions with local expertise and cultural understanding across
            five strategic locations.
          </p>
        </div>

        {/* Interactive World Map */}
        <div className="relative mb-20">
          {/* World Map Container */}
          <div className="relative w-full max-w-7xl mx-auto h-[500px] bg-gradient-to-b from-gray-800/30 to-gray-900/50 rounded-3xl border border-gray-700/50 overflow-hidden backdrop-blur-sm">
            {/* Enhanced World Map SVG */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1000 500"
            >
              <defs>
                <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(255, 69, 0, 0.1)" />
                  <stop offset="100%" stopColor="rgba(255, 69, 0, 0)" />
                </radialGradient>
                <linearGradient id="connectionPulse">
                  <stop offset="0%" stopColor="rgba(255, 69, 0, 0.8)" />
                  <stop offset="50%" stopColor="rgba(255, 149, 0, 0.6)" />
                  <stop offset="100%" stopColor="rgba(255, 69, 0, 0.2)" />
                </linearGradient>
              </defs>

              {/* World Continents Simplified */}
              {/* North America */}
              <path
                d="M80,120 Q120,100 180,110 L220,120 Q260,110 300,120 L340,130 Q360,125 380,130 L400,140 Q420,135 440,140 L460,150 Q480,145 500,150 L520,160 Q540,155 560,160 L580,170 Q600,165 620,170 L640,180 Q660,175 680,180 L700,190 Q720,185 740,190 L760,200 Q780,195 800,200 L820,210 Q840,205 860,210 L880,220 Q900,215 920,220 L940,230 Q960,225 980,230"
                fill="rgba(255, 69, 0, 0.1)"
                stroke="rgba(255, 69, 0, 0.3)"
                strokeWidth="1"
              />

              {/* South America */}
              <path
                d="M280,240 Q300,235 320,240 L340,250 Q360,245 380,250 L400,260 Q420,255 440,260 L460,270 Q480,265 500,270 L520,280 Q540,275 560,280 L580,290 Q600,285 620,290 L640,300 Q660,295 680,300 L700,310 Q720,305 740,310 L760,320 Q780,315 800,320 L820,330 Q840,325 860,330 L880,340"
                fill="rgba(255, 69, 0, 0.08)"
                stroke="rgba(255, 69, 0, 0.25)"
                strokeWidth="1"
              />

              {/* Asia */}
              <path
                d="M600,120 Q640,100 700,110 L760,120 Q800,110 860,120 L900,130 Q920,125 940,130 L960,140 Q980,135 1000,140"
                fill="rgba(255, 69, 0, 0.08)"
                stroke="rgba(255, 69, 0, 0.25)"
                strokeWidth="1"
              />

              {/* Animated Grid Overlay */}
              <g opacity="0.1">
                {[...Array(20)].map((_, i) => (
                  <line
                    key={`v-${i}`}
                    x1={i * 50}
                    y1="0"
                    x2={i * 50}
                    y2="500"
                    stroke="rgba(255, 69, 0, 0.2)"
                    strokeWidth="0.5"
                    className="animate-pulse"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
                {[...Array(10)].map((_, i) => (
                  <line
                    key={`h-${i}`}
                    x1="0"
                    y1={i * 50}
                    x2="1000"
                    y2={i * 50}
                    stroke="rgba(255, 69, 0, 0.2)"
                    strokeWidth="0.5"
                    className="animate-pulse"
                    style={{ animationDelay: `${i * 150}ms` }}
                  />
                ))}
              </g>
            </svg>

            {/* Enhanced Location Markers */}
            {locations.map((location, index) => (
              <div
                key={index}
                className="absolute group cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-20"
                style={{
                  left: location.coordinates.x,
                  top: location.coordinates.y,
                }}
              >
                {/* Animated Marker with Ripple Effect */}
                <div className="relative">
                  {/* Outer ripple */}
                  <div className="w-8 h-8 bg-orange-500/30 rounded-full animate-ping absolute -top-2 -left-2"></div>
                  {/* Middle ripple */}
                  <div
                    className="w-6 h-6 bg-orange-400/50 rounded-full animate-ping absolute -top-1 -left-1"
                    style={{ animationDelay: '0.5s' }}
                  ></div>
                  {/* Core marker */}
                  <div className="w-4 h-4 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full relative z-10 shadow-lg group-hover:scale-125 transition-transform duration-300">
                    <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Enhanced Tooltip */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30 scale-95 group-hover:scale-100">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-2xl border border-gray-200 min-w-80 backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-3xl mb-3 animate-bounce">{location.icon}</div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">
                        {location.country}
                      </h4>
                      <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${location.color} text-white text-sm font-medium mb-3`}>
                        {location.role}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {location.specialization}
                      </p>
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <div className="flex items-center justify-center text-orange-600 text-xs">
                          <MapPin className="w-3 h-3 mr-1" />
                          Active Location
                        </div>
                      </div>
                    </div>
                    {/* Tooltip Arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                      <div className="border-8 border-transparent border-t-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Enhanced Connection Lines with Animation */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
              <defs>
                <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255, 69, 0, 0)" />
                  <stop offset="20%" stopColor="rgba(255, 69, 0, 0.6)" />
                  <stop offset="80%" stopColor="rgba(255, 149, 0, 0.6)" />
                  <stop offset="100%" stopColor="rgba(255, 69, 0, 0)" />
                </linearGradient>
                <linearGradient id="connection-gradient-reverse" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255, 69, 0, 0)" />
                  <stop offset="20%" stopColor="rgba(255, 69, 0, 0.6)" />
                  <stop offset="80%" stopColor="rgba(255, 149, 0, 0.6)" />
                  <stop offset="100%" stopColor="rgba(255, 69, 0, 0)" />
                </linearGradient>
              </defs>

              {/* US to Philippines */}
              <path
                d="M 250 175 Q 500 120 750 275"
                stroke="url(#connection-gradient)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                strokeDasharray="5,5"
              />

              {/* US to Mexico */}
              <path
                d="M 250 175 Q 235 200 200 250"
                stroke="url(#connection-gradient-reverse)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: "1s" }}
                strokeDasharray="3,3"
              />

              {/* Mexico to Guatemala */}
              <path
                d="M 200 250 L 220 290"
                stroke="url(#connection-gradient)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: "1.5s" }}
                strokeDasharray="2,2"
              />

              {/* Guatemala to Colombia */}
              <path
                d="M 220 290 Q 250 320 280 340"
                stroke="url(#connection-gradient-reverse)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: "2s" }}
                strokeDasharray="4,4"
              />
            </svg>

            {/* Floating Data Points */}
            <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm rounded-xl p-4 text-white text-sm">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>5 Active Locations</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <span>24/7 Operations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Global Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {globalStats.map((stat, index) => (
            <div
              key={index}
              className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 card-hover hover:bg-white/10 transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
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
              Our worldwide presence ensures seamless service delivery with
              local expertise and global standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl border border-white/10"
              >
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
