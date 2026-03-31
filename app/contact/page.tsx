'use client'

import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Code, Globe, Mail, MapPin, MessageCircle, Ticket, X } from 'lucide-react'
import Link from 'next/link'

const ContactPage = () => {
  return (
    <main className="flex flex-col min-h-screen bg-black">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-12 lg:pt-40 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Hablemos de tu <span className="text-gradient">Futuro</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-400">
            Estamos listos para transformar tu negocio con tecnología de
            vanguardia e inteligencia artificial.
          </p>
        </div>
      </section>

      {/* 2. Map Section - BASE LAYER */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[600px] rounded-[4rem] overflow-hidden glass p-1 border border-white/5">
            <iframe
              src="https://www.google.com/maps?q=19.42702,-99.1678235&z=15&output=embed"
              className="w-full h-full rounded-[3.9rem] border-0 invert-[90%] hue-rotate-180 brightness-[0.7] contrast-[1.2]"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <div className="absolute top-10 right-10 glass px-6 py-4 rounded-3xl border border-white/10 backdrop-blur-xl">
              <p className="text-white font-bold flex items-center gap-3">
                <MapPin className="text-primary w-6 h-6 animate-pulse" />
                <span>Sede Central: Ciudad de Panama, Panama</span>
              </p>
            </div>
          </div>
        </div>

        {/* 3. Form Section - OVERLAPPING THE MAP */}
        <div className="max-w-5xl mx-auto px-4 relative -mt-40 z-20">
          <div className="bg-black/80 rounded-[3.5rem] overflow-hidden ">
            <Contact noPadding showTitle={false} />
          </div>
        </div>
      </section>

      {/* 4. Direct Channels Section - AT THE BOTTOM */}
      <section className="py-32 bg-black relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Otros Canales de Contacto
            </h2>
            <p className="text-gray-400">Elige la forma más cómoda para ti.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* WhatsApp */}
            <a
              href="https://wa.me/something"
              className="glass group p-8 rounded-[3rem] flex flex-col items-center text-center hover:bg-white/5 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-500/20 transition-all">
                <MessageCircle className="text-green-500 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-gray-400 text-sm">Chatea con nosotros ahora</p>
            </a>

            {/* Email */}
            <a
              href="mailto:hola@arppia.com"
              className="glass group p-8 rounded-[3rem] flex flex-col items-center text-center hover:bg-white/5 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                <Mail className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Email Directo
              </h3>
              <p className="text-gray-400 text-sm">hola@arppia.com</p>
            </a>

            {/* Tickets */}
            <Link
              href="/tickets"
              className="glass group p-8 rounded-[3rem] flex flex-col items-center text-center hover:bg-white/5 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                <Ticket className="text-blue-500 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Mis Tickets</h3>
              <p className="text-gray-400 text-sm">Consulta el estado de tu pedido</p>
            </Link>

            {/* Socials */}
            <div className="glass p-8 rounded-[3rem] flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Globe className="text-accent w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Síguenos</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 bg-white/5 rounded-xl text-gray-400 hover:text-white transition-all"
                >
                  <Code className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-white/5 rounded-xl text-gray-400 hover:text-white transition-all"
                >
                  <X className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default ContactPage
