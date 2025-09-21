import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Users, Award, Globe, Leaf } from 'lucide-react';
import denizPhoto from '@/assets/deniz-bayirli.jpg';

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Satisfaction client",
      description: "Être à l'écoute des besoins et proposer une architecture adaptée et innovante"
    },
    {
      icon: Leaf,
      title: "Respect environnemental",
      description: "Intégration des principes HQE et Haute Performance Énergétique"
    },
    {
      icon: Globe,
      title: "Expertise internationale",
      description: "Connaissance du milieu architectural français et expérience internationale"
    },
    {
      icon: Award,
      title: "Collaboration",
      description: "Travail en partenariat avec architectes, ingénieurs et spécialistes"
    }
  ];

  return (
    <section id="apropos" className="section-padding bg-secondary/30">
      <div className="container mx-auto container-padding">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            
            <h2 className="text-3xl md:text-4xl font-light text-balance">
              Architecture franche, contemporaine
              <span className="block font-medium">fonctionnelle & responsable</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">IND Architecture</strong> offre une architecture 
                  contemporaine et responsable, appliquée dans des domaines variés : commerces, 
                  centres urbains, complexes industriels, bureaux, équipements collectifs et habitat.
                </p>
                
                <p>
                  Notre connaissance du milieu architectural français, alliée à l'expérience 
                  internationale, fait d'IND Architecture un interlocuteur privilégié pour 
                  vos projets en France et à l'étranger.
                </p>
                
                <p>
                  Nous accordons une grande importance au principe de collaboration, travaillant 
                  en partenariat avec architectes, architectes d'intérieur, ingénieurs et 
                  infographistes pour offrir une prestation globale de qualité.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-medium text-accent-brand">40+</div>
                  <div className="text-sm text-muted-foreground">Projets réalisés</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-medium text-accent-brand">25+</div>
                  <div className="text-sm text-muted-foreground">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-medium text-accent-brand">97%</div>
                  <div className="text-sm text-muted-foreground">Projets livrés à temps</div>
                </div>
              </div>
            </div>

            {/* Architect Profile */}
            <div className="space-y-6">
              <Card className="p-6 border-border">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                      <img
                        src={denizPhoto}
                        alt="Déniz Bayirli - Architecte DPLG"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Déniz Bayirli</h3>
                      <p className="text-sm text-muted-foreground">Architecte DPLG</p>
                      <p className="text-xs text-muted-foreground">N° Ordre : 079943</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      Fondateur et gérant d'IND Architecture, né à Berlin en 1972, 
                      diplômé en Architecture de l'Université Technique d'Istanbul. 
                      Installé à Lyon depuis 2001.
                    </p>
                    
                    <div className="space-y-1">
                      <p><strong>Formations clés :</strong></p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• Formation HQE (2012)</li>
                        <li>• Accessibilité PMR ERP (2014)</li>
                        <li>• RE 2020 (2019)</li>
                        <li>• Construction bois (2021)</li>
                        <li>• Rénovation énergétique (2023)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="p-6 border-border hover:shadow-medium transition-smooth text-center">
                  <div className="space-y-4">
                    <div className="mx-auto w-12 h-12 bg-accent-brand/10 rounded-lg flex items-center justify-center">
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