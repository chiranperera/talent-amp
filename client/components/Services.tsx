import { useState, useEffect } from "react";
import {
  Users,
  UserCheck,
  FileText,
  Settings,
  Globe,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Target,
  Zap,
} from "lucide-react";

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCardClick = (index: number) => {
    if (isMobile) {
      setFlippedCards(prev => {
        const newSet = new Set(prev);
        if (newSet.has(index)) {
          newSet.delete(index);
        } else {
          newSet.add(index);
        }
        return newSet;
      });
    }
  };

  const services = [
    {
      icon: Users,
      title: "Contract & Contract-to-Hire",
      description: "Flexible staffing solutions that scale with your project needs and business demands.",
      expandedDescription: "Our flexible staffing solutions provide the agility you need to scale teams up or down based on project requirements. We offer both short-term and long-term contract options, with the possibility to convert to permanent hire.",
      benefits: ["Rapid team scaling", "Reduced hiring risks", "Cost-effective solutions", "Trial-to-hire options"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=faces",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: UserCheck,
      title: "Direct Hire Services",
      description: "Permanent placement solutions to build your core team with top-tier IT professionals.",
      expandedDescription: "Build your dream team with our comprehensive direct hire services. We specialize in identifying, vetting, and placing top-tier IT professionals who align with your company culture and technical requirements.",
      benefits: ["Executive search", "Cultural fit assessment", "Comprehensive screening", "90-day guarantee"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=faces",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: FileText,
      title: "Statement of Work (SOW)",
      description: "Project-based engagements with defined deliverables and timeline commitments.",
      expandedDescription: "Deliver complex projects with confidence through our SOW-based engagements. We take ownership of project outcomes with defined deliverables, timelines, and success metrics.",
      benefits: ["Fixed project pricing", "Defined deliverables", "Timeline guarantees", "Risk mitigation"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=center",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Settings,
      title: "Managed Services",
      description: "End-to-end management of your technology projects and ongoing operations.",
      expandedDescription: "Let us handle the complexities of your technology operations while you focus on core business activities. Our managed services include infrastructure management, application support, and strategic technology consulting.",
      benefits: ["24/7 support coverage", "Proactive monitoring", "Cost optimization", "Strategic planning"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
      color: "from-lime-500 to-lime-600",
    },
    {
      icon: Globe,
      title: "Employer of Record (EOR)",
      description: "Global employment solutions enabling you to hire talent anywhere, compliantly.",
      expandedDescription: "Expand your talent pool globally without the complexity of international employment law. Our EOR services handle compliance, payroll, benefits, and local regulations across multiple countries.",
      benefits: ["Global compliance", "Local expertise", "Payroll management", "Benefits administration"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: GraduationCap,
      title: "Hire Train Deploy",
      description: "Custom training programs to develop and deploy skilled professionals for your needs.",
      expandedDescription: "Bridge the skills gap with our comprehensive hire-train-deploy programs. We identify promising candidates, provide intensive training tailored to your tech stack, and deploy them directly to your team.",
      benefits: ["Custom training curricula", "Guaranteed skill levels", "Reduced time-to-productivity", "Ongoing mentorship"],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&crop=faces",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-lg">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive
            <span className="text-gradient"> Talent Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From contract staffing to permanent placements, we provide the full
            spectrum of workforce solutions to accelerate your business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group perspective-1000 h-80"
              onClick={() => handleCardClick(index)}
            >
              <div 
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer
                  ${!isMobile ? 'group-hover:rotate-y-180' : ''} 
                  ${isMobile && flippedCards.has(index) ? 'rotate-y-180' : ''}`}
              >
                {/* Front of Card - Image */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mr-3`}>
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                    <div className="flex items-center text-orange-300 text-sm font-medium">
                      <span className="mr-2">{isMobile ? 'Tap' : 'Hover'} for Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                {/* Back of Card - Content */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white rounded-2xl p-8 border border-gray-200 shadow-xl">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-orange-600 font-medium text-sm mb-3 flex items-center">
                      <Target className="w-4 h-4 mr-2" />
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 text-sm">
                          <CheckCircle className="w-3 h-3 text-orange-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                      <span className="mr-2">Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-50 to-orange-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Every organization is unique. Let's discuss how we can tailor our
            services to meet your specific workforce challenges.
          </p>
          <button className="btn-primary hover:scale-105 transform transition-all duration-200">
            Discuss Your Needs
          </button>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Services;
