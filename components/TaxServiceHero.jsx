import React from 'react';

const TaxServiceHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 py-20 px-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-300 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-teal-300 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white rounded-full opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-medium">🏆 Trusted Tax Experts</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight font-1">
                Professional
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  Tax Services
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 font-2 leading-relaxed">
                Expert GST & Income Tax solutions for individuals and businesses. 
                Maximize your savings with our professional tax advisory services.
              </p>
            </div>

            {/* Service highlights */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium font-3">GST Registration</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium font-3">Tax Planning</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium font-3">ITR Filing</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium font-3">Tax Compliance</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-8 py-4 rounded-lg font-semibold font-3 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold font-3 hover:bg-white hover:text-blue-900 transition-all duration-300">
                View Services
              </button>
            </div>
          </div>

          {/* Right side - Interactive elements */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2 font-3">Quick Tax Calculator</h3>
                  <p className="text-blue-100 font-4">Get instant tax estimates</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2 font-4">Annual Income (₹)</label>
                    <input 
                      type="text" 
                      placeholder="e.g., 8,00,000"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white mb-2 font-4">Age Group</label>
                    <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400">
                      <option value="">Select Age</option>
                      <option value="below60">Below 60 years</option>
                      <option value="60to80">60-80 years</option>
                      <option value="above80">Above 80 years</option>
                    </select>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-green-400 to-teal-400 text-white px-6 py-3 rounded-lg font-semibold font-3 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    Calculate Tax
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center text-white">
            <div className="text-4xl font-bold font-1 text-yellow-400">500+</div>
            <div className="text-sm text-blue-200 font-4 mt-1">Happy Clients</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold font-1 text-yellow-400">5+</div>
            <div className="text-sm text-blue-200 font-4 mt-1">Years Experience</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold font-1 text-yellow-400">99%</div>
            <div className="text-sm text-blue-200 font-4 mt-1">Success Rate</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold font-1 text-yellow-400">24/7</div>
            <div className="text-sm text-blue-200 font-4 mt-1">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxServiceHero;