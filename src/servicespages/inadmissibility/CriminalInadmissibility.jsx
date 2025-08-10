import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const CriminalInadmissibility = () => {
  return (
    <>
      <Navbar/>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Criminal Inadmissibility to Canada
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              How to Overcome It and Achieve Your Canadian Immigration Goals
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
              {/* Introduction */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <p className="text-gray-700 mb-6">
                  If you have a criminal record, you may be deemed criminally inadmissible to Canada, which can prevent you from entering the country as a visitor, student, worker, or even as a permanent resident. At North Vista Immigration, we specialize in helping individuals overcome criminal inadmissibility and achieve their Canadian immigration goals.
                </p>
                <p className="text-gray-700">
                  Whether your conviction occurred inside or outside Canada, our team of experienced immigration professionals can guide you through the process of overcoming inadmissibility and securing your entry into Canada.
                </p>
              </motion.div>

              {/* What Makes You Inadmissible */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    What Makes You Criminally Inadmissible to Canada?
                  </span>
                </h2>
                <p className="text-gray-700 mb-6">
                  You may be found Criminally Inadmissible to Canada under the following circumstances:
                </p>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">
                      For Convictions Outside Canada:
                    </h3>
                    <ul className="space-y-3 list-disc pl-5">
                      <li>
                        You have been convicted of an act that, if committed in Canada, would be equivalent to an indictable offence punishable by a sentence of less than ten years.
                      </li>
                      <li>
                        You have been convicted of two or more acts that, if committed in Canada, would be equivalent to summary offences.
                      </li>
                      <li>
                        You have been convicted of an act that, if committed in Canada, would be equivalent to a hybrid offence punishable by a sentence of less than ten years.
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">
                      For Convictions Inside Canada:
                    </h3>
                    <ul className="space-y-3 list-disc pl-5">
                      <li>
                        You have been convicted of an indictable offense punishable by a sentence of less than ten years.
                      </li>
                      <li>
                        You have been convicted of two or more summary offences.
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* How to Overcome */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    How to Overcome Criminal Inadmissibility to Canada
                  </span>
                </h2>
                <p className="text-gray-700 mb-8">
                  At North Vista Immigration, we help clients overcome criminal inadmissibility through the following solutions:
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Temporary Resident Permit (TRP)
                    </h3>
                    <p className="text-gray-700">
                      A TRP is a temporary solution that allows criminally inadmissible individuals to enter Canada for a specific period. Whether you need to visit Canada for work, study, or personal reasons, a TRP can be valid for up to three years.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Criminal Rehabilitation
                    </h3>
                    <p className="text-gray-700">
                      Criminal Rehabilitation is a permanent solution for overcoming inadmissibility. It involves proving to Canadian authorities that you have been rehabilitated and are unlikely to commit future crimes.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Record Suspension (Pardon)
                    </h3>
                    <p className="text-gray-700">
                      If your conviction occurred in Canada, you may need to apply for a Record Suspension (formerly a Pardon) from the Parole Board of Canada (PBC) to regain admissibility.
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
                  Don't let a criminal record stand in the way of your Canadian immigration goals. Contact North Vista Immigration today to schedule a consultation and learn how we can help you overcome criminal inadmissibility.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Expert Guidance
                    </h3>
                    <p className="text-gray-700">
                      Our team is well-versed in Canadian immigration laws and policies regarding criminal inadmissibility.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Personalized Solutions
                    </h3>
                    <p className="text-gray-700">
                      We assess your specific situation and recommend the best approach (TRP, Rehabilitation, or Pardon).
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Proven Success
                    </h3>
                    <p className="text-gray-700">
                      We've helped numerous clients with criminal records successfully enter Canada.
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
                  Don't let a criminal record prevent you from entering Canada. We can help you explore your options.
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

export default CriminalInadmissibility;