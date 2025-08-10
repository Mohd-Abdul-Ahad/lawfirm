import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";


const TestimonialsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Sample data that would come from your Google Maps API
  const googleReviews = [
    {
      id: 1,
      author: "Sarah Johnson",
      rating: 5,
      text: "North Vista Law handled my complex immigration case with exceptional professionalism. They kept me informed at every step and achieved a positive outcome when other firms said it wasn't possible.",
      date: "2 weeks ago",
      photo: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 2,
      author: "Michael Chen",
      rating: 5,
      text: "The team went above and beyond to secure a study permit for my daughter. Their attention to detail and responsiveness made the stressful process much easier for our family.",
      date: "1 month ago",
      photo: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      author: "David Wilson",
      rating: 5,
      text: "After a visa refusal, North Vista Law successfully helped me with an appeal. Their knowledge of immigration law and commitment to my case was impressive. Highly recommended!",
      date: "3 months ago",
      photo: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      id: 4,
      author: "Emily Rodriguez",
      rating: 5,
      text: "Exceptional service from start to finish. They helped our entire family get PR through the PNP program. The lawyers are knowledgeable and genuinely care about their clients.",
      date: "2 months ago",
      photo: "https://randomuser.me/api/portraits/women/43.jpg"
    },
    {
      id: 5,
      author: "Robert Kim",
      rating: 5,
      text: "The Super Visa application for my parents was approved in record time thanks to North Vista Law. They made the process straightforward and stress-free.",
      date: "1 week ago",
      photo: "https://randomuser.me/api/portraits/men/90.jpg"
    },
    {
      id: 6,
      author: "Aisha Mohammed",
      rating: 5,
      text: "I consulted with 3 firms before choosing North Vista. Their expertise in refugee claims was evident from our first meeting. They guided me through every step with compassion.",
      date: "4 months ago",
      photo: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  // In a real implementation, you would fetch these from Google Maps API
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setReviews(googleReviews);
      setLoading(false);
    }, 800);
  }, []);


  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Client Testimonials
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real feedback from clients who trusted us with their immigration journey
          </p>
        </div>

        {/* Google Reviews */}
        <div className="mt-12">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 animate-pulse">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-5 h-5 bg-gray-200 rounded-full mr-1"></div>
                    ))}
                  </div>
                  <div className="h-4 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review) => (
                <div 
                  key={review.id} 
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <img 
                      src={review.photo} 
                      alt={review.author} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{review.author}</h4>
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg 
                            key={i} 
                            className="w-5 h-5 text-yellow-400" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-gray-500 text-sm ml-2">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic mb-4">"{review.text}"</p>
                  <div className="flex items-center text-sm text-blue-600 font-medium">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                    Google Review
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://g.page/r/CQ1KQ3Z4X5WUEB0/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-md transition duration-300"
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

export default TestimonialsSection;