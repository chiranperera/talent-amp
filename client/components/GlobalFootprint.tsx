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
      coordinates: { x: "25%", y: "35%" }, // North America region in the new map
    },
    {
      country: "Philippines",
      role: "Technology Hub",
      specialization: "SaaS, FinTech & HealthTech Specialists",
      icon: "🇵🇭",
      color: "from-green-500 to-green-600",
      coordinates: { x: "75%", y: "45%" }, // Southeast Asia region in the new map
    },
    {
      country: "Mexico",
      role: "Nearshore Center",
      specialization: "Application Development & Support",
      icon: "🇲🇽",
      color: "from-red-500 to-red-600",
      coordinates: { x: "20%", y: "50%" }, // Central America/Mexico region
    },
    {
      country: "Guatemala",
      role: "Service Excellence",
      specialization: "Customer Experience & Quality Assurance",
      icon: "🇬🇹",
      color: "from-purple-500 to-purple-600",
      coordinates: { x: "18%", y: "55%" }, // Central America region
    },
    {
      country: "Colombia",
      role: "Innovation Lab",
      specialization: "Emerging Technologies & R&D",
      icon: "🇨🇴",
      color: "from-yellow-500 to-yellow-600",
      coordinates: { x: "28%", y: "65%" }, // South America region
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
      {/* Vertical Line World Map Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF4500" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#FF4500" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FF4500" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            
            {/* World Map with Vertical Lines - Similar to Reference Image */}
            <g>
              {/* North America - Dense vertical lines */}
              {[
                // Main continent lines
                80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280
              ].map((x, i) => (
                <g key={`na-${i}`}>
                  {/* Main lines with varying heights */}
                  <rect
                    x={x}
                    y={50 + Math.sin(i * 0.3) * 20}
                    width={i % 5 === 0 ? 8 : i % 3 === 0 ? 6 : 3}
                    height={150 + Math.sin(i * 0.5) * 30}
                    fill="#FF4500"
                    opacity={0.6 + (i % 4) * 0.1}
                    rx={1}
                  />
                  {/* Small accent lines */}
                  {i % 4 === 0 && (
                    <rect
                      x={x + 15}
                      y={80 + Math.sin(i * 0.4) * 15}
                      width={2}
                      height={60 + Math.sin(i * 0.6) * 20}
                      fill="#FF4500"
                      opacity={0.4}
                      rx={1}
                    />
                  )}
                </g>
              ))}
              
              {/* South America - Tapered lines */}
              {[
                190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285
              ].map((x, i) => (
                <g key={`sa-${i}`}>
                  <rect
                    x={x}
                    y={220}
                    width={i % 4 === 0 ? 7 : i % 2 === 0 ? 4 : 2}
                    height={200 - i * 8}
                    fill="#FF4500"
                    opacity={0.5 + (i % 3) * 0.15}
                    rx={1}
                  />
                  {/* Small dots for islands */}
                  {i % 3 === 0 && (
                    <circle
                      cx={x + 20}
                      cy={350 + i * 5}
                      r={2}
                      fill="#FF4500"
                      opacity={0.6}
                    />
                  )}
                </g>
              ))}
              
              {/* Africa - Varied line heights */}
              {[
                450, 455, 460, 465, 470, 475, 480, 485, 490, 495, 500, 505, 510, 515, 520, 525, 530, 535, 540, 545, 550, 555, 560, 565, 570
              ].map((x, i) => (
                <g key={`af-${i}`}>
                  <rect
                    x={x}
                    y={120 + Math.sin(i * 0.2) * 10}
                    width={i % 6 === 0 ? 9 : i % 3 === 0 ? 5 : 3}
                    height={280 + Math.sin(i * 0.4) * 40}
                    fill="#FF4500"
                    opacity={0.5 + (i % 4) * 0.1}
                    rx={1}
                  />
                </g>
              ))}
              
              {/* Europe - Short dense lines */}
              {[
                420, 425, 430, 435, 440, 445, 450, 455, 460, 465, 470, 475, 480, 485, 490, 495, 500, 505
              ].map((x, i) => (
                <g key={`eu-${i}`}>
                  <rect
                    x={x}
                    y={60 + Math.sin(i * 0.3) * 15}
                    width={i % 4 === 0 ? 6 : i % 2 === 0 ? 4 : 2}
                    height={80 + Math.sin(i * 0.5) * 20}
                    fill="#FF4500"
                    opacity={0.6 + (i % 3) * 0.1}
                    rx={1}
                  />
                </g>
              ))}
              
              {/* Asia - Large continent with varied patterns */}
              {[
                520, 530, 540, 550, 560, 570, 580, 590, 600, 610, 620, 630, 640, 650, 660, 670, 680, 690, 700, 710, 720, 730, 740, 750, 760, 770, 780, 790, 800, 810, 820, 830, 840, 850, 860, 870, 880, 890, 900
              ].map((x, i) => (
                <g key={`as-${i}`}>
                  <rect
                    x={x}
                    y={40 + Math.sin(i * 0.2) * 25}
                    width={i % 7 === 0 ? 10 : i % 4 === 0 ? 6 : i % 2 === 0 ? 4 : 2}
                    height={180 + Math.sin(i * 0.3) * 50}
                    fill="#FF4500"
                    opacity={0.5 + (i % 5) * 0.1}
                    rx={1}
                  />
                  {/* Additional scattered elements */}
                  {i % 5 === 0 && (
                    <rect
                      x={x + 15}
                      y={100 + Math.sin(i * 0.4) * 20}
                      width={3}
                      height={40 + Math.sin(i * 0.6) * 15}
                      fill="#FF4500"
                      opacity={0.4}
                      rx={1}
                    />
                  )}
                </g>
              ))}
              
              {/* Southeast Asia / Philippines - Island clusters */}
              {[
                820, 830, 840, 850, 860, 870, 880, 890, 900, 910
              ].map((x, i) => (
                <g key={`sea-${i}`}>
                  <rect
                    x={x}
                    y={280 + Math.sin(i * 0.4) * 10}
                    width={i % 3 === 0 ? 5 : 3}
                    height={60 + Math.sin(i * 0.5) * 20}
                    fill="#FF4500"
                    opacity={0.6 + (i % 3) * 0.1}
                    rx={1}
                  />
                  {/* Small island dots */}
                  <circle
                    cx={x + 10}
                    cy={320 + i * 8}
                    r={1.5}
                    fill="#FF4500"
                    opacity={0.7}
                  />
                  <circle
                    cx={x - 5}
                    cy={310 + i * 6}
                    r={1}
                    fill="#FF4500"
                    opacity={0.5}
                  />
                </g>
              ))}
              
              {/* Australia / Oceania - Isolated continent */}
              {[
                850, 860, 870, 880, 890, 900, 910, 920, 930, 940, 950, 960, 970
              ].map((x, i) => (
                <g key={`oc-${i}`}>
                  <rect
                    x={x}
                    y={400 + Math.sin(i * 0.3) * 8}
                    width={i % 4 === 0 ? 6 : i % 2 === 0 ? 4 : 2}
                    height={80 + Math.sin(i * 0.4) * 15}
                    fill="#FF4500"
                    opacity={0.5 + (i % 4) * 0.1}
                    rx={1}
                  />
                  {/* Small scattered islands */}
                  {i % 3 === 0 && (
                    <>
                      <circle
                        cx={x + 20}
                        cy={450 + i * 3}
                        r={1}
                        fill="#FF4500"
                        opacity={0.6}
                      />
                      <circle
                        cx={x + 25}
                        cy={460 + i * 2}
                        r={0.5}
                        fill="#FF4500"
                        opacity={0.4}
                      />
                    </>
                  )}
                </g>
              ))}
            </g>
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
            {/* World Map Background */}
            <div 
              className="absolute inset-0 w-full h-full bg-no-repeat bg-center bg-contain opacity-20"
              style={{
                backgroundImage: "url('/images/world-map.svg')",
                filter: "brightness(0) saturate(100%) invert(27%) sepia(88%) saturate(2867%) hue-rotate(16deg) brightness(99%) contrast(101%)"
              }}
            ></div>

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

                {/* Enhanced Tooltip with Smart Positioning */}
                <div
                  className={`absolute opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 scale-95 group-hover:scale-100 ${
                    // Smart positioning based on location coordinates
                    parseInt(location.coordinates.x) < 25
                      ? "left-0"
                      : parseInt(location.coordinates.x) > 75
                        ? "right-0"
                        : "left-1/2 transform -translate-x-1/2"
                  } ${
                    parseInt(location.coordinates.y) < 40 ? "top-8" : "bottom-8"
                  }`}
                >
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-2xl border border-gray-200 w-80 backdrop-blur-sm">
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
                    {/* Dynamic Tooltip Arrow */}
                    <div
                      className={`absolute ${
                        parseInt(location.coordinates.y) < 40
                          ? "bottom-full left-1/2 transform -translate-x-1/2 mb-1"
                          : "top-full left-1/2 transform -translate-x-1/2 -mt-1"
                      }`}
                    >
                      <div
                        className={`border-8 border-transparent ${
                          parseInt(location.coordinates.y) < 40
                            ? "border-b-white"
                            : "border-t-white"
                        }`}
                      ></div>
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
                d="M 150 210 Q 400 150 450 270"
                stroke="url(#connection-gradient)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                strokeDasharray="5,5"
              />

              {/* US to Mexico */}
              <path
                d="M 150 210 Q 135 230 120 300"
                stroke="url(#connection-gradient-reverse)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: "1s" }}
                strokeDasharray="3,3"
              />

              {/* Mexico to Guatemala */}
              <path
                d="M 120 300 L 108 330"
                stroke="url(#connection-gradient)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: "1.5s" }}
                strokeDasharray="2,2"
              />

              {/* Guatemala to Colombia */}
              <path
                d="M 108 330 Q 140 360 168 390"
                stroke="url(#connection-gradient-reverse)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: "2s" }}
                strokeDasharray="4,4"
              />

              {/* US to Guatemala (additional connection) */}
              <path
                d="M 150 210 Q 125 270 108 330"
                stroke="url(#connection-gradient)"
                strokeWidth="1.5"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: "2.5s" }}
                strokeDasharray="6,6"
                opacity="0.6"
              />

              {/* US to Colombia (additional connection) */}
              <path
                d="M 150 210 Q 160 300 168 390"
                stroke="url(#connection-gradient-reverse)"
                strokeWidth="1.5"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: "3s" }}
                strokeDasharray="7,7"
                opacity="0.6"
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
