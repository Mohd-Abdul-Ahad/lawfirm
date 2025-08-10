import React from "react";
import { motion } from "framer-motion";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const WorkPermit = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Work Permit for Canada
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Work and Build Your Career in Canada
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
              {/* What is Work Permit */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    What is a Work Permit?
                  </span>
                </h2>
                <p className="text-gray-700 mb-6">
                  A Work Permit is a document issued by Immigration, Refugees
                  and Citizenship Canada (IRCC) that allows foreign nationals to
                  work legally in Canada for a specific employer and duration.
                  Depending on your situation, you may need either an
                  Employer-Specific Work Permit or an Open Work Permit.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Employer-Specific Work Permit
                    </h3>
                    <p className="text-gray-700">
                      Allows you to work for a specific employer in a specific
                      location.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Open Work Permit
                    </h3>
                    <p className="text-gray-700">
                      Allows you to work for any employer in Canada, with some
                      restrictions.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Why Work in Canada */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Why Work in Canada?
                  </span>
                </h2>
                <p className="text-gray-700 mb-6">
                  Canada is one of the best countries in the world to work in,
                  offering numerous benefits for foreign workers:
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      <strong>Strong Economy:</strong> Canada has a stable and
                      growing economy with opportunities in various sectors.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      <strong>High Quality of Life:</strong> Canada is known for
                      its excellent healthcare, education, and social services.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      <strong>Pathway to Permanent Residency:</strong> Many work
                      permit holders transition to permanent residency through
                      programs like Express Entry.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      <strong>Diverse and Inclusive Society:</strong> Canada is
                      a multicultural country that welcomes people from all over
                      the world.
                    </span>
                  </li>
                </ul>
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
                    Why Choose North Vista Immigration?
                  </span>
                </h2>
                <p className="text-gray-700 mb-8">
                  Navigating the Work Permit process can be complex, but you
                  don't have to do it alone. Here's why thousands of clients
                  trust us:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Expert Guidance
                    </h3>
                    <p className="text-gray-700">
                      Our team of Regulated Canadian Immigration Consultants
                      (RCICs) has years of experience.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Personalized Service
                    </h3>
                    <p className="text-gray-700">
                      We offer personalized consultations to understand your
                      goals.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      End-to-End Support
                    </h3>
                    <p className="text-gray-700">
                      From job offer assistance to application submission, we're
                      with you.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      High Success Rate
                    </h3>
                    <p className="text-gray-700">
                      With a proven track record, we've helped countless
                      individuals.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 text-white text-center"
              >
                <h2 className="text-3xl font-bold mb-4">
                  Start Your Canadian Career Today
                </h2>
                <p className="text-xl mb-6 max-w-2xl mx-auto">
                  Working in Canada is an incredible opportunity to build a
                  successful career and enjoy a high quality of life.
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

export default WorkPermit;
