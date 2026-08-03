import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import bannersData from '../data/banners.json';

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannersData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? bannersData.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % bannersData.length);
  };

  const handleClick = (url) => {
    if (!url) return;
    if (url.startsWith('http')) {
      window.open(url, '_blank');
    } else {
      navigate(url);
    }
  };

  if (bannersData.length === 0) return null;

  return (
    <div className="w-full px-4 py-4">
      <div className="relative w-full h-[200px] md:h-[600px] overflow-hidden rounded-2xl shadow-lg ">
        {bannersData.map((banner, index) => (
          <img
            key={banner.id}
            src={banner.imageUrl}
            alt={banner.alt}
            onClick={() => handleClick(banner.redirectUrl)}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
              objectFit: 'fill',
              cursor: 'pointer',
              opacity: index === currentIndex ? 1 : 0,
              zIndex: index === currentIndex ? 10 : 0,
              transition: 'opacity 700ms',
              display: 'block',
              margin: 0,
              padding: 0
            }}
          />
        ))}

        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {bannersData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-white w-8 h-2'
                  : 'bg-white/50 hover:bg-white/80 w-2 h-2'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
