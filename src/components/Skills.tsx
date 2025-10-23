import { Palette, Code2, Figma, Layout, Users, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const designSkills = [
    { name: "Figma", icon: Figma, level: 90 },
    { name: "UI/UX Design", icon: Layout, level: 85 },
    { name: "Prototyping", icon: Smartphone, level: 80 },
    { name: "User Research", icon: Users, level: 75 },
  ];

  const developmentSkills = [
    { name: "HTML/CSS", icon: Code2, level: 90 },
    { name: "JavaScript", icon: Code2, level: 85 },
    { name: "Responsive Design", icon: Layout, level: 90 },
    { name: "Git & GitHub", icon: Code2, level: 80 },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Tools</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A combination of design creativity and technical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Design Skills */}
            <Card className="p-8 space-y-6 hover:shadow-glow transition-smooth animate-scale-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Design</h3>
              </div>

              <div className="space-y-6">
                {designSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <skill.icon className="h-4 w-4 text-primary" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Development Skills */}
            <Card className="p-8 space-y-6 hover:shadow-glow transition-smooth animate-scale-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Code2 className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Development</h3>
              </div>

              <div className="space-y-6">
                {developmentSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <skill.icon className="h-4 w-4 text-accent" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent to-primary transition-all duration-1000 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
