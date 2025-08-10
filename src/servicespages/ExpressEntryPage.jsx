import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ExpressEntryPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Express Entry to Canada
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Fast-Track Your Permanent Residency Application
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
                     Book An Appointment
                  </button>
                </form>
              </div>
            </div>

            <div className="md:col-span-2 space-y-12">
              {/* Introduction */}
              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Canada's Express Entry System
                  </span>
                </h2>
                <p className="text-gray-700 mb-6">
                  Express Entry is an online system used by the Canadian government to manage applications for three federal economic immigration programs:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Federal Skilled Worker Program (FSWP)</li>
                  <li>Federal Skilled Trades Program (FSTP)</li>
                  <li>Canadian Experience Class (CEC)</li>
                </ul>
                <p className="text-gray-700">
                  Candidates who meet the eligibility criteria can create an Express Entry profile, receive a Comprehensive Ranking System (CRS) score, and potentially receive an Invitation to Apply (ITA) for Permanent Residency.
                </p>
              </motion.div>

              {/* Eligibility Criteria */}
              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Eligibility Criteria
                  </span>
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">Federal Skilled Worker Program (FSWP)</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <span className="font-semibold">Work Experience:</span> At least 1 year of continuous, full-time skilled work in NOC TEER 0, 1, 2, or 3 occupation within last 10 years
                      </li>
                      <li>
                        <span className="font-semibold">Language Proficiency:</span> Minimum CLB 7 in English or French (IELTS 6.0 in all abilities)
                      </li>
                      <li>
                        <span className="font-semibold">Education:</span> Canadian diploma or foreign credential with ECA
                      </li>
                      <li>
                        <span className="font-semibold">Points Requirement:</span> Score at least 67/100 on FSWP grid (age, education, experience, language, adaptability)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">Federal Skilled Trades Program (FSTP)</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <span className="font-semibold">Work Experience:</span> At least 2 years of full-time work in a skilled trade within last 5 years
                      </li>
                      <li>
                        <span className="font-semibold">Job Offer or Certificate:</span> Valid job offer for 1+ year or Canadian certificate of qualification
                      </li>
                      <li>
                        <span className="font-semibold">Language Proficiency:</span> Minimum CLB 5 for speaking/listening, CLB 4 for reading/writing
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">Canadian Experience Class (CEC)</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <span className="font-semibold">Work Experience:</span> At least 1 year of skilled work in Canada within last 3 years (NOC TEER 0-3)
                      </li>
                      <li>
                        <span className="font-semibold">Language Proficiency:</span> Minimum CLB 7 for NOC 0/1 jobs, CLB 5 for NOC 2/3 jobs
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* CRS Score Improvement */}
              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    How to Improve Your CRS Score
                  </span>
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Improve Language Scores</h3>
                      <p className="text-gray-700">Retake language tests to achieve higher CLB levels</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Gain Additional Work Experience</h3>
                      <p className="text-gray-700">Accumulate more skilled work experience</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Obtain a Provincial Nomination</h3>
                      <p className="text-gray-700">Adds 600 points to your CRS score</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Pursue Higher Education</h3>
                      <p className="text-gray-700">Complete additional degrees or diplomas</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Secure a Valid Job Offer</h3>
                      <p className="text-gray-700">Can add 50 or 200 points to your score</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Why Choose Us */}
              <motion.div className="bg-blue-600 rounded-xl shadow-lg p-8 text-white">
                <h2 className="text-3xl font-bold mb-6">Why Choose North Vista Immigration?</h2>
                <p className="text-xl mb-6">
                  Our team of Regulated Canadian Immigration Consultants (RCICs) is here to help you navigate the Express Entry system.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-700 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Eligibility Assessment</h3>
                    <p>Determine your eligibility and CRS score</p>
                  </div>
                  <div className="bg-blue-700 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Document Preparation</h3>
                    <p>Ensure your application is complete and accurate</p>
                  </div>
                  <div className="bg-blue-700 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">CRS Optimization</h3>
                    <p>Provide strategies to improve your CRS score</p>
                  </div>
                  <div className="bg-blue-700 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Ongoing Support</h3>
                    <p>Guide you through every step of the process</p>
                  </div>
                </div>

                <div className="mt-8 bg-blue-700 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Need Immediate Assistance?</h3>
                  <a
                    href="tel:+16476605758"
                    className="inline-block bg-white text-blue-600 hover:bg-gray-100 py-3 px-8 rounded-lg font-medium text-lg mt-4"
                  >
                    Call Now: +1 647 660-5758
                  </a>
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

export default ExpressEntryPage;