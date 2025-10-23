import { Mail, Linkedin, Github, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-gradient mb-2">Rida</p>
              <p className="text-sm text-muted-foreground">
                UX/UI Designer & Software Developer
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="ridagony@gmail.com"
                className="p-3 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth shadow-md hover:shadow-glow"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rida-gony/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth shadow-md hover:shadow-glow"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/gonyrida"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth shadow-md hover:shadow-glow"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              © {currentYear} Rida Gony. Designed & Built with
              <Heart className="h-4 w-4 text-primary fill-primary" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
