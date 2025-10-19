import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

interface HeroProps {
  onStartChat: () => void;
}

export function Hero({ onStartChat }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000" />
      
      <div className="relative text-center max-w-4xl mx-auto">
        {/* Main heading */}
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="gradient-text">Ask Akshay</span>
          </h1>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="w-6 h-6 text-primary" />
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              MY AI PORTFOLIO
            </p>
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
        Welcome to my interactive AI portfolio!
         I'm Akshay, an enthustiatic AI Engineer with 1+ years of experience.
         Ask Botiee, my personal career chatbot about anything about my projects, skills, or experiences.
          He doesn't know to lie.
        </p>

        {/* CTA Button */}
        <Button 
          onClick={onStartChat}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg btn-glow transition-all duration-300 transform hover:scale-105"
        >
          <MessageCircle className="w-6 h-6 mr-2" />
          Launch App
        </Button>

        {/* Tech indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "AI Engineering", value: "1+ Years" },
            { label: "Projects", value: "10+" },
            { label: "Technologies", value: "15+" },
            { label: "AI Models", value: "RAG" }
          ].map((stat, index) => (
            <div key={index} className="float-card">
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}