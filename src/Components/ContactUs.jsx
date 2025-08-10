import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    postalCode: '',
    organization: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handlePhoneChange = (value) => {
    setFormData(prev => ({
      ...prev,
      phone: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'country', 'city', 'postalCode'];
    
    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'Please fill this field';
      }
    });

    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form submission logic here
      setIsSubmitted(true);
      console.log('Form submitted:', formData);
      // You can add your form submission logic here (API call, etc.)
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6" id="contact">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
        Contact Our Legal Team
      </h2>

      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="text-green-600 text-2xl mb-4">Thank you for your inquiry!</div>
          <p className="text-gray-700">We'll contact you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className={`w-full border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300`}
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className={`w-full border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300`}
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <PhoneInput
                country={'us'}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputClass={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-100`}
                dropdownClass="border border-gray-300 rounded-lg shadow-lg"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Country of Residence <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country"
                className={`w-full border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300`}
              />
              {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className={`w-full border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300`}
              />
              {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Postal Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="Postal Code"
                className={`w-full border ${errors.postalCode ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300`}
              />
              {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
            </div>
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Organization (Optional)
            </label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="Organization"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Message (Optional)
            </label>
            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
              placeholder="Your message"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg shadow-md transition duration-300 mt-8"
          >
            Get Consultation
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactUs;