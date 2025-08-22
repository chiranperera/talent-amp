import { 
  Users, 
  UserCheck, 
  FileText, 
  Settings, 
  Globe, 
  GraduationCap,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Contract & Contract-to-Hire",
      description: "Flexible staffing solutions that scale with your project needs and business demands.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: UserCheck,
      title: "Direct Hire Services",
      description: "Permanent placement solutions to build your core team with top-tier IT professionals.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: FileText,
      title: "Statement of Work (SOW)",
      description: "Project-based engagements with defined deliverables and timeline commitments.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Settings,
      title: "Managed Services",
      description: "End-to-end management of your technology projects and ongoing operations.",
      color: "from-lime-500 to-lime-600",
    },
    {
      icon: Globe,
      title: "Employer of Record (EOR)",
      description: "Global employment solutions enabling you to hire talent anywhere, compliantly.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: GraduationCap,
      title: "Hire Train Deploy",
      description: "Custom training programs to develop and deploy skilled professionals for your needs.",
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
            From contract staffing to permanent placements, we provide the full spectrum 
            of workforce solutions to accelerate your business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-orange-200 card-hover hover:shadow-orange/10"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center text-orange-500 font-medium group-hover:text-orange-600 transition-colors duration-200">
                <span className="mr-2">Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
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
            Every organization is unique. Let's discuss how we can tailor our services 
            to meet your specific workforce challenges.
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
