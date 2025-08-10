import React, { useState, useRef, useEffect } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaChevronDown,
  FaChevronUp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState({ phone: false, email: false });
  const servicesRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navigate = useNavigate();

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied({ ...copied, [type]: true });
      setTimeout(() => setCopied({ ...copied, [type]: false }), 2000);
    });
  };

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

  const handleServiceClick = (path) => {
    navigate(path);
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest(".mobile-menu-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Contact Bar - Now visible on all screens */}
      <div className="bg-gray-100 px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <div
              className="flex items-center space-x-1 cursor-pointer group"
              onClick={() => handleCopy("+1 (647) 660-5758", "phone")}
            >
              <FaPhone className="text-blue-600 group-hover:text-blue-800 transition text-sm sm:text-base" />
              <span className="text-xs sm:text-sm font-medium group-hover:text-blue-800 transition">
                {copied.phone ? "Copied!" : "+1 (647) 660-5758"}
              </span>
            </div>
            <div
              className="flex items-center space-x-1 cursor-pointer group"
              onClick={() =>
                handleCopy("info@northvistaimmigration.com", "email")
              }
            >
              <FaEnvelope className="text-blue-600 group-hover:text-blue-800 transition text-sm sm:text-base" />
              <span className="text-xs sm:text-sm font-medium group-hover:text-blue-800 transition whitespace-nowrap overflow-hidden text-ellipsis max-w-[180px] sm:max-w-none">
                {copied.email ? "Copied!" : "info@northvistaimmigration.com"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="hover:opacity-90 transition-opacity">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="North Vista Immigration Logo"
              className="h-12 w-auto md:h-16"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition font-medium text-lg"
            >
              Home
            </Link>

            <Link
              to="/aboutus"
              className="text-gray-700 hover:text-blue-600 transition font-medium text-lg"
            >
              About Us
            </Link>

            <div className="relative" ref={servicesRef}>
              <button
                className="flex items-center text-gray-700 hover:text-blue-600 transition font-medium text-lg"
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
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => handleServiceClick(service.path)}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/#testimonials"
              className="text-gray-700 hover:text-blue-600 transition font-medium text-lg"
            >
              Testimonials
            </Link>

            <Link
              to="/#ourteam"
              className="text-gray-700 hover:text-blue-600 transition font-medium text-lg"
            >
              Our Team
            </Link>
          </nav>
        </div>

        {/* Desktop Book Button */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300 ease-in-out text-lg"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden space-x-4">
          
          <button
            className="mobile-menu-button text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden bg-white border-t border-gray-200 px-4 py-2 absolute w-full left-0 shadow-lg z-40"
        >
          <Link
            to="/"
            className="block py-3 text-gray-700 hover:text-blue-600 transition font-medium border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            className="block py-3 text-gray-700 hover:text-blue-600 transition font-medium border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>

          <div className="py-3 border-b border-gray-100">
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
              <div className="pl-4 mt-2 space-y-2">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => handleServiceClick(service.path)}
                    className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition border-b border-gray-100 last:border-0"
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/#testimonials"
            className="block py-3 text-gray-700 hover:text-blue-600 transition font-medium border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            to="/#ourteam"
            className="block py-3 text-gray-700 hover:text-blue-600 transition font-medium border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Team
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

