import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const OurAchievers = () => {
  const achieverImages = [
    'https://actuatorseducation.com/wp-content/uploads/2024/08/Placement-Report-1-1.png',
    'https://www.actuatorseducation.com/wp-content/uploads/2024/08/Placement-report-10.png',
    'https://www.actuatorseducation.com/wp-content/uploads/2024/08/Placement-report-11.png',
    'https://actuatorseducation.com/wp-content/uploads/2024/08/Placement-Report-1-1.png',
    'https://actuatorseducation.com/wp-content/uploads/2024/08/Placement-Report-1-1.png',
    'https://www.actuatorseducation.com/wp-content/uploads/2024/08/Placement-report-10.png',
    'https://www.actuatorseducation.com/wp-content/uploads/2024/08/Placement-report-11.png',
    'https://actuatorseducation.com/wp-content/uploads/2024/08/Placement-Report-1-1.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % achieverImages.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [isPaused, achieverImages.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? achieverImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % achieverImages.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + achieverImages.length) % achieverImages.length;
      cards.push({ index, position: i });
    }
    return cards;
  };

  const getCardStyle = (position, isMobile) => {
    const baseStyle = {
      position: 'absolute',
      top: '50%',
      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      backgroundColor: 'white'
    };

    // Mobile view - show peek of adjacent cards
    if (isMobile) {
      switch (position) {
        case 0: // Center
          return {
            ...baseStyle,
            left: '50%',
            transform: 'translate(-50%, -50%) scale(1)',
            width: '280px',
            height: '240px',
            zIndex: 30,
            opacity: 1,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
          };
        case -1: // Left peek
          return {
            ...baseStyle,
            left: '8%',
            transform: 'translate(-50%, -50%) scale(0.7)',
            width: '280px',
            height: '240px',
            zIndex: 10,
            opacity: 0.5
          };
        case 1: // Right peek
          return {
            ...baseStyle,
            left: '92%',
            transform: 'translate(-50%, -50%) scale(0.7)',
            width: '280px',
            height: '240px',
            zIndex: 10,
            opacity: 0.5
          };
        default:
          return { ...baseStyle, display: 'none' };
      }
    }

    // Desktop view - original 5-card layout
    switch (position) {
      case 0: // Center
        return {
          ...baseStyle,
          left: '50%',
          transform: 'translate(-50%, -50%) scale(1)',
          width: '500px',
          height: '400px',
          zIndex: 30,
          opacity: 1,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
        };
      case -1: // Left 1
        return {
          ...baseStyle,
          left: '15%',
          transform: 'translate(-50%, -50%) scale(0.75)',
          width: '500px',
          height: '400px',
          zIndex: 20,
          opacity: 0.7
        };
      case 1: // Right 1
        return {
          ...baseStyle,
          left: '85%',
          transform: 'translate(-50%, -50%) scale(0.75)',
          width: '500px',
          height: '400px',
          zIndex: 20,
          opacity: 0.7
        };
      case -2: // Left 2
        return {
          ...baseStyle,
          left: '5%',
          transform: 'translate(-50%, -50%) scale(0.55)',
          width: '500px',
          height: '400px',
          zIndex: 10,
          opacity: 0.4
        };
      case 2: // Right 2
        return {
          ...baseStyle,
          left: '95%',
          transform: 'translate(-50%, -50%) scale(0.55)',
          width: '500px',
          height: '400px',
          zIndex: 10,
          opacity: 0.4
        };
      default:
        return { ...baseStyle, display: 'none' };
    }
  };

  return (
    <div className="w-full py-8 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-6 md:mb-8">
          Our Achievers
        </h2>

        {/* Carousel */}
        <div 
          className="relative w-full h-[300px] md:h-[500px] mx-auto overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {achieverImages.map((image, idx) => {
            const position = ((idx - currentIndex + achieverImages.length) % achieverImages.length);
            let adjustedPosition;
            
            // Check if mobile (you can use window.innerWidth or a state if needed)
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
            
            if (position === 0) adjustedPosition = 0; // center
            else if (position === 1) adjustedPosition = 1; // right 1
            else if (position === achieverImages.length - 1) adjustedPosition = -1; // left 1
            else if (!isMobile && position === 2) adjustedPosition = 2; // right 2 (desktop only)
            else if (!isMobile && position === achieverImages.length - 2) adjustedPosition = -2; // left 2 (desktop only)
            else adjustedPosition = 99; // hidden
            
            if (adjustedPosition === 99) return null;
            
            return (
              <div
                key={idx}
                style={getCardStyle(adjustedPosition, isMobile)}
                onClick={() => {
                  if (adjustedPosition === -1) goToPrevious();
                  if (adjustedPosition === 1) goToNext();
                }}
              >
                <img
                  src={image}
                  alt={`Achiever ${idx + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                    padding: '10px'
                  }}
                />
              </div>
            );
          })}

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg z-40 transition-all"
            aria-label="Previous achiever"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg z-40 transition-all"
            aria-label="Next achiever"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-40">
            {achieverImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to achiever ${index + 1}`}
                className={`rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-blue-600 w-8 h-2'
                    : 'bg-gray-400 hover:bg-gray-600 w-2 h-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAchievers;
