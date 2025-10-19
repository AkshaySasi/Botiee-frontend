import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss opportunities, collaborations, or just say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name:
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="bg-input border-border"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email:
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-input border-border"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message:
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  rows={5}
                  className="bg-input border-border resize-none"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 btn-glow transition-all duration-300"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-8 bg-gradient-to-br from-card to-primary/10">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or potential collaborations. Feel free to reach out through any of these channels.
              </p>

              <div className="space-y-4">
                <a 
                  href="mailto:akshaysasi@example.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground text-sm">akshaysasi@example.com</div>
                  </div>
                </a>

                <a 
                  href="https://github.com/akshaysasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <Github className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-semibold">GitHub</div>
                    <div className="text-muted-foreground text-sm">@akshaysasi</div>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/akshaysasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-muted-foreground text-sm">/in/akshaysasi</div>
                  </div>
                </a>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-card to-accent/10">
              <h4 className="text-lg font-bold mb-4">Looking for:</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Full-time AI Engineering opportunities</li>
                <li>• Freelance AI/ML project collaborations</li>
                <li>• Open source contributions</li>
                <li>• Technical mentorship and knowledge sharing</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}