import React, { useState } from "react";

const ContactUs = () => {
  const [selectedCase, setSelectedCase] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const caseTypes = [
    "Criminal Defense",
    "Family Law",
    "Civil Litigation",
    "Corporate Law",
    "Real Estate Law",
    "Personal Injury"
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6" id="contact">
      <h2 className="text-3xl md:text-4xl navFont text-center mb-10">
        Contact Us
      </h2>

      <div className="space-y-5">
        {["First Name", "Last Name", "Email", "Phone Number", "Organization"].map((field, index) => (
          <div key={index}>
            <label className="block mb-1 text-gray-700">
              {field} {field !== "Organization" && <span className="text-red-500">*</span>}
            </label>
            <input
              type={field === "Email" ? "email" : field === "Phone Number" ? "tel" : "text"}
              placeholder={field}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-[#2a65f8] focus:ring-1 focus:ring-[#2a65f8] transition-all duration-300"
              required={field !== "Organization"}
            />
          </div>
        ))}

        <div>
          <label className="block mb-1 text-gray-700">
            Case Type <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <button
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-left flex justify-between items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {selectedCase || "Select a case type"}
              <svg
                className={`w-5 h-5 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                {caseTypes.map((caseType) => (
                  <div
                    key={caseType}
                    className="px-4 py-2 hover:bg-[#2a65f8] hover:text-white cursor-pointer transition-colors"
                    onClick={() => {
                      setSelectedCase(caseType);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {caseType}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block mb-1 text-gray-700">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-[#2a65f8] focus:ring-1 focus:ring-[#2a65f8] transition-all duration-300"
            required
          ></textarea>
        </div>

        <button className="w-full bg-[#2a65f8] hover:bg-[#1e4ed8] text-white py-3 rounded-lg font-semibold shadow-md transition duration-300 mt-6">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactUs;