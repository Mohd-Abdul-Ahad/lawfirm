import React from "react";
import TickMark from "../assets/icons/accept.png";
import Man from "../assets/icons/man.png";
import Insurance from "../assets/icons/insurance.png";
import Chat from "../assets/icons/chat.png";
import Hand from "../assets/icons/hand.png";
import Puzzle from "../assets/icons/puzzle.png";

const WhyChooseUs = () => {
  const cardData = [
    { 
      icon: TickMark, 
      alt: "tick mark", 
      title: "Client-Focused Approach",
      description: "Dedicated to achieving the best possible outcomes for every client"
    },
    { 
      icon: Man, 
      alt: "experienced team", 
      title: "Experienced Legal Team",
      description: "15+ seasoned professionals with specialized expertise"
    },
    { 
      icon: Insurance, 
      alt: "protection", 
      title: "Relentless Protection",
      description: "Vigilant defense of your rights and interests at every stage"
    },
    { 
      icon: Hand, 
      alt: "transparent pricing", 
      title: "Fair Pricing",
      description: "Clear fee structures with no hidden costs"
    },
    { 
      icon: Chat, 
      alt: "communication", 
      title: "Clear Communication",
      description: "Regular updates in plain language you can understand"
    },
    { 
      icon: Puzzle, 
      alt: "strategy", 
      title: "Strategic Solutions",
      description: "Customized legal strategies for your unique situation"
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Northern Vista Law Stands Apart</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by clients for our unwavering commitment to excellence and results-driven approach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-100 transition-colors">
                <img 
                  src={card.icon} 
                  alt={card.alt} 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">{card.title}</h3>
              <p className="text-gray-600 text-center">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>10+ Years of Trusted Service</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>300+ 5-Star Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;