import { useEffect } from 'react';

const Testimonials = () => {
  useEffect(() => {
    // Load Elfsight script
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="avis" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            
            <h2 className="text-3xl md:text-4xl font-light text-balance">
              La satisfaction client,
              <span className="block font-medium">notre priorité</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Découvrez les témoignages de nos clients qui nous font confiance 
              pour leurs projets architecturaux.
            </p>
          </div>

          {/* Elfsight Google Reviews Widget */}
          <div className="flex justify-center">
            <div 
              className="elfsight-app-e4af04d8-2840-44e9-bef0-2ebfc921a66c" 
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;