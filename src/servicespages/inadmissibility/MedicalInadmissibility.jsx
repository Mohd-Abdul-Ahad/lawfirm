import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const MedicalInadmissibility = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Medical Inadmissibility to Canada
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            What You Need to Know About Medical Conditions and Canadian Immigration
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
            {/* What is Medical Inadmissibility */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                  What is Medical Inadmissibility?
                </span>
              </h2>
              <p className="text-gray-700 mb-6">
                According to Canadian immigration law, a foreign national may be found medically inadmissible if their health condition:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Poses a danger to public health or safety</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Might reasonably be expected to cause excessive demand on Canada's health or social services</span>
                </li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <h3 className="font-bold text-blue-800 mb-2">Excessive demand refers to:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">-</span>
                    <span>Health services would exceed the average Canadian per capita costs over 5 years</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">-</span>
                    <span>Social services such as special education, personal support services, or rehabilitation</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* How to Overcome */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                  How to Overcome Medical Inadmissibility?
                </span>
              </h2>
              <p className="text-gray-700 mb-8">
                If you or a family member are found medically inadmissible, there are still options to pursue your Canadian immigration goals:
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Mitigation Measures</h3>
                  <p className="text-gray-700 mb-4">
                    You can demonstrate that you have a plan to cover the costs of your medical or social services, thereby reducing the burden on Canada's systems. This may include:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                    <li>Private health insurance</li>
                    <li>Proof of financial resources to cover medical expenses</li>
                    <li>A signed commitment from a family member or organization to cover costs</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Humanitarian and Compassionate (H&C) Considerations</h3>
                  <p className="text-gray-700">
                    In some cases, you may apply for H&C relief if you can demonstrate that your circumstances warrant an exception to the medical inadmissibility rules. This is assessed on a case-by-case basis.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Temporary Resident Permit (TRP)</h3>
                  <p className="text-gray-700">
                    If you need to enter Canada temporarily (e.g., for work, study, or family visits), you may apply for a Temporary Resident Permit (TRP). This permit allows individuals who are medically inadmissible to enter Canada for a specific period.
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
                  Why Choose North Vista Immigration?
                </span>
              </h2>
              <p className="text-gray-700 mb-8">
                Navigating medical inadmissibility can be complex, but you don't have to do it alone. At North Vista Immigration, we provide:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-3">Expert Guidance</h3>
                  <p className="text-gray-700">
                    Our team is well-versed in Canadian immigration laws and policies.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-3">Personalized Solutions</h3>
                  <p className="text-gray-700">
                    We tailor our services to your unique situation.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-3">Proven Success</h3>
                  <p className="text-gray-700">
                    We've helped countless clients overcome inadmissibility.
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
              <h2 className="text-3xl font-bold mb-4">Take the First Step Today</h2>
              <p className="text-xl mb-6 max-w-2xl mx-auto">
                Don't let a medical condition stand in the way of your Canadian immigration goals.
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
    <Footer/>
    </>
  );
};

export default MedicalInadmissibility;