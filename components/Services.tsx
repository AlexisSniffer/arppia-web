import React from 'react'
import { ShoppingCart, Smartphone, Globe, Cpu, Bot, Zap } from 'lucide-react'

const services = [
  {
    icon: <ShoppingCart className="w-8 h-8 text-blue-400" />,
    title: 'E-commerce',
    description:
      'Tiendas online de alto rendimiento con integraciones de pago seguras y experiencia de usuario optimizada.',
    features: ['Custom Shopify', 'Next.js Commerce', 'Pagos Globales']
  },
  {
    icon: <Smartphone className="w-8 h-8 text-purple-400" />,
    title: 'Apps Móviles',
    description:
      'Desarrollo cross-platform (iOS/Android) con React Native para una experiencia nativa fluida.',
    features: ['Diseño UX/UI', 'Notificaciones Push', 'Modo Offline']
  },
  {
    icon: <Globe className="w-8 h-8 text-cyan-400" />,
    title: 'APIs & Backend',
    description:
      'Arquitecturas escalables y robustas para conectar todos tus servicios digitales de forma eficiente.',
    features: ['Node.js/Python', 'GraphQL/REST', 'Microservicios']
  },
  {
    icon: <Cpu className="w-8 h-8 text-green-400" />,
    title: 'n8n Automation',
    description:
      'Optimización de procesos operativos mediante flujos de trabajo automatizados sin errores humanos.',
    features: ['Integración CRM', 'Webhooks', 'ETL de Datos']
  },
  {
    icon: <Bot className="w-8 h-8 text-indigo-400" />,
    title: 'Agentes IA',
    description:
      'Implementación de LLMs y asistentes inteligentes personalizados para atención al cliente y análisis.',
    features: ['LangChain', 'OpenAI/Anthropic', 'RAG (Vector DB)']
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: 'Consultoría Tech',
    description:
      'Asesoramiento estratégico para digitalizar tu negocio con las mejores herramientas del mercado.',
    features: ['Auditoría Cloud', 'Seguridad', 'Escalado']
  }
]

const Services = () => {
  return (
    <section id="services" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
            Nuestros Servicios
          </h2>
          <p className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Soluciones que impulsan tu{' '}
            <span className="text-gradient">Crecimiento</span>
          </p>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Combinamos diseño, ingeniería y tecnología de vanguardia para crear
            productos digitales que marcan la diferencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="glass p-8 rounded-3xl transition-all duration-300 hover:translate-y-[-8px] hover:border-primary/40 group"
            >
              <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    className="flex items-center text-sm text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
