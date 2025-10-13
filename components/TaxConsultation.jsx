"use client";
import React, { useState } from 'react';

const TaxConsultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: "📞",
      title: "Phone Consultation",
      description: "Speak directly with our tax experts",
      value: "+91 98765 43210",
      action: "Call Now",
      available: "Mon-Sat: 9 AM - 7 PM"
    },
    {
      icon: "✉️",
      title: "Email Support",
      description: "Get detailed answers to your queries",
      value: "tax@yourcompany.com",
      action: "Send Email",
      available: "24/7 Response"
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Instant chat with our support team",
      value: "Available Now",
      action: "Start Chat",
      available: "9 AM - 9 PM"
    },
    {
      icon: "📍",
      title: "Office Visit",
      description: "Visit our office for in-person consultation",
      value: "123 Business Hub, City",
      action: "Get Directions",
      available: "Mon-Fri: 10 AM - 6 PM"
    }
  ];

  const consultationPackages = [
    {
      name: "Basic Consultation",
      duration: "30 minutes",
      price: "Free",
      features: [
        "Tax liability assessment",
        "Basic planning advice",
        "Service recommendations",
        "Q&A session"
      ],
      popular: false
    },
    {
      name: "Comprehensive Review",
      duration: "60 minutes",
      price: "₹1,999",
      features: [
        "Detailed tax analysis",
        "Investment planning",
        "Multi-year strategy",
        "Documentation review",
        "Written recommendations"
      ],
      popular: true
    },
    {
      name: "Business Consultation",
      duration: "90 minutes",
      price: "₹4,999",
      features: [
        "Business structure optimization",
        "Tax compliance roadmap",
        "GST strategy planning",
        "Risk assessment",
        "Ongoing support plan"
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      question: "How soon can I get a consultation appointment?",
      answer: "We typically schedule consultations within 24-48 hours. For urgent matters, same-day appointments are available."
    },
    {
      question: "What documents should I bring for consultation?",
      answer: "Bring your PAN card, previous year's ITR, Form 16, investment proofs, and any tax notices if applicable."
    },
    {
      question: "Do you provide consultation for NRI tax matters?",
      answer: "Yes, we have specialized experts for NRI taxation, DTAA benefits, and foreign income compliance."
    },
    {
      question: "Can I get a refund if I'm not satisfied with the consultation?",
      answer: "We offer a 100% satisfaction guarantee. If you're not satisfied, we'll provide a full refund or additional consultation at no cost."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full mb-4">
            <span className="text-sm font-medium font-4">📋 Get Expert Consultation</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-1">
            Book Your Tax Consultation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-4 leading-relaxed">
            Get personalized tax advice from certified professionals. Schedule a consultation that fits your needs and budget.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center border border-gray-100"
            >
              <div className="text-4xl mb-4">{method.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-3">{method.title}</h3>
              <p className="text-gray-600 text-sm mb-3 font-4">{method.description}</p>
              <div className="text-indigo-600 font-medium mb-2 font-4">{method.value}</div>
              <div className="text-xs text-gray-500 mb-4 font-4">{method.available}</div>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold font-4 hover:bg-indigo-700 transition-colors">
                {method.action}
              </button>
            </div>
          ))}
        </div>

        {/* Consultation Packages */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-3">Consultation Packages</h3>
            <p className="text-gray-600 font-4">Choose the consultation package that best fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {consultationPackages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-2 ${
                  pkg.popular 
                    ? 'border-indigo-500 ring-4 ring-indigo-100' 
                    : 'border-gray-100 hover:border-indigo-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold font-4">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2 font-3">{pkg.name}</h4>
                  <div className="text-sm text-gray-500 mb-3 font-4">{pkg.duration}</div>
                  <div className="text-3xl font-bold text-indigo-600 font-1">{pkg.price}</div>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
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

                <button 
                  className={`w-full py-3 rounded-lg font-semibold font-4 transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-lg transform hover:-translate-y-1'
                      : 'bg-gray-900 text-white hover:bg-indigo-600 hover:shadow-lg transform hover:-translate-y-1'
                  }`}
                >
                  Book Consultation
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form and Map */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-3">Schedule a Consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-4">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors font-4"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-4">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors font-4"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-4">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors font-4"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-4">Service Required *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors font-4"
                >
                  <option value="">Select a service</option>
                  <option value="itr-filing">ITR Filing</option>
                  <option value="gst-registration">GST Registration</option>
                  <option value="tax-planning">Tax Planning</option>
                  <option value="business-consultation">Business Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-4">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors font-4"
                  placeholder="Tell us about your specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold font-4 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule Consultation
              </button>
            </form>
          </div>

          {/* Office Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-3">Visit Our Office</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-2xl">📍</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 font-3">Office Address</h4>
                    <p className="text-gray-600 font-4">
                      123 Business Hub, 2nd Floor<br/>
                      Financial District, City - 500032<br/>
                      Near Metro Station
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-2xl">🕒</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 font-3">Office Hours</h4>
                    <p className="text-gray-600 font-4">
                      Monday - Friday: 10:00 AM - 6:00 PM<br/>
                      Saturday: 10:00 AM - 4:00 PM<br/>
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-2xl">🚗</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 font-3">Parking</h4>
                    <p className="text-gray-600 font-4">
                      Free parking available<br/>
                      Basement parking for visitors<br/>
                      Wheelchair accessible
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-3">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="border border-gray-200 rounded-lg">
                    <summary className="p-4 cursor-pointer font-medium text-gray-900 font-4 hover:bg-gray-50">
                      {faq.question}
                    </summary>
                    <div className="px-4 pb-4 text-gray-600 font-4">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-8 text-white text-center">
          <div className="mb-4">
            <div className="text-5xl mb-4">🚨</div>
            <h3 className="text-2xl font-bold mb-2 font-3">Need Urgent Tax Help?</h3>
            <p className="text-red-100 mb-6 font-4">
              Last-minute tax filing, notice responses, or urgent compliance matters? We're here to help 24/7.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold font-4 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Emergency Hotline: +91 98765 43210
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold font-4 hover:bg-white hover:text-red-600 transition-all duration-300">
              WhatsApp Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxConsultation;