import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
  Home, 
  Wrench, 
  Building2, 
  Clipboard, 
  Users, 
  FileCheck 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Construction de maisons individuelles",
      description: "De la conception à la livraison, nous vous accompagnons dans la réalisation de votre maison sur-mesure. Plans personnalisés, choix des matériaux, suivi de chantier.",
      features: ["Étude de faisabilité", "Conception architecturale", "Plans techniques", "Suivi de réalisation"]
    },
    {
      icon: Wrench,
      title: "Rénovation & Extension",
      description: "Donnez une nouvelle vie à votre habitat. Rénovation complète, extension, surélévation, nous optimisons l'espace selon vos besoins actuels.",
      features: ["Diagnostic existant", "Études techniques", "Permis de construire", "Coordination travaux"]
    },
    {
      icon: Building2,
      title: "Projets commerciaux & industriels",
      description: "Bureaux, locaux commerciaux, bâtiments industriels. Nous concevons des espaces fonctionnels adaptés à votre activité professionnelle.",
      features: ["Analyse des besoins", "Conception fonctionnelle", "Normes et réglementations", "Optimisation des flux"]
    },
    {
      icon: Clipboard,
      title: "Suivi de chantier",
      description: "Supervision et contrôle qualité pendant toute la durée des travaux. Respect des délais, conformité aux plans, coordination des corps de métier.",
      features: ["Visites régulières", "Rapports de suivi", "Coordination équipes", "Réception des travaux"]
    },
    {
      icon: FileCheck,
      title: "Conseils administratifs",
      description: "Accompagnement dans toutes les démarches administratives : permis de construire, déclaration préalable, respect des règles d'urbanisme.",
      features: ["Étude réglementaire", "Constitution dossiers", "Suivi instruction", "Conseil juridique"]
    },
    {
      icon: Users,
      title: "Accompagnement personnalisé",
      description: "Un interlocuteur unique pour votre projet. Écoute, conseil et disponibilité à chaque étape pour une collaboration sereine et efficace.",
      features: ["Rendez-vous réguliers", "Écoute des besoins", "Conseil personnalisé", "Disponibilité permanente"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container mx-auto container-padding">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-balance">
              Nos services d'architecture à Lyon
              <span className="block font-medium">Accompagnement sur-mesure de A à Z</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              De la première esquisse à la réception des travaux, nous vous offrons 
              un service complet adapté à vos besoins et votre budget.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="p-6 border-border hover:shadow-medium transition-smooth group">
                  <div className="space-y-4">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-accent-brand/10 rounded-lg flex items-center justify-center group-hover:bg-accent-brand/20 transition-smooth">
                      <IconComponent size={24} className="text-accent-brand" />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="font-medium text-lg leading-tight">
                        {service.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent-brand rounded-full flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-background rounded-lg border border-border shadow-subtle">
              <div className="text-center sm:text-left">
                <h3 className="font-medium mb-1">Un projet en tête ?</h3>
                <p className="text-sm text-muted-foreground">
                  Discutons de vos besoins architecturaux.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-accent-brand hover:bg-accent-brand/90 text-accent-brand-foreground px-6 py-2 rounded-md text-sm font-medium transition-smooth"
              >
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;