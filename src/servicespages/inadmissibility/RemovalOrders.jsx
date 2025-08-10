import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const RemovalOrders = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Removal Orders in Canada
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Understand your options and protect your status in Canada
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input 
                      type="tel" 
                      placeholder="e.g. +1 647 660-5758" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                    <p className="mt-1 text-xs text-gray-500">Please enter phone number with country code.</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Postal/Zip Code *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. M5V 3L9" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Country of residence *</label>
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
              {/* What is Removal Order */}
              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Understanding Removal Orders
                  </span>
                </h2>

                <p className="text-gray-700 mb-6">
                  Legal directives requiring you to leave Canada, issued by:
                </p>

                <ul className="space-y-2 list-disc pl-5 mb-6">
                  <li>
                    Immigration Division (ID) or Immigration Appeal Division
                    (IAD)
                  </li>
                  <li>Canada Border Services Agency (CBSA) officers</li>
                  <li>Following refugee claim refusal</li>
                </ul>
              </motion.div>

              {/* Types */}
              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Types of Removal Orders
                  </span>
                </h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-yellow-500 pl-4 py-2">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      1. Departure Order
                    </h3>
                    <ul className="space-y-1 list-disc pl-5">
                      <li>Leave within 30 days</li>
                      <li>Confirm departure with CBSA</li>
                      <li>Converts to Deportation Order if not complied</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4 py-2">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      2. Exclusion Order
                    </h3>
                    <ul className="space-y-1 list-disc pl-5">
                      <li>Leave and confirm departure</li>
                      <li>1-5 year re-entry ban</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4 py-2">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      3. Deportation Order
                    </h3>
                    <ul className="space-y-1 list-disc pl-5">
                      <li>Immediate removal</li>
                      <li>Requires Authorization to Return (ARC)</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Challenge Options */}
              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Can You Challenge a Removal Order?
                  </span>
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Permanent Residents
                    </h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Appeal to Immigration Appeal Division (IAD)</li>
                      <li>Federal Court judicial review</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Foreign Nationals
                    </h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Federal Court judicial review</li>
                      <li>Pre-Removal Risk Assessment (PRRA)</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Emergency CTA */}
              <motion.div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-800 mb-2">
                  Act Now - Time Is Critical
                </h3>
                <p className="text-gray-700 mb-4">
                  The sooner you take action, the more options you may have.
                  Contact us immediately if you've received a Removal Order.
                </p>
                <a
                  href="tel:+16476605758"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg font-medium"
                >
                  Call Now: +1 647 660-5758
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default RemovalOrders;
