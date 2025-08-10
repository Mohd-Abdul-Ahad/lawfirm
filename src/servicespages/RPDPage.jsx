import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const RPDPage = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Refugee Protection Division (RPD) in Canada: Your Path to Safety
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              At North Vista Immigration, we understand that seeking refuge in Canada is a life-changing decision.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Assessment Form */}
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

            {/* Content Sections */}
            <div className="md:col-span-2 space-y-12">
              {/* About RPD Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    What is the Refugee Protection Division (RPD)?
                  </span>
                </h2>
                <p className="text-gray-700 mb-6">
                  The Refugee Protection Division (RPD) of the Immigration and Refugee Board of Canada (IRB) is critical in determining whether individuals qualify for refugee protection in Canada. If you or your loved ones are fleeing persecution, violence, or danger, our experienced team is here to guide you through the process with compassion and expertise.
                </p>
                <p className="text-gray-700 mb-6">
                  The Refugee Protection Division (RPD) is an independent tribunal responsible for hearing and deciding claims for refugee protection in Canada. It operates under the Immigration and Refugee Board of Canada (IRB), ensuring fair and efficient processes for individuals seeking safety.
                </p>
                <p className="text-gray-700">
                  Refugee protection is granted to individuals who meet the definition of a Convention refugee or a person in need of protection under Canadian law. This includes those who fear persecution based on race, religion, nationality, political opinion, or membership in a particular social group, as well as those at risk of torture, cruel treatment, or danger to their life.
                </p>
              </motion.div>

              {/* Eligibility Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Who Can Apply for Refugee Protection in Canada?
                  </span>
                </h2>
                <p className="text-gray-700 mb-6">
                  To be eligible to make a refugee claim in Canada, you must:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                  <li>Be outside your home country and unable or unwilling to return due to a well-founded fear of persecution.</li>
                  <li>Not have a safe third country where you can seek protection (with some exceptions under the Safe Third Country Agreement).</li>
                  <li>Meet the eligibility criteria set by the Canadian government.</li>
                </ul>
                <p className="text-gray-700">
                  If you are already in Canada, you can make a refugee claim at a port of entry or an Immigration, Refugees and Citizenship Canada (IRCC) office. If you are outside Canada, you may be referred by the United Nations Refugee Agency (UNHCR) or another organization.
                </p>
              </motion.div>

              {/* Why Choose Us Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Why Choose North Vista Immigration for Your Refugee Claim?
                  </span>
                </h2>
                <p className="text-gray-700 mb-6">
                  Navigating the refugee claim process can be overwhelming, especially during such a challenging time in your life. At North Vista Immigration, we are committed to providing:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-blue-800 mb-2">Expert Guidance</h3>
                    <p className="text-gray-700 text-sm">Our team is well-versed in Canadian immigration law and the RPD process.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-blue-800 mb-2">Personalized Support</h3>
                    <p className="text-gray-700 text-sm">We tailor our services to meet your unique needs and circumstances.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-blue-800 mb-2">Legal Accuracy</h3>
                    <p className="text-gray-700 text-sm">We ensure all applications and documentation comply with Canadian laws and regulations.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-blue-800 mb-2">Compassionate Care</h3>
                    <p className="text-gray-700 text-sm">We treat every client with dignity and respect, understanding the challenges you face.</p>
                  </div>
                </div>
              </motion.div>

              {/* Process Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    The Refugee Claim Process: Step-by-Step
                  </span>
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      <span className="font-bold text-blue-800 text-lg">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1 text-lg">
                        Submit Your Claim
                      </h3>
                      <p className="text-gray-700">File your refugee claim with the appropriate Canadian authority (e.g., at a port of entry or IRCC office).</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      <span className="font-bold text-blue-800 text-lg">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1 text-lg">
                        Receive a Referral to the RPD
                      </h3>
                      <p className="text-gray-700">Once your claim is accepted, it will be referred to the Refugee Protection Division for a hearing.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      <span className="font-bold text-blue-800 text-lg">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1 text-lg">
                        Prepare Your Case
                      </h3>
                      <p className="text-gray-700">Gather evidence, documents, and testimony to support your claim. This includes proof of identity, evidence of persecution, and other relevant information.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      <span className="font-bold text-blue-800 text-lg">4</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1 text-lg">
                        Attend Your Hearing
                      </h3>
                      <p className="text-gray-700">The RPD will schedule a hearing where you can present your case. You may bring legal representation, witnesses, and interpreters.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-blue-600 rounded-xl shadow-lg p-8 text-white text-center"
              >
                <div className="max-w-2xl mx-auto">
                  <h2 className="text-3xl font-bold mb-4">
                    Need Immediate Protection?
                  </h2>
                  <p className="text-xl mb-6">
                    We provide emergency consultations for urgent cases
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                      href="tel:+16476605758"
                      className="inline-block bg-white text-blue-600 hover:bg-gray-100 py-3 px-8 rounded-lg font-semibold text-lg shadow-md transition duration-300"
                    >
                      Call Now: +1 647 660-5758
                    </a>
                    <button className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 py-3 px-8 rounded-lg font-semibold text-lg shadow-md transition duration-300">
                      Get A Quote
                    </button>
                  </div>
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

export default RPDPage;










