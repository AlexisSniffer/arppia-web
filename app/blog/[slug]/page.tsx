'use client';

import React, { use } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';
import { ArrowLeft, Calendar, Clock, Share2, Tag, User } from 'lucide-react';
import { notFound } from 'next/navigation';

export default function BlogPostDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      {/* Article Hero */}
      <article className="pt-32 pb-20 lg:pt-48 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-gray-500 hover:text-white mb-10 transition-colors group"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver al Blog
          </Link>

          <div className="flex items-center gap-4 mb-8">
            <span className="bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
              {post.category}
            </span>
            <div className="h-px w-12 bg-white/10"></div>
            <span className="text-gray-500 text-sm font-medium flex items-center gap-2">
                <Clock className="w-4 h-4" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-10 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-y border-white/10 mb-12">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-white">
                    {post.author.charAt(0)}
                </div>
                <div>
                    <p className="text-white font-bold">{post.author}</p>
                    <p className="text-gray-500 text-xs">{post.date}</p>
                </div>
            </div>
            
            <div className="flex items-center gap-3">
                <button className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                    <Share2 className="w-5 h-5" />
                </button>
            </div>
          </div>

          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-auto rounded-[3rem] mb-16 shadow-2xl"
          />

          {/* Post Content */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-400 prose-strong:text-white prose-a:text-primary mb-24">
            {post.content.split('\n').map((line, i) => {
                if (line.startsWith('## ')) {
                    return <h2 key={i} className="text-3xl font-bold mt-12 mb-6">{line.replace('## ', '')}</h2>;
                }
                if (line.startsWith('- ')) {
                    return <li key={i} className="ml-4 mb-2">{line.replace('- ', '')}</li>;
                }
                return <p key={i} className="mb-6 leading-relaxed">{line}</p>;
            })}
          </div>

          {/* Newsletter / CTA */}
          <div className="bg-gradient-to-br from-primary/20 to-transparent p-12 rounded-[3.5rem] glass text-center mb-20">
            <Tag className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">Suscríbete a nuestro Newsletter</h2>
            <p className="text-gray-400 mb-10 max-w-lg mx-auto">Recibe directamente en tu correo las últimas tendencias en IA y automatización para tu negocio.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                    type="email" 
                    placeholder="Tu email..."
                    className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all"
                />
                <button className="bg-white text-black font-bold px-8 py-4 rounded-2xl hover:bg-gray-200 transition-all">
                    Unirme
                </button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
