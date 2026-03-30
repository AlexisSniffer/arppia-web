'use client'

import React, { use } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { projects } from '@/lib/projects-data'
import { ArrowLeft, CheckCircle2, Cpu, Rocket, Shield } from 'lucide-react'
import { notFound } from 'next/navigation'

export default function ProjectDetail({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-30 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Volver a Proyectos
          </Link>

          <div className="max-w-4xl">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
              Caso de Éxito: {project.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="glass px-4 py-2 rounded-full text-sm font-semibold text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              {/* Challenge */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Shield className="mr-4 text-red-400" />
                  El Desafío
                </h2>
                <div className="glass p-8 rounded-3xl border-l-4 border-red-400">
                  <p className="text-gray-300 text-lg leading-relaxed italic">
                    "{project.challenge}"
                  </p>
                </div>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Cpu className="mr-4 text-primary" />
                  Nuestra Solución
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Results Sidebar */}
            <div className="lg:col-span-1">
              <div className="glass p-10 rounded-[3rem] sticky top-32">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <Rocket className="mr-3 text-accent" />
                  Resultados
                </h3>
                <ul className="space-y-6">
                  {project.results.map((result, idx) => (
                    <li key={idx} className="flex items-start space-x-4">
                      <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 font-medium">
                        {result}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <Link
                    href="/#contact"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-2xl flex items-center justify-center transition-all hover:scale-[1.02]"
                  >
                    ¿Quieres resultados así?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
