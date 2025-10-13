import incomeTaxServices from "@/data/incomeTaxServices.json";

export default function IncomeTaxServices() {
  return (
    <section className="py-20 md:py-32 relative text-white px-6 sm:px-10 md:px-16 lg:px-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#5F82FF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#5F82FF]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block px-4 py-2 bg-[#5F82FF]/10 border border-[#5F82FF]/30 rounded-full mb-4">
          <span className="text-[#5F82FF] font-semibold text-sm font-2">INCOME TAX SERVICES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-1">
          Expert <span className="text-[#5F82FF]">Income Tax</span> Management
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed font-2">
          Maximize your tax savings with our comprehensive income tax services, tailored for individuals and businesses.
        </p>
      </div>

      {/* Services Cards - Two Column Layout */}
      <div className="relative z-10 grid gap-8 md:grid-cols-2 max-w-6xl mx-auto mb-12">
        {incomeTaxServices.map((service, index) => (
          <div
            key={service.id}
            className="group relative bg-gradient-to-br from-[#0A1F27] to-[#091c23] rounded-3xl p-8 md:p-10 border border-white/10 hover:border-[#5F82FF]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#5F82FF]/20 overflow-hidden"
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#5F82FF]/0 to-[#5F82FF]/0 group-hover:from-[#5F82FF]/5 group-hover:to-[#4A6FE8]/5 transition-all duration-500"></div>

            {/* Number indicator */}
            <div className="absolute top-6 right-6 text-8xl font-bold text-white/5 group-hover:text-[#5F82FF]/10 transition-all duration-500 font-1">
              {String(index + 1).padStart(2, '0')}
            </div>

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-[#5F82FF] to-[#4A6FE8] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-[#5F82FF]/30">
                <span className="text-4xl">{service.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white group-hover:text-[#5F82FF] transition-colors font-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-base leading-relaxed mb-6 font-4">
                {service.description}
              </p>

              {/* Key Features */}
              <div className="space-y-3 mb-6">
                {service.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#5F82FF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#5F82FF]"></div>
                    </div>
                    <span className="text-gray-300 text-sm font-4">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Price Range */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div>
                  <p className="text-xs text-gray-500 mb-1 font-2">Starting from</p>
                  <p className="text-xl font-bold text-[#5F82FF] font-1">{service.priceRange}</p>
                </div>
                <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg font-semibold text-sm hover:bg-[#5F82FF] hover:border-[#5F82FF] transition-all group-hover:shadow-lg">
                  Get Started →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Services List */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-[#5F82FF]/10 to-transparent rounded-2xl p-8 border border-[#5F82FF]/20">
          <h3 className="text-2xl font-bold text-white mb-6 font-3">Additional Services We Offer</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Tax Refund Claims",
              "TDS Returns",
              "Tax Audit Support",
              "Appeal & Litigation",
              "Tax Notice Response",
              "Investment Planning"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-[#5F82FF]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#5F82FF]">✓</span>
                </div>
                <span className="font-4">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
