export type Language = 'tr' | 'en';

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    products: string;
    solutions: string;
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
    disclaimer: string;
  };
  products: {
    sectionTitle: string;
    sectionSubtitle: string;
    badge: {
      popular: string;
    };
    pricing: {
      perMonth: string;
      custom: string;
      taxNote: string;
    };
    cta: {
      choose: string;
      contactSales: string;
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
      name: string;
      email: string;
      message: string;
      submit: string;
    };
    email: {
      label: string;
      address: string;
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
  trustedBy: {
    title: string;
  };
}
