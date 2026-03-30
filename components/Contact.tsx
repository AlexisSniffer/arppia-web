'use client'

import React from 'react'
import { Mail, Send, CheckCircle2 } from 'lucide-react'

const Contact = ({
  className = '',
  showTitle = true,
  noPadding = false
}: {
  className?: string
  showTitle?: boolean
  noPadding?: boolean
}) => {
  return (
    <section
      id="contact"
      className={`${noPadding ? '' : 'py-24'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-[3rem] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="p-12 lg:p-16 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent">
              <h2 className="text-4xl font-bold text-white mb-6">
                Hagamos algo{' '}
                <span className="text-gradient">Extraordinario</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                ¿Tienes una idea innovadora o un proceso que necesita
                automatización? Estamos listos para escucharte y convertir tus
                desafíos en soluciones digitales de clase mundial.
              </p>

              <div className="space-y-6">
                {[
                  'Respuesta en menos de 24 horas',
                  'Auditoría técnica inicial gratuita',
                  'Presupuestos adaptados a tus objetivos'
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 text-gray-300"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-12 border-t border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Escríbenos a</p>
                    <p className="text-xl font-bold text-white">
                      hola@arppia.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-12 lg:p-16">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Tipo de Proyecto
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none">
                    <option className="bg-gray-900">E-commerce</option>
                    <option className="bg-gray-900">App Móvil</option>
                    <option className="bg-gray-900">IA & Automatización</option>
                    <option className="bg-gray-900">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Cuéntanos más
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Describe brevemente tu proyecto..."
                  ></textarea>
                </div>

                <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  <span>Enviar Mensaje</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
