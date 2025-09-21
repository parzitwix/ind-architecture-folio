import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import maisonModerne from '@/assets/maison-moderne.jpg';

const Hero = () => {

  return (
    <section id="accueil" className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${maisonModerne})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-32">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-balance leading-tight text-white">
                  Architecture 
                  <span className="block font-medium">contemporaine</span>
                  <span className="block text-accent-brand">& responsable</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl text-balance leading-relaxed">
                  IND Architecture offre une architecture franche, contemporaine, fonctionnelle 
                  et responsable pour vos projets résidentiels, commerciaux et industriels.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent-brand hover:bg-accent-brand/90 text-white transition-bounce group"
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
                  className="bg-white text-black border-white hover:bg-white hover:text-black"
                  asChild
                >
                  <a href="#realisations">Voir nos réalisations</a>
                </Button>
              </div>
              
              {/* Floating card */}
              <div className="inline-flex bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
                <div className="space-y-1">
                  <p className="text-sm text-white/70">Expertise</p>
                  <p className="font-medium text-white">Déniz Bayirli - Architecte DPLG</p>
                  <p className="text-xs text-white/70">N° Ordre des Architectes : 079943</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;