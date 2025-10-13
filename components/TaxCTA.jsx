export default function TaxCTA() {
  return (
    <section className="py-20 md:py-32 relative text-white px-6 sm:px-10 md:px-16 lg:px-24">
      {/* Main CTA Card */}
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#5F82FF] to-[#4A6FE8] p-12 md:p-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
          </div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-1">
              Ready to Transform Your Tax Experience?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-2">
              Join thousands of satisfied clients who trust us with their tax needs. Get started today with a free consultation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="px-8 py-4 bg-white text-[#5F82FF] rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
                Schedule Free Consultation
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white rounded-lg font-bold text-lg hover:bg-white/10 transition-all">
                Call: +91 98765 43210
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Govt. Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Expert Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
        {/* Email Card */}
        <div className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#5F82FF]/50 transition-all hover:shadow-xl hover:shadow-[#5F82FF]/20">
          <div className="w-12 h-12 bg-[#5F82FF]/20 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">📧</span>
          </div>
          <h4 className="text-lg font-bold mb-2 font-3">Email Us</h4>
          <p className="text-gray-400 text-sm mb-3 font-4">Get response within 24 hours</p>
          <a href="mailto:contact@taxpro.com" className="text-[#5F82FF] font-semibold text-sm hover:underline">
            contact@taxpro.com
          </a>
        </div>

        {/* Phone Card */}
        <div className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#5F82FF]/50 transition-all hover:shadow-xl hover:shadow-[#5F82FF]/20">
          <div className="w-12 h-12 bg-[#5F82FF]/20 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">📞</span>
          </div>
          <h4 className="text-lg font-bold mb-2 font-3">Call Us</h4>
          <p className="text-gray-400 text-sm mb-3 font-4">Mon-Sat, 9 AM - 7 PM</p>
          <a href="tel:+919876543210" className="text-[#5F82FF] font-semibold text-sm hover:underline">
            +91 98765 43210
          </a>
        </div>

        {/* Office Card */}
        <div className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#5F82FF]/50 transition-all hover:shadow-xl hover:shadow-[#5F82FF]/20 sm:col-span-2 lg:col-span-1">
          <div className="w-12 h-12 bg-[#5F82FF]/20 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">📍</span>
          </div>
          <h4 className="text-lg font-bold mb-2 font-3">Visit Office</h4>
          <p className="text-gray-400 text-sm mb-3 font-4">Schedule an appointment</p>
          <p className="text-[#5F82FF] font-semibold text-sm">
            Delhi, Mumbai, Bangalore
          </p>
        </div>
      </div>
    </section>
  );
}
