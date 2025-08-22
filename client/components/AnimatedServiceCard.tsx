import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ArrowRight, LucideIcon } from "lucide-react";

interface AnimatedServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  index: number;
}

const AnimatedServiceCard = ({ icon: Icon, title, description, color, index }: AnimatedServiceCardProps) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-2xl p-8 border border-gray-200 hover:border-orange-200 card-hover hover:shadow-orange/10 transform transition-all duration-700 ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-8 opacity-0'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Icon */}
      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        <Icon className="w-8 h-8 text-white relative z-10" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-200">
        {title}
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Learn More Link */}
      <div className="flex items-center text-orange-500 font-medium group-hover:text-orange-600 transition-colors duration-200 cursor-pointer">
        <span className="mr-2">Learn More</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
      </div>
    </div>
  );
};

export default AnimatedServiceCard;
