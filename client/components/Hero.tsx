import { useEffect, useState } from "react";
import { ArrowRight, Users, Zap, Globe, TrendingUp } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const floatingCards = [
    { icon: Users, text: "600+ Consultants", delay: "0s", position: "top-20 left-10" },
    { icon: Globe, text: "Global Reach", delay: "0.5s", position: "top-32 right-16" },
    { icon: TrendingUp, text: "95% Retention", delay: "1s", position: "bottom-32 left-20" },
    { icon: Zap, text: "AI-Powered", delay: "1.5s", position: "bottom-20 right-12" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 69, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 69, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
      </div>

      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0">
        <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path 
                d="M20,20 L80,20 L80,80 L20,80 Z M40,40 L60,40 M50,30 L50,50" 
                stroke="url(#gradient)" 
                strokeWidth="1" 
                fill="none"
              />
            </pattern>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4500" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Floating Talent Cards */}
      {floatingCards.map((card, index) => (
        <div
          key={index}
          className={`absolute hidden lg:block ${card.position} animate-float`}
          style={{ 
            animationDelay: card.delay,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <card.icon className="w-4 h-4 text-orange-400" />
              </div>
              <span className="text-white text-sm font-medium">{card.text}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm mb-8">
          <Zap className="w-4 h-4 text-orange-400 mr-2" />
          <span className="text-orange-300 text-sm font-medium">AI-Powered Workforce Solutions</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block">Amplifying</span>
          <span className="block text-gradient bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
            IT Talent
          </span>
          <span className="block">at Scale</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Transforming how organizations source, develop, and deploy tech talent through 
          <span className="text-orange-400 font-semibold"> AI-powered staffing solutions</span> and 
          global delivery excellence.
        </p>

        {/* Stats Preview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-12 max-w-2xl mx-auto">
          {[
            { number: "600+", label: "Consultants" },
            { number: "95%", label: "Retention" },
            { number: "$75M+", label: "Revenue" },
            { number: "50+", label: "Clients" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-orange hover:scale-105 flex items-center space-x-2">
            <span>Find Talent</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          
          <button className="group bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all duration-300 backdrop-blur-sm hover:border-white/40">
            Explore Services
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm mb-6">Trusted by leading enterprises worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            {/* Placeholder for client logos */}
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="w-24 h-8 bg-white/10 rounded border border-white/20 flex items-center justify-center">
                <span className="text-white/60 text-xs font-medium">Logo</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
