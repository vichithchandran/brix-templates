import gstServices from "@/data/gstServices.json";

export default function GSTServices() {
  return (
    <section className="py-20 md:py-32 relative text-white px-6 sm:px-10 md:px-16 lg:px-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block px-4 py-2 bg-[#5F82FF]/10 border border-[#5F82FF]/30 rounded-full mb-4">
          <span className="text-[#5F82FF] font-semibold text-sm font-2">GST SERVICES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-1">
          Comprehensive <span className="text-[#5F82FF]">GST Solutions</span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed font-2">
          From registration to filing, we handle all your GST needs with precision and expertise, ensuring full compliance and optimal tax benefits.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {gstServices.map((service) => (
          <div
            key={service.id}
            className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#5F82FF]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#5F82FF]/20 hover:-translate-y-2"
          >
            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-[#5F82FF] to-[#4A6FE8] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">{service.icon}</span>
            </div>

            {/* Content */}
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-[#5F82FF] transition-colors font-3">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 font-4">
              {service.description}
            </p>

            {/* Features List */}
            <ul className="space-y-2 mb-6">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-[#5F82FF] mt-1">✓</span>
                  <span className="font-4">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Learn More Link */}
            <button className="text-[#5F82FF] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all font-2">
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#5F82FF]/5 rounded-full blur-3xl -z-10 group-hover:bg-[#5F82FF]/10 transition-all"></div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <p className="text-gray-400 mb-6 font-2">Need help with GST compliance?</p>
        <button className="px-8 py-4 bg-gradient-to-r from-[#5F82FF] to-[#4A6FE8] rounded-lg font-semibold hover:shadow-xl hover:shadow-[#5F82FF]/50 transition-all transform hover:scale-105">
          Get Expert GST Consultation
        </button>
      </div>
    </section>
  );
}
