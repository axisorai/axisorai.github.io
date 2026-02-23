export type Language = 'tr' | 'en';

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    products: string;
    solutions: string;
    services: string;
    method: string;
    about: string;
    contact: string;
    getStarted: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaServices: string;
    ctaWhyCheaper: string;
    disclaimer: string;
  };
  products: {
    sectionTitle: string;
    sectionSubtitle: string;
    badge: {
      popular: string;
      exclusive: string;
    };
    pricing: {
      perMonth: string;
      perYear: string;
      normalPrice: string;
      taxNote: string;
    };
    cta: {
      choose: string;
    };
    plus: {
      title: string;
      description: string;
      features: {
        feature1: string;
        feature2: string;
        feature3: string;
        feature4: string;
        feature5: string;
        feature6: string;
        feature7: string;
        feature8: string;
        feature9: string;
      };
      limitsNote: string;
    };
    pro: {
      title: string;
      description: string;
      features: {
        feature1: string;
        feature2: string;
        feature3: string;
        feature4: string;
        feature5: string;
        feature6: string;
        feature7: string;
        feature8: string;
        feature9: string;
      };
      limitsNote: string;
    };
    exclusive: {
      title: string;
      description: string;
      features: {
        feature1: string;
        feature2: string;
        feature3: string;
        feature4: string;
        feature5: string;
      };
      limitsNote: string;
    };
    disclaimer: string;
  };
  method: {
    title: string;
    subtitle: string;
    cta: string;
    steps: {
      step1: { title: string; description: string };
      step2: { title: string; description: string };
      step3: { title: string; description: string };
      step4: { title: string; description: string };
    };
  };
  faq: {
    title: string;
    items: {
      q1: { question: string; answer: string };
      q2: { question: string; answer: string };
      q3: { question: string; answer: string };
      q4: { question: string; answer: string };
      q5: { question: string; answer: string };
    };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      title: string;
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
    };
    email: {
      label: string;
      display: string;
      mailto: string;
      microtext: string;
    };
  };
  footer: {
    description: string;
    products: string;
    company: string;
    resources: string;
    copyright: string;
    privacy: string;
    terms: string;
    howWeOffer: string;
    whyCheaper: string;
    links: {
      about: string;
      blog: string;
      careers: string;
      press: string;
      documentation: string;
      helpCenter: string;
      community: string;
      contact: string;
    };
  };
  webDesign: {
    title: string;
    subtitle: string;
    services: {
      domain: { title: string; description: string };
      security: { title: string; description: string };
      modernDesign: { title: string; description: string };
      seo: { title: string; description: string };
      responsive: { title: string; description: string };
      hosting: { title: string; description: string };
    };
    packages: {
      popular: string;
      domainIncluded: string;
      github: {
        name: string;
        feature1: string;
        feature2: string;
        feature3: string;
        feature4: string;
        feature5: string;
      };
      custom: {
        name: string;
        feature1: string;
        feature2: string;
        feature3: string;
        feature4: string;
        feature5: string;
        feature6: string;
        pricing: string;
      };
    };
    cta: string;
    ctaButton: string;
    bottomText: string;
  };
  community: {
    title: string;
    subtitle: string;
    features: {
      tips: { title: string; description: string };
      guides: { title: string; description: string };
      prompts: { title: string; description: string };
    };
    social: {
      instagram: string;
      twitter: string;
    };
  };
  commitment: {
    title: string;
    subtitle: string;
    items: {
      security: { title: string; description: string };
      compliance: { title: string; description: string };
      transparency: { title: string; description: string };
    };
  };
  portfolio: {
    hero: {
      title: string;
      titleHighlight: string;
      subtitle: string;
    };
    technologies: {
      label: string;
    };
    pricing: {
      monthly: {
        title: string;
        price: string;
        period: string;
        originalPrice?: string;
        savingsPercent?: string;
        description: string;
        trust?: string;
        ownAccount?: string;
      };
      yearly: {
        title: string;
        subtitle: string;
        price: string;
        period: string;
        originalPrice?: string;
        savingsPercent?: string;
        description1: string;
        description2: string;
        badge: string;
        ownAccount?: string;
      };
      trust?: string;
      cta: string;
    };
  };
  trustedBy: {
    title: string;
  };
  howWeOffer: {
    badge: string;
    title: string;
    subtitle: string;
    stepLabel: string;
    keyMessage: { title: string; description: string };
    steps: {
      step1: { title: string; description: string };
      step2: { title: string; description: string };
      step3: { title: string; description: string };
      step4: { title: string; description: string };
    };
    benefitsTitle: string;
    benefits: {
      benefit1: { title: string; description: string };
      benefit2: { title: string; description: string };
    };
    cta: { title: string; description: string; button: string };
  };
  whyCheaper: {
    badge: string;
    title: string;
    subtitle: string;
    keyMessage: { title: string; description: string };
    reasons: {
      reason1: { title: string; description: string };
      reason2: { title: string; description: string };
      reason3: { title: string; description: string };
      reason4: { title: string; description: string };
    };
    tradeoff: { title: string; description: string };
    cta: { title: string; description: string; button: string };
  };
}
