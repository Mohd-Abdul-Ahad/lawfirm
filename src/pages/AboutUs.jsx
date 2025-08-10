import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaChartLine, FaHandsHelping, FaUserCheck } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Staff1 from "../assets/teammembers/staff1.jpg";
import Staff2 from "../assets/teammembers/staff2.jpg";
import Staff3 from "../assets/teammembers/staff3.jpg";
import Staff4 from "../assets/teammembers/staff4.jpg";

const AboutUs = () => {
  const teamMembers = [
    { id: 1, name: "Nabeel Khan", role: "RCIC, MBA", image: Staff1 },
    { id: 2, name: "Asmatullah Malik", role: "Accounts & Payroll", image: Staff2 },
    { id: 3, name: "Maggie Romano", role: "Senior Case Manager", image: Staff3 },
    { id: 4, name: "Roxanne Paraggua", role: "Business Development Manager", image: Staff4 }
  ];

  const stats = [
    { value: "5060+", label: "Clients" },
    { value: "300+", label: "Google Reviews" },
    { value: "10+", label: "Years Of Experience" },
  ];

  const values = [
    {
      icon: <FaShieldAlt className="w-8 h-8 text-blue-600" />,
      title: "Regulated Firm",
      description: "Adhering to highest standards set by CICC",
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-blue-600" />,
      title: "Proven Track Record",
      description: "Consistently high approval rates across all categories",
    },
    {
      icon: <FaHandsHelping className="w-8 h-8 text-blue-600" />,
      title: "Client Focused",
      description: "Tailored immigration strategies for each client",
    },
    {
      icon: <FaUserCheck className="w-8 h-8 text-blue-600" />,
      title: "Honest Assessments",
      description: "Transparent about your eligibility and chances",
    },
  ];

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
      <div className="bg-white">
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
              About North Vista Immigration
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl max-w-3xl mx-auto"
            >
              As fully licensed Regulated Canadian Immigration Consultants (RCICs), we specialize in providing expert guidance for your Canadian immigration journey.
            </motion.p>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                variants={fadeIn}
                key={index} 
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-all duration-300"
              >
                <p className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Our Story Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 lg:mb-0"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Commitment
                </h2>
                <p className="text-gray-700 mb-4 text-lg">
                  With years of experience navigating Canada's complex immigration system, our team stays current with all 2025 program updates and policy changes to ensure clients receive accurate, up-to-date advice.
                </p>
                <p className="text-gray-700 mb-4 text-lg">
                  What sets us apart is our commitment to transparency, ethical practices, and client-focused service. We provide honest assessments of each client's eligibility and chances of success, never making false promises.
                </p>
                <p className="text-gray-700 text-lg">
                  Our consultants take the time to understand each client's unique circumstances and goals to develop tailored immigration strategies.
                </p>
              </motion.div>
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Immigration consultation"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Our Values Section */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              variants={fadeIn}
              className="text-3xl font-bold text-center text-gray-900 mb-16"
            >
              Why Choose Us
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  variants={fadeIn}
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dedicated professionals guiding you through your immigration journey
              </p>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {teamMembers.map((member) => (
                <motion.div
                  variants={fadeIn}
                  key={member.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Canadian Journey?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today for a professional assessment of your immigration options.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Book An Appointment
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+16476605758"
                className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-all"
              >
                Call: +1 647 660-5758
              </motion.a>
            </div>
          </div>
        </motion.section>
      </div>
      <Footer/>
    </>
  );
};

export default AboutUs;