import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const IADPage = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Immigration Appeal Division (IAD) Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              At North Vista Immigration, we specialize in helping clients navigate the complexities of the Immigration Appeal Division (IAD) process.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Assessment Form */}
            <div className="md:col-span-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-8 sticky top-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Free Immigration Assessment
                  </span>
                </h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        id="first-name"
                        placeholder="First"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                      <input
                        type="text"
                        id="last-name"
                        placeholder="Last"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone *
                    </label>
                    <div className="flex">
                      <select className="w-1/3 px-2 py-2 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500">
                        <option>India +91</option>
                        <option>Canada +1</option>
                        <option>USA +1</option>
                      </select>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="081234 56789"
                        className="w-2/3 px-4 py-2 border-t border-b border-r border-gray-300 rounded-r-md focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <p className="mt-1 text-xs text-gray-500">Please enter phone number with country code.</p>
                  </div>

                  <div>
                    <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700 mb-1">
                      Postal/Zip Code *
                    </label>
                    <input
                      type="text"
                      id="postal-code"
                      placeholder="e.g. M5V 3L9"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Country of residence *
                    </label>
                    <select
                      id="country"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select Country</option>
                      <option value="Canada">Canada</option>
                      <option value="USA">United States</option>
                      <option value="India">India</option>
                      <option value="UK">United Kingdom</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-6 rounded-md font-medium hover:from-blue-700 hover:to-blue-900 transition duration-300"
                  >
                    Next
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Content Sections */}
            <div className="md:col-span-2 space-y-12">
              {/* About IAD Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    What is the Immigration Appeal Division (IAD)?
                  </span>
                </h2>
                <p className="text-gray-700 mb-6">
                  The IAD is a tribunal that reviews immigration-related decisions, including:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>Sponsorship Appeals (e.g., Outland Spousal Appeals, Parental Sponsorship Appeals)</li>
                  <li>Residency Obligation Appeals (e.g., Permanent Residents who fail to meet residency requirements)</li>
                </ul>
                <p className="text-gray-700">
                  If your application has been refused, the IAD allows you to appeal the decision. However, the process can be complex, and success often depends on demonstrating that the decision was unfair, unreasonable, or based on an error.
                </p>
              </motion.div>

              {/* Why Choose Us Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Why Choose North Vista Immigration?
                  </span>
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-blue-800 mb-2">Expertise</h3>
                    <p className="text-gray-700 text-sm">Our team has extensive experience handling IAD appeals, ensuring your case is presented professionally and persuasively.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-blue-800 mb-2">Personalized Support</h3>
                    <p className="text-gray-700 text-sm">We understand the emotional and legal challenges of immigration appeals and provide compassionate, client-focused service.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-blue-800 mb-2">Proven Results</h3>
                    <p className="text-gray-700 text-sm">We have a track record of successfully helping clients overturn refused decisions and achieve their immigration goals.</p>
                  </div>
                </div>
              </motion.div>

              {/* IAD Appeal Types */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    IAD Appeal Types
                  </span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3 text-xl">
                      Sponsorship Appeals
                    </h3>
                    <p className="text-gray-700 mb-4">If your sponsorship application (spousal, parental, or other family members) has been refused, you have 30 days to file an appeal.</p>
                    <p className="font-semibold mb-2">Our team will help you:</p>
                    <ul className="space-y-2 list-disc pl-5 text-gray-700">
                      <li>Prepare and submit a strong appeal application</li>
                      <li>Gather and present evidence to prove that the refusal was unjust</li>
                      <li>Represent you at the IAD hearing to ensure your case is presented effectively</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3 text-xl">
                      Residency Obligation Appeals
                    </h3>
                    <p className="text-gray-700 mb-4">Permanent Residents who fail to meet their residency obligations may face inadmissibility to Canada. You have 60 days to appeal this decision.</p>
                    <p className="font-semibold mb-2">Our team will:</p>
                    <ul className="space-y-2 list-disc pl-5 text-gray-700">
                      <li>Help you demonstrate humanitarian and compassionate grounds for maintaining your status</li>
                      <li>Represent you at the IAD hearing to argue for the restoration of your permanent resident status</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-yellow-800 mb-2">
                      How to Get Started
                    </h3>
                    <p className="text-gray-700">
                      If your application has been refused, don't wait—time is critical. Contact North Vista Immigration today to schedule a consultation.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="tel:+16476605758" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium text-center transition duration-300">
                      Call Now: +1 647 660-5758
                    </a>
                    <button className="bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-6 rounded-lg font-medium transition duration-300">
                      Get A Quote
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default IADPage;