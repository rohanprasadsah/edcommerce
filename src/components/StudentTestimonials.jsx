import { Star } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const StudentTestimonials = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isManualScrolling, setIsManualScrolling] = useState(false);
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      course: "NEET Preparation",
      rating: 5,
      text: "EduInstitute transformed my preparation strategy. The faculty's dedication and comprehensive study material helped me secure AIR 245 in NEET. Forever grateful!",
      image: "https://ui-avatars.com/api/?name=Priya+Sharma&background=3b82f6&color=fff&size=200"
    },
    {
      id: 2,
      name: "Rahul Kumar",
      course: "JEE Advanced",
      rating: 5,
      text: "The personalized attention and doubt-clearing sessions were exceptional. Scored 98.5 percentile in JEE Mains. Highly recommend EduInstitute!",
      image: "https://ui-avatars.com/api/?name=Rahul+Kumar&background=10b981&color=fff&size=200"
    },
    {
      id: 3,
      name: "Ananya Patel",
      course: "Foundation Course",
      rating: 5,
      text: "Starting my preparation here in class 9 gave me a strong foundation. Now I'm confidently preparing for competitive exams. Best decision ever!",
      image: "https://ui-avatars.com/api/?name=Ananya+Patel&background=f59e0b&color=fff&size=200"
    },
    {
      id: 4,
      name: "Arjun Reddy",
      course: "NEET Preparation",
      rating: 5,
      text: "The mock tests and regular assessments kept me on track. Faculty members are always available to help. Achieved my dream of becoming a doctor!",
      image: "https://ui-avatars.com/api/?name=Arjun+Reddy&background=ef4444&color=fff&size=200"
    },
    {
      id: 5,
      name: "Sneha Gupta",
      course: "JEE Mains",
      rating: 5,
      text: "Excellent teaching methodology and study environment. The weekly tests helped identify my weak areas. Scored 99.2 percentile!",
      image: "https://ui-avatars.com/api/?name=Sneha+Gupta&background=8b5cf6&color=fff&size=200"
    },
    {
      id: 6,
      name: "Vikram Singh",
      course: "NEET Preparation",
      rating: 5,
      text: "The supportive environment and experienced mentors made my journey smooth. Cleared NEET with flying colors. Thank you EduInstitute!",
      image: "https://ui-avatars.com/api/?name=Vikram+Singh&background=ec4899&color=fff&size=200"
    }
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      setIsManualScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsManualScrolling(false);
      }, 1000);
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => {
        scrollElement.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout);
      };
    }
  }, []);

  return (
    <div className="w-full py-12 md:py-16 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 md:mb-12">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
            Student Testimonials
          </h2>
          <p className="text-sm md:text-lg text-gray-600">
            Hear what our successful students have to say
          </p>
        </div>
      </div>

      <div className="relative px-2 md:px-8">
        {/* Left fade overlay - only on desktop */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-50 via-blue-50/60 to-transparent z-10 pointer-events-none"></div>
        
        {/* Right fade overlay - only on desktop */}
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-indigo-50 via-indigo-50/60 to-transparent z-10 pointer-events-none"></div>

        <style>
          {`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 40s linear infinite;
            }
            .animate-scroll.paused {
              animation-play-state: paused;
            }
            .testimonials-container {
              overflow-x: auto;
              scrollbar-width: none;
              -ms-overflow-style: none;
            }
            .testimonials-container::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        <div 
          ref={scrollRef}
          className="testimonials-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`flex gap-3 md:gap-6 py-4 ${isPaused || isManualScrolling ? 'animate-scroll paused' : 'animate-scroll'}`}>
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-[240px] md:w-[350px] bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 md:border-4 border-blue-100"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm md:text-lg font-bold text-gray-800 truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600 truncate">{testimonial.course}</p>
                </div>
                <div className="flex gap-0.5 md:gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-yellow-400"
                      size={12}
                    />
                  ))}
                </div>
              </div>

              <p className="text-xs md:text-base text-gray-700 leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default StudentTestimonials;
