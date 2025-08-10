import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const FinancialInadmissibility = () => {
  return (
    <>
      <Navbar />
      
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Financial Inadmissibility to Canada
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Meeting Canada's Financial Requirements for Immigration
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
                    Financial Inadmissibility Rules
                  </span>
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    According to Canadian immigration law, a foreign national may be found inadmissible if:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>They are or will be unable to support themselves or any dependents</li>
                    <li>They are unwilling to support themselves or any dependents</li>
                    <li>They cannot demonstrate to an immigration officer that adequate arrangements for care and support have been made without relying on social assistance</li>
                  </ul>
                  <p>
                    This rule ensures that individuals entering Canada are financially self-sufficient and do not place undue strain on public resources.
                  </p>
                </div>
              </motion.div>

              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    What Does This Mean for You?
                  </span>
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    If you are applying for a visa, work permit, or permanent residency in Canada, you must prove that you have sufficient financial resources to support yourself and any dependents. This includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Providing evidence of stable income or savings</li>
                    <li>Demonstrating a clear plan for financial stability in Canada</li>
                    <li>Showing that you have made adequate arrangements for care and support (e.g., through employment, family support, or private funds)</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    How North Vista Immigration Can Help
                  </span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">Financial Assessment</h3>
                    <p className="text-gray-700">
                      We evaluate your financial situation and help you determine if you meet the requirements.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">Document Preparation</h3>
                    <p className="text-gray-700">
                      We assist in gathering and organizing proof of funds, employment letters, and other supporting documents.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">Application Guidance</h3>
                    <p className="text-gray-700">
                      Our team ensures your application is tailored to meet Canadian immigration standards, minimizing the risk of inadmissibility.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">Ongoing Support</h3>
                    <p className="text-gray-700">
                      From start to finish, we provide personalized advice to help you achieve your immigration goals.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Proof of Funds Requirements
                  </span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-bold text-green-800 mb-3">
                      Acceptable Evidence
                    </h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Bank statements showing sufficient funds</li>
                      <li>Employment letters confirming income</li>
                      <li>Investment documents</li>
                      <li>Sponsorship documentation</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-bold text-green-800 mb-3">
                      Support Plans
                    </h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Job offers in Canada</li>
                      <li>Family support agreements</li>
                      <li>Business plans for entrepreneurs</li>
                      <li>Scholarship or funding letters for students</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  Why Choose North Vista Immigration?
                </h3>
                <p className="text-gray-700 mb-4">
                  With years of experience in Canadian immigration law, North Vista Immigration is your trusted partner in navigating complex immigration rules. We are committed to providing accurate, reliable, and personalized services to help you achieve your dreams of living, working, or studying in Canada.
                </p>
                <button className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-medium">
                  Get A Quote
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default FinancialInadmissibility;