import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';

const InadmissibilityLanding = () => {

  const services = [
    {
      title: 'ARC (Authorization to Return to Canada)',
      slug: 'arcp',
      description: 'Assistance with applications for those who need authorization to return after deportation or removal.'
    },
    {
      title: 'Criminal Inadmissibility',
      slug: 'criminal-inadmissibility',
      description: 'Solutions for overcoming criminal records including rehabilitation applications and TRPs.'
    },
    {
      title: 'Financial Inadmissibility',
      slug: 'financial-inadmissibility',
      description: 'Addressing concerns about financial stability and ability to support yourself in Canada.'
    },
    {
      title: 'Medical Inadmissibility',
      slug: 'medical-inadmissibility',
      description: 'Navigating medical inadmissibility due to health conditions that may burden healthcare systems.'
    },
    {
      title: 'Misrepresentation',
      slug: 'misrepresentation',
      description: 'Resolving issues related to alleged misrepresentation on immigration applications.'
    },
    {
      title: 'PRRA (Pre-Removal Risk Assessment)',
      slug: 'prra',
      description: 'Assistance with applications to assess risks before removal from Canada.'
    },
    {
      title: 'Removal Orders',
      slug: 'removal-orders',
      description: 'Legal support for those facing deportation or removal from Canada.'
    },
    {
      title: 'Security Inadmissibility',
      slug: 'security-inadmissibility',
      description: 'Addressing concerns related to security risks or espionage allegations.'
    }
  ];

  return (
    <>
    <Navbar/>
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Overcoming Inadmissibility to Canada
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Expert solutions for all types of Canadian immigration inadmissibility issues
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Our Inadmissibility Services
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide specialized assistance for all grounds of inadmissibility to Canada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Link to={`/${service.slug}`} className="block h-full">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                  <div className="mt-4">
                    <span className="inline-flex items-center text-blue-600 font-medium">
                      Learn more
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With an Inadmissibility Issue?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our immigration experts can assess your case and recommend the best solution for your situation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+16476605758" 
              className="bg-white text-blue-600 hover:bg-gray-100 py-3 px-8 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-md"
            >
              Call Us: +1 647 660-5758
            </a>
            <Link 
              to="/contact" 
              className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-md"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
    <Footer/> 
    </>
  );
};

export default InadmissibilityLanding;