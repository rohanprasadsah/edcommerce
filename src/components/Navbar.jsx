import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Blogs', path: '/blogs' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-14 md:h-16 px-1 md:px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 md:gap-2 text-lg md:text-2xl font-bold text-blue-600">
            <GraduationCap size={24} className="md:w-8 md:h-8" />
            <span className="text-base md:text-2xl">EduInstitute</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors group py-2 text-base"
              >
                {link.name}
                
                {/* Active indicator */}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
                )}
                
                {/* Hover underline animation */}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
              </Link>
            ))}
            
            {/* Call Button */}
            <a 
              href="tel:+1234567890" 
              className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2.5 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
            >
              <Phone size={18} />
              <span className="font-semibold text-sm md:text-base">Contact Us</span>
            </a>
          </div>

          {/* Mobile: Hamburger + Call Button */}
          <div className="flex md:hidden items-center gap-2">
            {/* Call Button */}
            <a 
              href="tel:+1234567890" 
              className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2.5 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all shadow-md"
            >
              <Phone size={18} />
              <span className="font-semibold text-sm">Contact Us</span>
            </a>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 bg-white">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg ${
                    isActive(link.path) ? 'bg-blue-50 text-blue-600 font-semibold' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
