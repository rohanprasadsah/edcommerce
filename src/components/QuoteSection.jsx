import { Award } from 'lucide-react';

const QuoteSection = () => {
  return (
    <div className="bg-transparent text-white py-6 md:py-8 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-6 md:mb-8">
          <div className="flex items-center justify-center mb-3 md:mb-4">
            <Award className="text-yellow-300 mr-1.5 md:mr-3" size={24} />
            <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-gray-800" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
              Empowering Excellence Since Day One
            </h2>
            <Award className="text-yellow-300 ml-1.5 md:ml-3" size={24} />
          </div>
          
          <div className="max-w-4xl mx-auto mt-3 md:mt-4">
            <p className="text-xs md:text-lg lg:text-xl text-gray-700 leading-normal px-2" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s backwards' }}>
              At EduInstitute, we don't just teach – we transform lives. Our commitment to academic excellence, 
              innovative learning methods, and personalized mentorship has shaped thousands of successful careers. 
              Join a community where your aspirations meet world-class education, and every dream finds its path to reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;
