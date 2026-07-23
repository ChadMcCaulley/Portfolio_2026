export default {
  meta: {
    title: 'Chad McCaulley · Développeur Full-Stack Senior',
    description:
      'Chad McCaulley — Développeur Full-Stack Senior. Vue.js, ASP.NET Core, Azure et IA en production pour plateformes B2B multi-locataires.',
  },
  nav: {
    about: 'À propos',
    caseStudies: 'Études de cas',
    projects: 'Projets',
    skills: 'Compétences',
    contact: 'Contact',
    resume: 'CV',
    toggleMenu: 'Ouvrir ou fermer le menu',
  },
  hero: {
    availability: 'Ouvert aux postes en télétravail et dans la région de Phoenix',
    name: 'Chad McCaulley',
    title: 'Développeur Full-Stack Senior',
    stack: 'Vue.js · ASP.NET Core · Azure · IA',
    tagline:
      'Je prends en charge le travail plateforme dont dépendent les équipes d’entreprise : architecture multi-locataires, IA en production et systèmes utilisés au quotidien.',
    viewCaseStudies: 'Voir les études de cas',
    getInTouch: 'Me contacter',
  },
  about: {
    title: 'À propos',
    p1: 'Je suis un Développeur Full-Stack Senior avec plus de 7 ans d’expérience en architecture et développement de plateformes SaaS B2B multi-locataires. Je dirige actuellement le développement d’un système d’entreprise de communication interne et de gestion des e-mails. Ce travail inclut des outils de contenu basés sur l’IA (chat et génération d’images dynamiques via Microsoft Foundry), des tableaux de bord analytiques haute performance, l’internationalisation, des thèmes d’entreprise personnalisés et des améliorations de performance.',
    p2: 'En dehors du travail, je construis des démos de portfolio qui reflètent ces mêmes patterns, notamment un Assistant de Contenu IA avec génération multi-modes, réponses en streaming et IA dans le navigateur pour essayer l’UX sans clé API. J’accorde de l’importance à l’architecture pragmatique, aux résultats mesurables et aux fonctionnalités réellement utilisées. Basé dans la région de Phoenix, ouvert aux opportunités en télétravail.',
  },
  caseStudies: {
    title: 'Études de cas',
    intro:
      'Propriété de l’architecture, IA en production et livraison d’entreprise. Les détails sont anonymisés. Cliquez sur une carte pour ouvrir l’histoire complète.',
    read: 'Lire l’étude de cas',
    close: 'Fermer',
    problem: 'Problème',
    approach: 'Approche',
    outcome: 'Résultat',
    items: {
      ai: {
        title: 'Outils de contenu basés sur l’IA',
        metric: 'En production',
        summary:
          'Chat alimenté par LLM et génération d’images dynamiques dans une plateforme de communication B2B multi-locataires. J’ai aussi open-sourcé des patterns liés dans une démo publique de studio de contenu.',
        focus: 'Isolation · Streaming · Coût',
        problem:
          'Les utilisateurs d’entreprise avaient besoin de contenu génératif dans un produit multi-locataires existant sans fuite de données entre locataires, sans bloquer l’UI ni créer une dépense IA non maîtrisée.',
        approach: [
          'Sélection et intégration de modèles Microsoft Foundry derrière une frontière de service gérée par l’équipe plateforme.',
          'Conception d’une UX de chat en streaming pour que les longues générations restent réactives et annulables.',
          'Application de l’isolation par locataire sur chaque chemin de requête, avec des contrôles d’usage pour la fiabilité et le coût.',
          'Réutilisation des mêmes patterns UX LLM dans une démo publique d’Assistant de Contenu IA (agents multi-modes, fournisseurs compatibles OpenAI, fallback IA navigateur).',
        ],
        outcome:
          'Livraison en production d’un chat et d’une génération d’images IA extensibles par les équipes produit, avec isolation et contrôles d’usage clairs. Studio public montrant la même approche d’intégration hors contraintes d’entreprise.',
      },
      dashboards: {
        title: 'Tableaux de bord analytiques d’entreprise',
        metric: 'Côté client',
        summary:
          'Tableaux de bord interactifs haute performance délivrant des insights métier critiques aux clients d’entreprise.',
        focus: 'Performance · Échelle · UX',
        problem:
          'Les clients avaient besoin d’analytique dense et interactive restant utilisable à mesure que le volume de données et la complexité des filtres croissaient. Les chargements lents et graphiques figés n’étaient pas acceptables.',
        approach: [
          'Construction de shells de tableaux de bord optimisés pour le chargement progressif et le filtrage interactif.',
          'Association de Highcharts à un façonnage soigné des données côté API pour ne pas surcharger le navigateur.',
          'Priorité aux workflows quotidiens des clients plutôt qu’à une prolifération de graphiques décoratifs.',
        ],
        outcome:
          'Analytique côté client qui tient sous un usage d’entreprise réel et soutient la prise de décision sans problèmes de performance.',
      },
      platform: {
        title: 'Architecture plateforme et préparation mondiale',
        metric: 'Multi-locataires',
        summary:
          'Évolution long terme de la plateforme : latence, i18n complète, thèmes d’entreprise personnalisés et maturité CI/CD.',
        focus: 'Architecture · i18n · Fiabilité',
        problem:
          'Un produit multi-locataires en croissance devait s’étendre mondialement avec plus de langues, le branding client, de meilleures performances et des livraisons plus sûres, sans fragmenter le code.',
        approach: [
          'Prise en charge du travail transverse : patterns partagés, système de thèmes et internationalisation.',
          'Améliorations de latence là où les utilisateurs les ressentent le plus.',
          'Renforcement du CI/CD et des pratiques de déploiement pour des releases prévisibles et à faible risque.',
        ],
        outcome:
          'Une plateforme plus prête pour le marché mondial, avec une propriété d’architecture plus claire et un processus de livraison qui soutient la vélocité produit.',
      },
    },
  },
  projects: {
    title: 'Projets',
    intro:
      'Travaux personnels montrant l’étendue full-stack, y compris une démo de studio de contenu IA basée sur des patterns d’intégration LLM en production. Chaque carte inclut une esquisse UI du produit.',
    liveDemo: 'Démo live →',
    github: 'GitHub →',
    items: {
      ai: {
        title: 'Assistant de Contenu IA',
        description:
          'Studio de contenu 100 % navigateur avec génération multi-modes (blog, LinkedIn, fils X, copy produit, e-mail, plans), chat en streaming, modèles de persona et fournisseurs compatibles OpenAI. Par défaut, IA dans le navigateur (WebLLM) sans clé API ; puis montée en puissance vers Groq gratuit, Ollama ou tout endpoint personnalisé. Inclut export, entrée vocale, pièces jointes et reprise après rate limit.',
      },
      streaming: {
        title: 'Plateforme de streaming modernisée',
        description:
          'Application full-stack de type Netflix reconstruite en TypeScript, architecture plus claire, authentification et focus performance de l’UI de navigation à l’API.',
      },
      social: {
        title: 'Application sociale temps réel',
        description:
          'Application de type Twitter avec architecture plus propre, patterns de flux temps réel et modèle d’interaction frontend moderne.',
      },
    },
  },
  skills: {
    title: 'Compétences',
    groups: {
      frontend: 'Frontend',
      backend: 'Backend',
      cloud: 'Cloud & DevOps',
      ai: 'IA & outils',
      testing: 'Tests',
    },
  },
  contact: {
    title: 'Construisons quelque chose de fiable',
    intro:
      'Je cherche un rôle senior full-stack sur des plateformes multi-locataires, l’IA en production ou l’infrastructure difficile qui accélère les équipes produit.',
    availability: 'Ouvert aux postes en télétravail et dans la région de Phoenix',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    location: 'Glendale / Phoenix, AZ',
  },
  footer: {
    copyright: '© {year} Chad McCaulley',
  },
  a11y: {
    openMenu: 'Ouvrir les options d’accessibilité',
    closeMenu: 'Fermer les options d’accessibilité',
    title: 'Accessibilité',
    subtitle: 'Langue, affichage et préférences de vision',
    language: 'Langue',
    theme: 'Thème',
    themeDark: 'Sombre',
    themeLight: 'Clair',
    themeSystem: 'Système',
    colorVision: 'Vision des couleurs',
    colorVisionNone: 'Par défaut',
    colorVisionProtanopia: 'Protanopie (faible au rouge)',
    colorVisionDeuteranopia: 'Deutéranopie (faible au vert)',
    colorVisionTritanopia: 'Tritanopie (faible au bleu)',
    colorVisionAchromatopsia: 'Achromatopsie (sans couleur)',
    reducedMotion: 'Réduire les animations',
    highContrast: 'Contraste élevé',
    reset: 'Réinitialiser les préférences',
  },
  preview: {
    blog: 'Blog',
    linkedin: 'LinkedIn',
    xThread: 'Fil X',
    email: 'E-mail',
    browserAi: 'IA navigateur',
  },
} as const
