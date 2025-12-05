import { useState } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: t.contact.success,
      description: '✓',
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    { icon: MapPin, label: 'Lima, Perú' },
    { icon: Mail, label: 'mauricio@vereau.dev' },
    { icon: Phone, label: '+51 999 888 777' },
  ];

  return (
    <section id="contact" className="py-24 bg-surface/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">{t.contact.title}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="space-y-6 mb-10">
                {contactInfo.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 p-4 rounded-xl glass"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-foreground">{label}</span>
                  </div>
                ))}
              </div>

              {/* Decorative terminal */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <pre className="font-mono text-sm text-muted-foreground">
                  <code>
                    <span className="text-primary">$</span> npx contact-mauricio
                    {'\n'}
                    <span className="text-green-400">✓</span> Connecting...
                    {'\n'}
                    <span className="text-green-400">✓</span> Ready to collaborate!
                    {'\n'}
                    <span className="text-primary">{'>'}</span>
                    <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse" />
                  </code>
                </pre>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {t.contact.name}
                </label>
                <Input
                  type="text"
                  required
                  className="bg-card border-border focus:border-primary"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {t.contact.email}
                </label>
                <Input
                  type="email"
                  required
                  className="bg-card border-border focus:border-primary"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {t.contact.message}
                </label>
                <Textarea
                  required
                  rows={5}
                  className="bg-card border-border focus:border-primary resize-none"
                  placeholder="..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full glow bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    {t.contact.send}
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
