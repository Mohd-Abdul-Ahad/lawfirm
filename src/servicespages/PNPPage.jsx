import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const PNPPage = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-b from-blue-50 to-white">
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Provincial Nominee Programs
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Provincial Pathways to Permanent Residency
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
              {/* What are PNPs */}
              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    What are Provincial Nominee Programs (PNPs)?
                  </span>
                </h2>
                <p className="text-gray-700 mb-4">
                  PNPs are immigration pathways that allow Canadian provinces and territories to nominate individuals for Permanent Residency based on their ability to meet specific local labor market and economic needs.
                </p>
                <p className="text-gray-700">
                  Each province has its own PNP streams targeting:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Skilled Workers in high-demand occupations</li>
                  <li>Entrepreneurs and business investors</li>
                  <li>International graduates from Canadian institutions</li>
                </ul>
              </motion.div>

              {/* Eligibility Criteria */}
              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Eligibility Criteria
                  </span>
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">Skills and Work Experience</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Most PNPs require 1-2 years of skilled work experience (NOC TEER 0-3)</li>
                      <li>Some provinces publish lists of in-demand occupations</li>
                      <li>Entrepreneurs need relevant business experience and a viable plan</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">Connection to the Province</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Many streams require a valid job offer from a provincial employer</li>
                      <li>Previous work or study in the province is beneficial</li>
                      <li>Family or community ties can improve chances</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">Language and Education</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Minimum CLB 4 in English/French (language test required)</li>
                      <li>Education equivalent to Canadian standards (ECA may be needed)</li>
                      <li>Canadian graduates may qualify for special streams</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">Financial Stability</h3>
                    <p className="text-gray-700 pl-6">
                      Must demonstrate sufficient funds to support yourself and family during initial settlement
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Popular PNP Streams */}
              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Popular PNP Streams by Province
                  </span>
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">Ontario Immigrant Nominee Program (OINP)</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <span className="font-semibold">Human Capital Priorities Stream:</span> Targets Express Entry candidates with CRS as low as 350
                      </li>
                      <li>
                        <span className="font-semibold">Employer Job Offer Stream:</span> For foreign workers, students, and in-demand skills
                      </li>
                      <li>
                        <span className="font-semibold">Entrepreneur Stream:</span> For business owners establishing/purchasing in Ontario
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">British Columbia Provincial Nominee Program (BC PNP)</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <span className="font-semibold">Skills Immigration Stream:</span> For skilled workers in healthcare, tech, etc.
                      </li>
                      <li>
                        <span className="font-semibold">Tech Stream:</span> Fast-track for tech workers with BC job offers
                      </li>
                      <li>
                        <span className="font-semibold">Entrepreneur Immigration Stream:</span> For job-creating business owners
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">Alberta Advantage Immigration Program (AAIP)</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <span className="font-semibold">Alberta Opportunity Stream:</span> For temporary foreign workers in Alberta
                      </li>
                      <li>
                        <span className="font-semibold">Express Entry Stream:</span> For candidates with Alberta ties
                      </li>
                      <li>
                        <span className="font-semibold">Farm Stream:</span> For experienced farm workers
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">Saskatchewan Immigrant Nominee Program (SINP)</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <span className="font-semibold">International Skilled Worker Stream:</span> For those with job offers or in-demand skills
                      </li>
                      <li>
                        <span className="font-semibold">Entrepreneur Stream:</span> For business investors
                      </li>
                      <li>
                        <span className="font-semibold">Saskatchewan Experience Stream:</span> For those with provincial work/study experience
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">Manitoba Provincial Nominee Program (MPNP)</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <span className="font-semibold">Skilled Worker Overseas Stream:</span> For candidates with Manitoba connections
                      </li>
                      <li>
                        <span className="font-semibold">Skilled Worker in Manitoba Stream:</span> For current workers/graduates
                      </li>
                      <li>
                        <span className="font-semibold">Business Investor Stream:</span> For entrepreneurs establishing businesses
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Application Process */}
              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Step-by-Step PNP Process
                  </span>
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <span className="font-bold text-blue-800">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Choose Province & Stream</h3>
                      <p className="text-gray-700">Research and select the PNP that matches your skills and goals</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <span className="font-bold text-blue-800">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Check Eligibility</h3>
                      <p className="text-gray-700">Review all requirements for your chosen stream</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <span className="font-bold text-blue-800">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Submit EOI/Application</h3>
                      <p className="text-gray-700">Some provinces require Expression of Interest first</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <span className="font-bold text-blue-800">4</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Receive Nomination</h3>
                      <p className="text-gray-700">Adds 600 CRS points if aligned with Express Entry</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <span className="font-bold text-blue-800">5</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Apply for PR</h3>
                      <p className="text-gray-700">Submit application to IRCC with provincial nomination</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <span className="font-bold text-blue-800">6</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Move to Province</h3>
                      <p className="text-gray-700">Settle in nominating province and fulfill commitments</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Benefits of PNPs
                  </span>
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">Pathway to PR</h3>
                    <p>For those who may not qualify for federal programs</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">Faster Processing</h3>
                    <p>Express Entry-aligned streams have priority processing</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">Tailored to Local Needs</h3>
                    <p>Targets in-demand occupations in specific provinces</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">Flexibility</h3>
                    <p>80+ streams across Canada for various candidates</p>
                  </div>
                </div>
              </motion.div>

              {/* Why Choose Us */}
              <motion.div className="bg-blue-600 rounded-xl shadow-lg p-8 text-white">
                <h2 className="text-3xl font-bold mb-6">Why Choose North Vista Immigration?</h2>
                <p className="text-xl mb-6">
                  Our team of Regulated Canadian Immigration Consultants (RCICs) specializes in PNP applications.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-700 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Eligibility Assessment</h3>
                    <p>Determine which PNP stream is best for you</p>
                  </div>
                  <div className="bg-blue-700 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Document Preparation</h3>
                    <p>Ensure your application is complete and accurate</p>
                  </div>
                  <div className="bg-blue-700 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Application Submission</h3>
                    <p>Guide you through the submission process</p>
                  </div>
                  <div className="bg-blue-700 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Ongoing Support</h3>
                    <p>Provide updates and assistance throughout the process</p>
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

export default PNPPage;