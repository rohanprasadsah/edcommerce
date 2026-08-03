const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Prepare for NEET 2024: Complete Strategy Guide",
      excerpt: "Discover the most effective strategies and time management tips to crack NEET with top ranks.",
      date: "January 15, 2024",
      category: "NEET",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "JEE Main vs JEE Advanced: Key Differences Explained",
      excerpt: "Understanding the distinctions between JEE Main and Advanced to plan your preparation better.",
      date: "January 12, 2024",
      category: "JEE",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Top 10 Study Habits of Successful Medical Students",
      excerpt: "Learn from toppers about effective study techniques that lead to success in medical entrance exams.",
      date: "January 10, 2024",
      category: "Study Tips",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Importance of Mock Tests in Competitive Exam Preparation",
      excerpt: "Why regular mock tests are crucial for scoring high in NEET and JEE examinations.",
      date: "January 8, 2024",
      category: "Preparation",
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "How to Stay Motivated During Long Preparation Periods",
      excerpt: "Practical tips to maintain focus and motivation throughout your competitive exam journey.",
      date: "January 5, 2024",
      category: "Motivation",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Best Books for NEET Chemistry Preparation",
      excerpt: "Comprehensive list of recommended books and resources for mastering NEET Chemistry.",
      date: "January 3, 2024",
      category: "Resources",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=250&fit=crop"
    }
  ];

  return (
    <div>
      {/* Page Heading */}
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">Our Blogs</h1>
      </div>

      {/* Blog Grid */}
      <div className="w-full py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="w-full py-12 bg-gradient-to-br from-blue-900 to-white text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get the latest study tips, exam updates, and exclusive content delivered to your inbox
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 outline-none"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
