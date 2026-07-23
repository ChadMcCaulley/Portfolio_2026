export default {
  meta: {
    title: 'Chad McCaulley · Senior Full-Stack Developer',
    description:
      'Chad McCaulley — Senior Full-Stack Developer. Vue.js, ASP.NET Core, Azure, and production AI for multi-tenant B2B platforms.',
  },
  nav: {
    about: 'About',
    caseStudies: 'Case Studies',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
    resume: 'Resume',
    toggleMenu: 'Toggle menu',
  },
  hero: {
    availability: 'Open to remote & Phoenix-area roles',
    name: 'Chad McCaulley',
    title: 'Senior Full-Stack Developer',
    stack: 'Vue.js · ASP.NET Core · Azure · AI',
    tagline:
      'I own the platform work enterprise teams depend on: multi-tenant architecture, production AI, and the systems people use every day.',
    viewCaseStudies: 'View case studies',
    getInTouch: 'Get in touch',
  },
  about: {
    title: 'About',
    p1: "I'm a Senior Full-Stack Developer with 7+ years of experience owning the architecture and development of multi-tenant B2B SaaS platforms. I currently lead development of an enterprise internal communications and email management system. That work includes AI-powered content tools (chat and dynamic image generation via Microsoft Foundry), high-performance analytical dashboards, internationalization, custom enterprise theming, and performance improvements.",
    p2: 'Outside of work I build portfolio demos that reflect those same patterns, including an AI Content Assistant with multi-mode generation, streaming responses, and on-device Browser AI so people can try the UX with no API key. I care about pragmatic architecture, measurable outcomes, and features teams actually use. Based in the Phoenix area and open to remote opportunities.',
  },
  caseStudies: {
    title: 'Case studies',
    intro:
      'Architecture ownership, production AI, and enterprise delivery. Details are anonymized. Click a card to open the full story.',
    read: 'Read case study',
    close: 'Close',
    problem: 'Problem',
    approach: 'Approach',
    outcome: 'Outcome',
    items: {
      ai: {
        title: 'AI-Powered Content Tools',
        metric: 'In production',
        summary:
          'LLM-powered chat and dynamic image generation in a multi-tenant B2B communications platform. I also open-sourced related patterns in a public content-studio demo.',
        focus: 'Isolation · Streaming · Cost',
        problem:
          'Enterprise users needed generative content inside an existing multi-tenant product without leaking data across tenants, stalling the UI, or creating unbounded AI spend.',
        approach: [
          'Selected and integrated Microsoft Foundry models behind a service boundary owned by the platform team.',
          'Designed streaming chat UX so long generations stay responsive and cancelable.',
          'Enforced tenant isolation on every request path, with usage controls for reliability and cost.',
          'Reused the same LLM UX patterns in a public AI Content Assistant demo (multi-mode agents, OpenAI-compatible providers, on-device Browser AI fallback).',
        ],
        outcome:
          'Shipped production AI chat and image generation that product teams could extend, with clear isolation and usage controls. Also built a public studio that shows the same integration approach outside enterprise constraints.',
      },
      dashboards: {
        title: 'Enterprise Analytical Dashboards',
        metric: 'Client-facing',
        summary:
          'High-performance interactive dashboards delivering critical business insights to enterprise clients.',
        focus: 'Performance · Scale · UX',
        problem:
          'Clients needed dense, interactive analytics that stayed usable as data volume and filter complexity grew. Slow loads and frozen charts were not acceptable.',
        approach: [
          'Built dashboard shells optimized for progressive load and interactive filtering.',
          'Paired Highcharts with careful data shaping on the API so the browser was not overloaded.',
          'Prioritized the workflows clients used day-to-day over decorative chart sprawl.',
        ],
        outcome:
          'Delivered client-facing analytics that hold up under real enterprise usage and support decision-making without performance issues.',
      },
      platform: {
        title: 'Platform Architecture & Global Readiness',
        metric: 'Multi-tenant',
        summary:
          'Long-term platform evolution: latency work, full i18n, custom enterprise theming, and CI/CD maturity.',
        focus: 'Architecture · i18n · Reliability',
        problem:
          'A growing multi-tenant product needed to scale globally with more languages, customer branding, tighter performance, and safer delivery, without fragmenting the codebase.',
        approach: [
          'Owned cross-cutting platform work: shared patterns, theming system, and internationalization.',
          'Drove latency-focused improvements where users felt them most.',
          'Hardened CI/CD and deployment practices so releases stayed predictable and low-risk.',
        ],
        outcome:
          'A more global-ready platform with clearer architecture ownership and a delivery process that supports ongoing product velocity.',
      },
    },
  },
  projects: {
    title: 'Projects',
    intro:
      'Personal work that shows full-stack range, including an AI content studio demo based on production LLM integration patterns. Each card includes a UI sketch of the product.',
    liveDemo: 'Live demo →',
    github: 'GitHub →',
    items: {
      ai: {
        title: 'AI Content Assistant',
        description:
          'Browser-only content studio with multi-mode generation (blog, LinkedIn, X threads, product copy, email, outlines), streaming chat, persona templates, and pluggable OpenAI-compatible providers. Defaults to on-device Browser AI (WebLLM) so visitors can try it with no API key, then upgrade to free Groq, Ollama, or any custom endpoint. Also includes export, voice input, attachments, and rate-limit recovery.',
      },
      streaming: {
        title: 'Modernized Streaming Platform',
        description:
          'Full-stack Netflix-style application rebuilt with TypeScript, clearer architecture, authentication, and a performance focus from browse UI to API ownership.',
      },
      social: {
        title: 'Real-time Social Application',
        description:
          'Twitter-style application with cleaner architecture, real-time feed patterns, and a modern frontend interaction model.',
      },
    },
  },
  skills: {
    title: 'Skills',
    groups: {
      frontend: 'Frontend',
      backend: 'Backend',
      cloud: 'Cloud & DevOps',
      ai: 'AI & Tools',
      testing: 'Testing',
    },
  },
  contact: {
    title: "Let's build something reliable",
    intro:
      'Looking for a senior full-stack partner on multi-tenant platforms, production AI, or the hard infrastructure work that makes product teams faster.',
    availability: 'Open to remote & Phoenix-area roles',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    location: 'Glendale / Phoenix, AZ',
  },
  footer: {
    copyright: '© {year} Chad McCaulley',
  },
  a11y: {
    openMenu: 'Open accessibility options',
    closeMenu: 'Close accessibility options',
    title: 'Accessibility',
    subtitle: 'Language, display, and vision preferences',
    language: 'Language',
    theme: 'Theme',
    themeDark: 'Dark',
    themeLight: 'Light',
    themeSystem: 'System',
    colorVision: 'Color vision',
    colorVisionNone: 'Default',
    colorVisionProtanopia: 'Protanopia (red-weak)',
    colorVisionDeuteranopia: 'Deuteranopia (green-weak)',
    colorVisionTritanopia: 'Tritanopia (blue-weak)',
    colorVisionAchromatopsia: 'Achromatopsia (no color)',
    reducedMotion: 'Reduce motion',
    highContrast: 'High contrast',
    reset: 'Reset preferences',
  },
  preview: {
    blog: 'Blog',
    linkedin: 'LinkedIn',
    xThread: 'X Thread',
    email: 'Email',
    browserAi: 'Browser AI',
  },
} as const
