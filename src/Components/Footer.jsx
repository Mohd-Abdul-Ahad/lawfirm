import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const services = [
    { name: "Inadmissibility", path: "/inadmissibilitylanding" },
    { name: "Immigration Appeals", path: "/immigration-appeals" },
    { name: "Refugee Protection", path: "/refugee-protection" },
    { name: "PRRA", path: "/prra" },
    { name: "Judicial Review", path: "/judicial-review" },
    { name: "Express Entry", path: "/express-entry" },
    { name: "Family Sponsorship", path: "/family-sponsorship" },
    { name: "Business Class Immigration", path: "/business-immigration" },
    { name: "Provincial Nominee Programs (PNP)", path: "/pnp" },
    { name: "H&C PR applications", path: "/hc-applications" },
    { name: "Student Visa (Study Permit)", path: "/study-permit" },
    { name: "Work Permits / LMIAs", path: "/work-permits" },
    { name: "Visitor Visa / eTA", path: "/visitor-visa" },
    { name: "Super Visa", path: "/super-visa" },
    { name: "Caregiver Program", path: "/caregiver-program" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* LAW FIRM */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-400">
              North Vista Law
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for Canadian immigration solutions. We
              provide expert legal guidance with integrity and personalized care
              to help you navigate complex immigration processes.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://www.facebook.com/NorthVistaImmigration/"
                className="text-gray-400 hover:text-blue-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/northvistaimmigration/"
                className="text-gray-400 hover:text-blue-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@northvistaimmigration"
                className="text-gray-400 hover:text-blue-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@NorthVistaImmigration"
                className="text-gray-400 hover:text-blue-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-blue-400">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.slice(0, 7).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-blue-400 transition flex items-start"
                  >
                    <span className="text-blue-400 mr-2">•</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-blue-400">&nbsp;</h4>
            <ul className="space-y-3">
              {services.slice(7).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-blue-400 transition flex items-start"
                  >
                    <span className="text-blue-400 mr-2">•</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-blue-400">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-blue-400" />
                <div>
                  <span className="text-gray-300 block">+1 (647) 660-5758</span>
                  <span className="text-gray-400 text-sm">
                    Mon-Fri: 9:30 AM - 6:00 PM
                  </span>
                  <br />
                  <span className="text-gray-400 text-sm">
                    Sat: 11:00 AM - 3:00 PM
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-blue-400" />
                <span className="text-gray-300">
                  info@northvistaimmigration.com
                </span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-blue-400" />
                <div>
                  <span className="text-gray-300 block">
                    170 Robert Speck Pkwy
                  </span>
                  <span className="text-gray-300 block">Suite 204</span>
                  <span className="text-gray-300">Mississauga ON L4Z 3G1</span>
                </div>
              </li>
            </ul>
            <div className="mt-4 bg-gray-800 p-2 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.372159619385!2d-79.63611132406608!3d43.59516667110462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b4691aa63d92f%3A0x3a7c69f0df2bfe5b!2s170%20Robert%20Speck%20Pkwy%20Suite%20204%2C%20Mississauga%2C%20ON%20L4Z%203G1%2C%20Canada!5e0!3m2!1sen!2sin!4v1691930298830!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 mt-12 pt-8 text-gray-400 text-sm">
          <div className="mb-4 md:mb-0">
            <p>
              © {new Date().getFullYear()} North Vista Law. All rights
              reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-blue-400 transition">
              Privacy Policy
            </Link>
            
          </div>
          <div className="mt-4 md:mt-0">
            <a
              href="https://portfolio-lovat-iota-44.vercel.app/"
              className="hover:text-blue-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Developed by Mohammed Ahad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





