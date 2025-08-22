import { useEffect, useRef, useState } from "react";
import {
  Building2,
  Users,
  TrendingUp,
  DollarSign,
  Target,
  Globe,
} from "lucide-react";

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
      icon: Building2,
      number: 50,
      suffix: "+",
      label: "Enterprise Clients",
      description: "Leading organizations trust us",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Users,
      number: 600,
      suffix: "+",
      label: "Billable Consultants",
      description: "Active professionals worldwide",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Users,
      number: 2500,
      suffix: "+",
      label: "Total FTEs",
      description: "Full-time employees globally",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: TrendingUp,
      number: 95,
      suffix: "%",
      label: "Retention Rate",
      description: "Consultant satisfaction score",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: DollarSign,
      number: 75,
      suffix: "M+",
      prefix: "$",
      label: "Annual Revenue",
      description: "Consistent growth trajectory",
      color: "from-lime-500 to-lime-600",
    },
    {
      icon: Target,
      number: 1000,
      suffix: "+",
      label: "Annual Placements",
      description: "Successful matches per year",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Users,
      number: 100,
      suffix: "+",
      label: "Recruiters",
      description: "Expert recruiters across regions",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Globe,
      number: 5,
      suffix: "",
      label: "Global Locations",
      description: "US, Philippines, Mexico, Guatemala, Colombia",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      number: 15,
      suffix: "",
      label: "Years Experience",
      description: "Proven track record in SaaS",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern with Sound Waves */}
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

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-orange-500/30 card-hover hover:bg-white/10 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </div>

              {/* Number */}
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                <Counter
                  end={stat.number}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  duration={2000 + index * 200}
                />
              </div>

              {/* Label */}
              <h3 className="text-xl font-semibold text-orange-400 mb-3">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
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
    </section>
  );
};

export default Stats;
