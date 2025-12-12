import { useLanguage } from '@/contexts/LanguageContext';
import { Award, ExternalLink } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';

const certifications = [
  {
    id: 1,
    name: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2024',
    image: '/placeholder.svg',
    credentialUrl: '#',
  },
  {
    id: 2,
    name: 'Google Cloud Professional',
    issuer: 'Google',
    date: '2023',
    image: '/placeholder.svg',
    credentialUrl: '#',
  },
  {
    id: 3,
    name: 'Meta Frontend Developer',
    issuer: 'Meta',
    date: '2023',
    image: '/placeholder.svg',
    credentialUrl: '#',
  },
  {
    id: 4,
    name: 'Azure Developer Associate',
    issuer: 'Microsoft',
    date: '2024',
    image: '/placeholder.svg',
    credentialUrl: '#',
  },
  {
    id: 5,
    name: 'Scrum Master Certified',
    issuer: 'Scrum Alliance',
    date: '2022',
    image: '/placeholder.svg',
    credentialUrl: '#',
  },
];

export default function CertificationsSection() {
  const { t } = useLanguage();
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">{t.certifications.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{t.certifications.title}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.certifications.subtitle}
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {certifications.map((cert) => (
                <CarouselItem key={cert.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="glass-card p-6 h-full group hover:border-primary/50 transition-all duration-300">
                    {/* Certificate Image */}
                    <div className="relative mb-4 overflow-hidden rounded-lg bg-muted/30">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-32 object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Certificate Info */}
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs text-primary/80 font-medium">{cert.date}</span>
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                        >
                          {t.certifications.viewCredential}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-background/50 border-border/50 hover:bg-primary/20 hover:border-primary/50" />
            <CarouselNext className="hidden md:flex -right-12 bg-background/50 border-border/50 hover:bg-primary/20 hover:border-primary/50" />
          </Carousel>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className="w-2 h-2 rounded-full bg-muted-foreground/30 hover:bg-primary/50 transition-colors"
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
