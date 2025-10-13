import React from 'react';

const TaxTestimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      designation: "Small Business Owner",
      company: "Kumar Textiles",
      image: "/user1.jpg",
      rating: 5,
      review: "TaxPro helped me save over ₹2 lakhs in taxes through proper planning. Their GST compliance service is exceptional, and they always file returns on time. Highly recommended!",
      service: "GST & Tax Planning"
    },
    {
      name: "Priya Sharma",
      designation: "Software Engineer",
      company: "Tech Solutions Inc.",
      image: "/user2.jpg",
      rating: 5,
      review: "Filing ITR was so easy with their help. The team explained every deduction clearly and maximized my refund. Great customer service and very professional approach.",
      service: "ITR Filing"
    },
    {
      name: "Amit Patel",
      designation: "CA Professional",
      company: "Patel & Associates",
      image: "/user3.jpg",
      rating: 5,
      review: "As a fellow CA, I can vouch for their expertise. They handled complex business restructuring and tax optimization for my firm. Excellent knowledge and execution.",
      service: "Business Tax Advisory"
    },
    {
      name: "Sunita Reddy",
      designation: "NRI Consultant",
      company: "Global Tech Corp",
      image: "/user4.jpg",
      rating: 5,
      review: "Being an NRI, tax compliance was always confusing. Their NRI tax services team made everything clear and handled all DTAA benefits perfectly. Very satisfied!",
      service: "NRI Tax Services"
    },
    {
      name: "Mohammed Khan",
      designation: "Restaurant Owner",
      company: "Khan's Kitchen",
      image: "/user5.jpg",
      rating: 5,
      review: "They helped me with GST registration and monthly filing. The team is responsive, knowledgeable, and always available for queries. Best tax consultants in the city!",
      service: "GST Registration & Filing"
    },
    {
      name: "Deepika Singh",
      designation: "Freelance Designer",
      company: "Creative Studio",
      image: "/user1.jpg",
      rating: 5,
      review: "Perfect for freelancers like me. They explained all tax-saving investments and helped me plan my finances better. Very affordable and reliable service.",
      service: "Individual Tax Planning"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full mb-4">
            <span className="text-sm font-medium font-4">⭐ Client Testimonials</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-1">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-4 leading-relaxed">
            Don't just take our word for it. See what our satisfied clients have to say about our tax services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              {/* Service Tag */}
              <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium mb-4 font-4">
                {testimonial.service}
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review */}
              <blockquote className="text-gray-700 mb-6 font-4 leading-relaxed italic">
                "{testimonial.review}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center space-x-4 border-t border-gray-100 pt-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 font-3">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 font-4">{testimonial.designation}</p>
                  <p className="text-xs text-gray-500 font-4">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600 font-1">5000+</div>
              <div className="text-gray-600 font-4">Satisfied Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600 font-1">4.9/5</div>
              <div className="text-gray-600 font-4">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600 font-1">98%</div>
              <div className="text-gray-600 font-4">Retention Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600 font-1">24/7</div>
              <div className="text-gray-600 font-4">Support Available</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-3">Join Our Satisfied Clients</h3>
          <p className="text-gray-600 mb-8 font-4">
            Experience the difference with professional tax services that actually care about your financial success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold font-3 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Start Your Tax Journey
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold font-3 hover:bg-purple-600 hover:text-white transition-all duration-300">
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxTestimonials;