import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "When should I consult with a lawyer about my case?",
      answer:
        "It's best to consult with an attorney as soon as you anticipate legal issues. Early advice can help prevent problems and strengthen your position. We offer free initial consultations to assess your situation.",
    },
    {
      question: "What makes Northern Vista Law different?",
      answer:
        "With over 10 years of experience and 3,580+ successful cases, we combine deep legal expertise with personalized attention. You'll work directly with experienced attorneys who know your case personally.",
    },
    {
      question: "How are your fees structured?",
      answer:
        "We offer transparent pricing with either flat fees for straightforward matters or hourly rates for complex cases. During your consultation, we'll provide a clear estimate with no hidden costs.",
    },
    {
      question: "How long does the legal process take?",
      answer:
        "This varies by case type. Simple matters may resolve in weeks, while complex litigation can take months. We'll provide a realistic timeline after reviewing your case details.",
    },
    {
      question: "Can you help if my application was refused?",
      answer:
        "Yes. We regularly handle refusals and appeals. Our team reviews your case, identifies why it was refused, and prepares a stronger, well-supported application or appeal.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Frequently Asked Questions
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quick answers to common questions about our services
          </p>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full px-6 py-5 text-left flex justify-between items-center ${
                    activeIndex === index ? "bg-blue-50" : "hover:bg-gray-50"
                  } transition-colors`}
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  <motion.span
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-blue-600"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-2 text-gray-600 text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Doubts CTA Section */}
          <div className="mt-16 bg-white rounded-xl shadow-md p-8 text-center border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Still Have Doubts?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Get expert advice and clear all your concerns.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-md">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;