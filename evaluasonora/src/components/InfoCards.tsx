import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, TrendingUp, Users, Video } from "lucide-react";
import { Link } from "react-router-dom";

const InfoCards = () => {
  const features = [
    {
      icon: Target,
      title: "Definición de Objetivos",
      description: "Configura objetivos SMART para cada colaborador y alinéalos con las metas departamentales y organizacionales"
    },
    {
      icon: TrendingUp,
      title: "Seguimiento de KPIs",
      description: "Monitorea indicadores clave de desempeño en tiempo real y genera reportes automáticos de progreso"
    },
    {
      icon: Users,
      title: "Evaluaciones 360°",
      description: "Recopila feedback de múltiples fuentes: supervisores, pares, subordinados y autoevaluación del colaborador"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Características Principales
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Nuestra herramienta te permite gestionar todo el ciclo de evaluación de desempeño desde una sola plataforma
          </p>
          <Link to="/video-instructivo">
            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
              <Video className="w-5 h-5" />
              Ver Video Instructivo
            </Button>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
