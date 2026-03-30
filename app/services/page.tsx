'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { servicesData } from '@/lib/services-data'
import { ArrowRight, CheckCircle } from 'lucide-react'

const ServicesPage = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-black overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-[120px] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              Soluciones <span className="text-gradient">Tecnológicas</span>{' '}
              para el mañana.
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              En Arppia, no solo desarrollamos software; creamos ventajas
              competitivas mediante el uso estratégico de la IA, la
              automatización y el desarrollo web de alto impacto.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {servicesData.map((service, idx) => (
              <div
                key={service.id}
                className={`flex flex-col lg:items-center gap-12 ${
                  idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="glass p-12 rounded-[3rem] relative overflow-hidden group">
                    <div className="bg-white/5 w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                      <service.Icon className="w-10 h-10 text-primary" />
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-6">
                      {service.title}
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                      {service.longDescription}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                      {service.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start text-gray-300"
                        >
                          <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/services/${service.id}`}
                      className="inline-flex items-center text-primary font-bold hover:translate-x-2 transition-transform"
                    >
                      Saber más <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative aspect-video rounded-[3rem] overflow-hidden glass p-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5"></div>
                    <div className="relative h-full w-full bg-black/40 rounded-[2.5rem] flex items-center justify-center p-8">
                      <div className="text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
                          Stack Tecnológico
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                          {service.tech.map((t) => (
                            <span
                              key={t}
                              className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-white font-semibold text-sm"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            ¿Algún proyecto en mente?
          </h2>
          <p className="text-gray-400 text-xl mb-12">
            Estamos listos para ayudarte a dar el siguiente paso tecnológico.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-primary text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-primary/90 transition-all hover:scale-105"
          >
            Hablemos de tu proyecto
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default ServicesPage
