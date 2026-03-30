'use client'

import React, { use } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { servicesData } from '@/lib/services-data'
import {
  ArrowLeft,
  CheckCircle2,
  Lightbulb,
  TrendingUp,
  Zap
} from 'lucide-react'
import { notFound } from 'next/navigation'

export default function ServiceDetail({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const service = servicesData.find((s) => s.id === id)

  if (!service) {
    notFound()
  }

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-black overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full filter blur-[150px] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center text-gray-500 hover:text-white mb-10 transition-colors group"
          >
            <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Volver a Servicios
          </Link>

          <div className="max-w-4xl">
            <div className="bg-primary/20 w-20 h-20 rounded-3xl flex items-center justify-center mb-8">
              <service.Icon className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              {service.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits & Features Grid */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Benefits */}
            <div>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-6 flex items-center">
                <TrendingUp className="mr-3 w-5 h-5" />
                Beneficios Clave
              </h2>
              <div className="space-y-6">
                {service.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="glass p-8 rounded-3xl border-l-4 border-primary transition-all hover:bg-white/5"
                  >
                    <p className="text-white font-bold text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* features */}
            <div className="space-y-12">
              <div>
                <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-6 flex items-center">
                  <Zap className="mr-3 w-5 h-5" />
                  Lo que Incluimos
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-black/50 p-10 rounded-[3rem] border border-white/5">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Lightbulb className="mr-3 text-yellow-400" />
                  Stack Tecnológico
                </h3>
                <div className="flex flex-wrap gap-3">
                  {service.tech.map((t) => (
                    <span
                      key={t}
                      className="px-4 py-2 bg-white/10 rounded-xl text-white font-semibold text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Info / Process excerpt */}
      <section className="py-24 bg-black">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Nuestra Metodología para {service.title}
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            Desde la consultoría inicial hasta el despliegue final y soporte
            continuo, seguimos un proceso riguroso para garantizar que cada{' '}
            {service.title} cumpla con los estándares más altos de la industria.
          </p>
          <div className="inline-flex items-center gap-4 text-gray-500 font-bold uppercase tracking-widest text-xs">
            <span>Estrategia</span>
            <div className="w-4 h-px bg-white/10"></div>
            <span>Desarrollo</span>
            <div className="w-4 h-px bg-white/10"></div>
            <span>Optimización</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-primary/30 to-accent/5 p-16 rounded-[4rem] text-center glass border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-8">
              ¿Listo para transformar tu negocio con {service.title}?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="/#contact"
                className="bg-white text-black font-bold px-10 py-5 rounded-full text-lg hover:bg-gray-200 transition-all hover:scale-105"
              >
                Solicitar Presupuesto
              </Link>
              <Link
                href="/projects"
                className="bg-transparent border border-white/20 text-white font-bold px-10 py-5 rounded-full text-lg hover:bg-white/5 transition-all"
              >
                Ver Proyectos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
