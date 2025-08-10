import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const VisitorVisa = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Canada Visitor Visa & eTA 2025
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Visiting Canada in 2025? Learn about the latest requirements and
              application process.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left Column - Form */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Book An Appointment
                  </span>
                </h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="First"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Last"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +1 647 660-5758"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      Please enter phone number with country code.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Postal/Zip Code *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. M5V 3L9"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country of residence *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-colors duration-300 mt-6 shadow-md"
                  >
                    Next
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="md:col-span-2 space-y-12">
              {/* Canada Entry Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Canada Entry Requirements in 2025: Visa or eTA?
                  </span>
                </h2>
                <p className="text-gray-700 mb-6">
                  Canada's entry rules remain strict in 2025, requiring most
                  foreign nationals to obtain either a Visitor Visa (TRV) or an
                  Electronic Travel Authorization (eTA) before arrival.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">
                      Canada Visitor Visa (Temporary Resident Visa - TRV)
                    </h3>
                    <p className="text-gray-700 mb-4">
                      A Visitor Visa is required for travelers from
                      visa-required countries. It allows short-term stays
                      (usually up to 6 months) for tourism, business, or family
                      visits.
                    </p>
                    <h4 className="font-bold text-gray-800 mb-2">
                      Who Needs a Visitor Visa in 2025?
                    </h4>
                    <p className="text-gray-700">
                      Citizens of countries not exempt from visa requirements
                      (e.g., India, China, Nigeria, Philippines).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">
                      Canada eTA (Electronic Travel Authorization)
                    </h3>
                    <p className="text-gray-700 mb-4">
                      An eTA is a digital travel permit for visa-exempt foreign
                      nationals entering Canada by air only.
                    </p>
                    <h4 className="font-bold text-gray-800 mb-2">
                      Who Needs an eTA in 2025?
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">-</span>
                        <span>
                          Travelers from visa-exempt countries (e.g., UK,
                          Germany, France, Australia).
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">-</span>
                        <span>
                          Not required for U.S. citizens or those entering by
                          land/sea.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Changes in 2025 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Canada Visitor Visa & eTA Changes
                  </span>
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">
                      New eTA Validity Rules (2025):
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">-</span>
                        <span>
                          eTA is now linked to passport expiry (max 5 years).
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">-</span>
                        <span>
                          If you renew your passport, you must reapply for an
                          eTA.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">
                      Biometrics Expansion (Visitor Visa Applicants):
                    </h3>
                    <p className="text-gray-700">
                      More countries now require biometrics (fingerprints &
                      photos).
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Why Choose Us */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Why Choose North Vista Immigration
                  </span>
                </h2>
                <p className="text-gray-700 mb-8">
                  Navigating Canada's immigration rules can be complex. Our
                  certified consultants help with:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Error-free eTA & Visa Applications
                    </h3>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Visa Refusal Appeals
                    </h3>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Urgent Processing Requests
                    </h3>
                  </div>
                </div>
              </motion.div>

              {/* Common Reasons for Denial */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Why Are eTAs & Visitor Visas Denied?
                  </span>
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Insufficient travel history</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Weak ties to home country (no job, property, or family)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Criminal record or security concerns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Previous overstays in Canada</span>
                  </li>
                </ul>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 text-white text-center"
              >
                <h2 className="text-3xl font-bold mb-4">
                  Plan Your Visit to Canada Today
                </h2>
                <p className="text-xl mb-6 max-w-2xl mx-auto">
                  Whether you're visiting for tourism, business, or to see
                  family, we can help with your visa application.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="tel:+16476605758"
                    className="bg-white text-blue-600 hover:bg-gray-100 py-3 px-8 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-md"
                  >
                    Call Us: +1 647 660-5758
                  </a>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-md">
                    Get A Quote
                  </button>
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

export default VisitorVisa;
