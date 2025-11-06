const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          background: "var(--gradient-hero)"
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Logo de la empresa */}
        <div className="mb-8">
          <img 
            src="/logo-arroz-sonora.png" 
            alt="Agroindustrial Molino Sonora AP SAS" 
            className="mx-auto h-40 w-auto mb-4"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <p className="text-sm text-foreground/70 font-medium">
            Desarrollado por Agroindustrial Molino Sonora AP SAS
          </p>
        </div>

        <div className="inline-block mb-6">
          <span className="px-6 py-3 bg-primary/20 text-primary rounded-full text-sm font-semibold backdrop-blur-sm border border-primary/30">
            Recursos de RRHH
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          Sistema de{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Evaluación de Desempeño
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-4xl mx-auto leading-relaxed">
          Herramienta integral para gestionar y realizar el seguimiento del desempeño de tu equipo.
          Implementa evaluaciones periódicas, establece objetivos medibles y genera reportes detallados
          para la toma de decisiones estratégicas en tu organización.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
