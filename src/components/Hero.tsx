import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import projet1 from '@/assets/projet-1.jpg';

const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center gradient-hero">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-balance leading-tight">
                Architecture 
                <span className="block font-medium">sur-mesure</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl text-balance leading-relaxed">
                Architecte DPLG indépendant, j'accompagne particuliers et professionnels 
                dans leurs projets de construction, rénovation et extension avec un 
                service personnalisé et une attention particulière aux détails.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent-brand hover:bg-accent-brand/90 text-accent-brand-foreground transition-bounce group"
                asChild
              >
                <a href="#contact" className="flex items-center gap-2">
                  Démarrer un projet
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-smooth" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-border hover:bg-secondary transition-bounce"
                asChild
              >
                <a href="#realisations">Voir nos réalisations</a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-medium">
              <img
                src={projet1}
                alt="Projet architectural moderne - Résidence avec commerces"
                className="w-full h-full object-cover transition-smooth hover:scale-105"
              />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-lg shadow-medium border border-border">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Expertise</p>
                <p className="font-medium">Architecte DPLG</p>
                <p className="text-xs text-muted-foreground">Diplômé par le gouvernement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;