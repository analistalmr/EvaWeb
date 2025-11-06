const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <img 
              src="/logo-arroz-sonora.png" 
              alt="Agroindustrial Molino Sonora AP SAS" 
              className="h-12 w-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <div className="text-left">
              <h3 className="font-semibold text-foreground">
                Agroindustrial Molino Sonora AP SAS
              </h3>
              <p className="text-sm text-muted-foreground">
                Sistema de Evaluación de Desempeño
              </p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Todos los derechos reservados
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Desarrollado para la gestión de recursos humanos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;