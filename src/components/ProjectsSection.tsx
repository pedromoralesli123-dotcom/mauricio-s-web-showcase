import { ExternalLink, Github, Folder } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: {
      es: 'Plataforma de comercio electrónico completa con carrito de compras, pagos con Stripe y panel de administración.',
      en: 'Complete e-commerce platform with shopping cart, Stripe payments, and admin dashboard.',
    },
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: {
      es: 'Aplicación de gestión de tareas con colaboración en tiempo real, tableros Kanban y seguimiento de progreso.',
      en: 'Task management app with real-time collaboration, Kanban boards, and progress tracking.',
    },
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'AI Content Generator',
    description: {
      es: 'Generador de contenido impulsado por IA para blogs, redes sociales y campañas de marketing.',
      en: 'AI-powered content generator for blogs, social media, and marketing campaigns.',
    },
    tech: ['Python', 'FastAPI', 'OpenAI', 'React'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Real Estate Portal',
    description: {
      es: 'Portal inmobiliario con búsqueda avanzada, mapas interactivos y tours virtuales.',
      en: 'Real estate portal with advanced search, interactive maps, and virtual tours.',
    },
    tech: ['Vue.js', 'Node.js', 'PostgreSQL', 'Mapbox'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Fitness Tracker',
    description: {
      es: 'Aplicación de seguimiento de fitness con planes de entrenamiento personalizados y análisis de progreso.',
      en: 'Fitness tracking app with personalized workout plans and progress analytics.',
    },
    tech: ['React Native', 'Node.js', 'MongoDB', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Social Media Dashboard',
    description: {
      es: 'Dashboard unificado para gestión de múltiples redes sociales con análisis y programación de posts.',
      en: 'Unified dashboard for managing multiple social networks with analytics and post scheduling.',
    },
    tech: ['React', 'Python', 'Redis', 'AWS'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];

export function ProjectsSection() {
  const { language, t } = useLanguage();

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">{t.projects.title}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className="group relative rounded-2xl overflow-hidden glass glass-hover"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description[language]}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        {t.projects.viewProject}
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="p-6 rounded-xl glass glass-hover group"
              >
                <div className="flex items-start justify-between mb-4">
                  <Folder className="h-10 w-10 text-primary" />
                  <div className="flex gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description[language]}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
