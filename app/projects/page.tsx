'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Project, projects } from '@/lib/projects-data';
import { ArrowRight, Filter } from 'lucide-react';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'E-commerce', 'Apps Móviles', 'Automatización', 'Agentes IA'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter((p: Project) => p.category === filter);

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Title Section */}
      <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-20 bg-black overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                Nuestros <span className="text-gradient">Proyectos</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-400">
                Explora cómo ayudamos a las empresas a escalar mediante tecnología punta y diseños innovadores.
            </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-y border-white/10 bg-black/50 sticky top-[72px] z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-4">
            <div className="flex items-center text-gray-500 mr-4">
                <Filter className="w-4 h-4 mr-2" />
                <span className="text-sm font-semibold uppercase tracking-wider">Filtrar:</span>
            </div>
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                        filter === cat 
                        ? 'bg-primary text-white scale-105' 
                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {filteredProjects.map((project) => (
                    <Link 
                        key={project.id} 
                        href={`/projects/${project.id}`}
                        className="group relative block glass rounded-[3rem] overflow-hidden hover:border-primary/50 transition-all duration-500"
                    >
                        <div className="relative h-80 w-full overflow-hidden">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60"></div>
                            <div className="absolute top-6 left-6">
                                <span className="bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/20">
                                    {project.category}
                                </span>
                            </div>
                        </div>

                        <div className="p-10">
                            <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{project.title}</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed line-clamp-2">
                                {project.shortDesc}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-[10px] font-bold uppercase tracking-tighter text-gray-500 bg-white/5 px-3 py-1 rounded-md">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform">
                                Ver Caso de Éxito <ArrowRight className="ml-2 w-5 h-5" />
                            </div>
                        </div>
                    </Link>
                ))}
                {filteredProjects.length === 0 && (
                  <div className="col-span-full text-center py-20">
                    <p className="text-gray-500 text-xl">No se encontraron proyectos en esta categoría.</p>
                  </div>
                )}
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProjectsPage;
