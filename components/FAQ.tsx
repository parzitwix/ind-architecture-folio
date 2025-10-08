import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Pourquoi faire appel à un architecte DPLG à Lyon ?",
      answer: "Un architecte DPLG (Diplômé Par Le Gouvernement) possède une formation reconnue par l'État et est inscrit à l'Ordre des Architectes. Faire appel à un architecte DPLG à Lyon garantit une expertise technique, le respect des normes en vigueur (RT 2012, RE 2020), et un accompagnement professionnel de A à Z sur votre projet de construction, rénovation ou extension. L'architecte assure également la conformité aux règles d'urbanisme locales du Rhône et optimise votre budget en évitant les erreurs coûteuses."
    },
    {
      question: "Quels types de projets réalisez-vous dans le Rhône (69) ?",
      answer: "IND Architecture intervient sur tous types de projets architecturaux dans le Rhône : construction de maisons individuelles, rénovation énergétique de bâtiments collectifs et individuels, extension et surélévation de maisons, projets commerciaux et industriels, réhabilitation de patrimoine. Nous accompagnons particuliers, promoteurs et collectivités à Lyon, Saint-Romain-au-Mont-d'Or, Saint-Cyr-au-Mont-d'Or, Oullins et dans tout le département du Rhône."
    },
    {
      question: "Intervenez-vous sur les projets de rénovation énergétique à Lyon ?",
      answer: "Oui, la rénovation énergétique est l'une de nos spécialités. Formé aux normes RE 2020 et à la rénovation énergétique, nous réalisons des projets d'isolation thermique par l'extérieur (ITE), remplacement de menuiseries, installation de systèmes performants (pompes à chaleur, VMC) et mise en conformité BBC. Nous intervenons sur des maisons individuelles et des bâtiments collectifs à Lyon 5, Lyon 1 et dans tout le Rhône pour améliorer votre confort et réduire vos factures énergétiques."
    },
    {
      question: "Quels sont les délais pour obtenir un permis de construire à Lyon ?",
      answer: "Le délai d'instruction d'un permis de construire est généralement de 2 mois pour une maison individuelle et 3 mois pour un bâtiment collectif ou ERP. À Lyon et dans le Rhône, ces délais peuvent être prolongés selon la complexité du dossier et les contraintes d'urbanisme locales (zones protégées, ABF). IND Architecture prend en charge la constitution complète de votre dossier et assure le suivi de l'instruction auprès des services d'urbanisme pour optimiser les délais."
    }
  ];

  // Generate FAQ structured data for SEO
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="section-padding">
      {/* Structured Data for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </script>
      
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-balance">
              Questions fréquentes
              <span className="block font-medium">sur nos services d'architecture</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Vous avez des questions sur nos services d'architecte à Lyon ? 
              Découvrez les réponses aux questions les plus fréquemment posées.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-background"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <h3 className="font-medium text-base pr-4">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <div className="text-center pt-8">
            <p className="text-muted-foreground mb-4">
              Vous avez d'autres questions ? N'hésitez pas à nous contacter.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-accent-brand hover:bg-accent-brand/90 text-accent-brand-foreground px-8 py-3 rounded-md font-medium transition-smooth"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
