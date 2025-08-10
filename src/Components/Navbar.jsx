import React, { useState, useRef, useEffect } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaChevronDown,
  FaChevronUp,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState({ phone: false, email: false });
  const servicesRef = useRef(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied({ ...copied, [type]: true });
      setTimeout(() => setCopied({ ...copied, [type]: false }), 2000);
    });
  };

  const services = [
    "Inadmissibility",
    "Immigration Appeals",
    "Refugee Protection",
    "PRRA",
    "Judicial Review",
    "Express Entry",
    "Family Sponsorship",
    "Business Class Immigration",
    "Provincial Nominee Programs (PNP)",
    "H&C PR applications",
    "Student Visa (Study Permit)",
    "Work Permits / LMIAs",
    "Visitor Visa / eTA",
    "Super Visa",
    "Caregiver Program",
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white shadow-sm">
      {/* Top Contact Bar */}
      <div className="bg-gray-100 px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <div
              className="flex items-center space-x-1 cursor-pointer group"
              onClick={() => handleCopy("+1 (647) 660-5758", "phone")}
            >
              <FaPhone className="text-blue-600 group-hover:text-blue-800 transition" />
              <span className="text-sm font-medium group-hover:text-blue-800 transition">
                {copied.phone ? "Copied!" : "+1 (647) 660-5758"}
              </span>
            </div>
            <div
              className="flex items-center space-x-1 cursor-pointer group"
              onClick={() =>
                handleCopy("info@northvistaimmigration.com", "email")
              }
            >
              <FaEnvelope className="text-blue-600 group-hover:text-blue-800 transition" />
              <span className="text-sm font-medium group-hover:text-blue-800 transition">
                {copied.email ? "Copied!" : "info@northvistaimmigration.com"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo - Left */}
        {/* Logo - Left */}
        <Link to="/" className="hover:opacity-90 transition-opacity">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Northern Vista Law Firm Logo"
              className="h-12 w-auto md:h-16" // Increased from h-8 to h-12 (mobile) and h-16 (desktop)
            />
            {/* Optional: Add text next to logo if needed */}
            {/* <span className="ml-3 text-xl font-bold text-gray-800 hidden md:block">Northern Vista Law</span> */}
          </div>
        </Link>

        {/* Desktop Navigation - Center */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            <Link
              to="/"
              className="navFont text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Home
            </Link>

            <Link
              to="/aboutus"
              className="navFont text-gray-700 hover:text-blue-600 transition font-medium"
            >
              About Us
            </Link>

            <Link
              to="/#services"
              className="navFont text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Services
            </Link>

            <a
              href="/#testimonials"
              className="navFont text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Testimonials
            </a>

            <a
              href="/#ourteam"
              className="navFont text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Our Team
            </a>
          </nav>
        </div>

        {/* Desktop Book Button - Right */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition duration-300 ease-in-out"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Menu Button - Right */}
        <div className="flex items-center md:hidden space-x-4">
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition duration-300 ease-in-out text-sm"
          >
            Book Now
          </Link>
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FaBars className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-2">
          <Link
            to="/"
            className="block py-2 text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            className="block py-2 text-gray-700 hover:text-blue-600 transition font-medium"
          >
            About Us
          </Link>

          <div className="py-2">
            <button
              className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 transition font-medium"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services
              {isServicesOpen ? (
                <FaChevronUp className="ml-1 text-sm" />
              ) : (
                <FaChevronDown className="ml-1 text-sm" />
              )}
            </button>

            {isServicesOpen && (
              <div className="pl-4 mt-1 space-y-1">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={`/services/${service
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="block py-1 text-gray-700 hover:text-blue-600 transition"
                    onClick={() => {
                      setIsServicesOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/testimonials"
            className="block py-2 text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Testimonials
          </Link>
          <Link
            to="/ourteam"
            className="block py-2 text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Our Team
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
