import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style greeting */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 opacity-0 animate-fade-in-up">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="font-mono text-sm text-muted-foreground">
              {t.hero.greeting}
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 opacity-0 animate-fade-in-up animation-delay-200">
            <span className="text-foreground">Mauricio </span>
            <span className="text-gradient">Vereau</span>
          </h1>

          {/* Role with typing effect */}
          <div className="flex justify-center mb-6 opacity-0 animate-fade-in-up animation-delay-400">
            <h2 className="text-xl md:text-2xl font-mono text-primary glow-sm px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
              {`> ${t.hero.role}`}
              <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up animation-delay-600">
            {t.hero.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-in-up animation-delay-600">
            <Button
              size="lg"
              className="group glow bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
              asChild
            >
              <a href="#projects">
                {t.hero.cta}
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary font-semibold px-8"
              asChild
            >
              <a href="#contact">
                <FileText className="mr-2 h-4 w-4" />
                {t.hero.download}
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-600">
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:mauricio@vereau.dev', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass glass-hover text-muted-foreground hover:text-primary"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up animation-delay-600">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
