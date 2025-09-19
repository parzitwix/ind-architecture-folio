import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulation d'envoi
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Téléphone",
      value: "06 50 04 99 37",
      link: "tel:+33650049937"
    },
    {
      icon: Mail,
      label: "Email professionnel",
      value: "contact@ind-architecture.fr",
      link: "mailto:contact@ind-architecture.fr"
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: "Saint-Romain-au-Mont-d'Or, Lyon (69)",
      link: null
    },
    {
      icon: Clock,
      label: "Horaires",
      value: "Lun-Ven : 8h-18h",
      link: null
    }
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto container-padding">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <Badge variant="outline" className="w-fit">Contact</Badge>
            <h2 className="text-3xl md:text-4xl font-light text-balance">
              Démarrons votre projet
              <span className="block font-medium">ensemble</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Premier rendez-vous gratuit pour étudier la faisabilité de votre projet 
              et vous conseiller sur les meilleures solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <Card className="p-8 border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Formulaire de contact</h3>
                  <p className="text-sm text-muted-foreground">
                    Décrivez-nous votre projet, nous vous recontacterons rapidement.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="06 XX XX XX XX"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Type de projet *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Construction, Rénovation, Extension..."
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre projet : localisation, surface, budget estimé, délais souhaités..."
                    rows={6}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-accent-brand hover:bg-accent-brand/90 text-accent-brand-foreground transition-bounce group"
                >
                  <Send size={18} className="mr-2 group-hover:translate-x-1 transition-smooth" />
                  Envoyer le message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  En soumettant ce formulaire, vous acceptez d'être recontacté concernant votre projet.
                </p>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-xl font-medium">Informations de contact</h3>
                
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-background transition-smooth">
                      <div className="w-10 h-10 bg-accent-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent size={18} className="text-accent-brand" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium text-sm">{info.label}</p>
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.link ? (
                    <a key={index} href={info.link} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>
                      {content}
                    </div>
                  );
                })}
              </div>

              {/* Map Placeholder */}
              <Card className="p-6 border-border">
                <div className="space-y-4">
                  <h4 className="font-medium">Zone d'intervention</h4>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <MapPin size={24} className="text-muted-foreground mx-auto" />
                      <p className="text-sm text-muted-foreground">
                        Lyon et région Rhône-Alpes<br />
                        Projets internationaux acceptés
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <Button 
                      variant="outline" 
                      size="sm"
                      asChild
                    >
                      <a 
                        href="https://www.google.com/maps/place/le+15/@45.7542403,4.7564142,13z/data=!3m1!5s0x47f4ea4d508f79ab:0x8b77bae220f94b01!4m10!1m2!2m1!1sLe+15+!3m6!1s0x47f4eb1f9762db8f:0xa25b8e9ecfccb428!8m2!3d45.7542403!4d4.828512!15sCgVMZSAxNZIBG2Fzc29jaWF0aW9uX29yX29yZ2FuaXphdGlvbqoBORABKgkiBWxlIDE1KAQyHxABIhu2i4HePxHTI9i3gtEDbCdAY2cherCmU8bvegcyCRACIgVsZSAxNeABAA!16s%2Fg%2F11j8j_ydbl"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Voir sur Google Maps
                      </a>
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    Intervention principalement sur Lyon métropole et région Rhône-Alpes. 
                    Déplacements possibles selon le projet.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;