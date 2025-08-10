import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const PRRAPage = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-b from-blue-50 to-white">
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pre-Removal Risk Assessment (PRRA)
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Protecting Your Right to Stay in Canada
            </p>
          </div>
        </section>

        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sticky z-0">
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
                    What is a Pre-Removal Risk Assessment (PRRA)?
                  </span>
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    A Pre-Removal Risk Assessment (PRRA) is a process conducted
                    by Immigration, Refugees and Citizenship Canada (IRCC) to
                    determine whether a person facing removal from Canada would
                    be at risk of:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Persecution based on race, religion, nationality,
                      political opinion, or membership in a particular social
                      group.
                    </li>
                    <li>
                      Torture, risk to life, or risk of cruel and unusual
                      treatment or punishment if removed to their home country.
                    </li>
                  </ul>
                  <p>
                    The PRRA is a critical opportunity for individuals to
                    present evidence of the risks they may face if forced to
                    leave Canada.
                  </p>
                </div>
              </motion.div>

              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    PRRA Eligibility
                  </span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-bold text-green-800 mb-3">
                      You May Qualify If:
                    </h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>
                        You are in Canada and have received a Removal Order
                      </li>
                      <li>You are not subject to a stay of removal</li>
                      <li>
                        You have not already had a PRRA application assessed
                        within the last 12 months (or longer, depending on your
                        circumstances)
                      </li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="font-bold text-red-800 mb-3">
                      Ineligible If:
                    </h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>
                        Those who are inadmissible on grounds of security, human
                        rights violations, or organized crime
                      </li>
                      <li>
                        Those who have already been recognized as a Convention
                        refugee or protected person in another country
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Why Choose North Vista Immigration?
                  </span>
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">
                        Expert PRRA Guidance
                      </h3>
                      <p className="text-gray-700">
                        We assess your eligibility and guide you through every
                        step, ensuring your application is complete and
                        submitted on time.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">
                        Personalized Support
                      </h3>
                      <p className="text-gray-700">
                        We help gather strong evidence (e.g., country condition
                        reports, medical records, witness statements) and craft
                        a compelling narrative.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">
                        Proven Strategies
                      </h3>
                      <p className="text-gray-700">
                        We identify weaknesses, strengthen your case, and
                        prepare you for interviews to maximize your chances of
                        success.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">
                        Compassionate Service
                      </h3>
                      <p className="text-gray-700">
                        We provide clear communication and emergency support and
                        stand by you every step of the way.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Application Process
                  </span>
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      <span className="font-bold text-blue-800">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">
                        Receive PRRA Application Package
                      </h3>
                      <p className="text-gray-700">
                        If you are eligible for a PRRA, you will receive an
                        application package from the IRCC. This package includes
                        a PRRA application form and instructions on how to
                        complete and apply.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      <span className="font-bold text-blue-800">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">
                        Prepare Your Application
                      </h3>
                      <p className="text-gray-700">
                        Your PRRA application must include:
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>A completed application form</li>
                        <li>
                          A detailed explanation of the risks you face if
                          removed from Canada
                        </li>
                        <li>
                          Supporting evidence, such as country condition
                          reports, medical records, witness statements, police
                          reports or other legal documents
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      <span className="font-bold text-blue-800">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">
                        Submit Your Application
                      </h3>
                      <p className="text-gray-700">
                        You must submit your PRRA application within the
                        specified deadline, usually 15 days from the date you
                        receive the application package. If you miss the
                        deadline, you may lose your chance to apply.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      <span className="font-bold text-blue-800">4</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">
                        Attend a PRRA Interview (if required)
                      </h3>
                      <p className="text-gray-700">
                        In some cases, you may be asked to attend an interview
                        with an immigration officer to discuss your application
                        and provide additional information.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      <span className="font-bold text-blue-800">5</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">
                        Receive a Decision
                      </h3>
                      <p className="text-gray-700">
                        Once your application is reviewed, you will receive a
                        decision in writing. If your PRRA is approved, you may
                        be allowed to stay in Canada. If it is refused, you may
                        be required to leave the country.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-800 mb-2">
                  Act Immediately
                </h3>
                <p className="text-gray-700 mb-4">
                  You typically only have 15 days to apply after receiving the
                  package
                </p>
                <a
                  href="tel:+16476605758"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg font-medium"
                >
                  Emergency Call: +1 647 660-5758
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

export default PRRAPage;
