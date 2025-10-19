import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Database, Cpu } from "lucide-react";

export function About() {
  const portfolioTools = [
    { category: "AI Framework", items: ["LangChain", "OpenAI API", "RAG Pipeline", "Vector Database"], icon: Brain },
    { category: "Backend", items: ["FastAPI", "Python", "PostgreSQL", "RESTful API"], icon: Database },
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Lovable"], icon: Code },
    { category: "Deployment", items: ["Vercel", "Supabase", "Docker", "Git"], icon: Cpu }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Brain className="w-12 h-12 text-primary animate-pulse" />
            <h2 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">Vision</h2>
            <Cpu className="w-12 h-12 text-accent animate-pulse" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The vision behind this AI portfolio chatbot is to revolutionize how professionals showcase their careers. 
            Instead of static resumes, this intelligent system creates an interactive experience where visitors can 
            have natural conversations about skills, projects, and experiences. It bridges the gap between traditional 
            portfolios and modern AI technology, making professional networking more engaging and accessible.
          </p>
        </div>


        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioTools.map((toolGroup, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex justify-center mb-4">
                <toolGroup.icon className="w-12 h-12 text-primary" />
              </div>
              <h4 className="font-bold text-lg mb-4">{toolGroup.category}</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {toolGroup.items.map((tool, toolIndex) => (
                  <Badge 
                    key={toolIndex} 
                    variant="secondary" 
                    className="text-xs bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}