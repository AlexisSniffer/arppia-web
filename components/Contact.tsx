'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, Send, CheckCircle2, Loader2, Ticket } from 'lucide-react'
import { submitContactForm } from '@/app/actions/contact'

const Contact = ({
  className = '',
  showTitle = true,
  noPadding = false
}: {
  className?: string
  showTitle?: boolean
  noPadding?: boolean
}) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [result, setResult] = React.useState<{
    success: boolean
    ticketNumber?: string
    message?: string
    error?: string
  } | null>(null)
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    projectType: 'E-commerce',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResult(null)

    const res = await submitContactForm(formData)
    setResult(res)
    setIsSubmitting(false)

    if (res.success) {
      setFormData({
        name: '',
        email: '',
        projectType: 'E-commerce',
        message: ''
      })
    }
  }

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
              {result?.success ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    ¡Mensaje Recibido!
                  </h3>
                  <p className="text-gray-400 mb-8 max-w-sm">
                    {result.message}
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-full max-w-sm">
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-bold">
                      Tu número de ticket
                    </p>
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <Ticket className="w-5 h-5 text-primary" />
                      <span className="text-3xl font-mono font-black text-white">
                        {result.ticketNumber}
                      </span>
                    </div>
                    <Link
                      href={`/tickets?id=${result.ticketNumber}`}
                      className="block w-full bg-primary/20 hover:bg-primary/30 text-primary font-bold py-3 rounded-xl transition-all text-sm"
                    >
                      Ver Estado en Tiempo Real
                    </Link>
                  </div>
                  <button
                    onClick={() => setResult(null)}
                    className="mt-8 text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Nombre
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Tipo de Proyecto
                    </label>
                    <div className="relative">
                      <select
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            projectType: e.target.value
                          })
                        }
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                      >
                        <option className="bg-gray-900">E-commerce</option>
                        <option className="bg-gray-900">App Móvil</option>
                        <option className="bg-gray-900">
                          IA & Automatización
                        </option>
                        <option className="bg-gray-900">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Cuéntanos más
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Describe brevemente tu proyecto..."
                    ></textarea>
                  </div>

                  {result?.error && (
                    <p className="text-red-500 text-sm animate-pulse">
                      {result.error}
                    </p>
                  )}

                  <button
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span>Enviar Mensaje</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
