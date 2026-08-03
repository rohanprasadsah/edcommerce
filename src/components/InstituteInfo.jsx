const InstituteInfo = () => {
  return (
    <div className="w-full py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Left Side - Text Content */}
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-3 md:mb-4">
                EduInstitute
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 md:mb-4">
                EduInstitute is a leading coaching institute specializing in NEET, JEE, and Foundation courses. 
                Our expert team provides high-quality education designed to build confidence and leadership skills 
                with tailored programs and a focus on practical expertise. We ensure a top-notch learning experience 
                for students pursuing careers in medical and engineering fields.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                With a proven track record of success, our comprehensive approach combines experienced faculty, 
                personalized attention, and industry-relevant curriculum to help students achieve their dreams 
                and excel in competitive examinations.
              </p>
            </div>

            {/* Right Side - Illustration Image */}
            <div className="relative flex items-center justify-center order-1 md:order-2">
              <img
                src="/1.png"
                alt="EduInstitute Illustration"
                className="w-full max-w-xs md:max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstituteInfo;
