import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaUserLock, FaFileSignature, FaLink } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const PrivacyPolicy = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <Navbar />
      
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl max-w-3xl mx-auto"
            >
              Your privacy is important to us. Learn how we protect your information.
            </motion.p>
          </div>
        </motion.section>

        {/* Privacy Content */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          {/* Introduction */}
          <motion.div 
            variants={fadeIn}
            className="bg-white rounded-xl shadow-md p-8 mb-12"
          >
            <div className="flex items-center mb-6">
              <FaShieldAlt className="text-blue-600 text-3xl mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">1. Introduction</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Welcome to North Vista Immigration ("we," "our," or "us"). Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your data when you use our website <a href="https://northvistaimmigration.com/" className="text-blue-600 hover:underline">https://northvistaimmigration.com/</a> (the "Website").
            </p>
          </motion.div>

          {/* Information We Collect */}
          <motion.div 
            variants={fadeIn}
            className="bg-white rounded-xl shadow-md p-8 mb-12"
          >
            <div className="flex items-center mb-6">
              <FaUserLock className="text-blue-600 text-3xl mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">2. Information We Collect</h2>
            </div>
            <p className="text-gray-700 mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Personal Information:</strong> Name, email address, phone number, mailing address, date of birth, and any other information you provide when filling out contact forms or requesting our services.</li>
              <li><strong>Immigration-Related Information:</strong> Documents and details necessary for providing immigration consultation and services.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, operating system, referring URLs, and browsing behavior on our Website.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance user experience and analyze website performance.</li>
            </ul>
          </motion.div>

          {/* How We Use Your Information */}
          <motion.div 
            variants={fadeIn}
            className="bg-white rounded-xl shadow-md p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information collected for the following purposes:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-medium">To provide and manage our immigration services</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-medium">To respond to inquiries and communicate with you</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-medium">To improve our Website, services, and customer experience</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-medium">To comply with legal obligations and protect against fraud or misuse of our services</p>
              </div>
            </div>
          </motion.div>

          {/* How We Share Your Information */}
          <motion.div 
            variants={fadeIn}
            className="bg-white rounded-xl shadow-md p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. How We Share Your Information</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, rent, or trade your personal information. However, we may share it with:
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <FaFileSignature className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Service Providers</h3>
                  <p className="text-gray-700">Third-party vendors who assist with website hosting, analytics, or other business operations.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <FaShieldAlt className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Legal Authorities</h3>
                  <p className="text-gray-700">If required by law or to protect our rights and comply with legal obligations.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <FaUserLock className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Affiliated Partners</h3>
                  <p className="text-gray-700">With your consent, we may share information with trusted partners who help provide our services.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Data Security */}
          <motion.div 
            variants={fadeIn}
            className="bg-white rounded-xl shadow-md p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Data Security</h2>
            <p className="text-gray-700">
              We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is entirely secure, and we cannot guarantee absolute security.
            </p>
          </motion.div>

          {/* Your Rights and Choices */}
          <motion.div 
            variants={fadeIn}
            className="bg-white rounded-xl shadow-md p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p>Request access to the personal data we hold about you</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p>Request corrections or updates to your information</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p>Withdraw consent for data processing where applicable</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p>Request deletion of your personal data, subject to legal obligations</p>
              </div>
            </div>
          </motion.div>

          {/* Third-Party Links */}
          <motion.div 
            variants={fadeIn}
            className="bg-white rounded-xl shadow-md p-8 mb-12"
          >
            <div className="flex items-center mb-6">
              <FaLink className="text-blue-600 text-3xl mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">7. Third-Party Links</h2>
            </div>
            <p className="text-gray-700">
              Our Website may contain links to third-party sites. We are not responsible for their privacy practices and encourage you to review their privacy policies before providing any personal information.
            </p>
          </motion.div>

          {/* Changes to This Privacy Policy */}
          <motion.div 
            variants={fadeIn}
            className="bg-white rounded-xl shadow-md p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
            </p>
          </motion.div>

          {/* Contact Us */}
          <motion.div 
            variants={fadeIn}
            className="bg-white rounded-xl shadow-md p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="font-bold text-blue-800 mb-2">North Vista Immigration</p>
              <p className="mb-1">Website: <a href="https://northvistaimmigration.com/" className="text-blue-600 hover:underline">https://northvistaimmigration.com/</a></p>
              <p>Email: <a href="mailto:info@northvistaimmigration.com" className="text-blue-600 hover:underline">info@northvistaimmigration.com</a></p>
            </div>
            <p className="text-gray-700 mt-6">
              By using our Website, you consent to the terms outlined in this Privacy Policy.
            </p>
          </motion.div>
        </motion.section>
      </div>
      
      <Footer />
    </>
  );
};

export default PrivacyPolicy;