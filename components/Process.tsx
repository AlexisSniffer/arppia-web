import React from 'react'
import { Lightbulb, Code2, Rocket, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: <Lightbulb className="w-10 h-10 text-yellow-400" />,
    title: 'Estrategia & Diseño',
    description:
      'Analizamos tus necesidades, diseñamos la arquitectura y definimos el roadmap del proyecto.'
  },
  {
    icon: <Code2 className="w-10 h-10 text-primary" />,
    title: 'Desarrollo Ágil',
    description:
      'Construimos tu solución con las mejores prácticas, enviando actualizaciones constantes.'
  },
  {
    icon: <Rocket className="w-10 h-10 text-green-400" />,
    title: 'Lanzamiento & Soporte',
    description:
      'Desplegamos en producción y te acompañamos en el crecimiento con mantenimiento continuo.'
  }
]

const Process = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">
            Metodología
          </h2>
          <p className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            ¿Cómo trabajamos <span className="text-gradient">juntos?</span>
          </p>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Un proceso transparente y eficiente diseñado para entregar
            resultados excepcionales en tiempo récord.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-24 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center group"
            >
              <div className="bg-white/5 w-24 h-24 rounded-full flex items-center justify-center mb-8 border border-white/10 group-hover:border-primary/50 transition-all duration-300 relative">
                <div className="absolute -top-2 -right-2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
