import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { MapPin, Calendar } from 'lucide-react';

import projet1 from '@/assets/projet-1.jpg';
import projet2 from '@/assets/projet-2.jpg';
import projet3 from '@/assets/projet-3.jpg';
import projet4 from '@/assets/projet-4.jpg';
import projet5 from '@/assets/projet-5.jpg';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  
  const categories = ['Tous', 'Résidentiel', 'Commercial', 'Industriel', 'Rénovation'];
  
  const projects = [
    {
      id: 1,
      title: "Résidence Les Jardins",
      category: "Résidentiel",
      location: "Toulouse",
      year: "2023",
      description: "Conception d'un ensemble résidentiel moderne de 12 logements avec commerces au rez-de-chaussée. Architecture contemporaine intégrant des espaces verts et terrasses privatives.",
      image: projet1,
      surface: "1,200 m²",
      type: "Construction neuve"
    },
    {
      id: 2,
      title: "Complexe Industriel Aéronautique",
      category: "Industriel", 
      location: "Blagnac",
      year: "2022",
      description: "Maîtrise d'œuvre complète pour un complexe industriel dédié à l'aéronautique. Bâtiments techniques, bureaux et zones de stockage optimisés pour l'activité.",
      image: projet2,
      surface: "8,500 m²",
      type: "Construction neuve"
    },
    {
      id: 3,
      title: "Villa Contemporaine",
      category: "Résidentiel",
      location: "Colomiers", 
      year: "2023",
      description: "Maison individuelle contemporaine sur terrain en pente. Intégration parfaite dans l'environnement avec bardage bois et grandes ouvertures sur le paysage.",
      image: projet3,
      surface: "180 m²",
      type: "Construction neuve"
    },
    {
      id: 4,
      title: "Extension Familiale",
      category: "Rénovation",
      location: "Muret",
      year: "2023", 
      description: "Extension et rénovation complète d'une maison des années 80. Création d'un espace de vie ouvert avec grandes baies vitrées donnant sur le jardin.",
      image: projet4,
      surface: "50 m² (extension)",
      type: "Rénovation/Extension"
    },
    {
      id: 5,
      title: "Centre de Formation",
      category: "Commercial",
      location: "Toulouse",
      year: "2022",
      description: "Reconversion d'un site industriel en centre de formation moderne. Architecture innovante avec espaces modulables et technologies intégrées.",
      image: projet5,
      surface: "3,200 m²",
      type: "Réhabilitation"
    }
  ];

  const filteredProjects = selectedCategory === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="realisations" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <Badge variant="outline" className="w-fit">Nos réalisations</Badge>
            <h2 className="text-3xl md:text-4xl font-light text-balance">
              Projets réalisés avec 
              <span className="block font-medium">expertise et passion</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              De la maison individuelle aux complexes industriels, découvrez nos réalisations 
              qui allient fonctionnalité, esthétisme et respect de l'environnement.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-accent-brand hover:bg-accent-brand/90 text-accent-brand-foreground" 
                  : "hover:bg-secondary transition-smooth"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer overflow-hidden border-border hover:shadow-medium transition-smooth">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="text-xs">
                            {project.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {project.year}
                          </span>
                        </div>
                        <h3 className="font-medium text-lg group-hover:text-accent-brand transition-smooth">
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {project.description}
                      </p>
                      
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin size={12} />
                          {project.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          {project.year}
                        </div>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <div className="space-y-6">
                    <div className="aspect-[16/10] overflow-hidden rounded-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">{project.category}</Badge>
                        <span className="text-sm text-muted-foreground">{project.year}</span>
                      </div>
                      
                      <h3 className="text-2xl font-medium">{project.title}</h3>
                      
                      <div className="grid md:grid-cols-3 gap-4 p-4 bg-secondary/30 rounded-lg">
                        <div>
                          <p className="text-sm font-medium">Localisation</p>
                          <p className="text-sm text-muted-foreground">{project.location}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Surface</p>
                          <p className="text-sm text-muted-foreground">{project.surface}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Type</p>
                          <p className="text-sm text-muted-foreground">{project.type}</p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;