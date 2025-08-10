import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const FederalCourtAppeals = () => {
  return (
    <>
      <Navbar/>
      
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Federal Court Appeals in Canada: Challenging Immigration Decisions
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              At North Vista Immigration, we understand that receiving a negative immigration decision can be disheartening. However, you may have the right to challenge the decision.
            </p>
          </div>
        </section>

        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
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

            <div className="md:col-span-2 space-y-12">
              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    What is a Federal Court Appeal?
                  </span>
                </h2>
                <p className="text-gray-700 mb-6">
                  A Federal Court Appeal, also known as a Judicial Review, is a legal process where the Federal Court of Canada reviews the decision of an immigration officer, tribunal, or board to determine if it was fair, reasonable, and lawful.
                </p>
                
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                  Common Immigration Decisions That Can Be Appealed:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p>Refusal of a refugee claim by the RPD or RAD</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p>Denial of a permanent residency application</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p>Refusal of a TRV, work permit, or study permit</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p>Removal orders or deportation decisions</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p>Negative decisions on H&C applications</p>
                  </div>
                </div>
              </motion.div>

              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Why Choose North Vista Immigration?
                  </span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 text-xl mb-2">Expert Case Assessment</h3>
                    <p>We review your case to determine the strongest grounds for appeal.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 text-xl mb-2">Strong Legal Arguments</h3>
                    <p>Our team prepares compelling written submissions and represents you at the hearing.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 text-xl mb-2">Timely Filing</h3>
                    <p>We ensure your application is filed within the strict deadlines.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 text-xl mb-2">Personalized Guidance</h3>
                    <p>We stand by you every step of the way, ensuring you understand the process.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    The Federal Court Appeal Process
                  </span>
                </h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-6 py-2">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">1. Filing the Application</h3>
                    <p>You must file within 15 to 30 days of receiving the decision, depending on the type of decision.</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-6 py-2">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">2. The Leave Stage</h3>
                    <p>The Federal Court will first decide whether to grant "leave" (permission) to proceed with the judicial review.</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-6 py-2">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">3. The Hearing Stage</h3>
                    <p>If leave is granted, the Federal Court will hold a hearing where arguments are presented.</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-6 py-2">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">4. Possible Outcomes</h3>
                    <p>The court may dismiss your application or allow it, overturning the decision and sending it back for reconsideration.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-800 mb-2">
                  Time-Sensitive Appeals
                </h3>
                <p className="text-gray-700 mb-4">
                  Some appeals must be filed within 15 days - contact us immediately to protect your rights.
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
      
      <Footer/>
    </>
  );
};

export default FederalCourtAppeals;