import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const ARCPage = () => {
  return (
    <>
      <Navbar/>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Authorization to Return to Canada (ARC)
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your Guide to Re-Entering Canada After a Removal Order
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
              {/* What is ARC */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    What is an Authorization to Return to Canada (ARC)?
                  </span>
                </h2>
                <p className="text-gray-700 mb-6">
                  An ARC is a document required for individuals who have been removed from Canada and wish to return. It is not always necessary, as it depends on the type of removal order issued. To find out if you need an ARC, review the document you received from Immigration, Refugees and Citizenship Canada (IRCC) or the Canada Border Services Agency (CBSA). The form number will indicate the type of removal order.
                </p>
              </motion.div>

              {/* Types of Removal Orders */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Types of Removal Orders and ARC Requirements
                  </span>
                </h2>
                
                <div className="space-y-8">
                  <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Departure Order Canada</h3>
                    <p className="text-gray-700 mb-4">
                      A Departure Order requires you to leave Canada within 30 days.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold text-green-700 mb-2">You do NOT need an ARC if you:</h4>
                      <ul className="space-y-2 list-disc pl-5">
                        <li>Left within the 30-day timeframe, and</li>
                        <li>Verified your departure with a Canadian immigration officer at the port of exit</li>
                      </ul>
                      <p className="mt-2">You can return to Canada subject to normal examination at the port of entry.</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg mt-4 border-l-4 border-yellow-400 pl-4">
                      <h4 className="font-bold text-yellow-700">Important:</h4>
                      <p>If you fail to verify your departure or stay longer than 30 days, the Departure Order automatically becomes a Deportation Order, and you must apply for an ARC to return.</p>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Exclusion Order Canada</h3>
                    <p className="text-gray-700 mb-4">
                      An Exclusion Order prohibits you from returning to Canada for a specific period, usually 12 months.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold text-green-700 mb-2">You do NOT need an ARC if:</h4>
                      <ul className="space-y-2 list-disc pl-5">
                        <li>12 months have passed since you left Canada, and</li>
                        <li>You have a Certificate of Departure (IMM 0056B) proving your departure date.</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg mt-4 border-l-4 border-red-400 pl-4">
                      <h4 className="font-bold text-red-700">However, you NEED an ARC if:</h4>
                      <ul className="space-y-2 list-disc pl-5">
                        <li>You wish to return before the 12 months end, or</li>
                        <li>You do not have a Certificate of Departure.</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Deportation Order Canada</h3>
                    <p className="text-gray-700 mb-4">
                      A Deportation Order permanently bars you from returning to Canada unless you obtain an ARC.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="font-bold text-red-700">If you were issued a Deportation Order, you MUST apply for an ARC to re-enter the country.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Additional Requirements */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Additional Requirements for Criminal Cases
                  </span>
                </h2>
                <p className="text-gray-700 mb-6">
                  If your deportation was due to criminal inadmissibility, you may also need to:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">Apply for criminal rehabilitation</h3>
                    <p className="text-gray-700">
                      Prove you've been rehabilitated and are no longer inadmissible due to your criminal record.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">Obtain a Temporary Resident Permit (TRP)</h3>
                    <p className="text-gray-700">
                      Temporary solution that allows you to enter Canada while awaiting rehabilitation approval.
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mt-6">
                  These additional steps ensure you meet all legal requirements for re-entry.
                </p>
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
                  Applying for an ARC can be complex, especially if your removal was due to criminal inadmissibility or if you need additional documents like a Temporary Resident Permit or Criminal Rehabilitation. North Vista Immigration can:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">Assess your situation</h3>
                    <p className="text-gray-700">
                      Determine if you need an ARC and what additional requirements apply to your case.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">Prepare a strong application</h3>
                    <p className="text-gray-700">
                      Help you gather all necessary documents and present your case effectively.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">Guide through requirements</h3>
                    <p className="text-gray-700">
                      Assist with additional steps like TRPs or Criminal Rehabilitation applications.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">Improve success chances</h3>
                    <p className="text-gray-700">
                      Maximize your likelihood of being approved to return to Canada.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* How to Apply */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    How to Apply for an ARC in Canada
                  </span>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Determining Eligibility</h3>
                      <p className="text-gray-700">Confirm whether you need an ARC based on your removal order type.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Preparing Your Application</h3>
                      <p className="text-gray-700">Gather all required documents, including your removal order, proof of departure, and a detailed explanation of why you should be allowed to return.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Submitting Your Application</h3>
                      <p className="text-gray-700">Apply for the ARC alongside your visa or permit application (if applicable).</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Paying the Fees</h3>
                      <p className="text-gray-700">The ARC application fee is separate from other immigration fees.</p>
                    </div>
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
                <h2 className="text-3xl font-bold mb-4">Need Help With Your ARC Application?</h2>
                <p className="text-xl mb-6 max-w-2xl mx-auto">
                  If you've been issued a removal order and need assistance with your Authorization to Return to Canada (ARC) application, contact us today.
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

export default ARCPage;