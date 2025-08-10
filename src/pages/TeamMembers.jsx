import React, { useState, useEffect } from "react";
import Staff1 from "../assets/teammembers/staff1.jpg";
import Staff2 from "../assets/teammembers/staff2.jpg";
import Staff3 from "../assets/teammembers/staff3.jpg";
import Staff4 from "../assets/teammembers/staff4.jpg";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const TeamSection = () => {
  const teamMembers = [
    { id: 1, name: "Nabeel Khan", role: "RCIC, MBA", image: Staff1 },
    {
      id: 2,
      name: "Asmatullah Malik",
      role: "Accounts & Payroll",
      image: Staff2,
    },
    {
      id: 3,
      name: "Maggie Romano",
      role: "Senior Case Manager",
      image: Staff3,
    },
    {
      id: 4,
      name: "Roxanne Paraggua",
      role: "Business Development Manager",
      image: Staff4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section
      className="py-16 bg-gradient-to-b from-blue-50 to-white"
      id="ourteam"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Meet Our Team
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated professionals committed to your success
          </p>
        </div>

        {/* Desktop Grid */}
        <motion.div
          className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="group overflow-hidden rounded-xl shadow-lg"
              variants={item}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-blue-200">{member.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative h-96 overflow-hidden rounded-xl shadow-lg">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className={`absolute inset-0 ${
                index === currentIndex ? "z-10" : "z-0"
              }`}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentIndex ? 1 : 0,
                transition: { duration: 0.5 },
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-blue-200">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Indicators */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-20">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-white w-6" : "bg-white/50"
                }`}
                aria-label={`View ${teamMembers[index].name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
