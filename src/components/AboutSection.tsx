import { Code2, Briefcase, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Company logos - using placeholder SVGs (replace with actual logos)
const companies = [
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
];

export function AboutSection() {
  const { t } = useLanguage();

  const stats = [
    { icon: Briefcase, value: '5+', label: t.about.experience },
    { icon: Code2, value: '50+', label: t.about.projects },
    { icon: Zap, value: '20+', label: t.about.technologies },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image/Visual */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Decorative elements */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
                <div className="absolute inset-4 rounded-2xl glass border border-primary/20" />
                
                {/* Code snippet decoration */}
                <div className="absolute inset-8 rounded-xl bg-card p-6 overflow-hidden">
                  <pre className="font-mono text-xs md:text-sm text-muted-foreground leading-relaxed">
                    <code>
                      <span className="text-primary">const</span>{' '}
                      <span className="text-foreground">developer</span> = {'{'}
                      {'\n'}  <span className="text-primary">name</span>:{' '}
                      <span className="text-green-400">"Mauricio Vereau"</span>,
                      {'\n'}  <span className="text-primary">role</span>:{' '}
                      <span className="text-green-400">"Full Stack Dev"</span>,
                      {'\n'}  <span className="text-primary">passion</span>:{' '}
                      <span className="text-green-400">"Building dreams"</span>,
                      {'\n'}  <span className="text-primary">coffee</span>:{' '}
                      <span className="text-yellow-400">Infinity</span>,
                      {'\n'}{'}'};
                    </code>
                  </pre>
                  
                  {/* Terminal cursor */}
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-primary font-mono">{'>'}</span>
                    <span className="w-2 h-4 bg-primary animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">{t.about.title}</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t.about.description}
              </p>

              {/* Company Logos */}
              <div className="mb-8">
                <p className="text-sm text-muted-foreground mb-4 font-mono">
                  {'// '}{t.about.workedAt || 'Empresas donde he trabajado'}
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  {companies.map((company) => (
                    <div
                      key={company.name}
                      className="h-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    >
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="h-full w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="p-4 rounded-xl glass glass-hover text-center group"
                  >
                    <Icon className="h-6 w-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                    <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                      {value}
                    </div>
                    <div className="text-xs text-muted-foreground">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
