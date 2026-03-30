import {
  ShoppingBag,
  Tablet,
  Cpu,
  Zap,
  BrainCircuit,
  LucideIcon
} from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  longDescription: string
  Icon: LucideIcon
  features: string[]
  benefits: string[]
  tech: string[]
}

export const servicesData: Service[] = [
  {
    id: 'e-commerce',
    title: 'E-commerce Premium',
    description:
      'Tiendas online de alto rendimiento con arquitecturas headless.',
    longDescription:
      'Diseñamos y desarrollamos experiencias de compra ultrarrápidas utilizando las últimas tecnologías en e-commerce. Nos enfocamos en la conversión, la escalabilidad y una experiencia de usuario sin fricciones.',
    Icon: ShoppingBag,
    features: [
      'Arquitectura Headless (Next.js + Shopify/Medusa)',
      'Optimización de Core Web Vitals',
      'Integración de pasarelas de pagos globales',
      'Gestión de inventario en tiempo real'
    ],
    benefits: [
      'Carga instantánea de productos',
      'Mejor posicionamiento SEO orgánico',
      'Mayor tasa de conversión móvil',
      'Escalabilidad para eventos de alto tráfico'
    ],
    tech: ['Next.js', 'Shopify Plus', 'Medusa.js', 'Tailwind CSS']
  },
  {
    id: 'apps-moviles',
    title: 'Apps Móviles',
    description:
      'Aplicaciones nativas y multiplataforma con diseño excepcional.',
    longDescription:
      'Creamos aplicaciones móviles que los usuarios aman. Desde apps para startups hasta soluciones enterprise, utilizamos React Native para entregar calidad nativa con eficiencia de desarrollo.',
    Icon: Tablet,
    features: [
      'Desarrollo con React Native / Expo',
      'Diseño UX/UI centrado en el usuario',
      'Sincronización offline-first',
      'Notificaciones push personalizadas'
    ],
    benefits: [
      'Presencia en iOS y Android con un solo código',
      'Mantenimiento simplificado',
      'Experiencia de usuario fluida y rápida',
      'Integración con hardware del dispositivo'
    ],
    tech: ['React Native', 'Expo', 'Firebase', 'Redux/Zustand']
  },
  {
    id: 'api-microservicios',
    title: 'APIs & Microservicios',
    description:
      'Infraestructura robusta y escalable para conectar tus productos.',
    longDescription:
      'Construimos el cerebro de tu ecosistema digital. APIs RESTful y GraphQL diseñadas para la seguridad, el rendimiento y la facilidad de integración.',
    Icon: Cpu,
    features: [
      'Arquitectura de microservicios',
      'Documentación con Swagger/OpenAPI',
      'Seguridad avanzada (OAuth2, JWT)',
      'Monitorización y logs en tiempo real'
    ],
    benefits: [
      'Alta disponibilidad y tolerancia a fallos',
      'Fácil integración con terceros',
      'Escalabilidad independiente de módulos',
      'Respuesta rápida bajo alta carga'
    ],
    tech: ['Node.js', 'NestJS', 'PostgreSQL', 'Docker', 'AWS']
  },
  {
    id: 'automatizacion',
    title: 'Automatización n8n',
    description:
      'Optimización de flujos de trabajo eliminando tareas manuales.',
    longDescription:
      'Conectamos tus herramientas de negocio (CRM, ERP, Slack, Gmail) mediante flujos de trabajo inteligentes en n8n, ahorrando cientos de horas de trabajo manual.',
    Icon: Zap,
    features: [
      'Diseño de workflows complejos en n8n',
      'Sincronización de datos entre plataformas',
      'Automatización de marketing y ventas',
      'Bots de notificaciones inteligentes'
    ],
    benefits: [
      'Eliminación de errores humanos',
      'Ahorro significativo de tiempo operativo',
      'Visibilidad de procesos en tiempo real',
      'Retorno de inversión (ROI) inmediato'
    ],
    tech: ['n8n', 'Zapier', 'Python', 'Webhooks']
  },
  {
    id: 'agentes-ia',
    title: 'Agentes IA',
    description:
      'Inteligencia artificial aplicada para resolver problemas reales.',
    longDescription:
      'Implementamos agentes de IA basados en modelos avanzados (GPT-4, Claude) capaces de entender el contexto de tu negocio y tomar decisiones inteligentes de forma autónoma.',
    Icon: BrainCircuit,
    features: [
      'Agentes de atención al cliente (RAG)',
      'Procesamiento inteligente de documentos',
      'Análisis predictivo de datos',
      'Integración de LLMs en productos existentes'
    ],
    benefits: [
      'Soporte 24/7 de alta calidad',
      'Análisis de datos a escala sobrehumana',
      'Personalización masiva de contenidos',
      'Reducción drástica de costos operativos'
    ],
    tech: ['OpenAI', 'LangChain', 'Pinecone', 'Python']
  }
]
