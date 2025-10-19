import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border/50 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">Ask Akshay</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              An interactive AI portfolio showcasing my journey as an AI Engineer. 
              Built with modern technologies and a passion for innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About Me
              </a>
              <a href="#chat" className="text-muted-foreground hover:text-primary transition-colors">
                Start Chat
              </a>
              <a href="#why-how" className="text-muted-foreground hover:text-primary transition-colors">
                Why & How
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="mailto:akshaysasi@example.com"
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/akshaysasi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/akshaysasi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Open to opportunities and collaborations
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500" /> by Akshay Sasi • 
            <span className="ml-1">© 2024 AI Portfolio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}