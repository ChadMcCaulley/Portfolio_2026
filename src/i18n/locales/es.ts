export default {
  meta: {
    title: 'Chad McCaulley · Desarrollador Full-Stack Senior',
    description:
      'Chad McCaulley — Desarrollador Full-Stack Senior. Vue.js, ASP.NET Core, Azure e IA en producción para plataformas B2B multi-inquilino.',
  },
  nav: {
    about: 'Sobre mí',
    caseStudies: 'Casos de estudio',
    projects: 'Proyectos',
    skills: 'Habilidades',
    contact: 'Contacto',
    resume: 'CV',
    toggleMenu: 'Abrir o cerrar menú',
  },
  hero: {
    availability: 'Abierto a roles remotos y en el área de Phoenix',
    name: 'Chad McCaulley',
    title: 'Desarrollador Full-Stack Senior',
    stack: 'Vue.js · ASP.NET Core · Azure · IA',
    tagline:
      'Lidero el trabajo de plataforma del que dependen los equipos empresariales: arquitectura multi-inquilino, IA en producción y los sistemas que la gente usa a diario.',
    viewCaseStudies: 'Ver casos de estudio',
    getInTouch: 'Contactar',
  },
  about: {
    title: 'Sobre mí',
    p1: 'Soy un Desarrollador Full-Stack Senior con más de 7 años de experiencia liderando la arquitectura y el desarrollo de plataformas SaaS B2B multi-inquilino. Actualmente dirijo el desarrollo de un sistema empresarial de comunicaciones internas y gestión de correo. Ese trabajo incluye herramientas de contenido con IA (chat y generación dinámica de imágenes con Microsoft Foundry), paneles analíticos de alto rendimiento, internacionalización, temas empresariales personalizados y mejoras de rendimiento.',
    p2: 'Fuera del trabajo construyo demos de portafolio que reflejan esos mismos patrones, incluido un Asistente de Contenido con IA con generación multimodo, respuestas en streaming e IA en el navegador para que cualquiera pruebe la experiencia sin API key. Me importa la arquitectura pragmática, los resultados medibles y las funciones que los equipos realmente usan. Vivo en el área de Phoenix y estoy abierto a oportunidades remotas.',
  },
  caseStudies: {
    title: 'Casos de estudio',
    intro:
      'Propiedad de la arquitectura, IA en producción y entrega empresarial. Los detalles están anonimizados. Haz clic en una tarjeta para abrir la historia completa.',
    read: 'Leer caso de estudio',
    close: 'Cerrar',
    problem: 'Problema',
    approach: 'Enfoque',
    outcome: 'Resultado',
    items: {
      ai: {
        title: 'Herramientas de contenido con IA',
        metric: 'En producción',
        summary:
          'Chat impulsado por LLM y generación dinámica de imágenes en una plataforma de comunicaciones B2B multi-inquilino. También publiqué patrones relacionados en un demo público de estudio de contenido.',
        focus: 'Aislamiento · Streaming · Coste',
        problem:
          'Los usuarios empresariales necesitaban contenido generativo dentro de un producto multi-inquilino existente sin filtrar datos entre inquilinos, bloquear la UI ni generar gasto de IA sin control.',
        approach: [
          'Seleccioné e integré modelos de Microsoft Foundry detrás de un límite de servicio del equipo de plataforma.',
          'Diseñé una UX de chat en streaming para que las generaciones largas sigan siendo responsivas y cancelables.',
          'Impuse aislamiento por inquilino en cada ruta de solicitud, con controles de uso para fiabilidad y coste.',
          'Reutilicé los mismos patrones de UX de LLM en un demo público de Asistente de Contenido con IA (agentes multimodo, proveedores compatibles con OpenAI, fallback de IA en el navegador).',
        ],
        outcome:
          'Entregué chat e imágenes con IA en producción que los equipos de producto podían extender, con aislamiento y controles de uso claros. También construí un estudio público que muestra el mismo enfoque de integración fuera de las restricciones empresariales.',
      },
      dashboards: {
        title: 'Paneles analíticos empresariales',
        metric: 'Orientado al cliente',
        summary:
          'Paneles interactivos de alto rendimiento que entregan insights de negocio críticos a clientes empresariales.',
        focus: 'Rendimiento · Escala · UX',
        problem:
          'Los clientes necesitaban analítica densa e interactiva que siguiera siendo usable a medida que crecían el volumen de datos y la complejidad de filtros. Las cargas lentas y los gráficos bloqueados no eran aceptables.',
        approach: [
          'Construí shells de paneles optimizados para carga progresiva y filtrado interactivo.',
          'Combiné Highcharts con un modelado cuidadoso de datos en la API para no sobrecargar el navegador.',
          'Prioricé los flujos que los clientes usaban a diario frente a un exceso de gráficos decorativos.',
        ],
        outcome:
          'Entregué analítica orientada al cliente que resiste el uso empresarial real y apoya la toma de decisiones sin problemas de rendimiento.',
      },
      platform: {
        title: 'Arquitectura de plataforma y preparación global',
        metric: 'Multi-inquilino',
        summary:
          'Evolución a largo plazo de la plataforma: latencia, i18n completa, temas empresariales personalizados y madurez de CI/CD.',
        focus: 'Arquitectura · i18n · Fiabilidad',
        problem:
          'Un producto multi-inquilino en crecimiento necesitaba escalar globalmente con más idiomas, branding de clientes, mejor rendimiento y entregas más seguras, sin fragmentar el código.',
        approach: [
          'Asumí el trabajo transversal de plataforma: patrones compartidos, sistema de temas e internacionalización.',
          'Impulsé mejoras de latencia donde los usuarios más las notaban.',
          'Fortalecí CI/CD y prácticas de despliegue para que las releases fueran predecibles y de bajo riesgo.',
        ],
        outcome:
          'Una plataforma más preparada para el mercado global, con propiedad de arquitectura más clara y un proceso de entrega que sostiene la velocidad del producto.',
      },
    },
  },
  projects: {
    title: 'Proyectos',
    intro:
      'Trabajo personal que muestra rango full-stack, incluido un demo de estudio de contenido con IA basado en patrones de integración de LLM en producción. Cada tarjeta incluye un boceto de UI del producto.',
    liveDemo: 'Demo en vivo →',
    github: 'GitHub →',
    items: {
      ai: {
        title: 'Asistente de Contenido con IA',
        description:
          'Estudio de contenido solo en el navegador con generación multimodo (blog, LinkedIn, hilos de X, copy de producto, email, esquemas), chat en streaming, plantillas de persona y proveedores compatibles con OpenAI. Por defecto usa IA en el navegador (WebLLM) para probar sin API key; luego se puede subir a Groq gratis, Ollama o cualquier endpoint personalizado. Incluye exportación, entrada de voz, adjuntos y recuperación ante rate limits.',
      },
      streaming: {
        title: 'Plataforma de streaming modernizada',
        description:
          'Aplicación full-stack al estilo Netflix reconstruida con TypeScript, arquitectura más clara, autenticación y foco en rendimiento desde la UI de navegación hasta la API.',
      },
      social: {
        title: 'Aplicación social en tiempo real',
        description:
          'Aplicación al estilo Twitter con arquitectura más limpia, patrones de feed en tiempo real y un modelo de interacción frontend moderno.',
      },
    },
  },
  skills: {
    title: 'Habilidades',
    groups: {
      frontend: 'Frontend',
      backend: 'Backend',
      cloud: 'Cloud y DevOps',
      ai: 'IA y herramientas',
      testing: 'Testing',
    },
  },
  contact: {
    title: 'Construyamos algo fiable',
    intro:
      'Busco un rol senior full-stack en plataformas multi-inquilino, IA en producción o la infraestructura difícil que hace más rápidos a los equipos de producto.',
    availability: 'Abierto a roles remotos y en el área de Phoenix',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    location: 'Glendale / Phoenix, AZ',
    form: {
      email: 'Email',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntame sobre el rol o lo que estás construyendo…',
      messageHint: 'Una nota breve es perfecta.',
      messageProgress: '{count} caracteres más',
      messageReady: 'Listo',
      messageAtLimit: 'Límite de caracteres alcanzado',
      submit: 'Enviar mensaje',
      sending: 'Enviando…',
      orEmail: 'o',
      defaultSubject: 'Contacto del portafolio',
      successTitle: 'Mensaje enviado',
      successBody: 'Gracias — te responderé pronto.',
      draftTitle: 'Borrador abierto',
      draftBody: 'Tu app de correo tiene un mensaje precargado. Envíalo desde ahí, o prueba el formulario de nuevo.',
      sendAnother: 'Enviar otro',
      error: 'No se pudo enviar. Escríbeme a',
      errors: {
        emailRequired: 'Añade tu email',
        emailInvalid: 'Ese email no parece correcto',
        messageRequired: 'Añade un mensaje breve',
        messageShort: 'Un poco más de detalle ayuda',
        messageLong: 'Máximo 1.000 caracteres',
      },
    },
  },
  footer: {
    copyright: '© {year} Chad McCaulley',
  },
  a11y: {
    openMenu: 'Abrir opciones de accesibilidad',
    closeMenu: 'Cerrar opciones de accesibilidad',
    title: 'Accesibilidad',
    subtitle: 'Idioma, visualización y preferencias de visión',
    language: 'Idioma',
    theme: 'Tema',
    themeDark: 'Oscuro',
    themeLight: 'Claro',
    themeSystem: 'Sistema',
    colorVision: 'Visión del color',
    colorVisionNone: 'Predeterminado',
    colorVisionProtanopia: 'Protanopia (débil al rojo)',
    colorVisionDeuteranopia: 'Deuteranopia (débil al verde)',
    colorVisionTritanopia: 'Tritanopia (débil al azul)',
    colorVisionAchromatopsia: 'Acromatopsia (sin color)',
    reducedMotion: 'Reducir movimiento',
    highContrast: 'Alto contraste',
    reset: 'Restablecer preferencias',
  },
  preview: {
    blog: 'Blog',
    linkedin: 'LinkedIn',
    xThread: 'Hilo X',
    email: 'Email',
    browserAi: 'IA en navegador',
  },
} as const
