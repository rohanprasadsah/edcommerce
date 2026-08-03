import { Phone, Mail } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="hidden md:block bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-blue-200 transition">
              <Phone size={16} />
              <span>+1 (234) 567-890</span>
            </a>
            <a href="mailto:info@eduinstitute.com" className="flex items-center gap-2 hover:text-blue-200 transition">
              <Mail size={16} />
              <span>info@eduinstitute.com</span>
            </a>
          </div>
          <div className="text-sm">
            <span className="font-semibold">Enroll Now - Limited Seats Available!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
