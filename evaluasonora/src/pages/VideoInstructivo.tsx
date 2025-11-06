import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";

const VideoInstructivo = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Link to="/">
            <Button variant="ghost" className="mb-8 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Button>
          </Link>
          
          <VideoSection 
            title="Video Instructivo - Herramienta de Evaluación"
            description="Aprende cómo utilizar nuestra herramienta de evaluación de desempeño paso a paso"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VideoInstructivo;
