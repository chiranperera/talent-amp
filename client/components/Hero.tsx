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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 sm:py-0">
      {/* Luxury Sound Wave Background */}
      <div className="absolute inset-0 z-0">
        {/* Main luxury background pattern */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F7773ae50cbf346fd83f4010373e2769f%2Fb75728015aa440659af0a587c25294c1?format=webp&width=800')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * -0.05}px) scale(1.1)`,
          }}
        />

        {/* Luxury gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-600/20" />

        {/* Modern geometric pattern overlay */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-15" viewBox="0 0 1000 1000">
            <defs>
              <pattern
                id="luxury-pattern"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="2"
                  fill="url(#luxury-gradient)"
                  className="animate-pulse"
                >
                  <animate
                    attributeName="r"
                    values="1;3;1"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx="25"
                  cy="25"
                  r="1"
                  fill="url(#luxury-gradient)"
                  className="animate-pulse"
                >
                  <animate
                    attributeName="r"
                    values="0.5;2;0.5"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx="75"
                  cy="75"
                  r="1.5"
                  fill="url(#luxury-gradient)"
                  className="animate-pulse"
                >
                  <animate
                    attributeName="r"
                    values="0.8;2.5;0.8"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                </circle>
              </pattern>
              <linearGradient
                id="luxury-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FF4500" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#FF8C00" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FFD700" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#luxury-pattern)" />
          </svg>
        </div>

        {/* Luxury mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-orange-400/40 to-transparent rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-radial from-amber-400/30 to-transparent rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-radial from-orange-300/20 to-transparent rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "4s" }}
          />
        </div>
      </div>

      {/* TalentAmp Unique Shape Design - Right Side */}
      <div className="absolute right-0 top-0 h-full w-1/2 hidden xl:block">
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

      {/* Premium Glowing Metrics Badges - Above luxury background */}
      <div
        className="absolute top-20 sm:top-32 right-1/2 sm:right-2/3 hidden xl:block bg-white/15 backdrop-blur-lg rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-orange-500/50 shadow-2xl z-30 hover:bg-white/20 transition-all duration-300 hover:shadow-orange-glow animate-glow"
        style={{
          marginRight: "-130px",
          boxShadow:
            "0 0 30px rgba(255, 69, 0, 0.4), 0 0 60px rgba(255, 69, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-lime-400 rounded-full animate-pulse shadow-lg"></div>
          <span className="text-white text-sm font-semibold">2,500+ FTEs</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
      </div>

      <div
        className="absolute bottom-1/4 left-4 sm:left-1/6 hidden xl:block bg-white/15 backdrop-blur-lg rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-cyan-500/50 shadow-2xl z-30 hover:bg-white/20 transition-all duration-300 hover:shadow-cyan-glow animate-glow"
        style={{
          margin: "0 -77px -126px 93px",
          boxShadow:
            "0 0 30px rgba(6, 182, 212, 0.4), 0 0 60px rgba(6, 182, 212, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg"></div>
          <span className="text-white text-sm font-semibold">
            15 Years Experience
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
      </div>

      {/* Additional premium glowing badge for visual balance */}
      <div
        className="absolute top-2/3 right-1/3 sm:right-1/2 hidden xl:block bg-white/15 backdrop-blur-lg rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-purple-500/50 shadow-2xl z-30 hover:bg-white/20 transition-all duration-300 hover:shadow-purple-glow animate-glow"
        style={{
          margin: "-173px -205px 0 0",
          boxShadow:
            "0 0 30px rgba(168, 85, 247, 0.4), 0 0 60px rgba(168, 85, 247, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-lg"></div>
          <span className="text-white text-sm font-semibold">Global Reach</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-40 text-center px-6 sm:px-8 lg:px-8 max-w-5xl mx-auto xl:max-w-2xl xl:mr-auto xl:ml-20 lg:text-left w-full">
        {/* TalentAmp Logo Sound Wave */}
        <div className="flex items-center justify-center lg:justify-start mb-6 sm:mb-8">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-orange-400 mr-2" />
            <span className="text-orange-300 text-xs sm:text-sm font-medium">
              Workforce Innovation
            </span>
          </div>
        </div>

        {/* Main Headline with Sound Wave Animation */}
        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-[1.05] sm:leading-tight tracking-tight">
          <span className="block">
            <span className="inline-flex items-end justify-center lg:justify-start">
              <span>Amplifying</span>
              <div className="flex items-end ml-3 sm:ml-4 space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 sm:w-2 h-6 sm:h-6 md:h-8 bg-gradient-to-t from-orange-500 to-orange-300 rounded-t animate-pulse"
                    style={{
                      animationDelay: `${i * 200}ms`,
                      animationDuration: "1s",
                    }}
                  />
                ))}
              </div>
            </span>
          </span>
          <span className="block text-gradient bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent mt-1 font-black">
            IT Talent
          </span>
          <span className="block mt-1 font-extrabold">at Scale</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          AI-powered staffing solutions for global tech talent deployment.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-stretch sm:items-center w-full sm:w-auto max-w-md mx-auto lg:mx-0">
          <button className="group bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-orange hover:scale-105 flex items-center justify-center space-x-2 relative overflow-hidden w-full sm:w-auto text-base sm:text-lg">
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative">Find Talent</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 relative" />
          </button>

          <button className="group bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all duration-300 backdrop-blur-sm hover:border-white/40 w-full sm:w-auto text-base sm:text-lg">
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
