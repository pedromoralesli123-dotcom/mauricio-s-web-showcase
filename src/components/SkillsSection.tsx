import { useLanguage } from '@/contexts/LanguageContext';

const techBadges = [
  // Frontend
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', glow: 'glow-react', category: 'Frontend' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', glow: 'glow-typescript', category: 'Frontend' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', glow: 'glow-javascript', category: 'Frontend' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', glow: 'glow-nextjs', category: 'Frontend' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', glow: 'glow-vue', category: 'Frontend' },
  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', glow: 'glow-angular', category: 'Frontend' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', glow: 'glow-html', category: 'Frontend' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', glow: 'glow-css', category: 'Frontend' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', glow: 'glow-tailwind', category: 'Frontend' },
  
  // Backend
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', glow: 'glow-nodejs', category: 'Backend' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', glow: 'glow-python', category: 'Backend' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', glow: 'glow-java', category: 'Backend' },
  { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', glow: 'glow-csharp', category: 'Backend' },
  { name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', glow: 'glow-spring', category: 'Backend' },
  { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', glow: 'glow-dotnet', category: 'Backend' },
  { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', glow: 'glow-graphql', category: 'Backend' },
  
  // Databases
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', glow: 'glow-postgresql', category: 'Database' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', glow: 'glow-mongodb', category: 'Database' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', glow: 'glow-mysql', category: 'Database' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', glow: 'glow-redis', category: 'Database' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', glow: 'glow-firebase', category: 'Database' },
  
  // DevOps & Tools
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', glow: 'glow-docker', category: 'DevOps' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', glow: 'glow-aws', category: 'DevOps' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', glow: 'glow-kubernetes', category: 'DevOps' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', glow: 'glow-git', category: 'DevOps' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', glow: 'glow-linux', category: 'DevOps' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', glow: 'glow-vscode', category: 'DevOps' },
];

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">{t.skills.title}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.skills.subtitle}
            </p>
          </div>

          {/* Badge Display Case */}
          <div className="relative p-8 md:p-12 rounded-3xl glass overflow-hidden">
            {/* Decorative frame effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
            <div className="absolute inset-[1px] rounded-3xl border border-primary/10 pointer-events-none" />
            
            {/* Badge Grid */}
            <div className="relative grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-6 md:gap-8">
              {techBadges.map((tech) => (
                <div
                  key={tech.name}
                  className="group flex flex-col items-center gap-2"
                >
                  {/* Badge Container */}
                  <div
                    className={`tech-badge ${tech.glow} relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm`}
                  >
                    {/* Inner glow base */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent" />
                    
                    {/* Tech Icon */}
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-8 h-8 md:w-10 md:h-10 object-contain relative z-10"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Tech Name */}
                  <span className="text-[10px] md:text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Category Legend */}
            <div className="mt-10 pt-6 border-t border-border/30 flex flex-wrap justify-center gap-4 md:gap-6">
              {['Frontend', 'Backend', 'Database', 'DevOps'].map((category) => (
                <div key={category} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary/60" />
                  <span className="text-xs font-mono text-muted-foreground">
                    {category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
