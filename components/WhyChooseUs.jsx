export default function WhyChooseUs() {
  const benefits = [
    {
      id: 1,
      icon: "🎯",
      title: "Expert Team",
      description: "Certified professionals with 15+ years of experience in taxation"
    },
    {
      id: 2,
      icon: "🔒",
      title: "100% Secure",
      description: "Bank-level encryption and secure data handling for your peace of mind"
    },
    {
      id: 3,
      icon: "⚡",
      title: "Fast Processing",
      description: "Quick turnaround time with dedicated support throughout the process"
    },
    {
      id: 4,
      icon: "💰",
      title: "Maximum Savings",
      description: "Strategic planning to optimize your tax savings legally"
    },
    {
      id: 5,
      icon: "📱",
      title: "24/7 Support",
      description: "Round-the-clock assistance via phone, email, and chat"
    },
    {
      id: 6,
      icon: "✅",
      title: "Compliance Guaranteed",
      description: "Stay 100% compliant with latest tax regulations and laws"
    }
  ];

  return (
    <section className="py-20 md:py-32 relative text-white px-6 sm:px-10 md:px-16 lg:px-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block px-4 py-2 bg-[#5F82FF]/10 border border-[#5F82FF]/30 rounded-full mb-4">
          <span className="text-[#5F82FF] font-semibold text-sm font-2">WHY CHOOSE US</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-1">
          Why Businesses <span className="text-[#5F82FF]">Trust Us</span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed font-2">
          We combine expertise, technology, and personalized service to deliver exceptional tax solutions that drive your success.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-16">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="group relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#5F82FF]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#5F82FF]/20"
          >
            {/* Icon */}
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {benefit.icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#5F82FF] transition-colors font-3">
              {benefit.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed font-4">
              {benefit.description}
            </p>

            {/* Decorative glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#5F82FF]/0 to-[#5F82FF]/0 group-hover:from-[#5F82FF]/5 group-hover:to-transparent rounded-2xl transition-all duration-300 -z-10"></div>
          </div>
        ))}
      </div>

      {/* Process Timeline */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 font-1">
          Our Simple <span className="text-[#5F82FF]">3-Step Process</span>
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#5F82FF] to-[#4A6FE8] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#5F82FF]/30">
                <span className="text-3xl font-bold font-1">1</span>
              </div>
              <h4 className="text-xl font-bold mb-2 font-3">Book Consultation</h4>
              <p className="text-gray-400 text-sm font-4">Schedule a free consultation with our tax experts</p>
            </div>
            {/* Connector Line */}
            <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#5F82FF] to-transparent"></div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#5F82FF] to-[#4A6FE8] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#5F82FF]/30">
                <span className="text-3xl font-bold font-1">2</span>
              </div>
              <h4 className="text-xl font-bold mb-2 font-3">Submit Documents</h4>
              <p className="text-gray-400 text-sm font-4">Share your documents securely through our platform</p>
            </div>
            {/* Connector Line */}
            <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#5F82FF] to-transparent"></div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#5F82FF] to-[#4A6FE8] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#5F82FF]/30">
                <span className="text-3xl font-bold font-1">3</span>
              </div>
              <h4 className="text-xl font-bold mb-2 font-3">Get It Done</h4>
              <p className="text-gray-400 text-sm font-4">We handle everything while you focus on your business</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
