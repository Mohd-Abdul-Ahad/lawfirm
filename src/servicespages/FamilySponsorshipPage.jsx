import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const FamilySponsorshipPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Family Sponsorship
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Reunite Your Family in Canada
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +1 647 660-5758"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      Please enter phone number with country code.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Postal/Zip Code *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. M5V 3L9"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country of residence *
                    </label>
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
              {/* What is Family Sponsorship */}
              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    What is Family Sponsorship?
                  </span>
                </h2>
                <p className="text-gray-700 mb-4">
                  Family Sponsorship is a program under Immigration, Refugees
                  and Citizenship Canada (IRCC) that allows Canadian citizens
                  and Permanent Residents to sponsor certain family members to
                  become Permanent Residents of Canada.
                </p>
                <p className="text-gray-700">
                  The sponsor must meet specific requirements and commit to
                  financially supporting their family members for a specified
                  period.
                </p>
              </motion.div>

              {/* Sponsor Eligibility */}
              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Sponsor Eligibility
                  </span>
                </h2>
                <p className="text-gray-700 mb-4">
                  To be eligible to sponsor a family member, you must:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Be at least 18 years old</li>
                  <li>Be a Canadian citizen or Permanent Resident</li>
                  <li>Reside in Canada (if you are a Permanent Resident)</li>
                  <li>
                    Demonstrate the financial ability to support your family
                    members
                  </li>
                  <li>
                    Sign a Sponsorship Agreement committing to provide financial
                    support (usually 3-20 years)
                  </li>
                  <li>
                    Not be receiving social assistance (except for disability)
                  </li>
                  <li>Not have a criminal record or be in prison</li>
                </ul>
              </motion.div>

              {/* Who Can Be Sponsored */}
              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Who Can Be Sponsored?
                  </span>
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">
                      Spouse, Common-Law Partner, or Conjugal Partner
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <span className="font-semibold">Spouse:</span> A person
                        you are legally married to
                      </li>
                      <li>
                        <span className="font-semibold">
                          Common-Law Partner:
                        </span>{" "}
                        A person you have lived with in a conjugal relationship
                        for at least 12 consecutive months
                      </li>
                      <li>
                        <span className="font-semibold">Conjugal Partner:</span>{" "}
                        A person you are in a committed, marriage-like
                        relationship with but cannot live together or marry due
                        to significant legal or immigration barriers
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">
                      Dependent Children
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Biological or adopted children under 22 years old who
                        are not married or in a common-law relationship
                      </li>
                      <li>
                        Children over 22 may qualify if they are financially
                        dependent due to a mental or physical condition
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">
                      Parents and Grandparents
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Parents and grandparents may be sponsored if the sponsor
                        meets income requirements
                      </li>
                      <li>Must provide financial support for 20 years</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">
                      Other Eligible Relatives
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Orphaned siblings, nephews, nieces, or grandchildren
                        under 18 years old
                      </li>
                      <li>
                        Must be unmarried and both parents must be deceased
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Processing Times */}
              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Processing Times
                  </span>
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Spouse/Partner
                    </h3>
                    <p className="text-xl font-semibold">12 months</p>
                    <p className="text-gray-700">Average processing time</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Dependent Children
                    </h3>
                    <p className="text-xl font-semibold">12-18 months</p>
                    <p className="text-gray-700">Average processing time</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Parents/Grandparents
                    </h3>
                    <p className="text-xl font-semibold">20-24 months</p>
                    <p className="text-gray-700">Average processing time</p>
                  </div>
                </div>
              </motion.div>

              {/* Why Choose Us */}
              <motion.div className="bg-blue-600 rounded-xl shadow-lg p-8 text-white">
                <h2 className="text-3xl font-bold mb-6">
                  Why Choose North Vista Immigration?
                </h2>
                <p className="text-xl mb-6">
                  Our team of Regulated Canadian Immigration Consultants (RCICs)
                  specializes in family sponsorship cases.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-700 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">
                      Eligibility Assessment
                    </h3>
                    <p>
                      Determine if you and your family members meet the
                      requirements
                    </p>
                  </div>
                  <div className="bg-blue-700 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">
                      Document Preparation
                    </h3>
                    <p>Ensure your application is complete and accurate</p>
                  </div>
                  <div className="bg-blue-700 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">
                      Application Submission
                    </h3>
                    <p>Guide you through the submission process</p>
                  </div>
                  <div className="bg-blue-700 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Ongoing Support</h3>
                    <p>Provide updates and assistance throughout the process</p>
                  </div>
                </div>

                <div className="mt-8 bg-blue-700 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">
                    Need Immediate Assistance?
                  </h3>
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

export default FamilySponsorshipPage;
