import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { ChatInterface } from "@/components/ChatInterface";
import { About } from "@/components/About";
import { WhyHow } from "@/components/WhyHow";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("hero");

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleStartChat = () => {
    handleNavigate("chat");
  };

  // Update current section based on scroll position
  useEffect(() => {
    const sections = ["hero", "about", "chat", "why-how", "contact"];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigate={handleNavigate} currentSection={currentSection} />
      
      <main>
        <section id="hero">
          <Hero onStartChat={handleStartChat} />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="chat">
          <ChatInterface />
        </section>
        
        <section id="why-how">
          <WhyHow />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
