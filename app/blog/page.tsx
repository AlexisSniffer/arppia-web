'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const categories = [
    'Todos',
    'Inteligencia Artificial',
    'Automatización',
    'Desarrollo'
  ]

  const filteredPosts =
    activeCategory === 'Todos'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory)

  const featuredPost = blogPosts[0]

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-20 bg-black overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-[120px] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Nuestro <span className="text-gradient">Blog</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-400">
            Ideas, guías y tendencias sobre el futuro de la tecnología y el
            negocio.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group relative block glass rounded-[3rem] overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-80 lg:h-full overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-primary/20">
                    Destacado
                  </span>
                  <span className="text-gray-500 text-sm">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 font-medium">
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-2" /> {featuredPost.author}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" /> {featuredPost.date}
                  </span>
                </div>
                <div className="flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform">
                  Leer Artículo <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* category Filter */}
      <section className="py-8 border-y border-white/10 bg-black/50 sticky top-[72px] z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-white text-black scale-105'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col glass rounded-[2.5rem] overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" /> {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-4 flex items-center text-white font-bold text-sm">
                    Leer más{' '}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default BlogPage
