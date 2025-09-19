import logoInd from '@/assets/logo-ind.png';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'À propos', href: '#apropos' },
    { label: 'Réalisations', href: '#realisations' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    { label: 'Maisons individuelles', href: '#services' },
    { label: 'Rénovation & Extension', href: '#services' },
    { label: 'Projets commerciaux', href: '#services' },
    { label: 'Suivi de chantier', href: '#services' }
  ];

  const legal = [
    { label: 'Mentions légales', href: '#' },
    { label: 'Politique de confidentialité', href: '#' },
    { label: 'CGV', href: '#' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto container-padding">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="space-y-6">
            <img 
              src={logoInd} 
              alt="IND Architecture" 
              className="h-8 w-auto brightness-0 invert"
            />
            <div className="space-y-3">
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                Architecte DPLG indépendant spécialisé dans l'accompagnement 
                personnalisé pour vos projets de construction et rénovation.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                  <MapPin size={14} />
                  <span>Lyon, France</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                  <Phone size={14} />
                  <span>06 50 04 99 37</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                  <Mail size={14} />
                  <span>contact@ind-architecture.fr</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="font-medium">Navigation</h3>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-medium">Nos services</h3>
            <nav className="space-y-3">
              {services.map((service) => (
                <a
                  key={service.label}
                  href={service.href}
                  className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  {service.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact CTA */}
          <div className="space-y-6">
            <h3 className="font-medium">Votre projet</h3>
            <div className="space-y-4">
              <p className="text-sm text-primary-foreground/80">
                Premier rendez-vous gratuit pour étudier votre projet.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-accent-brand hover:bg-accent-brand/90 text-accent-brand-foreground px-4 py-2 rounded-md text-sm font-medium transition-smooth"
              >
                Démarrer un projet
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60">
              © {currentYear} IND Architecture. Architecte DPLG - Tous droits réservés.
            </div>
            
            <nav className="flex items-center gap-6">
              {legal.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground/80 transition-smooth"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;