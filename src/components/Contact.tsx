import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 animate-fade-in delay-500">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Let's build something creative together! Feel free to reach out
              for collaborations or just a friendly chat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 animate-slide-in-right">
              <a href="mailto:ridagony@gmail.com" className="block">
                <Card className="p-6 hover:shadow-glow transition-smooth cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <span className="text-muted-foreground hover:text-primary transition-smooth">
                        ridagony@gmail.com
                      </span>
                    </div>
                  </div>
                </Card>
              </a>

              <a
                href="https://www.linkedin.com/in/rida-gony/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="p-6 hover:shadow-glow transition-smooth cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">LinkedIn</h4>
                      <span className="text-muted-foreground hover:text-primary transition-smooth">
                        linkedin.com/in/rida-gony
                      </span>
                    </div>
                  </div>
                </Card>
              </a>

              <a
                href="https://github.com/gonyrida"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="p-6 hover:shadow-glow transition-smooth cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Github className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">GitHub</h4>
                      <span className="text-muted-foreground hover:text-primary transition-smooth">
                        github.com/gonyrida
                      </span>
                    </div>
                  </div>
                </Card>
              </a>
            </div>

            {/* Contact Form */}
            <Card className="p-6 animate-scale-in">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-background"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={6}
                    className="bg-background resize-none"
                  />
                </div>
                <Button type="submit" className="w-full shadow-glow group">
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
