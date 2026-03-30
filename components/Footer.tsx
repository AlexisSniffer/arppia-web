'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Rocket, Code, X, Globe, Mail, ArrowRight } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center group space-x-2">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold tracking-tight text-white">
                Arppia
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Transformamos la visión de tu empresa en realidades digitales
              escalables con IA y automatización.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-primary hover:bg-white/10 transition-all"
              >
                <X className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-primary hover:bg-white/10 transition-all"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-primary hover:bg-white/10 transition-all"
              >
                <Code className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-bold mb-6">Servicios</h3>
            <ul className="space-y-4">
              {[
                { name: 'E-commerce', id: 'e-commerce' },
                { name: 'Apps Móviles', id: 'apps-moviles' },
                { name: 'APIs & Backend', id: 'api-microservicios' },
                { name: 'Automatización n8n', id: 'automatizacion' },
                { name: 'Agentes IA', id: 'agentes-ia' }
              ].map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-bold mb-6">Empresa</h3>
            <ul className="space-y-4">
              {[
                { name: 'Sobre nosotros', href: '/about' },
                { name: 'Nuestro proceso', href: '/#process' },
                { name: 'Portafolio', href: '/projects' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contacto', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-white font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Recibe las últimas tendencias en IA y desarrollo.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-primary text-white px-3 rounded-lg hover:bg-primary/90 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-xs">
            © {currentYear} Arppia. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-white text-xs transition-colors"
            >
              Privacidad
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-white text-xs transition-colors"
            >
              Términos
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-white text-xs transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
