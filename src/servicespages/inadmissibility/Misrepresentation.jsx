import React from 'react'
import { motion } from 'framer-motion';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const Misrepresentation = () => {
  return (
    <>
    <Navbar/>
   
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Misrepresentation in Canadian Immigration
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Protect your immigration status from misrepresentation findings
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
            {/* What is Misrepresentation */}
            <motion.div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                  What is Misrepresentation?
                </span>
              </h2>
              
              <p className="text-gray-700 mb-6">
                Providing false, inconsistent, or incomplete information to IRCC or CBSA, whether intentional or not.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <h3 className="font-bold text-blue-800 mb-2">Common Examples:</h3>
                <ul className="space-y-2">
                  <li>Undisclosed visa refusals</li>
                  <li>Forged/altered documents</li>
                  <li>Omitted family information</li>
                  <li>False employment history</li>
                  <li>Non-genuine marriage</li>
                </ul>
              </div>
            </motion.div>

            {/* Consequences */}
            <motion.div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                  Consequences
                </span>
              </h2>
              
              <ul className="space-y-3 list-disc pl-5">
                <li>5-year ban from Canada</li>
                <li>Inadmissibility for entire family</li>
                <li>Potential criminal charges</li>
                <li>Deportation if already in Canada</li>
              </ul>
            </motion.div>

            {/* How We Help */}
            <motion.div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                  How We Can Help
                </span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-3">Case Analysis</h3>
                  <p>Expert evaluation of your situation</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-3">Fairness Letters</h3>
                  <p>Professional responses to procedural fairness letters</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-3">Appeals</h3>
                  <p>Representation in appeals and hearings</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-3">Strategy</h3>
                  <p>Tailored solutions for your case</p>
                </div>
              </div>
            </motion.div>

            {/* Urgency CTA */}
            <motion.div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-red-800 mb-2">Act Quickly to Protect Your Rights</h3>
              <p className="text-gray-700 mb-4">
                Time is critical when dealing with misrepresentation allegations. Contact us immediately to begin building your defense.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg font-medium">
                Book An Appointment
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
     </>
  );
};
export default Misrepresentation




