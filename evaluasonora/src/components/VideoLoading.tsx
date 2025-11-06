import { Loader2, Play } from "lucide-react";

interface VideoLoadingProps {
  message?: string;
  subtitle?: string;
}

const VideoLoading = ({ 
  message = "Cargando video...",
  subtitle = "Preparando contenido educativo"
}: VideoLoadingProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-background/95 to-muted/95 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-6 text-center max-w-sm mx-auto p-8">
        {/* Animated loading indicator */}
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
          <div className="absolute inset-2 rounded-full border-2 border-secondary/30 border-b-secondary animate-spin" 
               style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
          <Play className="absolute inset-0 m-auto w-6 h-6 text-primary animate-pulse" />
        </div>

        {/* Loading text */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground animate-pulse">
            {message}
          </h3>
          <p className="text-sm text-muted-foreground">
            {subtitle}
          </p>
        </div>

        {/* Progress dots */}
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
};

export default VideoLoading;