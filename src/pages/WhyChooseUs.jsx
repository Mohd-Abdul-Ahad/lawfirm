import React from "react";
import TickMark from "../assets/icons/accept.png";
import Man from "../assets/icons/man.png";
import Insurance from "../assets/icons/insurance.png";
import Chat from "../assets/icons/chat.png";
import Hand from "../assets/icons/hand.png";
import Puzzle from "../assets/icons/puzzle.png";

const WhyChooseUs = () => {
  const cardData = [
    { icon: TickMark, alt: "tick mark", lines: ["Client-Focused,", "Results-Driven"] },
    { icon: Man, alt: "man", lines: ["Experienced", "Legal Team"] },
    { icon: Insurance, alt: "Protection", lines: ["Protecting Your", "Interests Relentlessly"] },
    { icon: Hand, alt: "Money", lines: ["Fair", "Transparent Fees"] },
    { icon: Chat, alt: "Chat", lines: ["Clear Consistent", "Communication"] },
    { icon: Puzzle, alt: "Strategic Moves", lines: ["Smart, Strategic", "Legal Solutions"] },
  ];

  return (
    <div className="bg-[#F5F7FA] py-16 px-4 sm:px-6 mt-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl pB">Why Choose Us ?</h2>
        <div className="bg-[#2a65f8] w-20 h-1 mx-auto mt-3 mb-10"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <img 
                src={card.icon} 
                alt={card.alt} 
                className="w-20 h-20 mx-auto mb-6 object-contain"
              />
              <div className="space-y-2 navFont text-xl">
                {card.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;