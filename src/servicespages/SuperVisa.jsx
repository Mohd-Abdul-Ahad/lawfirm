import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const SuperVisa = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Canada Super Visa
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              A Complete Guide to Eligibility, Requirements, and Application
              Process
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
              {/* What is Super Visa */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    What is a Super Visa?
                  </span>
                </h2>
                <p className="text-gray-700 mb-6">
                  The Super Visa is a multi-entry visa that allows parents and
                  grandparents of Canadian citizens and Permanent Residents to
                  visit Canada for up to 5 years per entry. It is valid for up
                  to 10 years, and holders can enter Canada multiple times
                  during this period.
                </p>
                <p className="text-gray-700 mb-6">
                  Unlike a regular visitor visa, the Super Visa is specifically
                  designed for long-term stays, making it an ideal option for
                  families who want to reunite for extended periods.
                </p>
              </motion.div>

              {/* Eligibility Criteria */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Eligibility Criteria for the Super Visa
                  </span>
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">
                      Eligibility for Parents and Grandparents
                    </h3>
                    <p className="text-gray-700 mb-4">
                      To qualify for a Super Visa, the applicant must:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          Be the parent or grandparent of a Canadian citizen or
                          Permanent Resident.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          Provide a written commitment of financial support from
                          their child or grandchild in Canada.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          Have private medical insurance from a Canadian
                          insurance company that meets the specified
                          requirements.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          Undergo a medical examination to prove they are
                          admissible to Canada.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">
                      Eligibility for the Sponsor (Child or Grandchild in
                      Canada)
                    </h3>
                    <p className="text-gray-700 mb-4">The sponsor must:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          Be a Canadian citizen or Permanent Resident.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          Meet the Minimum Necessary Income (MNI) requirement
                          based on the Low-Income Cut-Off (LICO) for the past 12
                          months.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          Provide a written commitment of financial support for
                          the duration of the visit.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Key Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Key Requirements for the Super Visa
                  </span>
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Proof of Relationship
                    </h3>
                    <p className="text-gray-700">
                      The applicant must provide documents proving their
                      relationship to the Canadian citizen or Permanent Resident
                      (e.g., birth certificates, marriage certificates).
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Financial Support
                    </h3>
                    <p className="text-gray-700">
                      The sponsor must provide proof of income, such as Notice
                      of Assessment (NOA) or T4 slips for the past 12 months.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Medical Insurance
                    </h3>
                    <p className="text-gray-700">
                      The applicant must purchase private medical insurance from
                      a Canadian insurance company that meets the specified
                      requirements.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Medical Examination
                    </h3>
                    <p className="text-gray-700">
                      The applicant must undergo a medical examination by a
                      panel physician approved by IRCC.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg md:col-span-2">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Ties to Home Country
                    </h3>
                    <p className="text-gray-700">
                      The applicant must demonstrate strong ties to their home
                      country, such as family, employment, or property, to prove
                      they will return after their visit.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Benefits of the Super Visa
                  </span>
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Extended Stay
                    </h3>
                    <p className="text-gray-700">
                      Super Visa holders can stay in Canada for up to 5 years
                      per entry, compared to 6 months for regular visitor visas.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Multiple Entries
                    </h3>
                    <p className="text-gray-700">
                      The Super Visa is valid for up to 10 years, allowing
                      multiple entries during this period.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Family Reunification
                    </h3>
                    <p className="text-gray-700">
                      The Super Visa facilitates long-term family reunification,
                      allowing parents and grandparents to spend extended time
                      with their loved ones.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      No Status Renewal
                    </h3>
                    <p className="text-gray-700">
                      Super Visa holders do not need to renew their status
                      during their stay, as long as they leave and re-enter
                      Canada before the visa expires.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Why Choose Us */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Why Choose North Vista Immigration?
                  </span>
                </h2>
                <p className="text-gray-700 mb-8">
                  Navigating the Super Visa application process can be complex,
                  but our team of Regulated Canadian Immigration Consultants
                  (RCICs) is here to help. We offer:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Eligibility Assessment
                    </h3>
                    <p className="text-gray-700">
                      Determine if you meet the requirements for the Super Visa.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Document Preparation
                    </h3>
                    <p className="text-gray-700">
                      Ensure your application is complete and accurate.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Application Submission
                    </h3>
                    <p className="text-gray-700">
                      Guide you through the submission process.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Ongoing Support
                    </h3>
                    <p className="text-gray-700">
                      Provide updates and assistance throughout the process.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 text-white text-center"
              >
                <h2 className="text-3xl font-bold mb-4">
                  Reunite Your Family in Canada
                </h2>
                <p className="text-xl mb-6 max-w-2xl mx-auto">
                  The Super Visa makes it easier than ever for parents and
                  grandparents to visit Canada for extended stays.
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

export default SuperVisa;
