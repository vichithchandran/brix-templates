import Image from "next/image";

export default function TaxHero() {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen text-white px-6 sm:px-10 md:px-16 lg:px-24 xl:px-[130px]"
      style={{
        backgroundImage: "url('/bitcoin-abstract 2.svg')",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[#091c23]"></div>

      {/* navbar */}
      <nav className="relative z-10 flex justify-between items-center px-4 sm:px-6 md:px-8 py-6">
        <div className="font-1 flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl md:text-[32px]">
          <Image src="/logo.svg" alt="BrixNow Logo" width={36} height={36} className="sm:w-10 sm:h-10" />
          TaxPro
        </div>

        <ul className="hidden md:flex gap-6 lg:gap-10 xl:gap-14 items-center font-2 text-sm lg:text-base">
          <li className="hover:text-[#5F82FF] hover:font-semibold cursor-pointer transition-all">Home</li>
          <li className="hover:text-[#5F82FF] hover:font-semibold cursor-pointer transition-all">GST Services</li>
          <li className="hover:text-[#5F82FF] hover:font-semibold cursor-pointer transition-all">Income Tax</li>
          <li className="hover:text-[#5F82FF] hover:font-semibold cursor-pointer transition-all">About</li>
          <li className="hover:text-[#5F82FF] hover:font-semibold cursor-pointer transition-all">Contact</li>
          <button className="ml-2 lg:ml-4 px-5 sm:px-6 py-2.5 bg-gradient-to-r from-[#5F82FF] to-[#4A6FE8] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#5F82FF]/50 transition-all">
            Get Consultation
          </button>
        </ul>

        <button className="md:hidden text-2xl">☰</button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[80vh] px-4 sm:px-6">
        <div className="max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-2">Trusted by 10,000+ Businesses</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold font-1 leading-tight mb-6 bg-gradient-to-r from-white via-blue-100 to-[#5F82FF] bg-clip-text text-transparent">
            Expert Tax Solutions for Your Business Growth
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-2">
            Comprehensive GST & Income Tax services designed to simplify compliance, maximize returns, and fuel your business success
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-[#5F82FF] to-[#4A6FE8] rounded-lg font-semibold text-base sm:text-lg hover:shadow-xl hover:shadow-[#5F82FF]/50 transition-all transform hover:scale-105">
              Schedule Free Consultation
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg font-semibold text-base sm:text-lg hover:bg-white/20 transition-all">
              View Our Services
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto pt-8 border-t border-white/10">
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#5F82FF] mb-2 font-1">10K+</h3>
              <p className="text-sm text-gray-400 font-2">Happy Clients</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#5F82FF] mb-2 font-1">₹500Cr+</h3>
              <p className="text-sm text-gray-400 font-2">Tax Savings</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#5F82FF] mb-2 font-1">15+</h3>
              <p className="text-sm text-gray-400 font-2">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#5F82FF] mb-2 font-1">98%</h3>
              <p className="text-sm text-gray-400 font-2">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
