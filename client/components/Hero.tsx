import { useEffect, useState } from "react";
import { ArrowRight, Users, Zap, Globe, TrendingUp } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sound wave animation bars for TalentAmp brand
  const soundWaveBars = [
    { height: "h-6", delay: "0ms" },
    { height: "h-12", delay: "200ms" },
    { height: "h-8", delay: "400ms" },
    { height: "h-16", delay: "600ms" },
    { height: "h-4", delay: "800ms" },
    { height: "h-14", delay: "1000ms" },
    { height: "h-10", delay: "1200ms" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Sound Wave Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="flex items-end space-x-2">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={`w-1 bg-orange-500 animate-pulse ${
                soundWaveBars[i % soundWaveBars.length].height
              }`}
              style={{
                animationDelay: `${i * 100}ms`,
                animationDuration: "2s",
              }}
            />
          ))}
        </div>
      </div>

      {/* TalentAmp Masking Design - Right Side */}
      <div className="absolute right-0 top-0 h-full w-1/2 hidden lg:block">
        <div className="relative h-full w-full">
          {/* Main masking image */}
          <div 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-full h-3/4"
            style={{
              backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F2ac9edddbe8247688029c8646e1a19ed%2F9dd974dce5ec47e2bb18b25c9f4d1f1d?format=webp&width=800')`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center right',
              transform: `translateY(${scrollY * -0.2}px) translateY(-50%)`,
            }}
          />
          
          {/* Floating talent pills with diversity theme */}
          <div className="absolute top-20 right-20 w-16 h-24 bg-gradient-to-b from-orange-500/20 to-purple-500/20 rounded-full backdrop-blur-sm border border-white/10 animate-float">
            <div className="w-full h-full rounded-full bg-gradient-to-b from-orange-400/30 to-orange-600/30"></div>
          </div>
          
          <div className="absolute top-40 right-40 w-20 h-32 bg-gradient-to-b from-cyan-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-white/10 animate-float" style={{animationDelay: "0.5s"}}>
            <div className="w-full h-full rounded-full bg-gradient-to-b from-cyan-400/30 to-cyan-600/30"></div>
          </div>
          
          <div className="absolute bottom-32 right-16 w-14 h-20 bg-gradient-to-b from-lime-500/20 to-green-500/20 rounded-full backdrop-blur-sm border border-white/10 animate-float" style={{animationDelay: "1s"}}>
            <div className="w-full h-full rounded-full bg-gradient-to-b from-lime-400/30 to-lime-600/30"></div>
          </div>
        </div>
      </div>

      {/* TalentAmp Brand Sound Wave Visualization */}
      <div className="absolute top-20 left-20 hidden lg:flex items-end space-x-1">
        {soundWaveBars.map((bar, index) => (
          <div
            key={index}
            className={`w-2 bg-gradient-to-t from-orange-500 to-orange-300 rounded-t animate-pulse ${bar.height}`}
            style={{
              animationDelay: bar.delay,
              animationDuration: "1.5s",
            }}
          />
        ))}
      </div>

      {/* Amplification Rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[1, 2, 3].map((ring) => (
          <div
            key={ring}
            className={`absolute border border-orange-500/20 rounded-full animate-ping`}
            style={{
              width: `${ring * 200}px`,
              height: `${ring * 200}px`,
              left: `${ring * -100}px`,
              top: `${ring * -100}px`,
              animationDelay: `${ring * 0.5}s`,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>

      {/* Floating Metrics Badges */}
      <div className="absolute top-24 right-1/3 hidden lg:block animate-float bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-orange-500/20">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-lime-400 rounded-full animate-pulse"></div>
          <span className="text-white text-sm font-medium">2,500+ FTEs</span>
        </div>
      </div>

      <div className="absolute bottom-1/3 left-1/4 hidden lg:block animate-float bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-cyan-500/20" style={{animationDelay: "0.7s"}}>
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          <span className="text-white text-sm font-medium">15 Years Experience</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto lg:max-w-3xl lg:mr-auto lg:ml-8 lg:text-left">
        {/* TalentAmp Logo Sound Wave */}
        <div className="flex items-center justify-center lg:justify-start mb-8">
          <div className="flex items-end space-x-1 mr-4">
            {soundWaveBars.slice(0, 5).map((bar, index) => (
              <div
                key={index}
                className={`w-1 bg-orange-500 rounded-t animate-pulse ${bar.height.replace('h-', 'h-')}`}
                style={{
                  animationDelay: bar.delay,
                  animationDuration: "1.5s",
                }}
              />
            ))}
          </div>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-orange-400 mr-2" />
            <span className="text-orange-300 text-sm font-medium">Workforce Innovation Company</span>
          </div>
        </div>

        {/* Main Headline with Sound Wave Animation */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block flex items-center justify-center lg:justify-start">
            Amplifying
            <div className="flex items-end ml-4 space-x-0.5">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-8 bg-gradient-to-t from-orange-500 to-orange-300 rounded-t animate-pulse"
                  style={{
                    animationDelay: `${i * 200}ms`,
                    animationDuration: "1s",
                  }}
                />
              ))}
            </div>
          </span>
          <span className="block text-gradient bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
            IT Talent
          </span>
          <span className="block">at Scale</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
          Transforming how organizations source, develop, and deploy tech talent through 
          <span className="text-orange-400 font-semibold"> AI-powered staffing solutions</span> and 
          global delivery excellence.
        </p>

        {/* Key Differentiators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto lg:mx-0">
          {[
            { icon: "🌍", text: "5 Global Locations", subtext: "US, Philippines, Mexico, Guatemala, Colombia" },
            { icon: "🏆", text: "MBE Certified", subtext: "Diverse supplier certifications" },
          ].map((item, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="text-white font-medium text-sm">{item.text}</div>
                  <div className="text-gray-400 text-xs">{item.subtext}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
          <button className="group bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-orange hover:scale-105 flex items-center space-x-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative">Find Talent</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200 relative" />
          </button>
          
          <button className="group bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all duration-300 backdrop-blur-sm hover:border-white/40">
            Explore Services
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm mb-6">Trusted by 50+ enterprise clients worldwide</p>
          <div className="flex justify-center lg:justify-start items-center space-x-8 opacity-60">
            {/* Industry badges */}
            {["Technology", "Healthcare", "FinTech", "SaaS"].map((industry, index) => (
              <div key={index} className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
                <span className="text-white/60 text-xs font-medium">{industry}</span>
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
