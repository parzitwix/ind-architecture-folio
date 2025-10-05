import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary/30">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-6xl font-bold text-accent-brand">404</h1>
        <h2 className="text-2xl font-medium">Page introuvable</h2>
        <p className="text-lg text-muted-foreground">
          Désolé, la page que vous recherchez n'existe pas.
        </p>
        <a 
          href="/" 
          className="inline-block mt-4 bg-accent-brand hover:bg-accent-brand/90 text-accent-brand-foreground px-6 py-3 rounded-md font-medium transition-smooth"
        >
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;
