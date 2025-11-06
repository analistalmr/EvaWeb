import { Play } from "lucide-react";
import { useState } from "react";
import VideoLoading from "./VideoLoading";

interface VideoSectionProps {
  title?: string;
  description?: string;
}

const VideoSection = ({ 
  title = "Guía Completa de Evaluación de Desempeño",
  description = "Aprende las mejores prácticas y metodologías para implementar un sistema efectivo"
}: VideoSectionProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoad = () => {
    // Mantener el loading por al menos 2 segundos para mejor UX
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-5 py-2 rounded-full mb-6 backdrop-blur-sm border border-primary/30">
            <Play className="w-4 h-4" />
            <span className="text-sm font-semibold">Video Tutorial</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div 
          className="relative w-full rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)] bg-card border border-border"
          style={{ paddingBottom: "56.25%" }}
        >
          {/* Loading Component */}
          {isLoading && (
            <VideoLoading 
              message="Cargando video instructivo..."
              subtitle="Preparando contenido de evaluación de desempeño"
            />
          )}

          {/* Video iframe */}
          <iframe
            src="https://agroindustrialmolino-my.sharepoint.com/:v:/g/personal/rbohorquez_arrozsonora_com_co/Eduwc_uYRipJo_pu10uFIJUBN98brwpkngbp6ugmnL6F5g?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=uQWzmM"
            className="absolute top-0 left-0 w-full h-full"
            allow="autoplay"
            title="Video sobre Evaluación de Desempeño"
            onLoad={handleVideoLoad}
            onError={handleVideoLoad}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
