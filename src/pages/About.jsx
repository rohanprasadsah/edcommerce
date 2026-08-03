import InstituteInfo from '../components/InstituteInfo';
import KeyFeatures from '../components/KeyFeatures';

const About = () => {
  return (
    <div>
      {/* Page Heading */}
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">About EduInstitute</h1>
      </div>

      {/* Institute Info */}
      <InstituteInfo />

      {/* Key Features */}
      <KeyFeatures />

      {/* Mission & Vision */}
      <div className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To provide world-class coaching and comprehensive support that empowers students to excel in competitive examinations and achieve their career goals in medical and engineering fields.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted and respected educational institution, known for producing top-ranking students and nurturing future leaders in healthcare and technology sectors.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="w-full py-16 bg-gradient-to-br from-blue-900 to-white text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Years of Excellence</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">5000+</div>
              <div className="text-blue-100">Students Trained</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Expert Faculty</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
