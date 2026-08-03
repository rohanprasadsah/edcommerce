import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const BlogDetail = () => {
  const { id } = useParams();
  
  // Find the blog post by ID
  const blogPost = blogPosts.find(post => post.id === parseInt(id));
  
  // If blog not found, redirect to blogs page
  if (!blogPost) {
    return <Navigate to="/blogs" replace />;
  }

  // Get related posts (exclude current post, take 3)
  const relatedPosts = blogPosts
    .filter(post => post.id !== blogPost.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Link 
          to="/blogs" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Blogs
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[500px] bg-gradient-to-br from-blue-900 to-indigo-800 overflow-hidden">
        <img 
          src={blogPost.image} 
          alt={blogPost.title}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto max-w-4xl">
            <span className="inline-block bg-blue-600 text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full mb-4">
              {blogPost.category}
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {blogPost.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{blogPost.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Article Content */}
            <article className="md:col-span-8 bg-white rounded-2xl shadow-lg p-6 md:p-10">
              {/* Share Buttons */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                <p className="text-gray-600 text-sm md:text-base">Share this article:</p>
                <div className="flex gap-3">
                  <button className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none blog-content"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />

              {/* Tags */}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {blogPost.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-10 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                <div className="flex items-start gap-4">
                  <img 
                    src={`https://ui-avatars.com/api/?name=${blogPost.author}&background=3b82f6&color=fff&size=100`}
                    alt={blogPost.author}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white shadow-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">About {blogPost.author}</h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      {blogPost.author} is a senior faculty member at EduInstitute with extensive experience in competitive exam coaching. 
                      They have mentored thousands of students who have successfully achieved their academic goals.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="md:col-span-4">
              {/* Related Posts */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:sticky md:top-20">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Related Articles</h3>
                <div className="space-y-6">
                  {relatedPosts.map((post) => (
                    <Link 
                      key={post.id}
                      to={`/blog/${post.id}`}
                      className="block group"
                    >
                      <div className="flex gap-4">
                        <img 
                          src={post.image}
                          alt={post.title}
                          className="w-24 h-20 object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                        />
                        <div className="flex-1">
                          <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded mb-2">
                            {post.category}
                          </span>
                          <h4 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Custom Styles for Blog Content */}
      <style>
        {`
          .blog-content h2 {
            font-size: 1.75rem;
            font-weight: 700;
            color: #1f2937;
            margin-top: 2rem;
            margin-bottom: 1rem;
          }
          
          .blog-content h3 {
            font-size: 1.5rem;
            font-weight: 600;
            color: #374151;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
          }
          
          .blog-content p {
            font-size: 1.0625rem;
            line-height: 1.8;
            color: #4b5563;
            margin-bottom: 1.25rem;
          }
          
          .blog-content ul {
            list-style: disc;
            padding-left: 2rem;
            margin-bottom: 1.5rem;
          }
          
          .blog-content li {
            font-size: 1.0625rem;
            line-height: 1.75;
            color: #4b5563;
            margin-bottom: 0.5rem;
          }
          
          .blog-content strong {
            color: #1f2937;
            font-weight: 600;
          }

          @media (max-width: 768px) {
            .blog-content h2 {
              font-size: 1.5rem;
            }
            
            .blog-content h3 {
              font-size: 1.25rem;
            }
            
            .blog-content p,
            .blog-content li {
              font-size: 0.9375rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default BlogDetail;
