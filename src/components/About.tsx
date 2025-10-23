import { GraduationCap, Briefcase, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate about creating meaningful digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center animate-scale-in">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-glow">
                  <img
                    src={profilePhoto}
                    alt="Rida - UX/UI Designer and Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-2xl -z-10"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent rounded-2xl -z-10"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 animate-slide-in-right">
              <div className="space-y-4">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  I'm a UX/UI Designer and Frontend Developer with a passion for
                  crafting digital experiences that blend aesthetics with
                  functionality. Currently in my fourth year of Computer Science at
                  the Royal University of Phnom Penh.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  My journey combines the creative world of design with the
                  technical precision of development, allowing me to build products
                  that not only look beautiful but work flawlessly.
                </p>
              </div>

              {/* Info Cards */}
              <div className="grid gap-4 pt-4">
                <Card className="p-4 flex items-start gap-4 hover:shadow-glow transition-smooth border-l-4 border-l-primary">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Education</h4>
                    <p className="text-sm text-muted-foreground">
                      Year 4, Computer Science
                      <br />
                      Royal University of Phnom Penh
                    </p>
                  </div>
                </Card>

                <Card className="p-4 flex items-start gap-4 hover:shadow-glow transition-smooth border-l-4 border-l-accent">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Briefcase className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Focus Areas</h4>
                    <p className="text-sm text-muted-foreground">
                      UX/UI Design, Frontend Development, User Research, Prototyping
                    </p>
                  </div>
                </Card>

                <Card className="p-4 flex items-start gap-4 hover:shadow-glow transition-smooth border-l-4 border-l-primary">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Interests</h4>
                    <p className="text-sm text-muted-foreground">
                      Design Systems, Modern Web Tech, AI Integration, Creative
                      Problem Solving
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
