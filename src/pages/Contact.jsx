import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      {/* Page Heading */}
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">Contact Us</h1>
      </div>

      {/* Contact Info */}
      <div className="w-full py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-blue-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Address</h3>
              <p className="text-gray-600 text-sm">
                123 Education Street<br />
                New Delhi, India 110001
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-green-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">
                +91 (234) 567-890<br />
                +91 (234) 567-891
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-purple-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600 text-sm">
                info@eduinstitute.com<br />
                admissions@eduinstitute.com
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-orange-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Hours</h3>
              <p className="text-gray-600 text-sm">
                Mon - Sat: 9AM - 6PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <ContactForm />

      {/* Map Section */}
      <div className="w-full h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3305922596255!2d77.20902931508045!3d28.61393948241907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd371d9e2b1b%3A0x4713e8a6b6b6f6f6!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
