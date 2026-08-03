import { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    course: '',
    state: '',
    pinCode: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Thank you for your interest! Our team will contact you shortly.');
    setFormData({
      fullName: '',
      email: '',
      course: '',
      state: '',
      pinCode: '',
      phone: ''
    });
  };

  return (
    <div className="w-full py-8 md:py-12 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side - Image (Hidden on mobile) */}
            <div className="hidden md:flex bg-gradient-to-br from-blue-900 to-white flex-col justify-center items-center relative overflow-hidden">
              <img 
                src="/cf.png" 
                alt="Contact Us" 
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>

            {/* Right Side - Form */}
            <div className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 text-center md:text-left">Get In Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-2.5 md:space-y-3">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-2 md:gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Full Name"
                      className="w-full px-2.5 py-1.5 md:px-3 md:py-2 bg-white border-2 border-gray-300 rounded-lg md:rounded-xl focus:border-cyan-500 outline-none transition-colors text-gray-800 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email"
                      className="w-full px-2.5 py-1.5 md:px-3 md:py-2 bg-white border-2 border-gray-300 rounded-lg md:rounded-xl focus:border-cyan-500 outline-none transition-colors text-gray-800 text-sm"
                    />
                  </div>
                </div>

                {/* Course Interested */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Course Interested In*
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-2.5 py-1.5 md:px-3 md:py-2 bg-white border-2 border-gray-300 rounded-lg md:rounded-xl focus:border-cyan-500 outline-none transition-colors appearance-none text-gray-800 text-sm"
                  >
                    <option value="">-- Please choose an option --</option>
                    <option value="NEET">NEET Preparation</option>
                    <option value="JEE">JEE Main & Advanced</option>
                    <option value="Foundation">Foundation Course (Class 8-12)</option>
                    <option value="Crash Course">Crash Course</option>
                  </select>
                </div>

                {/* State */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    State*
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full px-2.5 py-1.5 md:px-3 md:py-2 bg-white border-2 border-gray-300 rounded-lg md:rounded-xl focus:border-cyan-500 outline-none transition-colors appearance-none text-gray-800 text-sm"
                  >
                    <option value="">-- Please choose an option --</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* PinCode and Phone */}
                <div className="grid md:grid-cols-2 gap-2 md:gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      PinCode*
                    </label>
                    <input
                      type="text"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleChange}
                      required
                      placeholder="PinCode"
                      maxLength="6"
                      pattern="[0-9]{6}"
                      className="w-full px-2.5 py-1.5 md:px-3 md:py-2 bg-white border-2 border-gray-300 rounded-lg md:rounded-xl focus:border-cyan-500 outline-none transition-colors text-gray-800 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Phone*
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Phone"
                      maxLength="10"
                      pattern="[0-9]{10}"
                      className="w-full px-2.5 py-1.5 md:px-3 md:py-2 bg-white border-2 border-gray-300 rounded-lg md:rounded-xl focus:border-cyan-500 outline-none transition-colors text-gray-800 text-sm"
                    />
                  </div>
                </div>

                {/* Disclaimer */}
                <p className="text-xs text-gray-500 leading-tight">
                  *Wait for a few seconds after submitting the form.<br />
                  *I hereby authorize to contact me via RCS, SMS and email.
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-2 md:py-2.5 px-4 md:px-6 rounded-lg md:rounded-xl hover:shadow-lg transform hover:scale-105 transition-all flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  SUBMIT
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
