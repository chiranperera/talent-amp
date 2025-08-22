import { ArrowRight, Calendar, Phone, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="container-lg relative z-10">
        <div className="text-center">
          {/* Main CTA Content */}
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Amplify
            <br />
            <span className="text-orange-100">Your Talent Strategy?</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-orange-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join 50+ leading enterprises who trust TalentAmp to scale their IT teams 
            with world-class talent. Let's discuss your workforce challenges today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group bg-white hover:bg-gray-50 text-orange-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center space-x-3">
              <Calendar className="w-5 h-5" />
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button className="group bg-orange-700/50 hover:bg-orange-700/70 text-white font-semibold px-8 py-4 rounded-xl border border-orange-400/50 transition-all duration-300 backdrop-blur-sm hover:border-orange-300 flex items-center space-x-3">
              <Phone className="w-5 h-5" />
              <span>Call Now: (555) 123-4567</span>
            </button>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Book a Meeting</h3>
              <p className="text-orange-100 text-sm mb-4">
                Schedule a personalized consultation to discuss your talent needs
              </p>
              <button className="text-white font-medium hover:text-orange-200 transition-colors duration-200 flex items-center space-x-1 mx-auto">
                <span>Schedule Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Direct</h3>
              <p className="text-orange-100 text-sm mb-4">
                Speak with our talent experts immediately for urgent needs
              </p>
              <button className="text-white font-medium hover:text-orange-200 transition-colors duration-200 flex items-center space-x-1 mx-auto">
                <span>Call Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Start Chat</h3>
              <p className="text-orange-100 text-sm mb-4">
                Get instant answers to your questions via live chat
              </p>
              <button className="text-white font-medium hover:text-orange-200 transition-colors duration-200 flex items-center space-x-1 mx-auto">
                <span>Chat Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Trust Message */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-orange-100 text-lg">
              <span className="font-semibold">Trusted by Fortune 500 companies</span> • 
              <span className="mx-2">95% client retention rate</span> • 
              <span className="font-semibold">Available 24/7</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
