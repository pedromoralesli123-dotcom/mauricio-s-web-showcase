import { useLanguage } from '@/contexts/LanguageContext';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 80 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'GraphQL', level: 75 },
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Docker', level: 85 },
      { name: 'AWS', level: 80 },
      { name: 'Git', level: 95 },
      { name: 'CI/CD', level: 85 },
      { name: 'Linux', level: 80 },
    ],
  },
];

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 bg-surface/50">
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

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((category) => (
              <div
                key={category.category}
                className="p-6 rounded-2xl glass glass-hover"
              >
                <h3 className="text-lg font-semibold text-primary mb-6 font-mono">
                  {'// '}{category.category}
                </h3>
                
                <div className="space-y-5">
                  {category.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Icons Cloud */}
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {['React', 'TypeScript', 'Node.js', 'Python', 'Docker', 'AWS', 'PostgreSQL', 'GraphQL', 'Git', 'Tailwind'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-sm font-mono bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
