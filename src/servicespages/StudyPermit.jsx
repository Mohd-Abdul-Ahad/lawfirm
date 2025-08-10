import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const StudyPermit = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Study Permit for Canada
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Pursue Your Education at World-Class Canadian Institutions
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

            {/* Right Column - Content */}
            <div className="md:col-span-2 space-y-12">
              {/* What is Study Permit */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    What is a Study Permit?
                  </span>
                </h2>
                <p className="text-gray-700 mb-6">
                  A Study Permit is a document issued by Immigration, Refugees
                  and Citizenship Canada (IRCC) that allows international
                  students to study at Designated Learning Institutions (DLIs)
                  in Canada. It is important to note that a Study Permit is not
                  a visa. Depending on your country of residence, you may also
                  need a Temporary Resident Visa (TRV) or an Electronic Travel
                  Authorization (eTA) to enter Canada.
                </p>

                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  Why Study in Canada?
                </h3>
                <p className="text-gray-700 mb-4">
                  Canada is home to some of the world's top-ranked universities
                  and colleges, offering a wide range of programs in fields like
                  engineering, business, healthcare, and technology. Here's why
                  Canada is a top choice for international students:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      High-Quality Education: Canadian institutions are known
                      for their academic excellence and cutting-edge research
                      facilities.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Affordable Tuition Fees: Compared to other popular study
                      destinations like the US and UK, Canada offers more
                      affordable tuition fees.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Work While You Study: International students can work up
                      to 20 hours per week during the academic year and
                      full-time during scheduled breaks.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Post-Graduation Work Permit (PGWP): After completing your
                      studies, you may be eligible for a PGWP, allowing you to
                      gain valuable Canadian work experience.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Pathway to Permanent Residency: Many international
                      students transition to permanent residency through
                      programs like Express Entry or Provincial Nominee Programs
                      (PNPs).
                    </span>
                  </li>
                </ul>
              </motion.div>

              {/* Eligibility Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Eligibility Requirements for a Study Permit
                  </span>
                </h2>
                <p className="text-gray-700 mb-6">
                  To apply for a Study Permit, you must meet the following
                  requirements:
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      <strong>Letter of Acceptance:</strong> You must have an
                      acceptance letter from a Designated Learning Institution
                      (DLI) in Canada.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      <strong>Proof of Financial Support:</strong> You must
                      demonstrate that you have enough funds to cover your
                      tuition fees, living expenses, and return transportation.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      <strong>No Criminal Record:</strong> You may be required
                      to provide a police clearance certificate.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      <strong>Medical Exam:</strong> Some applicants may need to
                      undergo a medical examination.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      <strong>Intent to Leave Canada:</strong> You must prove
                      that you will leave Canada at the end of your authorized
                      stay.
                    </span>
                  </li>
                </ul>
              </motion.div>

              {/* Work Opportunities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Work Opportunities for International Students
                  </span>
                </h2>
                <p className="text-gray-700 mb-6">
                  One of the biggest advantages of studying in Canada is the
                  ability to work while you study. Here's what you need to know:
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">
                      On-Campus Work
                    </h3>
                    <p className="text-gray-700">
                      You can work on campus without a work permit.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">
                      Off-Campus Work
                    </h3>
                    <p className="text-gray-700">
                      You can work up to 20 hours per week during the academic
                      year and full-time during scheduled breaks.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">
                      Co-op and Internship Programs
                    </h3>
                    <p className="text-gray-700">
                      If your program includes a co-op or internship, you may
                      need to apply for a co-op work permit.
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
                  At North Vista Immigration, we understand that applying for a
                  Student Visa can be complex. Here's why thousands of students
                  trust us:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Expert Guidance
                    </h3>
                    <p className="text-gray-700">
                      Our team of Regulated Canadian Immigration Consultants
                      (RCICs) has years of experience helping international
                      students.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      Personalized Service
                    </h3>
                    <p className="text-gray-700">
                      We offer personalized consultations to understand your
                      goals and create a customized plan.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      End-to-End Support
                    </h3>
                    <p className="text-gray-700">
                      From choosing the right program to submitting your
                      application, we're with you every step.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      High Success Rate
                    </h3>
                    <p className="text-gray-700">
                      With a proven track record, we've helped countless
                      students achieve their Canadian dreams.
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
                  Start Your Canadian Education Journey
                </h2>
                <p className="text-xl mb-6 max-w-2xl mx-auto">
                  Studying in Canada is a life-changing opportunity. Let us help
                  you make it happen.
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
      <Footer />
    </>
  );
};

export default StudyPermit;
