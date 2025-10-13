export default function TaxCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main CTA */}
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Don't Let Tax Season
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Stress You Out
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
            Get professional tax assistance and maximize your refunds. 
            Our experts handle everything so you don't have to.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-300 mb-2">50K+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-300 mb-2">₹100Cr+</div>
              <div className="text-blue-100">Refunds Secured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-300 mb-2">99.9%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-300 mb-2">24/7</div>
              <div className="text-blue-100">Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Start Tax Filing Now
            </button>
            <button className="px-10 py-5 border-2 border-white/30 text-white rounded-xl font-bold text-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Trusted by Leading Companies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-80">
              <div className="text-center">
                <div className="text-2xl font-bold">TCS</div>
                <div className="text-sm text-blue-200">Technology</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Infosys</div>
                <div className="text-sm text-blue-200">Consulting</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Wipro</div>
                <div className="text-sm text-blue-200">IT Services</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">HCL</div>
                <div className="text-sm text-blue-200">Technology</div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                📞
              </div>
              <h4 className="font-bold text-lg mb-2">Call Us</h4>
              <p className="text-blue-100">+91 98765 43210</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                📧
              </div>
              <h4 className="font-bold text-lg mb-2">Email Us</h4>
              <p className="text-blue-100">support@taxservice.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                💬
              </div>
              <h4 className="font-bold text-lg mb-2">Live Chat</h4>
              <p className="text-blue-100">Available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}