export interface Project {
  id: string
  title: string
  category: string
  description: string
  shortDesc: string
  image: string
  tech: string[]
  challenge: string
  solution: string
  results: string[]
}

export const projects: Project[] = [
  {
    id: 'e-commerce-premium',
    title: 'E-commerce Alta Gama',
    category: 'E-commerce',
    shortDesc: 'Plataforma de venta de relojes de lujo con Next.js y Shopify.',
    description:
      'Reconstrucción completa de una tienda online para una marca de relojes suizos, enfocada en la velocidad de carga y una experiencia de usuario extremadamente premium.',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    tech: ['Next.js', 'Shopify API', 'Tailwind CSS', 'Framer Motion'],
    challenge:
      'La tienda anterior tardaba más de 5 segundos en cargar y tenía una tasa de rebote del 60%.',
    solution:
      'Implementamos una arquitectura headless usando Next.js para carga instantánea y Shopify para la gestión robusta de inventario.',
    results: [
      'Reducción del tiempo de carga en un 75%',
      'Aumento del 40% en conversiones móviles',
      'Integración fluida de pasarelas de pago globales'
    ]
  },
  {
    id: 'app-logistica-realtime',
    title: 'App de Logística Real-Time',
    category: 'Apps Móviles',
    shortDesc: 'Gestión de flotas y entregas en tiempo real para última milla.',
    description:
      'Aplicación móvil multiplataforma desarrollada con React Native para el seguimiento y gestión de repartidores en una empresa de logística líder.',
    image:
      'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?w=800&q=80',
    tech: ['React Native', 'Firebase', 'Google Maps API', 'Node.js'],
    challenge:
      'Descoordinación en las rutas de entrega y falta de visibilidad del cliente sobre su pedido.',
    solution:
      'Desarrollamos una app con tracking por GPS en tiempo real y notificaciones push inteligentes.',
    results: [
      'Optimización de rutas en un 25%',
      'Mejora del 95% en la satisfacción del cliente',
      'Reducción de llamadas a soporte en un 50%'
    ]
  },
  {
    id: 'automatizacion-crm-n8n',
    title: 'Automatización Inteligente CRM',
    category: 'Automatización',
    shortDesc: 'Sincronización automática entre Salesforce, WhatsApp y Gmail.',
    description:
      'Implementación de flujos de trabajo avanzados en n8n para eliminar la entrada manual de datos entre plataformas de ventas y marketing.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tech: ['n8n', 'Salesforce', 'Twilio', 'PostgreSQL'],
    challenge:
      'El equipo de ventas perdía 10 horas semanales actualizando leads manualmente en diversos sistemas.',
    solution:
      'Creamos un motor de sincronización bidireccional que automatiza el 100% de la entrada de datos.',
    results: [
      'Ahorro de 40+ horas mensuales por empleado',
      'Eliminación total de duplicados en el CRM',
      'Respuesta a leads en tiempo real vía WhatsApp'
    ]
  },
  {
    id: 'agente-ia-atencion-cliente',
    title: 'Agente IA Resolutivo',
    category: 'Agentes IA',
    shortDesc: 'Asistente inteligente con GPT-4 para soporte de nivel 1.',
    description:
      'Bot de inteligencia artificial entrenado con la base de conocimientos interna para resolver dudas técnicas de clientes de forma autónoma.',
    image:
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
    tech: ['OpenAI GPT-4', 'LangChain', 'Pinecone', 'Next.js'],
    challenge:
      'Crecimiento exponencial de tickets de soporte que superaba la capacidad del equipo humano.',
    solution:
      'Implementamos un agente RAG (Retrieval-Augmented Generation) que entiende el contexto técnico de la empresa.',
    results: [
      'Resolución autónoma del 70% de las consultas',
      'Disponibilidad 24/7 en 5 idiomas',
      'Reducción de costos de soporte en un 45%'
    ]
  }
]
