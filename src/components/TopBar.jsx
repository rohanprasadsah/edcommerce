import { Phone, Mail } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-xs md:text-sm">
          {/* Left: Phone */}
          <a href="tel:+1234567890" className="flex items-center gap-1 md:gap-2 hover:text-blue-200 transition">
            <Phone size={14} className="md:w-4 md:h-4" />
            <span>+1 (234) 567-890</span>
          </a>
          
          {/* Right: Email */}
          <a href="mailto:info@eduinstitute.com" className="flex items-center gap-1 md:gap-2 hover:text-blue-200 transition">
            <Mail size={14} className="md:w-4 md:h-4" />
            <span className="hidden sm:inline">info@eduinstitute.com</span>
            <span className="sm:hidden">Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
