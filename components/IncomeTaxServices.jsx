import React from 'react';

const IncomeTaxServices = () => {
  const incomeTaxServices = [
    {
      icon: "📝",
      title: "ITR Filing",
      description: "Professional income tax return filing for individuals, HUFs, and businesses with maximum refunds.",
      features: ["All ITR Forms", "Quick Processing", "Refund Optimization", "E-filing Support"],
      price: "Starting ₹499",
      category: "Individual",
      popular: true
    },
    {
      icon: "📈",
      title: "Tax Planning",
      description: "Strategic tax planning to minimize tax liability and maximize savings through legal deductions.",
      features: ["Investment Planning", "Tax Saving Schemes", "Deduction Analysis", "Yearly Strategy"],
      price: "Starting ₹1,999",
      category: "Advisory",
      popular: false
    },
    {
      icon: "🏢",
      title: "Business Tax Services",
      description: "Comprehensive tax solutions for businesses including partnerships, companies, and LLPs.",
      features: ["Corporate Tax Filing", "TDS Compliance", "Advance Tax", "Assessment Support"],
      price: "Starting ₹4,999",
      category: "Business",
      popular: false
    },
    {
      icon: "🔍",
      title: "Tax Assessment",
      description: "Expert assistance for tax assessments, scrutiny cases, and income tax department interactions.",
      features: ["Assessment Defense", "Scrutiny Support", "Appeal Filing", "Documentation"],
      price: "Starting ₹7,999",
      category: "Legal",
      popular: false
    },
    {
      icon: "💼",
      title: "TDS Services",
      description: "Complete TDS compliance including return filing, payment, and certificate generation.",
      features: ["TDS Return Filing", "Quarterly Compliance", "Certificate Management", "Correction Services"],
      price: "Starting ₹2,499",
      category: "Compliance",
      popular: false
    },
    {
      icon: "🎯",
      title: "NRI Tax Services",
      description: "Specialized tax services for Non-Resident Indians including DTAA benefits and compliance.",
      features: ["NRI Tax Filing", "DTAA Benefits", "Foreign Income", "FBAR Compliance"],
      price: "Starting ₹3,999",
      category: "NRI",
      popular: false
    }
  ];

  const taxSlabs = [
    { income: "Up to ₹2.5 Lakh", tax: "Nil", newRegime: "Nil" },
    { income: "₹2.5 - 5 Lakh", tax: "5%", newRegime: "Nil" },
    { income: "₹5 - 7.5 Lakh", tax: "20%", newRegime: "10%" },
    { income: "₹7.5 - 10 Lakh", tax: "20%", newRegime: "15%" },
    { income: "₹10 - 12.5 Lakh", tax: "30%", newRegime: "20%" },
    { income: "₹12.5 - 15 Lakh", tax: "30%", newRegime: "25%" },
    { income: "Above ₹15 Lakh", tax: "30%", newRegime: "30%" }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full mb-4">
            <span className="text-sm font-medium font-4">💰 Income Tax Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-1">
            Expert Income Tax Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-4 leading-relaxed">
            Comprehensive income tax services for individuals and businesses. Save more, stress less with our professional tax expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {incomeTaxServices.map((service, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-2 ${
                service.popular 
                  ? 'border-green-500 ring-4 ring-green-100' 
                  : 'border-gray-100 hover:border-green-200'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold font-4">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <div className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium mb-3 font-4">
                  {service.category}
                </div>
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
                      ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white hover:shadow-lg transform hover:-translate-y-1'
                      : 'bg-gray-900 text-white hover:bg-green-600 hover:shadow-lg transform hover:-translate-y-1'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tax Slab Information */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-3">Income Tax Slabs FY 2023-24</h3>
            <p className="text-gray-600 font-4">Compare old vs new tax regime to choose the best option for you</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold font-3">Income Range</th>
                  <th className="px-6 py-4 text-center font-semibold font-3">Old Regime</th>
                  <th className="px-6 py-4 text-center font-semibold font-3">New Regime</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {taxSlabs.map((slab, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900 font-4">{slab.income}</td>
                    <td className="px-6 py-4 text-center font-semibold text-blue-600 font-4">{slab.tax}</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600 font-4">{slab.newRegime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-4 font-4">
              * Tax rates are subject to change. Consult our experts for personalized advice.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold font-3 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Calculate Your Tax
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-teal-700 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 font-3">File Your ITR in 3 Simple Steps</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white text-green-600 rounded-full flex items-center justify-center font-bold font-3">1</div>
                  <div>
                    <h4 className="font-semibold mb-1 font-3">Upload Documents</h4>
                    <p className="text-green-100 text-sm font-4">Share your Form-16, bank statements, and investment proofs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white text-green-600 rounded-full flex items-center justify-center font-bold font-3">2</div>
                  <div>
                    <h4 className="font-semibold mb-1 font-3">Expert Review</h4>
                    <p className="text-green-100 text-sm font-4">Our CA will review and prepare your return for maximum savings</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white text-green-600 rounded-full flex items-center justify-center font-bold font-3">3</div>
                  <div>
                    <h4 className="font-semibold mb-1 font-3">E-file & Track</h4>
                    <p className="text-green-100 text-sm font-4">We'll file your return and help track your refund status</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="mb-6">
                <div className="text-6xl mb-4">🚀</div>
                <div className="text-2xl font-bold mb-2 font-3">Start Your ITR Filing</div>
                <div className="text-green-200 font-4">Get maximum refund guaranteed</div>
              </div>
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold font-3 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                File ITR Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncomeTaxServices;