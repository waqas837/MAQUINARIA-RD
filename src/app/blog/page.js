import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: "Blog - MAQUINARIA RD",
  description: "Latest news, tips, and insights about heavy equipment",
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Right Excavator for Your Project",
      excerpt: "A comprehensive guide to selecting the perfect excavator based on your project needs, budget, and site conditions.",
      date: "March 15, 2024",
      category: "Buying Guide",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600"
    },
    {
      id: 2,
      title: "Maintenance Tips to Extend Equipment Lifespan",
      excerpt: "Learn essential maintenance practices that can significantly extend the life of your heavy equipment and reduce operating costs.",
      date: "March 10, 2024",
      category: "Maintenance",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600"
    },
    {
      id: 3,
      title: "Understanding Equipment Financing Options",
      excerpt: "Explore different financing solutions available for purchasing heavy equipment and find the best option for your business.",
      date: "March 5, 2024",
      category: "Finance",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600"
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">Blog</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Latest news, tips, and insights about heavy equipment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-yellow-500 text-slate-900 text-xs font-bold">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-slate-500 mb-2">{post.date}</p>
                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-600 leading-relaxed">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-yellow-500 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-slate-900">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Stay Updated</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest equipment listings, industry news, and expert tips
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border-2 border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900"
            />
            <button className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

