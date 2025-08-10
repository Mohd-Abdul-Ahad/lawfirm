import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const duration = 2000;
  const steps = 50;
  const increment = target / steps;

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setCount(Math.ceil(current));
    }, duration / steps);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <span className="text-4xl font-bold text-blue-600">
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const testimonials = [
    {
      quote: "Just received my wife PR card yesterday, very professional and efficient services they're providing! Especially thanks to Mr Nabeel khan who was attending our case!",
      author: "Polarity Jr",
      rating: 5,
      date: "6 August 2025"
    },
    {
      quote: "I'm incredibly grateful to North Vista Immigration Consultants Inc. for their outstanding support in helping me secure both my work permit and my family's immigration approvals. From start to finish, the team was professional, responsive, and very knowledgeable about every step of the process.",
      author: "Sahad Chavoorl",
      rating: 5,
      date: "24 July 2025"
    },
    {
      quote: "Great service, wonderful to deal with. Highly recommend. Thanks!",
      author: "Eddy Luz",
      rating: 5,
      date: "15 July 2025"
    },
    {
      quote: "I had an exceptional experience with North Vista Immigration Consultants! Their expertise and guidance made the work visa process seamless and stress-free. From initial consultation to visa approval, the team was professional, responsive, and supportive.",
      author: "Naveed Saghir",
      rating: 5,
      date: "2 July 2025"
    },
    {
      quote: "NVI has been absolutely outstanding throughout my LMIA, CWP, and PR application process. Mr. Nabeel handled even the most challenging tasks with ease, and Ayesha's step-by-step guidance was incredibly helpful every step of the way.",
      author: "Vijayaraghav VK",
      rating: 5,
      date: "7 July 2025"
    },
    {
      quote: "I had an excellent experience working with North Vista Immigration Consultants. From start to finish, their team provided clear guidance, timely updates, and unwavering support throughout my work visa application process.",
      author: "Rida Amanat",
      rating: 5,
      date: "4 July 2025"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Why Clients Trust North Vista Law
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted for over <span className="font-semibold text-blue-600">10 years</span> of exceptional legal service
          </p>
        </div>

        {/* Stats Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          ref={ref}
        >
          {/* Successful Cases */}
          <div className="bg-white p-8 rounded-xl shadow-sm text-center border border-gray-100">
            {inView ? <Counter target={3580} suffix="+" /> : <span className="text-4xl font-bold text-blue-600">0+</span>}
            <h3 className="mt-4 text-lg font-medium text-gray-900">Successful Cases</h3>
            <p className="mt-2 text-gray-600">Handled with precision and care</p>
          </div>

          {/* Trusted Reviews */}
          <div className="bg-white p-8 rounded-xl shadow-sm text-center border border-gray-100">
            {inView ? <Counter target={300} suffix="+" /> : <span className="text-4xl font-bold text-blue-600">0+</span>}
            <h3 className="mt-4 text-lg font-medium text-gray-900">Trusted Reviews</h3>
            <p className="mt-2 text-gray-600">From satisfied clients</p>
          </div>

          {/* Professionals */}
          <div className="bg-white p-8 rounded-xl shadow-sm text-center border border-gray-100">
            {inView ? <Counter target={15} suffix="+" /> : <span className="text-4xl font-bold text-blue-600">0+</span>}
            <h3 className="mt-4 text-lg font-medium text-gray-900">Professionals</h3>
            <p className="mt-2 text-gray-600">Dedicated legal experts</p>
          </div>

          {/* Services */}
          <div className="bg-white p-8 rounded-xl shadow-sm text-center border border-gray-100">
            {inView ? <Counter target={20} suffix="+" /> : <span className="text-4xl font-bold text-blue-600">0+</span>}
            <h3 className="mt-4 text-lg font-medium text-gray-900">Services</h3>
            <p className="mt-2 text-gray-600">Comprehensive legal solutions</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              What Our Clients Say
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold text-xl">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg 
                          key={i} 
                          className="w-5 h-5 text-yellow-400" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-sm text-gray-500 ml-2">5 Star Review</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-sm text-gray-500">{testimonial.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x882b40a319d08f4f:0xa58b776ff99c4d7c!12e1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition duration-300"
          >
            Leave Us a Review
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;