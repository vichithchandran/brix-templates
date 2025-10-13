import React from 'react';

const TaxFeatures = () => {
  const features = [
    {
      icon: "🎯",
      title: "Expert Tax Professionals",
      description: "Qualified CAs and tax experts with years of experience in handling complex tax matters.",
      benefits: ["Certified Professionals", "Industry Experience", "Continuous Training", "Quality Assurance"]
    },
    {
      icon: "⚡",
      title: "Fast & Efficient Service",
      description: "Quick turnaround times with accurate filing to meet all deadlines and avoid penalties.",
      benefits: ["24-48 Hour Processing", "Real-time Updates", "Deadline Management", "Error-free Filing"]
    },
    {
      icon: "🔒",
      title: "Data Security & Privacy",
      description: "Advanced encryption and secure systems to protect your sensitive financial information.",
      benefits: ["256-bit Encryption", "Secure File Transfer", "Privacy Protection", "Compliance Standards"]
    },
    {
      icon: "💰",
      title: "Maximum Tax Savings",
      description: "Strategic planning and optimization to ensure you pay the minimum tax legally required.",
      benefits: ["Tax Optimization", "Deduction Analysis", "Refund Maximization", "Legal Compliance"]
    },
    {
      icon: "📱",
      title: "Digital-First Approach",
      description: "Modern technology platform for seamless document sharing and progress tracking.",
      benefits: ["Online Portal", "Mobile App", "Digital Documents", "Progress Tracking"]
    },
    {
      icon: "🏆",
      title: "Guaranteed Satisfaction",
      description: "100% satisfaction guarantee with full support until your tax matters are resolved.",
      benefits: ["Money-back Guarantee", "Unlimited Revisions", "Post-filing Support", "Expert Consultation"]
    }
  ];

  const stats = [
    { number: "10,000+", label: "Returns Filed", icon: "📊" },
    { number: "₹50Cr+", label: "Refunds Processed", icon: "💸" },
    { number: "99.9%", label: "Accuracy Rate", icon: "🎯" },
    { number: "4.9/5", label: "Customer Rating", icon: "⭐" }
  ];

  const whyChooseUs = [
    {
      title: "Comprehensive Service Range",
      description: "From basic ITR filing to complex business tax planning, we handle it all under one roof.",
      icon: "🏢"
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees, clear pricing structure, and value-for-money services for all tax needs.",
      icon: "💎"
    },
    {
      title: "Proactive Tax Planning",
      description: "Year-round tax advisory to help you make informed financial decisions and save taxes.",
      icon: "📈"
    },
    {
      title: "Multi-location Support",
      description: "Serving clients across India with local expertise and national standard processes.",
      icon: "🌍"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full mb-4">
            <span className="text-sm font-medium font-4">✨ Why Choose Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-1">
            Your Trusted Tax Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-4 leading-relaxed">
            Experience hassle-free tax services with our expert team, cutting-edge technology, and customer-first approach.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2 font-1">{stat.number}</div>
                <div className="text-gray-600 font-4">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-3">{feature.title}</h3>
                <p className="text-gray-600 font-4 leading-relaxed">{feature.description}</p>
              </div>

              <div className="space-y-3">
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700 font-4">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-3">Why Choose Our Tax Services?</h3>
            <p className="text-gray-600 font-4 text-lg">We go beyond just filing returns - we're your comprehensive tax solution partner.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="text-3xl">{reason.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2 font-3">{reason.title}</h4>
                  <p className="text-gray-600 font-4 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 font-3">Our Simple 4-Step Process</h3>
            <p className="text-blue-100 font-4 text-lg">From consultation to filing, we make tax compliance effortless for you.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold font-3 mx-auto mb-4">1</div>
              <h4 className="text-xl font-semibold mb-2 font-3">Consultation</h4>
              <p className="text-blue-100 font-4 text-sm">Free initial consultation to understand your tax requirements and goals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold font-3 mx-auto mb-4">2</div>
              <h4 className="text-xl font-semibold mb-2 font-3">Documentation</h4>
              <p className="text-blue-100 font-4 text-sm">Secure document collection through our digital platform or in-person meetings.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold font-3 mx-auto mb-4">3</div>
              <h4 className="text-xl font-semibold mb-2 font-3">Processing</h4>
              <p className="text-blue-100 font-4 text-sm">Expert review and preparation by qualified professionals with quality checks.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold font-3 mx-auto mb-4">4</div>
              <h4 className="text-xl font-semibold mb-2 font-3">Filing & Support</h4>
              <p className="text-blue-100 font-4 text-sm">Electronic filing with continuous support until completion and beyond.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold font-3 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Start Your Tax Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxFeatures;