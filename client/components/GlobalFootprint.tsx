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
          <div className="relative w-full max-w-7xl mx-auto h-[600px] bg-gradient-to-b from-gray-800/30 to-gray-900/50 rounded-3xl border border-gray-700/50 overflow-visible backdrop-blur-sm">
            {/* Real World Map Background */}
            <div className="absolute inset-0 w-full h-full">
              <svg
                className="w-full h-full opacity-20"
                viewBox="0 0 1000 500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(255, 69, 0, 0.1)" />
                    <stop offset="100%" stopColor="rgba(255, 69, 0, 0)" />
                  </radialGradient>
                </defs>

                {/* Simplified but accurate world map continents */}
                {/* North America */}
                <path d="M158,110 L170,100 L190,95 L210,100 L230,105 L250,110 L270,115 L290,120 L310,125 L320,130 L310,140 L300,150 L290,160 L280,170 L270,180 L260,190 L250,200 L240,210 L230,220 L220,230 L210,240 L200,250 L190,240 L180,230 L170,220 L160,210 L150,200 L140,190 L130,180 L120,170 L110,160 L120,150 L130,140 L140,130 L150,120 Z"
                      fill="rgba(59, 130, 246, 0.3)"
                      stroke="rgba(59, 130, 246, 0.5)"
                      strokeWidth="1"/>

                {/* South America */}
                <path d="M200,280 L220,275 L240,280 L260,285 L280,290 L300,295 L320,300 L340,305 L350,315 L360,325 L370,335 L380,345 L370,355 L360,365 L350,375 L340,385 L330,395 L320,405 L310,415 L300,425 L290,435 L280,425 L270,415 L260,405 L250,395 L240,385 L230,375 L220,365 L210,355 L200,345 L190,335 L180,325 L170,315 L180,305 L190,295 Z"
                      fill="rgba(34, 197, 94, 0.3)"
                      stroke="rgba(34, 197, 94, 0.5)"
                      strokeWidth="1"/>

                {/* Africa */}
                <path d="M480,180 L500,175 L520,180 L540,185 L560,190 L580,195 L600,200 L620,205 L630,215 L640,225 L650,235 L660,245 L670,255 L680,265 L670,275 L660,285 L650,295 L640,305 L630,315 L620,325 L610,335 L600,345 L590,355 L580,365 L570,375 L560,385 L550,395 L540,385 L530,375 L520,365 L510,355 L500,345 L490,335 L480,325 L470,315 L460,305 L450,295 L440,285 L430,275 L440,265 L450,255 L460,245 L470,235 L480,225 L490,215 L500,205 L490,195 Z"
                      fill="rgba(168, 85, 247, 0.3)"
                      stroke="rgba(168, 85, 247, 0.5)"
                      strokeWidth="1"/>

                {/* Europe */}
                <path d="M450,120 L470,115 L490,120 L510,125 L530,130 L550,135 L570,140 L580,150 L570,160 L560,170 L550,180 L540,170 L530,160 L520,150 L510,140 L500,130 L490,140 L480,150 L470,160 L460,150 L450,140 L440,130 Z"
                      fill="rgba(245, 101, 101, 0.3)"
                      stroke="rgba(245, 101, 101, 0.5)"
                      strokeWidth="1"/>

                {/* Asia */}
                <path d="M580,100 L620,95 L660,100 L700,105 L740,110 L780,115 L820,120 L860,125 L900,130 L920,140 L940,150 L950,160 L940,170 L930,180 L920,190 L910,200 L900,210 L890,220 L880,230 L870,240 L860,250 L850,260 L840,270 L830,280 L820,290 L810,300 L800,310 L790,320 L780,330 L770,340 L760,350 L750,340 L740,330 L730,320 L720,310 L710,300 L700,290 L690,280 L680,270 L670,260 L660,250 L650,240 L640,230 L630,220 L620,210 L610,200 L600,190 L590,180 L580,170 L570,160 L560,150 L570,140 L580,130 L590,120 L600,110 Z"
                      fill="rgba(255, 165, 0, 0.3)"
                      stroke="rgba(255, 165, 0, 0.5)"
                      strokeWidth="1"/>

                {/* Australia */}
                <path d="M750,380 L780,375 L810,380 L840,385 L860,390 L880,395 L900,400 L890,410 L880,420 L870,430 L860,440 L850,430 L840,420 L830,410 L820,400 L810,410 L800,420 L790,410 L780,400 L770,390 Z"
                      fill="rgba(6, 182, 212, 0.3)"
                      stroke="rgba(6, 182, 212, 0.5)"
                      strokeWidth="1"/>

                {/* Grid overlay for tech feel */}
                <g opacity="0.08">
                  {[...Array(20)].map((_, i) => (
                    <line
                      key={`v-${i}`}
                      x1={i * 50}
                      y1="0"
                      x2={i * 50}
                      y2="500"
                      stroke="rgba(255, 69, 0, 0.4)"
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
                      stroke="rgba(255, 69, 0, 0.4)"
                      strokeWidth="0.5"
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 150}ms` }}
                    />
                  ))}
                </g>
              </svg>
            </div>

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
                    style={{ animationDelay: "0.5s" }}
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
                      <div className="text-3xl mb-3 animate-bounce">
                        {location.icon}
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">
                        {location.country}
                      </h4>
                      <div
                        className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${location.color} text-white text-sm font-medium mb-3`}
                      >
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
                <linearGradient
                  id="connection-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="rgba(255, 69, 0, 0)" />
                  <stop offset="20%" stopColor="rgba(255, 69, 0, 0.6)" />
                  <stop offset="80%" stopColor="rgba(255, 149, 0, 0.6)" />
                  <stop offset="100%" stopColor="rgba(255, 69, 0, 0)" />
                </linearGradient>
                <linearGradient
                  id="connection-gradient-reverse"
                  x1="100%"
                  y1="0%"
                  x2="0%"
                  y2="0%"
                >
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
