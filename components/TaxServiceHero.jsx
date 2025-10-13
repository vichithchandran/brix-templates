import Image from "next/image";

export default function TaxServiceHero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-green-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>

      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30">
              <span className="text-blue-300 text-sm font-medium">🏆 #1 Tax Service Provider</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Professional
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                Tax Services
              </span>
              for GST & Income Tax
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Get expert assistance with GST registration, filing, and income tax returns. 
              Maximize your refunds with our certified tax professionals and 100% compliance guarantee.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started Now
              </button>
              <button className="px-8 py-4 border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Calculate Tax
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">50K+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">₹100Cr+</div>
                <div className="text-sm text-gray-400">Refunds Secured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">99.9%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Tax Calculator Preview */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Quick Tax Calculator</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Annual Income</label>
                  <input 
                    type="number" 
                    placeholder="₹5,00,000"
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Tax Regime</label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="new">New Tax Regime</option>
                    <option value="old">Old Tax Regime</option>
                  </select>
                </div>

                <div className="bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg p-4 border border-blue-400/30">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Estimated Tax:</span>
                    <span className="text-2xl font-bold text-green-400">₹45,000</span>
                  </div>
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-300">
                  Calculate Now
                </button>
              </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-2xl animate-bounce">
              💰
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-2xl animate-bounce delay-1000">
              📊
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}