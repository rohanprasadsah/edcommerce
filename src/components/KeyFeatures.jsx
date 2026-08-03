const KeyFeatures = () => {
  const features = [
    {
      image: "/ii1.png",
      title: "Small Batch Sizes for Better Focus",
    },
    {
      image: "/ii2.png",
      title: "24/7 Doubt Solving Support",
    },
    {
      image: "/ii3.png",
      title: "Complete Study Material Provided",
    },
    {
      image: "/ii4.png",
      title: "Weekly Practice Tests & Analysis",
    },
    {
      image: "/ii5.png",
      title: "Scholarship Programs Available",
    },
    {
      image: "/ii6.png",
      title: "Live & Recorded Online Classes",
    }
  ];

  return (
    <div className="w-full py-8 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-6">
            {/* Desktop View - Horizontal with dividers */}
            <div className="hidden md:flex gap-0 justify-between items-stretch">
              {features.map((feature, index) => (
                <>
                  <div
                    key={index}
                    className="flex flex-col items-center text-center flex-shrink-0 w-32 py-2"
                  >
                    <div className="mb-2 flex items-center justify-center h-20">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                    <p className="text-xs font-semibold text-gray-800 leading-tight">
                      {feature.title}
                    </p>
                  </div>
                  
                  {/* Tapered diamond-shaped divider */}
                  {index < features.length - 1 && (
                    <div className="flex items-center self-stretch mx-2">
                      <svg width="6" height="100%" viewBox="0 0 6 100" preserveAspectRatio="none" className="h-full">
                        <path
                          d="M 3 10 L 4 40 L 4 60 L 3 90 L 2 60 L 2 40 Z"
                          fill="#e2e8f0"
                        />
                      </svg>
                    </div>
                  )}
                </>
              ))}
            </div>

            {/* Mobile View - 2 columns, 3 rows grid */}
            <div className="grid grid-cols-2 gap-4 md:hidden">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl"
                >
                  <div className="mb-2 flex items-center justify-center">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <p className="text-xs font-semibold text-gray-800 leading-tight">
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
