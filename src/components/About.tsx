import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Users, Award, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Proximité client",
      description: "Un accompagnement personnalisé à chaque étape de votre projet"
    },
    {
      icon: Award,
      title: "Expertise DPLG",
      description: "Diplôme reconnu par l'État garantissant compétences et responsabilités"
    },
    {
      icon: Clock,
      title: "Suivi rigoureux",
      description: "De la conception à la livraison, un contrôle qualité permanent"
    }
  ];

  return (
    <section id="apropos" className="section-padding bg-secondary/30">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="outline" className="w-fit">À propos</Badge>
              
              <h2 className="text-3xl md:text-4xl font-light text-balance">
                Architecte DPLG indépendant,
                <span className="block font-medium">proche de ses clients</span>
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fort d'une formation d'architecte DPLG (Diplômé Par Le Gouvernement), 
                  j'exerce en libéral pour offrir un service sur-mesure aux particuliers 
                  et professionnels de la région.
                </p>
                
                <p>
                  Ma philosophie repose sur l'écoute, la proximité et l'accompagnement 
                  personnalisé. Chaque projet est unique et mérite une attention 
                  particulière, de la première esquisse à la réception des travaux.
                </p>
                
                <p>
                  Spécialisé dans la construction de maisons individuelles, les rénovations 
                  et extensions, j'interviens également dans le conseil administratif 
                  et le suivi de chantier pour garantir la qualité et le respect 
                  des délais.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-medium text-accent-brand">15+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-medium text-accent-brand">200+</div>
                <div className="text-sm text-muted-foreground">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-medium text-accent-brand">100%</div>
                <div className="text-sm text-muted-foreground">Clients satisfaits</div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="p-6 border-border hover:shadow-medium transition-smooth">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-brand/10 rounded-lg flex items-center justify-center">
                      <IconComponent size={24} className="text-accent-brand" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;