'use client';

import { useState } from 'react';
import Link from 'next/link';

const ContentManagement = () => {
  const [activeSection, setActiveSection] = useState('blog');

  const blogPosts = [
    {
      id: 1,
      title: 'How to Choose the Right Excavator for Your Project',
      status: 'published',
      date: '2026-01-15',
      views: 1245
    },
    {
      id: 2,
      title: 'Maintenance Tips to Extend Equipment Lifespan',
      status: 'published',
      date: '2026-01-10',
      views: 892
    },
    {
      id: 3,
      title: 'Understanding Equipment Financing Options',
      status: 'draft',
      date: '2026-01-05',
      views: 0
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-slate-900">Content Management</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveSection('blog')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeSection === 'blog'
                ? 'bg-yellow-500 text-slate-900'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Blog Posts
          </button>
          <button
            onClick={() => setActiveSection('pages')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeSection === 'pages'
                ? 'bg-yellow-500 text-slate-900'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Static Pages
          </button>
        </div>
      </div>

      {activeSection === 'blog' && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-slate-600">{blogPosts.length} blog posts</span>
            <Link
              href="/blog/new"
              className="px-4 py-2 rounded-xl bg-yellow-500 text-slate-900 font-semibold hover:bg-yellow-600 transition-all"
            >
              + New Post
            </Link>
          </div>
          <div className="space-y-3">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-slate-50 rounded-xl border border-slate-200 p-4 flex items-center justify-between"
              >
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 mb-1">{post.title}</h4>
                  <div className="flex items-center space-x-4 text-xs text-slate-500">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.views} views</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    post.status === 'published'
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-amber-100 text-amber-700'
                  }`}>
                    {post.status}
                  </span>
                  <button className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-all">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'pages' && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['About', 'Contact', 'Help', 'FAQ', 'Terms', 'Privacy'].map((page) => (
              <div
                key={page}
                className="bg-slate-50 rounded-xl border border-slate-200 p-4 flex items-center justify-between"
              >
                <span className="font-semibold text-slate-900">{page} Page</span>
                <button className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-all">
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentManagement;

