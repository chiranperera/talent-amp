import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const Counter = ({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
}: CounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 },
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={countRef}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const stats = [
    {
      number: 50,
      suffix: "+",
      label: "Enterprise Clients",
    },
    {
      number: 600,
      suffix: "+",
      label: "Billable Consultants",
    },
    {
      number: 2500,
      suffix: "+",
      label: "Total FTEs",
    },
    {
      number: 95,
      suffix: "%",
      label: "Retention Rate",
    },
    {
      number: 75,
      suffix: "M+",
      prefix: "$",
      label: "Annual Revenue",
    },
    {
      number: 1000,
      suffix: "+",
      label: "Annual Placements",
    },
    {
      number: 100,
      suffix: "+",
      label: "Recruiters",
    },
    {
      number: 5,
      suffix: "",
      label: "Global Locations",
    },
    {
      number: 15,
      suffix: "",
      label: "Years Experience",
    },
    {
      number: 200,
      suffix: "+",
      label: "Technologies",
    },
    {
      number: 85,
      suffix: "%",
      label: "Client Satisfaction",
    },
    {
      number: 30,
      suffix: "+",
      label: "Industry Verticals",
    },
  ];

  // Split stats into two rows
  const firstRowStats = stats.slice(0, 6);
  const secondRowStats = stats.slice(6);

  const StatsCard = ({ stat, index }: { stat: typeof stats[0]; index: number }) => (
    <div
      className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-center items-center"
      style={{ width: '300px', height: '120px' }}
    >
      {/* Number */}
      <div className="text-3xl font-bold text-white mb-2">
        <Counter
          end={stat.number}
          suffix={stat.suffix}
          prefix={stat.prefix}
          duration={2000 + index * 200}
        />
      </div>

      {/* Label */}
      <h3 className="text-sm font-semibold text-orange-400 text-center px-4">
        {stat.label}
      </h3>
    </div>
  );

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255, 69, 0, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(124, 58, 237, 0.3) 0%, transparent 50%)
            `,
          }}
        />

        {/* Sound Wave Visualization */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div className="flex items-end space-x-3">
            {[...Array(30)].map((_, i) => {
              const heights = [20, 40, 30, 60, 25, 50, 35, 70, 20, 45];
              return (
                <div
                  key={i}
                  className="w-2 bg-orange-500 rounded-t animate-pulse"
                  style={{
                    height: `${heights[i % heights.length]}px`,
                    animationDelay: `${i * 150}ms`,
                    animationDuration: "3s",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="container-lg relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Proven Results
            <span className="text-gradient bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              {" "}
              by the Numbers
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our track record speaks for itself. These metrics represent years of
            excellence in delivering world-class talent solutions.
          </p>
        </div>

        {/* Marquee Stats Rows */}
        <div className="space-y-8 mb-16">
          {/* First Row - Moving Right */}
          <div className="overflow-hidden">
            <div className="flex space-x-6 animate-marquee-right">
              {/* Duplicate content for seamless loop */}
              {[...firstRowStats, ...firstRowStats].map((stat, index) => (
                <StatsCard key={`row1-${index}`} stat={stat} index={index} />
              ))}
            </div>
          </div>

          {/* Second Row - Moving Left */}
          <div className="overflow-hidden">
            <div className="flex space-x-6 animate-marquee-left">
              {/* Duplicate content for seamless loop */}
              {[...secondRowStats, ...secondRowStats].map((stat, index) => (
                <StatsCard key={`row2-${index}`} stat={stat} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results with our
            proven talent solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary hover:scale-105 transform transition-all duration-200">
              Start Your Journey
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-3 rounded-lg border border-white/20 transition-all duration-200 backdrop-blur-sm hover:border-white/40">
              View Case Studies
            </button>
          </div>
        </div>
      </div>

      {/* CSS for Marquee Animation */}
      <style jsx>{`
        @keyframes marquee-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }

        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }

        /* Pause animation on hover */
        .animate-marquee-right:hover,
        .animate-marquee-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Stats;
