import React from 'react';

const TaxHeader = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl font-1">T</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 font-1">TaxPro</h1>
              <p className="text-xs text-gray-500 font-4">Expert Tax Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium font-3 transition-colors">Home</a>
            <a href="#gst-services" className="text-gray-700 hover:text-blue-600 font-medium font-3 transition-colors">GST Services</a>
            <a href="#income-tax" className="text-gray-700 hover:text-blue-600 font-medium font-3 transition-colors">Income Tax</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium font-3 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium font-3 transition-colors">Contact</a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold font-3 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Get Free Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation (hidden by default) */}
        <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 hidden">
          <div className="flex flex-col space-y-3 pt-4">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium font-3 transition-colors py-2">Home</a>
            <a href="#gst-services" className="text-gray-700 hover:text-blue-600 font-medium font-3 transition-colors py-2">GST Services</a>
            <a href="#income-tax" className="text-gray-700 hover:text-blue-600 font-medium font-3 transition-colors py-2">Income Tax</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium font-3 transition-colors py-2">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium font-3 transition-colors py-2">Contact</a>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold font-3 hover:shadow-lg transition-all duration-300 mt-4">
              Get Free Consultation
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TaxHeader;