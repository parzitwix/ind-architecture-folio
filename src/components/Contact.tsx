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
    project_type: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      setFormStatus('Veuillez accepter la politique de confidentialité.');
      return;
    }

    // Check honeypot
    const honeypot = (document.querySelector('input[name="_gotcha"]') as HTMLInputElement)?.value;
    if (honeypot) return;

    setIsSubmitting(true);
    setFormStatus('Envoi en cours…');

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('project_type', formData.project_type);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('_subject', 'Nouvelle demande via le site IND Architecture');
    formDataToSend.append('_language', 'fr');

    try {
      const response = await fetch('https://formspree.io/f/xwprevpj', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('Merci, votre message a bien été envoyé.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          project_type: '',
          message: '',
          consent: false
        });
        toast({
          title: "Message envoyé !",
          description: "Nous vous recontacterons dans les plus brefs délais.",
        });
      } else {
        const errorData = await response.json().catch(() => ({}));
        setFormStatus(errorData?.errors?.[0]?.message || 'Oups, une erreur est survenue. Réessayez plus tard.');
      }
    } catch (error) {
      setFormStatus('Impossible d\'envoyer le message (problème de réseau).');
    } finally {
      setIsSubmitting(false);
    }
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
      value: "dbayirli@indarchitecture.com",
      link: "mailto:dbayirli@indarchitecture.com"
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: "IND Architecture, 16bis Rue du Charroi, 69270 Saint-Romain-au-Mont-d'Or",
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
                      autoComplete="name"
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
                      autoComplete="email"
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
                      autoComplete="tel"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="project_type">Type de projet *</Label>
                    <Input
                      id="project_type"
                      name="project_type"
                      value={formData.project_type}
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

                {/* RGPD Consent */}
                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="mt-1"
                    required
                  />
                  <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                    J'accepte que mes informations soient utilisées pour me recontacter, conformément à la{" "}
                    <a 
                      href="/politique-confidentialite" 
                      target="_blank" 
                      rel="noopener"
                      className="text-accent-brand hover:underline"
                    >
                      Politique de confidentialité
                    </a>.
                  </Label>
                </div>

                {/* Hidden fields */}
                <input type="hidden" name="_subject" value="Nouvelle demande via le site IND Architecture" />
                <input type="hidden" name="_language" value="fr" />
                {/* Honeypot anti-spam */}
                <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-accent-brand hover:bg-accent-brand/90 text-accent-brand-foreground transition-bounce group"
                >
                  <Send size={18} className="mr-2 group-hover:translate-x-1 transition-smooth" />
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </Button>

                {/* Form Status */}
                {formStatus && (
                  <p 
                    className={`text-sm text-center ${
                      formStatus.includes('Merci') ? 'text-green-600' : 'text-red-600'
                    }`}
                    aria-live="polite"
                  >
                    {formStatus}
                  </p>
                )}

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

              {/* Map Section */}
              <section aria-label="Localisation de l'agence">
                <h3 className="text-xl font-medium mb-6">Nous trouver</h3>
                <div className="w-full h-[400px] md:h-[300px] relative overflow-hidden rounded-2xl">
                  <iframe
                    src="https://www.google.com/maps?q=IND%20Architecture%2C%2016bis%20Rue%20du%20Charroi%2C%2069270%20Saint-Romain-au-Mont-d%27Or&output=embed"
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    aria-label="Carte Google montrant IND Architecture, 16bis Rue du Charroi, Saint-Romain-au-Mont-d'Or"
                  />
                </div>
                <p className="mt-2 text-center">
                  <a 
                    href="https://www.google.com/maps?q=IND%20Architecture%2C%2016bis%20Rue%20du%20Charroi%2C%2069270%20Saint-Romain-au-Mont-d%27Or" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-accent-brand hover:underline"
                  >
                    Ouvrir dans Google Maps
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;