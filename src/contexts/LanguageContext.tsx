import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface Translations {
  nav: {
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    description: string;
    cta: string;
    download: string;
  };
  about: {
    title: string;
    description: string;
    experience: string;
    projects: string;
    technologies: string;
    workedAt: string;
  };
  skills: {
    title: string;
    subtitle: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewProject: string;
    viewCode: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    success: string;
  };
  footer: {
    rights: string;
    madeWith: string;
  };
}

const translations: Record<Language, Translations> = {
  es: {
    nav: {
      about: 'Sobre Mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      role: 'Desarrollador Web Full Stack',
      description: 'Creo experiencias digitales excepcionales con código limpio y diseño moderno. Especializado en React, Node.js y tecnologías cloud.',
      cta: 'Ver Proyectos',
      download: 'Descargar CV',
    },
    about: {
      title: 'Sobre Mí',
      description: 'Soy un desarrollador web apasionado por crear soluciones innovadoras y escalables. Con más de 5 años de experiencia en el desarrollo de aplicaciones web, me especializo en construir productos digitales que combinan funcionalidad excepcional con diseño elegante.',
      experience: 'Años de Experiencia',
      projects: 'Proyectos Completados',
      technologies: 'Tecnologías Dominadas',
      workedAt: 'Empresas donde he trabajado',
    },
    skills: {
      title: 'Habilidades',
      subtitle: 'Tecnologías y herramientas con las que trabajo',
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Una selección de mis trabajos más recientes',
      viewProject: 'Ver Proyecto',
      viewCode: 'Ver Código',
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Tienes un proyecto en mente? ¡Hablemos!',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      success: '¡Mensaje enviado con éxito!',
    },
    footer: {
      rights: 'Todos los derechos reservados',
      madeWith: 'Hecho con',
    },
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      role: 'Full Stack Web Developer',
      description: 'I create exceptional digital experiences with clean code and modern design. Specialized in React, Node.js and cloud technologies.',
      cta: 'View Projects',
      download: 'Download CV',
    },
    about: {
      title: 'About Me',
      description: "I'm a web developer passionate about creating innovative and scalable solutions. With over 5 years of experience in web application development, I specialize in building digital products that combine exceptional functionality with elegant design.",
      experience: 'Years of Experience',
      projects: 'Projects Completed',
      technologies: 'Technologies Mastered',
      workedAt: 'Companies I have worked with',
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technologies and tools I work with',
    },
    projects: {
      title: 'Projects',
      subtitle: 'A selection of my most recent work',
      viewProject: 'View Project',
      viewCode: 'View Code',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Have a project in mind? Let\'s talk!',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      success: 'Message sent successfully!',
    },
    footer: {
      rights: 'All rights reserved',
      madeWith: 'Made with',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
