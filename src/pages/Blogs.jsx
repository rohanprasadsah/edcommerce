import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const Blogs = () => {
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
              <Link 
                key={post.id}
                to={`/blog/${post.id}`}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-[1.02] block"
              >
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
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center gap-1">
                    Read More →
                  </span>
                </div>
              </Link>
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
