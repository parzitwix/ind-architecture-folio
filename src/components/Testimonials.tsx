import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Philippe Lacroix",
      project: "Maison individuelle, Saint-Romain",
      rating: 5,
      text: "Excellent architecte, très professionnel et à l'écoute de nos besoins. Le projet a été livré dans les temps et selon nos attentes. Je recommande vivement.",
      date: "Novembre 2023"
    },
    {
      id: 2, 
      name: "Marie Dubois",
      project: "Extension maison, La Tour-de-Salvagny", 
      rating: 5,
      text: "Très satisfaite du travail réalisé. L'architecte a su comprendre nos contraintes et proposer des solutions créatives. Suivi de chantier impeccable.",
      date: "Septembre 2023"
    },
    {
      id: 3,
      name: "Jean-Claude Martin", 
      project: "Rénovation complète, Lyon",
      rating: 5,
      text: "Professionnel compétent et disponible. La rénovation s'est déroulée sans encombre grâce à sa rigueur et son expertise. Résultat final parfait.",
      date: "Juillet 2023"
    },
    {
      id: 4,
      name: "Entreprise Bâti Solutions",
      project: "Projet industriel, Gleizé",
      rating: 5, 
      text: "Partenaire de confiance pour nos projets industriels. Maîtrise technique excellente et respect des délais. Nous recommandons sans hésitation.",
      date: "Mai 2023"
    },
    {
      id: 5,
      name: "Famille Rousseau",
      project: "Maison contemporaine, Collonges",
      rating: 5,
      text: "Un grand merci pour la réalisation de notre maison. Plans détaillés, conseils pertinents et suivi personnalisé. Exactement ce que nous attendions.",
      date: "Mars 2023"
    },
    {
      id: 6,
      name: "Sophie & Michel Berger",
      project: "Extension et surélévation",
      rating: 5,
      text: "Projet mené avec professionnalisme. L'architecte a su optimiser l'espace tout en respectant l'architecture existante. Très satisfaits du résultat.",
      date: "Janvier 2023"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}
      />
    ));
  };

  return (
    <section id="avis" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <Badge variant="outline" className="w-fit">Avis clients</Badge>
            <h2 className="text-3xl md:text-4xl font-light text-balance">
              La satisfaction client,
              <span className="block font-medium">notre priorité</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Découvrez les témoignages de nos clients qui nous font confiance 
              pour leurs projets architecturaux.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6 border-border hover:shadow-medium transition-smooth">
                <div className="space-y-4">
                  {/* Quote Icon */}
                  <Quote size={24} className="text-accent-brand/60" />
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-sm leading-relaxed text-muted-foreground">
                    "{testimonial.text}"
                  </blockquote>
                  
                  {/* Author Info */}
                  <div className="space-y-1 pt-2 border-t border-border">
                    <div className="font-medium text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.project}</div>
                    <div className="text-xs text-muted-foreground font-medium">{testimonial.date}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="text-center space-y-2">
              <div className="text-3xl font-light text-accent-brand">4.9/5</div>
              <div className="text-sm text-muted-foreground">Note moyenne clients</div>
              <div className="flex justify-center gap-1">
                {renderStars(5)}
              </div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-3xl font-light text-accent-brand">97%</div>
              <div className="text-sm text-muted-foreground">Projets livrés dans les délais</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-3xl font-light text-accent-brand">25+</div>
              <div className="text-sm text-muted-foreground">Années d'expérience</div>
            </div>
          </div>

          {/* Google Reviews Link */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Retrouvez tous nos avis clients sur Google
            </p>
            <a
              href="https://www.google.com/search?q=IND+Architecture+avis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent-brand hover:text-accent-brand/80 transition-smooth"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Voir nos avis Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;