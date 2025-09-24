import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { MapPin, Calendar } from 'lucide-react';

import projet1 from '@/assets/projet-1.jpg';
import projet2 from '@/assets/projet-2.jpg';
import projet3 from '@/assets/projet-3.jpg';
import saintCyrRenovation from '@/assets/saint-cyr-renovation.jpg';
import projet5 from '@/assets/projet-5.jpg';
import alliadeRehabilitation from '@/assets/alliade-rehabilitation.jpg';
import job40Main from '@/assets/job-40-photo1.jpg';

// RED Is RED project images
const redIsRedImage1 = '/lovable-uploads/e1097b63-1541-4533-b1ff-147939f833fd.png';
const redIsRedImage2 = '/lovable-uploads/9d409177-7635-48b3-8391-3ec1a08f185b.png';
const redIsRedImage3 = '/lovable-uploads/c2d47c59-0114-4879-9451-e828fe246e24.png';
const redIsRedImage4 = '/lovable-uploads/826d58dd-3aef-4f5c-86ca-57e8f92cce45.png';

// Mably project images  
const mablyImage1 = '/lovable-uploads/d07ecc8d-3c80-48f2-8212-2b028b688c5a.png';
const mablyImage2 = '/lovable-uploads/8eb6de00-a0b2-4653-8669-3d22b777e33e.png';
const mablyImage3 = '/lovable-uploads/e172933c-f614-429a-a88f-1e90efcb60af.png';
const mablyImage4 = '/lovable-uploads/28f24940-b963-41aa-ba02-e629462d5069.png';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  
  const categories = ['Tous', 'Maison individuelle', 'Habitat collectif', 'Commerce/Industrie', 'Rénovation énergétique'];
  
  const projects = [
    {
      id: 1,
      title: "Habitat Collectif - Promotion Immobilière",
      category: "Habitat collectif",
      location: "Gleizé (69)",
      year: "2014",
      description: "Conception d'un ensemble résidentiel moderne intégrant des logements contemporains avec commerces au rez-de-chaussée. Architecture contemporaine avec espaces verts et terrasses privatives.",
      image: projet1,
      surface: "1,260 m²",
      type: "Construction neuve"
    },
    {
      id: 2,
      title: "Construction Complexe Industriel",
      category: "Commerce/Industrie", 
      location: "Konya, Turquie",
      year: "2010-2011",
      description: "Construction d'un complexe laiterie et abattoir. Maîtrise d'œuvre complète pour ce projet industriel d'envergure intégrant bâtiments techniques, bureaux et zones de production optimisés.",
      image: projet2,
      surface: "70,500 m²",
      type: "Construction neuve"
    },
    {
      id: 3,
      title: "Maison Contemporaine",
      category: "Maison individuelle",
      location: "Saint-Romain-au-Mont-d'Or (69)",
      year: "2020",
      description: "Maison individuelle contemporaine privée sur terrain en pente. Intégration parfaite dans l'environnement avec bardage bois et grandes ouvertures sur le paysage.",
      image: projet3,
      surface: "180 m²",
      type: "Construction neuve"
    },
    {
      id: 4,
      title: "Rénovation et Extension",
      category: "Maison individuelle",
      location: "Saint-Cyr au Mont-D'or (69)",
      year: "2023", 
      description: "Extension et rénovation complète d'une maison existante. Création d'un espace de vie ouvert avec grandes baies vitrées donnant sur le jardin et optimisation des espaces.",
      image: saintCyrRenovation,
      surface: "97 m²",
      type: "Rénovation/Extension"
    },
    {
      id: 5,
      title: "Construction Centre Multiusage",
      category: "Commerce/Industrie",
      location: "Lyon",
      year: "2017",
      description: "Construction d'un centre multiusage moderne. Architecture innovante avec espaces modulables, technologies intégrées et optimisation des flux de circulation.",
      image: projet5,
      surface: "5,200 m²",
      type: "Construction neuve"
    },
    {
      id: 6,
      title: "Réhabilitation patrimoine",
      category: "Habitat collectif",
      location: "Rue de la l'Annonciade Lyon 1",
      year: "2023",
      description: "Projet de réhabilitation de plusieurs sites d'habitat collectif, intégrant maintenance du patrimoine et suivi complet (base + exécution + OPC). Maître d'ouvrage : Alliade Habitat. Mandataire : IND Architecture.",
      image: alliadeRehabilitation,
      surface: "Divers sites",
      type: "Réhabilitation"
    },
    {
      id: 7,
      title: "Travaux d'amélioration énergétique",
      category: "Rénovation énergétique",
      location: "Rue du Doyenné, Lyon 5ème (69)",
      year: "2024",
      description: "Rénovation d'un bâtiment ERP - Habitat - Équipement public. Travaux complets incluant réfection toiture, ravalement façade et remplacement des menuiseries. Mission de base + OPC avec architecte mandataire. Partenariat avec GENESE (Économiste).",
      image: job40Main,
      surface: "660 m²",
      type: "Rénovation énergétique"
    },
    {
      id: 8,
      title: "RED Is RED",
      category: "Maison individuelle",
      location: "Oullins (69)",
      year: "2019",
      description: "Red Is Red – Maison individuelle à Oullins. Surélévation & rénovation énergétique. Située à Oullins, près de Lyon, cette maison a fait l'objet d'une transformation complète : une surélévation pour créer de nouveaux espaces de vie et une rénovation énergétique visant à améliorer le confort et réduire les consommations. Le projet a relevé plusieurs défis : Agrandir la surface habitable sans emprise supplémentaire au sol. Requalifier l'enveloppe thermique grâce à une isolation performante et des menuiseries haute efficacité. Donner une identité architecturale contemporaine avec une façade rouge marquante qui distingue le projet tout en respectant son environnement urbain. L'intervention a permis d'optimiser la lumière naturelle, d'améliorer la ventilation et de créer un dialogue harmonieux entre l'ancien et le neuf. Résultats : Une maison plus spacieuse et confortable. Des performances énergétiques nettement améliorées. Une architecture moderne et identifiable, symbole de rénovation durable en région lyonnaise.",
      image: redIsRedImage1,
      images: [redIsRedImage1, redIsRedImage2, redIsRedImage3, redIsRedImage4],
      surface: "Extension + rénovation",
      type: "Surélévation & rénovation énergétique"
    },
    {
      id: 9,
      title: "Habitat collectif à dimension individuelle",
      category: "Habitat collectif",
      location: "Mably / Roanne (42)",
      year: "2022",
      description: "21 maisons jumelées à Mably (42). À Mably, dans la Loire (42), IND Architecture a conçu un programme de 21 maisons jumelées. Le projet vise à associer les avantages d'un habitat collectif (densité, optimisation foncière) et ceux de la maison individuelle (intimité, espaces extérieurs). Organisation en bandes jumelées pour optimiser le foncier et les coûts. Chaque logement dispose d'un jardin ou d'une terrasse privatifs. Volumes sobres, matériaux durables, intégration harmonieuse au site. Cadre de vie à échelle humaine conciliant densité et confort. Performance énergétique grâce à la compacité et aux matériaux. Qualité résidentielle durable, pensée pour les familles et le territoire.",
      image: mablyImage1,
      images: [mablyImage1, mablyImage2, mablyImage3, mablyImage4],
      surface: "21 logements / 110 m²",
      type: "Habitat collectif intermédiaire"
    }
  ];

  const filteredProjects = selectedCategory === 'Tous' 
    ? projects 
    : selectedCategory === 'Rénovation énergétique'
    ? projects.filter(project => project.category === 'Rénovation énergétique' || project.id === 6 || project.id === 7 || project.id === 8)
    : selectedCategory === 'Maison individuelle'
    ? projects.filter(project => project.category === 'Maison individuelle' || project.id === 4 || project.id === 8)
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="realisations" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            
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
                    {project.images && project.images.length > 1 ? (
                      <div className="space-y-4">
                        <div className="aspect-[16/10] overflow-hidden rounded-lg">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {project.images.slice(1).map((img, index) => (
                            <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg">
                              <img
                                src={img}
                                alt={`${project.title} - Photo ${index + 2}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-[16/10] overflow-hidden rounded-lg">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    
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