import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const CaregiverImmigration = () => {
  return (
    <>
      <Navbar/>
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Canada Caregiver Immigration 2025
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            High-Demand Pathway to Permanent Residence
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                  Why Canada's Caregiver Program is a Top PR Pathway in 2025
                </span>
              </h2>
              <p className="text-gray-700 mb-6">
                Canada faces a critical shortage of qualified caregivers, with over 35,000 job vacancies in the home care and child care sectors. The government has responded by:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Prioritizing caregiver PR applications (faster processing)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Expanding annual intake to 5,500 principal applicants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Introducing new benefits for caregivers and families</span>
                </li>
              </ul>
            </motion.div>

            {/* PR Pathways */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                  Two Specialized PR Pathways for Caregivers
                </span>
              </h2>
              
              <div className="space-y-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Home Child Care Provider Pilot</h3>
                  <p className="text-gray-700 mb-4">
                    For professionals caring for children under 18 in private homes
                  </p>
                  <h4 className="font-bold text-gray-800 mb-2">2025 Requirements:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">-</span>
                      <span>Valid job offer from a Canadian family/agency</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">-</span>
                      <span>1+ year post-secondary education (or foreign equivalent)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">-</span>
                      <span>CLB 5 in English/French (IELTS 5.0+)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">-</span>
                      <span>6+ months full-time training OR 12+ months paid experience</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Home Support Worker Pilot</h3>
                  <p className="text-gray-700 mb-4">
                    For caregivers assisting seniors and people with disabilities
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">-</span>
                      <span>Now accepts part-time experience (if equivalent to 1 year full-time)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">-</span>
                      <span>Expanded eligible job titles (includes personal care aides)</span>
                    </li>
                  </ul>
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
                Our certified caregiver specialists provide:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-3">Job Matching</h3>
                  <p className="text-gray-700">
                    With pre-approved Canadian employers
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-3">Complete Application Preparation</h3>
                  <p className="text-gray-700">
                    Package preparation for your specific pathway
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-3">Work Permit & PR Filing</h3>
                  <p className="text-gray-700">
                    Comprehensive application submission support
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-3">Post-Arrival Support</h3>
                  <p className="text-gray-700">
                    Settlement assistance after you arrive in Canada
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Common Refusal Reasons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                  Common Refusal Reasons & How to Avoid Them
                </span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-3">Incomplete Work Experience</h3>
                  <p className="text-gray-700">
                    Must be 24 months full-time. Keep detailed pay stubs, tax records, employer letters.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-3">Non-Qualifying Job Duties</h3>
                  <p className="text-gray-700">
                    Must match NOC job description exactly.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-3">Language Test Expired</h3>
                  <p className="text-gray-700">
                    IELTS/CELPIP must be valid at the time of PR decision.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-3">Medical Inadmissibility</h3>
                  <p className="text-gray-700">
                    Complete the upfront medical exam with the panel physician.
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
              <h2 className="text-3xl font-bold mb-4">Start Your Caregiver Journey to Canada</h2>
              <p className="text-xl mb-6 max-w-2xl mx-auto">
                Take advantage of Canada's high-demand caregiver pathways to permanent residence.
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

export default CaregiverImmigration;