import React from 'react';
import Navigation from '../components/Navigation';
import { BookOpen, Calendar, User, ArrowRight, TrendingUp, Lightbulb, Target } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI-Native Organizations: 5 Key Trends for 2025",
      excerpt: "Explore the emerging trends that will define AI-native organizations in the coming year, from autonomous decision-making to ethical AI frameworks.",
      author: "V1S1ON Team",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Strategy",
      icon: TrendingUp,
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Building Persistent Memory Systems: The V0RA Platform Advantage",
      excerpt: "Deep dive into how persistent memory integration transforms AI systems from reactive tools to proactive intelligence partners.",
      author: "Technical Team",
      date: "December 10, 2024",
      readTime: "12 min read",
      category: "Technology",
      icon: Lightbulb,
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "ROI Measurement in AI Transformation: Beyond the Hype",
      excerpt: "Learn how to establish meaningful metrics and KPIs that demonstrate real business value from your AI transformation initiatives.",
      author: "Strategy Team",
      date: "December 5, 2024",
      readTime: "10 min read",
      category: "Business",
      icon: Target,
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const categories = ["All", "Strategy", "Technology", "Business", "Case Studies"];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-spacing bg-white">
          <div className="section-container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 frosted-glass px-4 py-2 mb-6">
                <BookOpen className="w-4 h-4 text-emerald-700" />
                <span className="text-tiny font-medium text-gray-700 uppercase tracking-wider">Insights & Expertise</span>
              </div>
              
              <h1 className="text-section-title text-gray-900 mb-4 fade-in-up">
                AI Transformation
                <span className="block text-gradient">Insights</span>
              </h1>
              <p className="text-body-large text-gray-600 fade-in-up max-w-3xl mx-auto">
                Expert perspectives on AI strategy, implementation, and the future of intelligent organizations
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === 0 
                      ? 'bg-emerald-700 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="section-spacing bg-gray-50">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={post.id} className="group fade-in-up" style={{animationDelay: `${0.1 * index}s`}}>
                  <div className="frosted-glass overflow-hidden hover-lift h-full">
                    {/* Post Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 text-emerald-700 text-tiny font-bold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-tiny text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>

                      <h3 className="text-subsection-title text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                        {post.title}
                      </h3>
                      
                      <p className="text-small text-gray-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-tiny text-gray-500">{post.readTime}</span>
                        <button className="flex items-center gap-2 text-emerald-700 font-medium text-small hover:gap-3 transition-all duration-300">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="professional-button">
                Load More Articles
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="section-spacing bg-white">
          <div className="section-container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="frosted-glass p-8 hover-lift">
                <h3 className="text-subsection-title text-gray-900 mb-4">
                  Stay Updated with AI Insights
                </h3>
                <p className="text-body text-gray-600 mb-6">
                  Get the latest insights on AI transformation, strategy, and implementation delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                  />
                  <button className="professional-button whitespace-nowrap">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;