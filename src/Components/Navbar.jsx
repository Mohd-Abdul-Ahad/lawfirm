import React, { useState, useRef, useEffect } from "react";
import { FaPhone, FaEnvelope, FaChevronDown, FaChevronUp, FaBars } from "react-icons/fa";
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
    "Criminal Defense",
    "Family Law",
    "Civil Litigation",
    "Corporate Law",
    "Real Estate Law",
    "Personal Injury"
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
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Contact Bar */}
      <div className="bg-gray-100 px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <div 
              className="flex items-center space-x-1 cursor-pointer group"
              onClick={() => handleCopy("123-456-789", "phone")}
            >
              <FaPhone className="text-blue-600 group-hover:text-blue-800 transition" />
              <span className="text-sm font-medium group-hover:text-blue-800 transition">
                {copied.phone ? "Copied!" : "123-456-789"}
              </span>
            </div>
            <div 
              className="flex items-center space-x-1 cursor-pointer group"
              onClick={() => handleCopy("contact@lawfirm.com", "email")}
            >
              <FaEnvelope className="text-blue-600 group-hover:text-blue-800 transition" />
              <span className="text-sm font-medium group-hover:text-blue-800 transition">
                {copied.email ? "Copied!" : "contact@lawfirm.com"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo - Left */}
        <Link to="/" className="logoFont text-3xl text-gray-800 hover:text-blue-600 transition">
          Law Firm
        </Link>

        {/* Desktop Navigation - Center */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            <Link to="/" className="navFont text-gray-700 hover:text-blue-600 transition font-medium">
              Home
            </Link>
            
            <Link to="/aboutus" className="navFont text-gray-700 hover:text-blue-600 transition font-medium">
              About Us
            </Link>

            <div ref={servicesRef} className="relative">
              <button 
                className="navFont text-gray-700 hover:text-blue-600 transition font-medium flex items-center"
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
                <div 
                  className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100"
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/testimonials" className="navFont text-gray-700 hover:text-blue-600 transition font-medium">
              Testimonials
            </Link>

            <Link to="/ourteam" className="navFont text-gray-700 hover:text-blue-600 transition font-medium">
              Our Team
            </Link>
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
          <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600 transition font-medium">
            Home
          </Link>
          <Link to="/aboutus" className="block py-2 text-gray-700 hover:text-blue-600 transition font-medium">
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
                    to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
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

          <Link to="/testimonials" className="block py-2 text-gray-700 hover:text-blue-600 transition font-medium">
            Testimonials
          </Link>
          <Link to="/ourteam" className="block py-2 text-gray-700 hover:text-blue-600 transition font-medium">
            Our Team
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;