import React from "react";
import {
  FaBalanceScale,
  FaGavel,
  FaHandshake,
  FaUserTie,
} from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AboutUs = () => {
  const stats = [
    { value: "550+", label: "Cases Won" },
    { value: "20+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Expert Attorneys" },
  ];

  const values = [
    {
      icon: <FaBalanceScale className="w-8 h-8 text-blue-600" />,
      title: "Integrity",
      description:
        "We uphold the highest ethical standards in all our legal practices.",
    },
    {
      icon: <FaGavel className="w-8 h-8 text-blue-600" />,
      title: "Excellence",
      description:
        "Committed to delivering exceptional legal services and results.",
    },
    {
      icon: <FaHandshake className="w-8 h-8 text-blue-600" />,
      title: "Client Focus",
      description:
        "Your success is our priority. We listen and tailor solutions to your needs.",
    },
    {
      icon: <FaUserTie className="w-8 h-8 text-blue-600" />,
      title: "Expertise",
      description: "Deep legal knowledge combined with strategic thinking.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900 text-white">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8 relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Our Law Firm
            </h1>
            <p className="text-xl max-w-3xl">
              Delivering exceptional legal services with integrity and
              dedication since 2005.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg">
                <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Story Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="mb-12 lg:mb-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-4">
                  Founded in 1995, our law firm began as a small practice with a
                  big vision: to provide exceptional legal services with
                  uncompromising integrity. What started with just three
                  attorneys has grown into one of the region's most respected
                  full-service law firms.
                </p>
                <p className="text-gray-600 mb-4">
                  Over the past 25+ years, we've successfully represented
                  thousands of clients in complex legal matters, always
                  maintaining our commitment to personalized service and
                  outstanding results.
                </p>
                <p className="text-gray-600">
                  Today, our team of 50+ attorneys continues this tradition of
                  excellence across all practice areas, combining deep legal
                  expertise with innovative solutions for our clients.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop"
                  alt="Law firm building"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 hover:bg-gray-50 rounded-lg transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Our Leadership
            </h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Experienced attorneys guiding our firm with vision and expertise.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop"
                  alt="James Wilson"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold">James Wilson</h3>
                <p className="text-blue-600 mb-2">Managing Partner</p>
                <p className="text-gray-600">
                  25+ years experience in corporate law
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop"
                  alt="Sarah Johnson"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold">Sarah Johnson</h3>
                <p className="text-blue-600 mb-2">Senior Partner</p>
                <p className="text-gray-600">
                  Specializes in litigation and dispute resolution
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop"
                  alt="Michael Chen"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold">Michael Chen</h3>
                <p className="text-blue-600 mb-2">Partner</p>
                <p className="text-gray-600">
                  Expert in intellectual property law
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AboutUs;
