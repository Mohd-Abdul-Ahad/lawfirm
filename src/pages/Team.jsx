import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Senior Partner",
      experience: "15+ years",
      specialization: "Corporate Law, Mergers & Acquisitions",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Partner",
      experience: "12 years",
      specialization: "Civil Litigation, Personal Injury",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Elizabeth Dawson",
      position: "Associate",
      experience: "8 years",
      specialization: "Real Estate Law, Property Development",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Robert Williams",
      position: "Partner",
      experience: "18 years",
      specialization: "Criminal Defense, White Collar Crime",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Priya Patel",
      position: "Associate",
      experience: "6 years",
      specialization: "Family Law, Wills & Estates",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "David Kim",
      position: "Senior Counsel",
      experience: "14 years",
      specialization: "Intellectual Property, Technology Law",
      image:
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=400&auto=format&fit=crop",
    },
    // ... other team members
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Legal Team
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our experienced attorneys dedicated to providing exceptional
              legal services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-64 sm:h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-[#2a65f8] font-medium my-2">
                    {member.position}
                  </p>

                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-start">
                      <span className="text-[#2a65f8] mr-2">•</span>
                      <span>Experience: {member.experience}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-[#2a65f8] mr-2">•</span>
                      <span>Specializes in: {member.specialization}</span>
                    </div>
                  </div>

                  <button className="mt-4 bg-[#2a65f8] hover:bg-[#1e4ed8] text-white px-4 py-2 rounded-md transition-colors duration-300">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeamPage;
