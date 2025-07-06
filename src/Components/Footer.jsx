import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* LAW FIRM */}
          <div>
            <h3 className="text-2xl font-bold mb-6">LAW FIRM</h3>
            <p className="text-gray-300">
              Providing exceptional legal services with integrity and dedication since 2005.
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Practice Areas</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Civil Litigation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Criminal Defense</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Real Estate Law</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Corporate Law</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Wills & Estates</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Our Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info & Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-gray-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-gray-400" />
                <span className="text-gray-300">info@lawfirm.com</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-gray-400" />
                <span className="text-gray-300">123 Legal Avenue, Suite 500<br />New York, NY 10001</span>
              </li>
            </ul>

            <h4 className="text-xl font-semibold mt-8 mb-4">Social Media</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 - Law. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;