import { Card } from "@/components/ui/card";
import { Lightbulb, Wrench, Target, Rocket } from "lucide-react";

export function WhyHow() {
  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* WHY Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl font-bold mb-6 flex items-center justify-center lg:justify-start gap-4">
                <Lightbulb className="w-12 h-12 text-primary" />
                WHY
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The vision that led to the development of this portfolio chatbot
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-card to-primary/5">
                <div className="flex items-start gap-4">
                  <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Interactive Experience</h3>
                    <p className="text-muted-foreground">
                      Traditional portfolios are static. I wanted to create an engaging, conversational way 
                      for visitors to learn about my skills and experience through natural dialogue.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-card to-primary/5">
                <div className="flex items-start gap-4">
                  <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Interactive Experience</h3>
                    <p className="text-muted-foreground">
                      Traditional portfolios are static. I wanted to create an engaging, conversational way 
                      for visitors to learn about my skills and experience through natural dialogue.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-card to-accent/5">
                <div className="flex items-start gap-4">
                  <Rocket className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Showcase AI Skills</h3>
                    <p className="text-muted-foreground">
                      What better way to demonstrate my AI engineering capabilities than building 
                      an intelligent chatbot that represents me and answers questions about my work?
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>


          {/* HOW Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl font-bold mb-6 flex items-center justify-center lg:justify-start gap-4">
                <Wrench className="w-12 h-12 text-primary" />
                HOW
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tools and techniques I used to build that vision into a reality
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-card to-secondary/20">
                <h3 className="font-bold text-lg mb-3 text-primary">Backend Architecture</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>FastAPI:</strong> High-performance Python web framework</li>
                  <li>• <strong>LangChain:</strong> AI framework for building LLM applications</li>
                  <li>• <strong>RAG Pipeline:</strong> Retrieval-Augmented Generation for accurate responses</li>
                  <li>• <strong>FAISS:</strong> Vector database for efficient document retrieval</li>
                  <li>• <strong>OpenRouter:</strong> AI model routing for optimal performance</li>
                </ul>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-card to-primary/10">
                <h3 className="font-bold text-lg mb-3 text-primary">Frontend Technology</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>React + TypeScript:</strong> Modern, type-safe UI development</li>
                  <li>• <strong>Tailwind CSS:</strong> Utility-first styling with custom design system</li>
                  <li>• <strong>Shadcn/ui:</strong> Beautiful, accessible component library</li>
                  <li>• <strong>Axios:</strong> HTTP client for seamless API communication</li>
                  <li>• <strong>Real-time Chat:</strong> Smooth messaging experience</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}