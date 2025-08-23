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
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCardClick = (index: number) => {
    if (isMobile) {
      setFlippedCards((prev) => {
        const newSet = new Set();
        if (!prev.has(index)) {
          // Only add the clicked card, removing all others
          newSet.add(index);
        }
        // If clicking the same card that's already flipped, it will close
        return newSet;
      });
    }
  };

  const services = [
    {
      icon: Users,
      title: "Contract & Contract-to-Hire",
      description:
        "Flexible staffing solutions that scale with your project needs and business demands.",
      expandedDescription:
        "Our flexible staffing solutions provide the agility you need to scale teams up or down based on project requirements. We offer both short-term and long-term contract options, with the possibility to convert to permanent hire.",
      benefits: [
        "Rapid team scaling",
        "Reduced hiring risks",
        "Cost-effective solutions",
        "Trial-to-hire options",
      ],
      image: "/images/contract-contract-to-hire.jpg",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: UserCheck,
      title: "Direct Hire Services",
      description:
        "Permanent placement solutions to build your core team with top-tier IT professionals.",
      expandedDescription:
        "Build your dream team with our comprehensive direct hire services. We specialize in identifying, vetting, and placing top-tier IT professionals who align with your company culture and technical requirements.",
      benefits: [
        "Executive search",
        "Cultural fit assessment",
        "Comprehensive screening",
        "90-day guarantee",
      ],
      image: "/images/direct-hire-services.jpg",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: FileText,
      title: "Statement of Work (SOW)",
      description:
        "Project-based engagements with defined deliverables and timeline commitments.",
      expandedDescription:
        "Deliver complex projects with confidence through our SOW-based engagements. We take ownership of project outcomes with defined deliverables, timelines, and success metrics.",
      benefits: [
        "Fixed project pricing",
        "Defined deliverables",
        "Timeline guarantees",
        "Risk mitigation",
      ],
      image: "/images/statement-of-work.jpg",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Settings,
      title: "Managed Services",
      description:
        "End-to-end management of your technology projects and ongoing operations.",
      expandedDescription:
        "Let us handle the complexities of your technology operations while you focus on core business activities. Our managed services include infrastructure management, application support, and strategic technology consulting.",
      benefits: [
        "24/7 support coverage",
        "Proactive monitoring",
        "Cost optimization",
        "Strategic planning",
      ],
      image: "/images/managed-services.jpg",
      color: "from-lime-500 to-lime-600",
    },
    {
      icon: Globe,
      title: "Employer of Record (EOR)",
      description:
        "Global employment solutions enabling you to hire talent anywhere, compliantly.",
      expandedDescription:
        "Expand your talent pool globally without the complexity of international employment law. Our EOR services handle compliance, payroll, benefits, and local regulations across multiple countries.",
      benefits: [
        "Global compliance",
        "Local expertise",
        "Payroll management",
        "Benefits administration",
      ],
      image: "/images/employer-of-record.jpg",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: GraduationCap,
      title: "Hire Train Deploy",
      description:
        "Custom training programs to develop and deploy skilled professionals for your needs.",
      expandedDescription:
        "Bridge the skills gap with our comprehensive hire-train-deploy programs. We identify promising candidates, provide intensive training tailored to your tech stack, and deploy them directly to your team.",
      benefits: [
        "Custom training curricula",
        "Guaranteed skill levels",
        "Reduced time-to-productivity",
        "Ongoing mentorship",
      ],
      image: "/images/hire-train-deploy.jpg",
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
              className="group h-80 cursor-pointer"
              style={{ perspective: "1000px" }}
              onClick={() => handleCardClick(index)}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  const flipCard = e.currentTarget.querySelector(".flip-card");
                  if (flipCard) {
                    flipCard.style.transform = "rotateX(180deg)";
                  }
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  const flipCard = e.currentTarget.querySelector(".flip-card");
                  if (flipCard) {
                    flipCard.style.transform = "rotateX(0deg)";
                  }
                }
              }}
            >
              <div
                className="flip-card relative w-full h-full transition-transform duration-500 ease-in-out"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center center",
                  transform:
                    isMobile && flippedCards.has(index)
                      ? "rotateX(180deg)"
                      : "rotateX(0deg)",
                }}
              >
                {/* Front of Card - Image */}
                <div
                  className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

                  {/* Top-left Icon with orange background and white icon */}
                  <div className="absolute top-6 left-6">
                    <div className="w-20 h-20 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg">
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Title positioned below the icon */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Back of Card - Orange Background */}
                <div
                  className="absolute inset-0 w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 shadow-xl flex flex-col justify-center items-center"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateX(180deg)",
                  }}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-orange-100 mb-8 leading-relaxed text-center max-w-xs">
                    {service.description}
                  </p>

                  {/* Action */}
                  <button className="bg-white text-orange-600 hover:bg-orange-50 font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg">
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
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
    </section>
  );
};

export default Services;
