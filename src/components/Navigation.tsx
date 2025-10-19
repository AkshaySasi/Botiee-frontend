import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import botieeAvatar from "@/assets/botiee-logo.png";

interface NavigationProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

export function Navigation({ onNavigate, currentSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "Vision" },
    { id: "chat", label: "Ask Me" },
    { id: "why-how", label: "Why & How" },
    { id: "contact", label: "Connect" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/80 backdrop-blur-lg border-b border-border/50" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={() => onNavigate("hero")}
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img 
              src={botieeAvatar} 
              alt="Botiee Logo" 
              className="w-10 h-10 rounded-full"
            />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">Botiee</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  currentSection === item.id ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <Button 
              onClick={() => onNavigate("chat")}
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground btn-glow"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 bg-background/95 backdrop-blur-lg">
            <div className="space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-secondary/50 rounded-lg ${
                    currentSection === item.id ? "text-primary bg-secondary/50" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="px-4 pt-2">
                <Button 
                  onClick={() => {
                    onNavigate("chat");
                    setIsOpen(false);
                  }}
                  size="sm"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}