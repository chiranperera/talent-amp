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

      {/* TalentAmp Unique Shape Design - Right Side */}
      <div className="absolute right-0 top-0 h-full w-1/2 hidden lg:block">
        <div className="relative h-full w-full pr-8">
          {/* Main shape background */}
          <div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-full h-4/5 opacity-90"
            style={{
              backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F2ac9edddbe8247688029c8646e1a19ed%2F10826d1250214b29a44f5508c19c1963?format=webp&width=800')`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center right",
              transform: `translateY(${scrollY * -0.15}px) translateY(-50%)`,
            }}
          />

          {/* Masked talent imagery overlay */}
          <div
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5/6 h-3/5"
            style={{
              maskImage: `url('https://cdn.builder.io/api/v1/image/assets%2F2ac9edddbe8247688029c8646e1a19ed%2F10826d1250214b29a44f5508c19c1963?format=webp&width=800')`,
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center right",
              WebkitMaskImage: `url('https://cdn.builder.io/api/v1/image/assets%2F2ac9edddbe8247688029c8646e1a19ed%2F10826d1250214b29a44f5508c19c1963?format=webp&width=800')`,
              WebkitMaskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center right",
              background:
                "linear-gradient(135deg, rgba(255, 69, 0, 0.8) 0%, rgba(124, 58, 237, 0.6) 50%, rgba(6, 182, 212, 0.8) 100%)",
              transform: `translateY(${scrollY * -0.1}px) translateY(-50%)`,
            }}
          />

          {/* Gradient overlay for depth */}
          <div
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4/5 h-2/3 opacity-60"
            style={{
              maskImage: `url('https://cdn.builder.io/api/v1/image/assets%2F2ac9edddbe8247688029c8646e1a19ed%2F10826d1250214b29a44f5508c19c1963?format=webp&width=800')`,
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center right",
              WebkitMaskImage: `url('https://cdn.builder.io/api/v1/image/assets%2F2ac9edddbe8247688029c8646e1a19ed%2F10826d1250214b29a44f5508c19c1963?format=webp&width=800')`,
              WebkitMaskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center right",
              background:
                "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.1) 0%, rgba(255, 69, 0, 0.3) 40%, transparent 70%)",
              transform: `translateY(${scrollY * -0.05}px) translateY(-50%)`,
            }}
          />

          {/* Floating accent elements */}
          <div
            className="absolute top-1/4 right-1/4 w-4 h-4 bg-orange-400/60 rounded-full animate-pulse blur-sm"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-2/3 right-1/3 w-3 h-3 bg-cyan-400/40 rounded-full animate-pulse blur-sm"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/5 w-5 h-5 bg-purple-400/50 rounded-full animate-pulse blur-sm"
            style={{ animationDelay: "2s", animationDuration: "5s" }}
          ></div>
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

      {/* Floating Metrics Badges - Repositioned for new shape */}
      <div className="absolute top-32 right-2/3 hidden lg:block animate-float bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-orange-500/20 shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-lime-400 rounded-full animate-pulse"></div>
          <span className="text-white text-sm font-medium">2,500+ FTEs</span>
        </div>
      </div>

      <div
        className="absolute bottom-1/4 left-1/6 hidden lg:block animate-float bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-cyan-500/20 shadow-lg"
        style={{ animationDelay: "0.7s" }}
      >
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          <span className="text-white text-sm font-medium">
            15 Years Experience
          </span>
        </div>
      </div>

      {/* Additional floating badge for visual balance */}
      <div
        className="absolute top-2/3 right-1/2 hidden lg:block animate-float bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-purple-500/20 shadow-lg"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
          <span className="text-white text-sm font-medium">Global Reach</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto lg:max-w-2xl lg:mr-auto lg:ml-12 lg:text-left" style={{ margin: "0 auto 0 48px", padding: "184px 32px 0" }}>
        {/* TalentAmp Logo Sound Wave */}
        <div className="flex items-center justify-center lg:justify-start mb-8">
          <div className="flex items-end space-x-1 mr-4">
            {soundWaveBars.slice(0, 5).map((bar, index) => (
              <div
                key={index}
                className={`w-1 bg-orange-500 rounded-t animate-pulse ${bar.height.replace("h-", "h-")}`}
                style={{
                  animationDelay: bar.delay,
                  animationDuration: "1.5s",
                }}
              />
            ))}
          </div>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-orange-400 mr-2" />
            <span className="text-orange-300 text-sm font-medium">
              Workforce Innovation
            </span>
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
          AI-powered staffing solutions for global tech talent deployment.
        </p>

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
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
