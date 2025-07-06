import React from "react";
import Circle from "../assets/icons/circle.png";
import Avatar from "../assets/icons/man (1).png";

const Testimonials = () => {
  const testimonials = Array(6).fill({
    quote: [
      "Law resolved my dispute fast and fairly.",
      "They kept me updated and fought hard.",
      "Confident and satisfied throughout the process.",
    ],
    name: "Nicolas",
    caseType: "Civil Litigation"
  });

  return (
    <div className="bg-[#F5F7FA] py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          <div className="text-[#2a65f8] border border-[#2a65f8] rounded-sm pMd text-sm py-1 px-3">
            Testimonials
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl navFont mt-4 text-center">
          Our Trusted Clients
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
              <img width={60} src={Circle} alt="quote" className="mb-2" />
              <div className="pMd space-y-3">
                {testimonial.quote.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <div className="border-t border-[#D9D9D9] my-4"></div>
              <div className="flex items-center gap-3">
                <img width={50} src={Avatar} alt={testimonial.name} />
                <div>
                  <p className="navFont text-lg">{testimonial.name}</p>
                  <p className="pMd text-sm">- {testimonial.caseType}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-[#2a65f8] text-white py-2 px-6 rounded-sm pB">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;