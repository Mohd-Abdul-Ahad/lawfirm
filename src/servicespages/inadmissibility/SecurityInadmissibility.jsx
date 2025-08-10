import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const SecurityInadmissibility = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Security and Other Grounds of Inadmissibility
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Addressing complex inadmissibility issues for Canadian immigration
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
              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <p className="text-gray-700">
                  If you are planning to visit, study, work, or immigrate to
                  Canada, it's important to understand the various grounds of
                  inadmissibility. At North Vista Immigration, we help
                  individuals understand and address these issues to achieve
                  their Canadian immigration goals.
                </p>
              </motion.div>

              {/* Security Related */}
              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Security-Related Inadmissibility
                  </span>
                </h2>

                <p className="text-gray-700 mb-6">
                  You may be found inadmissible to Canada for security reasons
                  if you are involved in or associated with activities that
                  threaten Canada's safety and security. This includes:
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-lg mr-4">
                      <svg
                        className="w-6 h-6 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">
                        Espionage
                      </h3>
                      <p className="text-gray-700">
                        Engaging in or being suspected of spying or gathering
                        confidential information to benefit a foreign government
                        or organization.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-lg mr-4">
                      <svg
                        className="w-6 h-6 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">
                        Subversion
                      </h3>
                      <p className="text-gray-700">
                        Attempting to overthrow a government or undermine
                        Canada's democratic institutions through force or
                        illegal means.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-lg mr-4">
                      <svg
                        className="w-6 h-6 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">
                        Violence or Terrorism
                      </h3>
                      <p className="text-gray-700">
                        Participating in or supporting acts of violence,
                        terrorism, or threats to national security.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-lg mr-4">
                      <svg
                        className="w-6 h-6 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">
                        Membership in Prohibited Organizations
                      </h3>
                      <p className="text-gray-700">
                        Being a member of an organization involved in espionage,
                        subversion, violence, or terrorism.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Other Grounds */}
              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Human or International Rights Violations
                  </span>
                </h2>

                <p className="text-gray-700 mb-6">
                  You may also be found inadmissible if you have been involved
                  in human or international rights violations, such as:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="font-bold text-red-800 mb-3">
                      War Crimes or Crimes Against Humanity
                    </h3>
                    <p className="text-gray-700">
                      Committing or being complicit in war crimes, genocide, or
                      crimes against humanity.
                    </p>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="font-bold text-red-800 mb-3">
                      Senior Government Officials
                    </h3>
                    <p className="text-gray-700">
                      Serving as a senior official in a government engaged in
                      gross human rights violations or subject to international
                      sanctions.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Organized Crime */}
              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Organized Crime
                  </span>
                </h2>

                <p className="text-gray-700 mb-6">
                  Involvement in organized crime is another ground for
                  inadmissibility. This includes:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="font-bold text-red-800 mb-3">
                      Criminal Organizations
                    </h3>
                    <p className="text-gray-700">
                      Participating in or being a member of an organization
                      involved in organized criminal activity, such as human
                      trafficking, drug smuggling, or money laundering.
                    </p>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="font-bold text-red-800 mb-3">
                      Illegal Activities
                    </h3>
                    <p className="text-gray-700">
                      Engaging in people smuggling or other illegal activities
                      that threaten public safety.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Consequences */}
              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    What Happens If You Are Found Inadmissible?
                  </span>
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-lg mr-4">
                      <svg
                        className="w-6 h-6 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        Denial of a visa or Electronic Travel Authorization
                        (eTA).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-lg mr-4">
                      <svg
                        className="w-6 h-6 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        Refusal of entry at a Canadian port of entry.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-lg mr-4">
                      <svg
                        className="w-6 h-6 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        Removal from Canada if you are already in the country.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Why Choose Us */}
              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Why Choose North Vista Immigration?
                  </span>
                </h2>

                <p className="text-gray-700 mb-6">
                  At North Vista Immigration, we specialize in helping
                  individuals overcome complex inadmissibility issues. Our
                  services include:
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <span className="font-bold text-blue-800">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">
                        Expert Guidance
                      </h3>
                      <p className="text-gray-700">
                        We assess your situation and explain your options.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <span className="font-bold text-blue-800">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">
                        Personalized Solutions
                      </h3>
                      <p className="text-gray-700">
                        We tailor our approach to your unique case.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <span className="font-bold text-blue-800">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">
                        Proven Success
                      </h3>
                      <p className="text-gray-700">
                        We've helped countless clients address inadmissibility
                        and achieve their Canadian immigration goals.
                      </p>
                    </div>
                  </div>
                </div>

                <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-medium">
                  Get A Quote
                </button>
              </motion.div>

              {/* Solutions */}
              <motion.div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    How to Overcome Security and Other Inadmissibility Issues
                  </span>
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-800 mb-2">
                        Temporary Resident Permit (TRP)
                      </h3>
                      <p className="text-gray-700">
                        A TRP allows you to enter or stay in Canada temporarily,
                        even if you are inadmissible, provided you have a
                        compelling reason to visit.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-800 mb-2">
                        Legal Opinion Letters
                      </h3>
                      <p className="text-gray-700">
                        A legal opinion letter from an immigration lawyer can
                        help clarify your situation and demonstrate that you do
                        not pose a threat to Canada.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-800 mb-2">
                        Appeals and Judicial Reviews
                      </h3>
                      <p className="text-gray-700">
                        If you believe your inadmissibility decision was unfair,
                        you may be able to appeal or request a judicial review.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Emergency CTA */}
              <motion.div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-800 mb-2">
                  Need Immediate Assistance?
                </h3>
                <p className="text-gray-700 mb-4">
                  If you're facing inadmissibility issues, don't wait. Contact
                  our experts today for personalized guidance.
                </p>
                <a
                  href="tel:+16476605758"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg font-medium"
                >
                  Call Now: +1 647 660-5758
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

export default SecurityInadmissibility;
