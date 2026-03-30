import React from 'react'
import { ChevronRight, ArrowRight, Zap, Shield, Sparkles } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8 animate-in fade-in slide-in-from-bottom duration-700">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-gray-300">
              Impulsando la nueva era digital
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight animate-in fade-in slide-in-from-bottom duration-1000">
            Transformamos tus ideas en <br />
            <span className="text-gradient">Realidades Digitales</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-10 animate-in fade-in slide-in-from-bottom duration-1200">
            E-commerce de alto rendimiento, Apps móviles intuitivas y
            automatización con IA. Construimos el futuro de tu negocio hoy
            mismo.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-in fade-in slide-in-from-bottom duration-1500">
            <Link
              href="#contact"
              className="group bg-white text-black px-8 py-4 rounded-full font-bold text-lg flex items-center transition-all hover:bg-gray-100 hover:scale-105 active:scale-95"
            >
              Hablemos de tu proyecto
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#services"
              className="glass px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Ver Servicios
            </Link>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="w-6 h-6 text-yellow-400" />,
              title: 'Velocidad',
              desc: 'Soluciones optimizadas para el máximo rendimiento.'
            },
            {
              icon: <Shield className="w-6 h-6 text-green-400" />,
              title: 'Escalabilidad',
              desc: 'Sistemas que crecen al ritmo de tu empresa.'
            },
            {
              icon: <Sparkles className="w-6 h-6 text-purple-400" />,
              title: 'Innovación',
              desc: 'Implementación de Agentes IA y automatización avanzada.'
            }
          ].map((feature, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl flex items-start space-x-4 hover:border-primary/50 transition-colors group"
            >
              <div className="bg-white/5 p-3 rounded-xl group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg text-white mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
