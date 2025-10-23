import { Code2, Figma, GitBranch, Eye, Layers, Sliders } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Language",
      icon: Code2,
      skills: ["JavaScript", "Python"],
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: ["Git Flow", "GitHub", "Gitlab"],
    },
    {
      title: "Web Frameworks",
      icon: Layers,
      skills: ["React.js (beginner)", "Node.js", "Express.js"],
    },
    {
      title: "HTML, CSS",
      icon: Sliders,
      skills: ["Responsive web", "CSS frameworks", "Bootstrap, MUI", "styled-components", "emotion"],
    },
    {
      title: "Frontend Library",
      icon: Code2,
      skills: ["React.js"],
      note: "(I can easily use another Frontend Framework based on Javascript)",
    },
    {
      title: "UX/UI",
      icon: Eye,
      skills: ["Figma"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">TECHNICAL SKILLS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-glow transition-smooth group hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">{category.title}</h3>
                </div>

                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-sm text-muted-foreground flex items-start"
                    >
                      <span className="mr-2 text-primary">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>

                {category.note && (
                  <p className="text-xs text-muted-foreground mt-4 italic border-l-2 border-primary/30 pl-3">
                    {category.note}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
