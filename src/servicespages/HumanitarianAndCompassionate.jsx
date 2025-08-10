import React from "react";
import { motion } from "framer-motion";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const HumanitarianAndCompassionate = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Humanitarian and Compassionate (H&C) Grounds Applications
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              A Path to Stay in Canada
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
              {/* What is H&C */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    What Are Humanitarian and Compassionate (H&C) Grounds?
                  </span>
                </h2>
                <p className="text-gray-700 mb-6">
                  The Humanitarian and Compassionate (H&C) Grounds provision
                  allows individuals who do not meet the usual requirements for
                  permanent residency to apply for an exception. This provision
                  is based on the principles of fairness and compassion,
                  recognizing that some individuals may face unique hardships if
                  forced to leave Canada.
                </p>
                <p className="text-gray-700 mb-6">
                  H&C applications are assessed on a case-by-case basis,
                  considering factors such as:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Your establishment in Canada (e.g., employment, community
                      involvement, family ties).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      The best interests of any children affected by your
                      application.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Hardships you or your family may face if you are required
                      to leave Canada.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Risks or adverse conditions in your home country.
                    </span>
                  </li>
                </ul>
              </motion.div>

              {/* Who Can Apply */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Who Can Apply for H&C Consideration?
                  </span>
                </h2>
                <p className="text-gray-700 mb-6">
                  You may be eligible to apply for H&C consideration if:
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>You are currently in Canada.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      You do not qualify for permanent residency through other
                      immigration programs.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      You can demonstrate that you would face unusual,
                      undeserved, or disproportionate hardships if you were
                      required to leave Canada.
                    </span>
                  </li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                  <p className="font-bold text-blue-800 mb-2">Note:</p>
                  <p className="text-gray-700">
                    You cannot apply for H&C grounds if you have a pending
                    refugee claim or if you have been found ineligible to make a
                    refugee claim. Additionally, certain individuals with
                    removal orders may be restricted from applying.
                  </p>
                </div>
              </motion.div>

              {/* Key Factors */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Key Factors Considered in H&C Applications
                  </span>
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">
                      Establishment in Canada
                    </h3>
                    <p className="text-gray-700">
                      How long have you lived in Canada? Do you have a job, own
                      property, or contribute to your community? Do you have
                      strong family or social ties in Canada?
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">
                      Best Interests of Children
                    </h3>
                    <p className="text-gray-700">
                      How would your removal from Canada affect any children
                      involved? Are the children established in Canadian schools
                      or communities?
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">
                      Hardships if Removed from Canada
                    </h3>
                    <p className="text-gray-700">
                      What challenges would you face if you returned to your
                      home country? Are there risks to your safety, health, or
                      well-being?
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">
                      Country Conditions
                    </h3>
                    <p className="text-gray-700">
                      What is the current situation in your home country? Are
                      there political, economic, or social conditions that would
                      make your return difficult?
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Why Choose Us */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Why Choose North Vista Immigration?
                  </span>
                </h2>
                <p className="text-gray-700 mb-8">
                  Applying for permanent residency on Humanitarian and
                  Compassionate Grounds is a complex and highly discretionary
                  process. At North Vista Immigration, we provide:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Expert Guidance
                    </h3>
                    <p className="text-gray-700">
                      Our team is well-versed in Canadian immigration law and
                      H&C application requirements.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Personalized Support
                    </h3>
                    <p className="text-gray-700">
                      We tailor our services to meet your unique needs and
                      circumstances.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Strong Case Preparation
                    </h3>
                    <p className="text-gray-700">
                      We help you gather compelling evidence and present a
                      persuasive case to IRCC.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Compassionate Care
                    </h3>
                    <p className="text-gray-700">
                      We understand the challenges you face and are here to
                      support you every step of the way.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 text-white text-center"
              >
                <h2 className="text-3xl font-bold mb-4">
                  Take the First Step Today
                </h2>
                <p className="text-xl mb-6 max-w-2xl mx-auto">
                  Don't let your current situation prevent you from staying in
                  Canada. We can help you explore your options.
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

export default HumanitarianAndCompassionate;
