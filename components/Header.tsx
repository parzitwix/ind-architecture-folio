import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logoInd from '@/assets/logo-ind.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'À propos', href: '#apropos' },
    { label: 'Réalisations', href: '#realisations' },
    { label: 'Services', href: '#services' },
    { label: 'Avis clients', href: '#avis' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <nav className="container mx-auto container-padding py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#accueil" className="flex items-center transition-smooth hover:opacity-80">
          <img 
            src={logoInd} 
            alt="IND Architecture" 
            className="h-8 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Contact Button - Desktop */}
        <div className="hidden lg:block">
          <Button 
            variant="default" 
            className="bg-accent-brand hover:bg-accent-brand/90 text-accent-brand-foreground"
            asChild
          >
            <a href="#contact">Nous contacter</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container-padding py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button 
              variant="default" 
              className="w-full bg-accent-brand hover:bg-accent-brand/90 text-accent-brand-foreground mt-4"
              asChild
            >
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Nous contacter
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;