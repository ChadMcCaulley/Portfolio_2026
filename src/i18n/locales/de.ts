export default {
  meta: {
    title: 'Chad McCaulley · Senior Full-Stack-Entwickler',
    description:
      'Chad McCaulley — Senior Full-Stack-Entwickler. Vue.js, ASP.NET Core, Azure und produktive KI für Multi-Tenant-B2B-Plattformen.',
  },
  nav: {
    about: 'Über mich',
    caseStudies: 'Fallstudien',
    projects: 'Projekte',
    skills: 'Skills',
    contact: 'Kontakt',
    resume: 'Lebenslauf',
    toggleMenu: 'Menü umschalten',
  },
  hero: {
    availability: 'Offen für Remote- und Phoenix-Region-Rollen',
    name: 'Chad McCaulley',
    title: 'Senior Full-Stack-Entwickler',
    stack: 'Vue.js · ASP.NET Core · Azure · KI',
    tagline:
      'Ich verantworte die Plattformarbeit, auf die Enterprise-Teams angewiesen sind: Multi-Tenant-Architektur, produktive KI und Systeme, die täglich genutzt werden.',
    viewCaseStudies: 'Fallstudien ansehen',
    getInTouch: 'Kontakt aufnehmen',
  },
  about: {
    title: 'Über mich',
    p1: 'Ich bin Senior Full-Stack-Entwickler mit über 7 Jahren Erfahrung in Architektur und Entwicklung multi-tenant B2B-SaaS-Plattformen. Derzeit leite ich die Entwicklung eines Enterprise-Systems für interne Kommunikation und E-Mail-Management. Dazu gehören KI-gestützte Content-Tools (Chat und dynamische Bildgenerierung über Microsoft Foundry), hochperformante analytische Dashboards, Internationalisierung, individuelles Enterprise-Theming und Performance-Verbesserungen.',
    p2: 'Neben der Arbeit baue ich Portfolio-Demos, die dieselben Muster abbilden – darunter ein KI-Content-Assistent mit Multi-Mode-Generierung, Streaming-Antworten und On-Device-Browser-KI, damit man die UX ohne API-Key testen kann. Mir liegen pragmatische Architektur, messbare Ergebnisse und Features, die Teams wirklich nutzen. Ich lebe in der Phoenix-Region und bin offen für Remote-Möglichkeiten.',
  },
  caseStudies: {
    title: 'Fallstudien',
    intro:
      'Architektur-Ownership, produktive KI und Enterprise-Delivery. Details sind anonymisiert. Klicke auf eine Karte, um die volle Geschichte zu öffnen.',
    read: 'Fallstudie lesen',
    close: 'Schließen',
    problem: 'Problem',
    approach: 'Ansatz',
    outcome: 'Ergebnis',
    items: {
      ai: {
        title: 'KI-gestützte Content-Tools',
        metric: 'In Produktion',
        summary:
          'LLM-gestützter Chat und dynamische Bildgenerierung in einer multi-tenant B2B-Kommunikationsplattform. Verwandte Muster habe ich zusätzlich in einer öffentlichen Content-Studio-Demo open-sourced.',
        focus: 'Isolation · Streaming · Kosten',
        problem:
          'Enterprise-Nutzer brauchten generative Inhalte in einem bestehenden Multi-Tenant-Produkt – ohne Datenlecks zwischen Tenants, ohne blockierende UI und ohne unbegrenzte KI-Kosten.',
        approach: [
          'Microsoft-Foundry-Modelle hinter einer vom Plattformteam verantworteten Service-Grenze ausgewählt und integriert.',
          'Streaming-Chat-UX entworfen, damit lange Generierungen reaktionsfähig und abbrechbar bleiben.',
          'Tenant-Isolation auf jedem Request-Pfad durchgesetzt, mit Nutzungskontrollen für Zuverlässigkeit und Kosten.',
          'Dieselben LLM-UX-Muster in einer öffentlichen KI-Content-Assistent-Demo wiederverwendet (Multi-Mode-Agenten, OpenAI-kompatible Provider, On-Device-Browser-KI-Fallback).',
        ],
        outcome:
          'Produktiven KI-Chat und Bildgenerierung geliefert, die Produktteams erweitern konnten – mit klarer Isolation und Nutzungskontrollen. Zusätzlich ein öffentliches Studio, das denselben Integrationsansatz außerhalb von Enterprise-Constraints zeigt.',
      },
      dashboards: {
        title: 'Enterprise-Analyse-Dashboards',
        metric: 'Kundenorientiert',
        summary:
          'Hochperformante interaktive Dashboards, die Enterprise-Kunden kritische Business-Insights liefern.',
        focus: 'Performance · Skalierung · UX',
        problem:
          'Kunden brauchten dichte, interaktive Analytics, die bei wachsendem Datenvolumen und Filterkomplexität nutzbar bleiben. Langsame Loads und eingefrorene Charts waren nicht akzeptabel.',
        approach: [
          'Dashboard-Shells für progressives Laden und interaktives Filtern optimiert.',
          'Highcharts mit sorgfältiger Datenvorbereitung in der API kombiniert, damit der Browser nicht überlastet wird.',
          'Alltägliche Kunden-Workflows priorisiert statt dekorativer Chart-Flut.',
        ],
        outcome:
          'Kundenorientierte Analytics geliefert, die realer Enterprise-Nutzung standhalten und Entscheidungen ohne Performance-Probleme unterstützen.',
      },
      platform: {
        title: 'Plattformarchitektur & globale Bereitschaft',
        metric: 'Multi-Tenant',
        summary:
          'Langfristige Plattform-Evolution: Latenzarbeit, volles i18n, individuelles Enterprise-Theming und CI/CD-Reife.',
        focus: 'Architektur · i18n · Zuverlässigkeit',
        problem:
          'Ein wachsendes Multi-Tenant-Produkt musste global skalieren – mehr Sprachen, Kunden-Branding, engere Performance und sicherere Delivery – ohne die Codebasis zu fragmentieren.',
        approach: [
          'Querschnittliche Plattformarbeit verantwortet: geteilte Patterns, Theming-System und Internationalisierung.',
          'Latenzfokussierte Verbesserungen dort vorangetrieben, wo Nutzer sie am stärksten spüren.',
          'CI/CD und Deployment-Praktiken gehärtet, damit Releases vorhersehbar und risikoarm bleiben.',
        ],
        outcome:
          'Eine global bereitere Plattform mit klarerem Architektur-Ownership und einem Delivery-Prozess, der anhaltende Produktgeschwindigkeit trägt.',
      },
    },
  },
  projects: {
    title: 'Projekte',
    intro:
      'Persönliche Arbeiten mit Full-Stack-Breite, inklusive einer KI-Content-Studio-Demo basierend auf produktiven LLM-Integrationsmustern. Jede Karte enthält eine UI-Skizze des Produkts.',
    liveDemo: 'Live-Demo →',
    github: 'GitHub →',
    items: {
      ai: {
        title: 'KI-Content-Assistent',
        description:
          'Browser-only Content-Studio mit Multi-Mode-Generierung (Blog, LinkedIn, X-Threads, Product Copy, E-Mail, Outlines), Streaming-Chat, Persona-Templates und steckbaren OpenAI-kompatiblen Providern. Standardmäßig On-Device-Browser-KI (WebLLM) ohne API-Key; Upgrade auf kostenloses Groq, Ollama oder beliebige Custom-Endpoints. Inklusive Export, Spracheingabe, Attachments und Rate-Limit-Recovery.',
      },
      streaming: {
        title: 'Modernisierte Streaming-Plattform',
        description:
          'Full-Stack-Netflix-ähnliche Anwendung neu gebaut mit TypeScript, klarerer Architektur, Authentifizierung und Performance-Fokus von Browse-UI bis API-Ownership.',
      },
      social: {
        title: 'Echtzeit-Social-Anwendung',
        description:
          'Twitter-ähnliche Anwendung mit sauberer Architektur, Echtzeit-Feed-Mustern und modernem Frontend-Interaktionsmodell.',
      },
    },
  },
  skills: {
    title: 'Skills',
    groups: {
      frontend: 'Frontend',
      backend: 'Backend',
      cloud: 'Cloud & DevOps',
      ai: 'KI & Tools',
      testing: 'Testing',
    },
  },
  contact: {
    title: 'Lass uns etwas Zuverlässiges bauen',
    intro:
      'Ich suche eine Senior-Full-Stack-Rolle an Multi-Tenant-Plattformen, produktiver KI oder der schwierigen Infrastruktur, die Produktteams schneller macht.',
    availability: 'Offen für Remote- und Phoenix-Region-Rollen',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    location: 'Glendale / Phoenix, AZ',
  },
  footer: {
    copyright: '© {year} Chad McCaulley',
  },
  a11y: {
    openMenu: 'Barrierefreiheitsoptionen öffnen',
    closeMenu: 'Barrierefreiheitsoptionen schließen',
    title: 'Barrierefreiheit',
    subtitle: 'Sprache, Darstellung und Seh-Präferenzen',
    language: 'Sprache',
    theme: 'Design',
    themeDark: 'Dunkel',
    themeLight: 'Hell',
    themeSystem: 'System',
    colorVision: 'Farbsehen',
    colorVisionNone: 'Standard',
    colorVisionProtanopia: 'Protanopie (rot-schwach)',
    colorVisionDeuteranopia: 'Deuteranopie (grün-schwach)',
    colorVisionTritanopia: 'Tritanopie (blau-schwach)',
    colorVisionAchromatopsia: 'Achromatopsie (keine Farbe)',
    reducedMotion: 'Bewegung reduzieren',
    highContrast: 'Hoher Kontrast',
    reset: 'Einstellungen zurücksetzen',
  },
  preview: {
    blog: 'Blog',
    linkedin: 'LinkedIn',
    xThread: 'X-Thread',
    email: 'E-Mail',
    browserAi: 'Browser-KI',
  },
} as const
