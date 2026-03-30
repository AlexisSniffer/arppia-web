export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'el-futuro-de-la-ia-en-ecommerce',
    title: 'El Futuro de la IA en el E-commerce 2024',
    excerpt: 'Descubre cómo los agentes inteligentes están transformando la experiencia de compra online y aumentando las conversiones.',
    content: `
      La inteligencia artificial ha dejado de ser una promesa para convertirse en el motor principal de las ventas online. En este artículo exploramos las tendencias clave que están definiendo el 2024.

      ## Personalización Hiper-Segmentada
      Ya no basta con recomendar productos basados en compras anteriores. Los nuevos agentes IA analizan el comportamiento en tiempo real, el clima, la ubicación y hasta el sentimiento del usuario para ofrecer la oferta perfecta en el momento exacto.

      ## Búsqueda Visual y por Voz
      El 60% de los usuarios prefieren buscar productos mediante imágenes o comandos de voz. Implementar estas tecnologías ya no es opcional para las marcas de lujo.

      ## Agentes de Soporte Resolutivos
      Olvídate de los chatbots tradicionales que solo seguían un guion. Los nuevos agentes basados en LLM (Large Language Models) pueden resolver problemas complejos, gestionar devoluciones y cerrar ventas de forma autónoma.
    `,
    date: '15 Mar, 2024',
    author: 'Arppia Team',
    category: 'Inteligencia Artificial',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
    readTime: '5 min'
  },
  {
    slug: 'automatizacion-n8n-productividad',
    title: 'Automatización con n8n: Maximiza tu Productividad',
    excerpt: 'Aprende a conectar tus herramientas favoritas y eliminar tareas repetitivas usando flujos de trabajo inteligentes.',
    content: `
      La automatización no se trata de reemplazar a las personas, sino de liberarlas de las tareas monótonas para que se enfoquen en lo que realmente importa: la estrategia.

      ## ¿Por qué n8n?
      A diferencia de otras herramientas, n8n ofrece una flexibilidad total y la posibilidad de alojarlo en tus propios servidores, garantizando la privacidad de tus datos.

      ## Casos de Uso Comunes
      - Sincronización automática de leads entre el sitio web y el CRM.
      - Notificaciones inteligentes en Slack basadas en eventos de pago.
      - Generación automática de reportes mensuales extrayendo datos de múltiples fuentes.

      ## Implementación Rápida
      En Arppia, ayudamos a las empresas a desplegar sus primeros flujos en cuestión de días, logrando un ROI inmediato.
    `,
    date: '10 Mar, 2024',
    author: 'Ingeniería Arppia',
    category: 'Automatización',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80',
    readTime: '4 min'
  },
  {
    slug: 'desarrollo-apps-modernas-2024',
    title: 'Desarrollo de Apps Modernas: Tendencias en 2024',
    excerpt: 'Desde Progressive Web Apps hasta integración nativa de IA, exploramos lo que hace a una app exitosa hoy.',
    content: `
      El mercado de las aplicaciones móviles está más saturado que nunca. Para destacar, no basta con una buena idea; necesitas una ejecución técnica impecable.

      ## Performance First
      Los usuarios abandonan una app si tarda más de 2 segundos en responder. El uso de frameworks como React Native optimizado permite experiencias casi nativas con un solo codebase.

      ## Diseño Emocional
      Micro-interacciones y feedback háptico hacen que la experiencia de uso sea placentera y fomente la retención de usuarios.

      ## IA Embebida
      Desde traductores en tiempo real hasta editores de imagen inteligentes integrados directamente en la app.
    `,
    date: '05 Mar, 2024',
    author: 'Diseño UX/UI',
    category: 'Desarrollo',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
    readTime: '6 min'
  }
];
