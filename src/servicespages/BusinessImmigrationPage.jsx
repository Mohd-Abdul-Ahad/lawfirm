import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const BusinessImmigrationPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Business Immigration Programs
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Pathways for Entrepreneurs, Investors, and Self-Employed Individuals
            </p>
          </div>
        </section>

        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Get A Quote
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
                    Submit
                  </button>
                </form>
              </div>
            </div>

            <div className="md:col-span-2 space-y-12">
              {/* Start-Up Visa Program */}
              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Start-Up Visa Program
                  </span>
                </h2>
                <p className="text-gray-700 mb-6">
                  Ideal for innovative entrepreneurs with the potential to build high-growth businesses in Canada.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">Eligibility Criteria</h3>
                    <ul className="list-disc pl-6 space-y-3">
                      <li>
                        <span className="font-semibold">Business Idea:</span> Must be innovative, scalable, and can create jobs for Canadians
                      </li>
                      <li>
                        <span className="font-semibold">Designated Organization Support:</span> Must secure commitment from:
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                          <li>Venture capital fund (minimum $200,000 investment)</li>
                          <li>Angel investor group (minimum $75,000 investment)</li>
                          <li>Business incubator (acceptance into their program)</li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-semibold">Language Proficiency:</span> CLB 5 in all four abilities (reading, writing, speaking, listening)
                      </li>
                      <li>
                        <span className="font-semibold">Settlement Funds:</span> Must prove sufficient funds to support yourself and family
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">Key Benefits</h3>
                    <ul className="list-disc pl-6 space-y-3">
                      <li>Fast-track to Permanent Residency (processing time: 12-16 months)</li>
                      <li>No minimum net worth requirement (other than settlement funds)</li>
                      <li>Ability to bring your family to Canada</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Self-Employed Persons Program */}
              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Self-Employed Persons Program
                  </span>
                </h2>
                <p className="text-gray-700 mb-6">
                  Designed for individuals with experience in cultural activities or athletics who can contribute to Canada's cultural or athletic landscape.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">Eligibility Criteria</h3>
                    <ul className="list-disc pl-6 space-y-3">
                      <li>
                        <span className="font-semibold">Relevant Experience:</span> At least 2 years in cultural activities or athletics (self-employed or world-class level)
                      </li>
                      <li>
                        <span className="font-semibold">Intent and Ability:</span> Must demonstrate intention and ability to become self-employed in Canada
                      </li>
                      <li>
                        <span className="font-semibold">Selection Criteria:</span> Points assessment in:
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                          <li>Experience (max 35 points)</li>
                          <li>Education (max 25 points)</li>
                          <li>Age (max 10 points)</li>
                          <li>Language Proficiency (max 24 points)</li>
                          <li>Adaptability (max 6 points)</li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-semibold">Minimum Points:</span> Must score at least 35/100 points
                      </li>
                      <li>
                        <span className="font-semibold">Settlement Funds:</span> Must prove sufficient funds to support yourself and family
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">Key Benefits</h3>
                    <ul className="list-disc pl-6 space-y-3">
                      <li>No minimum investment required</li>
                      <li>Direct pathway to Permanent Residency</li>
                      <li>Opportunity to contribute to Canada's cultural or athletic sectors</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Provincial Nominee Programs */}
              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Provincial Nominee Programs (PNPs) - Entrepreneur Streams
                  </span>
                </h2>
                <p className="text-gray-700 mb-6">
                  Many Canadian provinces offer Entrepreneur Streams to attract business immigrants who can invest in and manage businesses in specific provinces.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">General Eligibility Criteria</h3>
                    <ul className="list-disc pl-6 space-y-3">
                      <li>
                        <span className="font-semibold">Net Worth:</span> Typically $300,000 to $1.5 million CAD (varies by province)
                      </li>
                      <li>
                        <span className="font-semibold">Investment Amount:</span> $150,000 to $1 million CAD in a new/existing business
                      </li>
                      <li>
                        <span className="font-semibold">Business Experience:</span> 2-5 years of ownership/management experience
                      </li>
                      <li>
                        <span className="font-semibold">Business Plan:</span> Detailed plan demonstrating business viability
                      </li>
                      <li>
                        <span className="font-semibold">Job Creation:</span> Some provinces require creating jobs for Canadians
                      </li>
                      <li>
                        <span className="font-semibold">Language Proficiency:</span> While not always mandatory, improves application
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">Provincial Examples</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Province</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Minimum Net Worth</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Minimum Investment</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Key Requirement</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap font-medium">Ontario</td>
                            <td className="px-6 py-4 whitespace-nowrap">$800,000 CAD</td>
                            <td className="px-6 py-4 whitespace-nowrap">$600,000 CAD</td>
                            <td className="px-6 py-4">New or existing business</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap font-medium">British Columbia</td>
                            <td className="px-6 py-4 whitespace-nowrap">$600,000 CAD</td>
                            <td className="px-6 py-4 whitespace-nowrap">$200,000 CAD</td>
                            <td className="px-6 py-4">Create 1+ jobs</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap font-medium">Manitoba</td>
                            <td className="px-6 py-4 whitespace-nowrap">$500,000 CAD</td>
                            <td className="px-6 py-4 whitespace-nowrap">$250,000 CAD</td>
                            <td className="px-6 py-4">Outside Winnipeg ($500K in Winnipeg)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">Key Benefits</h3>
                    <ul className="list-disc pl-6 space-y-3">
                      <li>Opportunity to live and work in a specific province</li>
                      <li>Pathway to Permanent Residency after meeting business agreements</li>
                      <li>Flexibility to choose province based on business goals</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Work Permit Options */}
              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Work Permit Options for Business Owners
                  </span>
                </h2>
                <p className="text-gray-700 mb-6">
                  Temporary options for establishing or managing a business in Canada, with potential transition to Permanent Residency.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">Eligibility Criteria</h3>
                    <ul className="list-disc pl-6 space-y-3">
                      <li>
                        <span className="font-semibold">Business Ownership:</span> Must own at least 50% of the business
                      </li>
                      <li>
                        <span className="font-semibold">Business Plan:</span> Detailed plan outlining proposed activities
                      </li>
                      <li>
                        <span className="font-semibold">Job Creation:</span> May need to demonstrate job creation for Canadians
                      </li>
                      <li>
                        <span className="font-semibold">Temporary Residence:</span> Must meet general work permit requirements
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">Key Benefits</h3>
                    <ul className="list-disc pl-6 space-y-3">
                      <li>Opportunity to establish business before applying for PR</li>
                      <li>Flexibility to transition to PR through Start-Up Visa or PNPs</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Why Choose Us */}
              <motion.div className="bg-blue-600 rounded-xl shadow-lg p-8 text-white">
                <h2 className="text-3xl font-bold mb-6">Why Choose North Vista Immigration?</h2>
                <p className="text-xl mb-6">
                  Our team of Regulated Canadian Immigration Consultants (RCICs) ensures your application is accurate, complete, and compliant.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-700 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Personalized Consultation</h3>
                    <p>Tailored advice based on your unique profile</p>
                  </div>
                  <div className="bg-blue-700 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Document Preparation</h3>
                    <p>Assistance with business plans and financial documents</p>
                  </div>
                  <div className="bg-blue-700 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Legal Compliance</h3>
                    <p>Ensuring your application meets all requirements</p>
                  </div>
                  <div className="bg-blue-700 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Ongoing Support</h3>
                    <p>Guidance at every step of your journey</p>
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

export default BusinessImmigrationPage;