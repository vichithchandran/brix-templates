import React from 'react';

const GSTServices = () => {
  const gstServices = [
    {
      icon: "📋",
      title: "GST Registration",
      description: "Quick and hassle-free GST registration for your business with complete documentation support.",
      features: ["New Registration", "Amendment", "Cancellation", "Revocation"],
      price: "Starting ₹2,999",
      popular: false
    },
    {
      icon: "📊",
      title: "GST Return Filing",
      description: "Monthly, quarterly, and annual GST return filing services with timely compliance and accuracy.",
      features: ["GSTR-1/3B Filing", "Annual Return", "Late Fee Management", "Reconciliation"],
      price: "Starting ₹999/month",
      popular: true
    },
    {
      icon: "🔍",
      title: "GST Audit & Compliance",
      description: "Comprehensive GST audit services to ensure full compliance with GST regulations and laws.",
      features: ["GST Audit", "Compliance Check", "Notice Handling", "Refund Claims"],
      price: "Starting ₹5,999",
      popular: false
    },
    {
      icon: "💡",
      title: "GST Advisory",
      description: "Expert GST consultation and advisory services for complex business transactions and planning.",
      features: ["Tax Planning", "Structure Optimization", "Legal Advice", "Training Sessions"],
      price: "Starting ₹1,999",
      popular: false
    },
    {
      icon: "⚖️",
      title: "GST Litigation",
      description: "Professional representation for GST disputes, appeals, and litigation matters.",
      features: ["Appeals Filing", "Court Representation", "Notice Response", "Settlement"],
      price: "Custom Pricing",
      popular: false
    },
    {
      icon: "🔄",
      title: "Input Tax Credit",
      description: "Maximize your ITC claims with proper documentation and reconciliation services.",
      features: ["ITC Reconciliation", "Claim Processing", "Documentation", "Optimization"],
      price: "Starting ₹3,999",
      popular: false
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full mb-4">
            <span className="text-sm font-medium font-4">🏢 GST Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-1">
            Complete GST Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-4 leading-relaxed">
            From registration to compliance, we provide end-to-end GST services to keep your business on track with all regulatory requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gstServices.map((service, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-2 ${
                service.popular 
                  ? 'border-blue-500 ring-4 ring-blue-100' 
                  : 'border-gray-100 hover:border-blue-200'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold font-4">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-3">{service.title}</h3>
                <p className="text-gray-600 font-4 leading-relaxed">{service.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700 font-4">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-gray-900 font-3">{service.price}</div>
                </div>
                
                <button 
                  className={`w-full py-3 rounded-lg font-semibold font-4 transition-all duration-300 ${
                    service.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg transform hover:-translate-y-1'
                      : 'bg-gray-900 text-white hover:bg-blue-600 hover:shadow-lg transform hover:-translate-y-1'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 font-3">Need Custom GST Solutions?</h3>
              <p className="text-blue-100 mb-6 font-4 text-lg leading-relaxed">
                Every business is unique. Our GST experts can create customized solutions tailored to your specific industry needs and compliance requirements.
              </p>
              <ul className="space-y-2 text-blue-100 font-4">
                <li className="flex items-center space-x-2">
                  <span>✓</span>
                  <span>Industry-specific compliance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>✓</span>
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>✓</span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>✓</span>
                  <span>Monthly compliance reports</span>
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <div className="mb-6">
                <div className="text-6xl mb-4">🎯</div>
                <div className="text-2xl font-bold mb-2 font-3">Free Consultation</div>
                <div className="text-blue-200 font-4">Discuss your requirements</div>
              </div>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold font-3 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GSTServices;