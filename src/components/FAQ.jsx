import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What courses does EduInstitute offer?",
      answer: "We offer comprehensive preparation courses for NEET, JEE (Main & Advanced), and Foundation courses for students in classes 8-12. Our programs include classroom teaching, online classes, test series, and doubt-clearing sessions."
    },
    {
      question: "What is the batch size and student-teacher ratio?",
      answer: "We maintain small batch sizes of 25-30 students to ensure personalized attention. This optimal ratio allows our experienced faculty to focus on each student's learning needs and provide individual guidance."
    },
    {
      question: "Do you provide study material and test series?",
      answer: "Yes, we provide comprehensive study material designed by our expert faculty team. This includes detailed notes, practice questions, previous year papers, and regular test series that simulate actual exam patterns."
    },
    {
      question: "Are there any scholarship programs available?",
      answer: "We offer merit-based scholarships for deserving students based on their performance in our entrance tests. Scholarships can cover up to 50% of the course fee. Financial assistance programs are also available."
    },
    {
      question: "Do you offer online classes and recorded lectures?",
      answer: "Yes, we provide both live online classes and recorded lecture access. Our hybrid learning model allows students to attend classes remotely and revisit recorded sessions for revision."
    },
    {
      question: "How can I enroll and what are the admission requirements?",
      answer: "You can enroll by visiting our institute, calling our admission helpline, or filling out the online application form. Students need to appear for an entrance test to assess their current level."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Heading */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 md:mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Find answers to common questions about our programs
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-2 md:space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all hover:shadow-md"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-3 md:px-5 py-2.5 md:py-3 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm md:text-base font-semibold text-gray-800 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 text-blue-600 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={18}
                />
              </button>
              
              <div
                style={{
                  maxHeight: openIndex === index ? '400px' : '0',
                  transition: 'max-height 0.3s ease-in-out',
                  overflow: 'hidden'
                }}
              >
                <div className="px-3 md:px-5 py-2.5 md:py-3 bg-gray-50 border-t border-gray-200">
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
