import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Eye, Heart, Award, Users, Rocket } from 'lucide-react';

const AboutPage = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Nuestra <span className="text-gradient">Esencia</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-400 mb-10">
            Arppia es una agencia de desarrollo digital nacida con un propósito claro: democratizar la IA y la automatización avanzada para empresas que buscan liderar el mercado.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass p-12 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                <Target className="w-48 h-48 text-primary" />
              </div>
              <div className="bg-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Nuestra Misión</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Empoderar a negocios de todos los tamaños mediante soluciones tecnológicas inteligentes que optimicen sus operaciones y potencien su escalabilidad en un mundo cada vez más digital.
              </p>
            </div>

            <div className="glass p-12 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                <Eye className="w-48 h-48 text-accent" />
              </div>
              <div className="bg-accent/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Nuestra Visión</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Ser el referente global en la convergencia entre desarrollo de software de alta calidad y sistemas de inteligencia artificial, impulsando la próxima ola de innovación tecnológica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Nuestros Valores</h2>
            <p className="text-4xl font-extrabold text-white">Lo que nos <span className="text-gradient">Impulsa</span></p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Heart className="w-6 h-6 text-red-400" />, title: 'Pasión por el Código', desc: 'No solo escribimos código, construimos arte funcional pensando en cada píxel y cada milisegundo.' },
              { icon: <Award className="w-6 h-6 text-blue-400" />, title: 'Excelencia Técnica', desc: 'Nos mantenemos a la vanguardia de las tecnologías de IA y backend para ofrecer siempre lo mejor.' },
              { icon: <Users className="w-6 h-6 text-green-400" />, title: 'Compromiso Total', desc: 'Tu éxito es nuestro éxito. Nos convertimos en un socio tecnológico, no solo en un proveedor.' }
            ].map((value, idx) => (
              <div key={idx} className="glass p-8 rounded-3xl text-center hover:translate-y-[-4px] transition-all">
                <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team (Quick Example) */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">El Equipo</h2>
            <p className="text-4xl font-extrabold text-white">Mentes detrás de <span className="text-gradient">Arppia</span></p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="glass group p-6 rounded-[2rem] text-center overflow-hidden">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-white opacity-50">{i}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Especialista {i}</h3>
                <p className="text-primary text-sm font-semibold mb-4">Ingeniería & IA</p>
                <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-2 h-2 rounded-full bg-white/20" />
                   <div className="w-2 h-2 rounded-full bg-white/20" />
                   <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-transparent p-12 rounded-[3.52rem] glass">
                <Rocket className="w-16 h-16 text-primary mx-auto mb-8 animate-bounce" />
                <h2 className="text-4xl font-bold text-white mb-6">¿Listo para escalar?</h2>
                <p className="text-gray-400 mb-10 text-lg leading-relaxed">Únete a las empresas que ya están transformando su modelo de negocio con nosotros.</p>
                <a 
                    href="/#contact" 
                    className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105"
                >
                    Empezar Ahora
                </a>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
