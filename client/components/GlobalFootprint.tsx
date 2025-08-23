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
            <div className="absolute inset-0 w-full h-full">
              <svg
                className="w-full h-full opacity-20"
                viewBox="0 0 1200 1200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="#FF4500" fill="none" strokeWidth="12.7188" strokeMiterlimit="10" strokeLinecap="round">
                  <path d="m24.633 76.653 1.6318-0.003906" transform="scale(12)"></path>
                  <path d="m96.725 76.653 0.8151-0.003906" transform="scale(12)"></path>
                  <path d="m88.776 76.653 0.19987-0.003906" transform="scale(12)"></path>
                  <path d="m24.146 72.738 4.2389-0.001953" transform="scale(12)"></path>
                  <path d="m87.647 72.738 3.349-0.001953" transform="scale(12)"></path>
                  <path d="m24.367 68.831 6.3802-0.003907" transform="scale(12)"></path>
                  <path d="m50.487 68.831 4.8359-0.003907" transform="scale(12)"></path>
                  <path d="m80.76 68.831 11.724-0.003907" transform="scale(12)"></path>
                  <path d="m23.405 64.92 10.478-0.001953" transform="scale(12)"></path>
                  <path d="m49.67 64.92 7.9072-0.001953" transform="scale(12)"></path>
                  <path d="m59.413 64.92 1.1628-0.001953" transform="scale(12)"></path>
                  <path d="m84.469 64.92 3.3171-0.001953" transform="scale(12)"></path>
                  <path d="m89.898 64.92 0.70898-0.001953" transform="scale(12)"></path>
                  <path d="m97.919 64.92v-0.001953" transform="scale(12)"></path>
                  <path d="m20.844 61.007h13.039" transform="scale(12)"></path>
                  <path d="m48.898 61.007h6.2269" transform="scale(12)"></path>
                  <path d="m55.984 61.007h1.5931" transform="scale(12)"></path>
                  <path d="m77.579 61.007h1.0599" transform="scale(12)"></path>
                  <path d="m81.124 61.007h0.52995" transform="scale(12)"></path>
                  <path d="m83.321 61.007v0" transform="scale(12)"></path>
                  <path d="m85.616 61.007v0" transform="scale(12)"></path>
                  <path d="m90.252 61.007h-2.4658" transform="scale(12)"></path>
                  <path d="m93.387 61.007v0" transform="scale(12)"></path>
                  <path d="m19.652 57.097h1.1921" transform="scale(12)"></path>
                  <path d="m22.38 57.097h4.5052" transform="scale(12)"></path>
                  <path d="m41.744 57.097h19.143" transform="scale(12)"></path>
                  <path d="m70.912 57.097v0" transform="scale(12)"></path>
                  <path d="m69.743 57.097h0.15332" transform="scale(12)"></path>
                  <path d="m76.564 57.097v0" transform="scale(12)"></path>
                  <path d="m84.502 57.097v0" transform="scale(12)"></path>
                  <path d="m13.746 53.187h2.151" transform="scale(12)"></path>
                  <path d="m18.013 53.187h0.6569" transform="scale(12)"></path>
                  <path d="m21.886 53.187h0.65592" transform="scale(12)"></path>
                  <path d="m40.749 53.187h15.679" transform="scale(12)"></path>
                  <path d="m58.325 53.187h5.3451" transform="scale(12)"></path>
                  <path d="m68.352 53.187h3.6211" transform="scale(12)"></path>
                  <path d="m74.355 53.187h4.0208" transform="scale(12)"></path>
                  <path d="m10.633 49.276h10.543" transform="scale(12)"></path>
                  <path d="m43.311 49.276h6.1012" transform="scale(12)"></path>
                  <path d="m52.062 49.276h1.374" transform="scale(12)"></path>
                  <path d="m56.282 49.276h26.051" transform="scale(12)"></path>
                  <path d="m85.22 49.276v0" transform="scale(12)"></path>
                  <path d="m8.8659 45.367 10.378-0.007813" transform="scale(12)"></path>
                  <path d="m20.613 45.367 0.56315-0.007813" transform="scale(12)"></path>
                  <path d="m22.77 45.367 2.0723-0.007813" transform="scale(12)"></path>
                  <path d="m45.585 45.367 1.347-0.007813" transform="scale(12)"></path>
                  <path d="m48.919 45.367v-0.007813" transform="scale(12)"></path>
                  <path d="m50.422 45.367 3.014-0.007813" transform="scale(12)"></path>
                  <path d="m57.577 45.367 1.4108-0.007813" transform="scale(12)"></path>
                  <path d="m61.352 45.367 19.326-0.007813" transform="scale(12)"></path>
                  <path d="m82.333 45.367 1.6859-0.007813" transform="scale(12)"></path>
                  <path d="m87.511 45.367 0.31706-0.007813" transform="scale(12)"></path>
                  <path d="m10.146 41.325 7.1979-9.77e-4" transform="scale(12)"></path>
                  <path d="m18.67 41.325 3.5439-9.77e-4" transform="scale(12)"></path>
                  <path d="m23.884 41.325 6.002-9.77e-4" transform="scale(12)"></path>
                  <path d="m44.989 41.325 0.50391-9.77e-4" transform="scale(12)"></path>
                  <path d="m43.311 41.325v0" transform="scale(12)"></path>
                  <path d="m47.421 41.325 38.043-9.77e-4" transform="scale(12)"></path>
                  <path d="m86.82 41.325v-9.77e-4" transform="scale(12)"></path>
                  <path d="m89.768 41.325v-9.77e-4" transform="scale(12)"></path>
                  <path d="m8.5791 37.417 11.238-0.003906" transform="scale(12)"></path>
                  <path d="m24.632 37.417 2.0498-0.003906" transform="scale(12)"></path>
                  <path d="m33.178 37.417 1.0251-0.003906" transform="scale(12)"></path>
                  <path d="m47.421 37.417 2.3711-0.003906" transform="scale(12)"></path>
                  <path d="m51.562 37.419 2.3711-0.002929" transform="scale(12)"></path>
                  <path d="m55.323 37.419 27.788-0.002929" transform="scale(12)"></path>
                  <path d="m89.768 37.419 0.83919-0.002929" transform="scale(12)"></path>
                  <path d="m1.306 33.377 21.745-9.76e-4" transform="scale(12)"></path>
                  <path d="m24.102 33.377 0.53027-9.76e-4" transform="scale(12)"></path>
                  <path d="m27.501 33.377 1.6742-9.76e-4" transform="scale(12)"></path>
                  <path d="m32.66 33.377 6.8317-9.76e-4" transform="scale(12)"></path>
                  <path d="m50.422 33.377 3.68-9.76e-4" transform="scale(12)"></path>
                  <path d="m57.577 33.377 5.2979-9.76e-4" transform="scale(12)"></path>
                  <path d="m64.282 33.378 22.704-9.77e-4" transform="scale(12)"></path>
                  <path d="m89.768 33.378v-9.77e-4" transform="scale(12)"></path>
                  <path d="m2.6621 29.47 12.917-0.005208" transform="scale(12)"></path>
                  <path d="m17.565 29.47 3.0479-0.005208" transform="scale(12)"></path>
                  <path d="m22.004 29.47 0.42025-0.005208" transform="scale(12)"></path>
                  <path d="m24.632 29.47 0.41895-0.005208" transform="scale(12)"></path>
                  <path d="m25.823 29.47 1.2272-0.005208" transform="scale(12)"></path>
                  <path d="m32.933 29.47 7.8161-0.005208" transform="scale(12)"></path>
                  <path d="m58.337 29.47 0.061198-0.005208" transform="scale(12)"></path>
                  <path d="m61.488 29.47 0.062174-0.005208" transform="scale(12)"></path>
                  <path d="m64.251 29.47 27.812-0.005208" transform="scale(12)"></path>
                  <path d="m7.277 25.283h1.0599" transform="scale(12)"></path>
                  <path d="m19.553 25.283h1.0599" transform="scale(12)"></path>
                  <path d="m21.65 25.283h0.17806" transform="scale(12)"></path>
                  <path d="m23.35 25.283h0.17708" transform="scale(12)"></path>
                  <path d="m25.139 25.283v0" transform="scale(12)"></path>
                  <path d="m29.622 25.283h-2.5182" transform="scale(12)"></path>
                  <path d="m42.008 25.283h-11.106" transform="scale(12)"></path>
                  <path d="m50.542 25.283h-1.1139" transform="scale(12)"></path>
                  <path d="m54.49 25.283v0" transform="scale(12)"></path>
                  <path d="m67.335 25.283h2.5729" transform="scale(12)"></path>
                  <path d="m79.793 25.283h0.21615" transform="scale(12)"></path>
                  <path d="m86.88 25.283h5.847" transform="scale(12)"></path>
                  <path d="m29.489 21.375 4.3721-0.010091" transform="scale(12)"></path>
                  <path d="m38.851 21.375 1.2799-0.010091" transform="scale(12)"></path>
                  <path d="m63.67 21.375v-0.010091" transform="scale(12)"></path>
                  <path d="m25.074 78.635 1.1911-0.004232" transform="scale(12)"></path>
                  <path d="m94.785 78.635 0.41471-0.004232" transform="scale(12)"></path>
                  <path d="m24.842 74.722 1.821-0.001953" transform="scale(12)"></path>
                  <path d="m98.246 74.722 0.44792-0.001953" transform="scale(12)"></path>
                  <path d="m89.098 74.722 0.44694-0.001953" transform="scale(12)"></path>
                  <path d="m24.367 70.814 5.1891-0.003256" transform="scale(12)"></path>
                  <path d="m51.547 70.814 2.2533-0.003256" transform="scale(12)"></path>
                  <path d="m80.76 70.814 11.392-0.003256" transform="scale(12)"></path>
                  <path d="m24.405 66.902 8.528-0.002929" transform="scale(12)"></path>
                  <path d="m49.892 66.902 6.292-0.002929" transform="scale(12)"></path>
                  <path d="m59.033 66.902 0.76204-0.002929" transform="scale(12)"></path>
                  <path d="m81.124 66.902 10.433-0.002929" transform="scale(12)"></path>
                  <path d="m97.563 66.902v-0.002929" transform="scale(12)"></path>
                  <path d="m21.408 62.989h13.019" transform="scale(12)"></path>
                  <path d="m49.892 62.989h7.6852" transform="scale(12)"></path>
                  <path d="m80.231 62.989h0.8929" transform="scale(12)"></path>
                  <path d="m82.516 62.989h0.36393" transform="scale(12)"></path>
                  <path d="m84.651 62.989v0" transform="scale(12)"></path>
                  <path d="m91.888 62.989v0" transform="scale(12)"></path>
                  <path d="m95.798 62.989v0" transform="scale(12)"></path>
                  <path d="m21.828 59.078h8.0788" transform="scale(12)"></path>
                  <path d="m48.522 59.078h11.503" transform="scale(12)"></path>
                  <path d="m76.284 59.078h0.28027" transform="scale(12)"></path>
                  <path d="m77.721 59.078v0" transform="scale(12)"></path>
                  <path d="m82.217 59.078h-1.5391" transform="scale(12)"></path>
                  <path d="m17.081 55.167 2.8451-9.76e-4" transform="scale(12)"></path>
                  <path d="m27.079 55.167v-9.76e-4" transform="scale(12)"></path>
                  <path d="m57.577 55.167-16.828-9.76e-4" transform="scale(12)"></path>
                  <path d="m61.086 55.167-1.6729-9.76e-4" transform="scale(12)"></path>
                  <path d="m70.194 55.167-1.2259-9.76e-4" transform="scale(12)"></path>
                  <path d="m79.335 55.167h-2.7708" transform="scale(12)"></path>
                  <path d="m83.321 55.167h-0.20996" transform="scale(12)"></path>
                  <path d="m12.84 51.258h3.0472" transform="scale(12)"></path>
                  <path d="m11.25 51.258h0.35384" transform="scale(12)"></path>
                  <path d="m20.718 51.258h0.35384" transform="scale(12)"></path>
                  <path d="m41.645 51.258h13.755" transform="scale(12)"></path>
                  <path d="m63.404 51.258h18.703" transform="scale(12)"></path>
                  <path d="m56.779 51.258h3.471" transform="scale(12)"></path>
                  <path d="m9.5299 47.349 13.24-0.009114" transform="scale(12)"></path>
                  <path d="m43.311 47.349 1.6781-0.009114" transform="scale(12)"></path>
                  <path d="m50.001 47.349v-0.009114" transform="scale(12)"></path>
                  <path d="m52.062 47.349v-0.009114" transform="scale(12)"></path>
                  <path d="m53.436 47.349 6.292-0.009114" transform="scale(12)"></path>
                  <path d="m62.059 47.349 19.363-0.009114" transform="scale(12)"></path>
                  <path d="m84.019 47.349 0.020182-0.009114" transform="scale(12)"></path>
                  <path d="m85.907 47.349 1.4329-0.009114" transform="scale(12)"></path>
                  <path d="m9.4899 43.308 9.599-0.001953" transform="scale(12)"></path>
                  <path d="m21.838 43.308 3.1361-0.001953" transform="scale(12)"></path>
                  <path d="m26.001 43.308 1.0492-0.001953" transform="scale(12)"></path>
                  <path d="m29.363 43.308 1.0482-0.001953" transform="scale(12)"></path>
                  <path d="m86.986 43.308 1.0501-0.001953" transform="scale(12)"></path>
                  <path d="m44.989 43.308 40.231-0.001953" transform="scale(12)"></path>
                  <path d="m9.5299 39.398 12.298-0.003255" transform="scale(12)"></path>
                  <path d="m24.367 39.398 4.5433-0.003255" transform="scale(12)"></path>
                  <path d="m44.15 39.398 0.12988-0.003255" transform="scale(12)"></path>
                  <path d="m49.229 39.398 0.56315-0.003255" transform="scale(12)"></path>
                  <path d="m52.28 39.398 23.048-0.003255" transform="scale(12)"></path>
                  <path d="m76.513 39.398 8.707-0.003255" transform="scale(12)"></path>
                  <path d="m86.292 39.398v-0.003255" transform="scale(12)"></path>
                  <path d="m1.8441 35.358 0.84993-0.001953" transform="scale(12)"></path>
                  <path d="m8.3369 35.358 12.839-0.001953" transform="scale(12)"></path>
                  <path d="m32.437 35.358 2.8932-0.001953" transform="scale(12)"></path>
                  <path d="m39.756 35.358 1.9883-0.001953" transform="scale(12)"></path>
                  <path d="m49.428 35.358 1.2588-0.001953" transform="scale(12)"></path>
                  <path d="m52.177 35.358 1.2588-0.001953" transform="scale(12)"></path>
                  <path d="m55.799 35.358 28.22-0.001953" transform="scale(12)"></path>
                  <path d="m89.019 35.358 1.5882-0.001953" transform="scale(12)"></path>
                  <path d="m27.05 35.358 1.446-0.001953" transform="scale(12)"></path>
                  <path d="m23.438 35.358 0.41471-0.001953" transform="scale(12)"></path>
                  <path d="m1.8441 31.452 11.527-0.006184" transform="scale(12)"></path>
                  <path d="m15.887 31.452 1.6781-0.006184" transform="scale(12)"></path>
                  <path d="m19.244 31.452 0.40788-0.006184" transform="scale(12)"></path>
                  <path d="m21.541 31.452 0.15592-0.006184" transform="scale(12)"></path>
                  <path d="m22.973 31.452 0.15592-0.006184" transform="scale(12)"></path>
                  <path d="m24.974 31.452 0.15592-0.006184" transform="scale(12)"></path>
                  <path d="m26.682 31.452 2.2282-0.006184" transform="scale(12)"></path>
                  <path d="m33.178 31.452 6.5778-0.006184" transform="scale(12)"></path>
                  <path d="m58.061 31.452 0.55208-0.006184" transform="scale(12)"></path>
                  <path d="m61.859 31.452 0.66211-0.006184" transform="scale(12)"></path>
                  <path d="m63.951 31.452 1.1543-0.006184" transform="scale(12)"></path>
                  <path d="m66.299 31.452 21.968-0.006184" transform="scale(12)"></path>
                  <path d="m89.415 31.452 2.2529-0.006184" transform="scale(12)"></path>
                  <path d="m10.146 27.265-5.7402-9.77e-4" transform="scale(12)"></path>
                  <path d="m18.935 27.265-2.7389-9.77e-4" transform="scale(12)"></path>
                  <path d="m27.348 27.265-2.209-9.77e-4" transform="scale(12)"></path>
                  <path d="m41.435 27.265-10.225-9.77e-4" transform="scale(12)"></path>
                  <path d="m49.075 27.265-0.81771-9.77e-4" transform="scale(12)"></path>
                  <path d="m60.226 27.265v-9.77e-4" transform="scale(12)"></path>
                  <path d="m65.701 27.265 3.8861-9.77e-4" transform="scale(12)"></path>
                  <path d="m71.045 27.265 4.5911-9.77e-4" transform="scale(12)"></path>
                  <path d="m76.917 27.265 14.089-9.77e-4" transform="scale(12)"></path>
                  <path d="m21.408 27.265v-9.77e-4" transform="scale(12)"></path>
                  <path d="m20.834 23.355v-0.008138" transform="scale(12)"></path>
                  <path d="m22.424 23.355v-0.008138" transform="scale(12)"></path>
                  <path d="m24.632 23.355v-0.008138" transform="scale(12)"></path>
                  <path d="m27.855 23.355-1.0153-0.008138" transform="scale(12)"></path>
                  <path d="m31.674 23.355-2.764-0.008138" transform="scale(12)"></path>
                  <path d="m39.492 23.355-5.9948-0.008138" transform="scale(12)"></path>
                  <path d="m57.1 23.355-0.32096-0.008138" transform="scale(12)"></path>
                  <path d="m66.02 23.355-1.2467-0.008138" transform="scale(12)"></path>
                  <path d="m76.881 23.355-1.2448-0.008138" transform="scale(12)"></path>
                  <path d="m78.157 23.355-0.22689-0.008138" transform="scale(12)"></path>
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
