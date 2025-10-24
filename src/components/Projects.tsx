import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Sala Moeys Clone",
      description:
        "A complete UX/UI redesign of an educational platform, focusing on improved user flow and modern interface design.",
      image: project1,
      tags: ["Figma", "UX/UI", "Prototyping"],
      year: "2024",
      type: "Design",
    },
    {
      title: "Porsche Clone",
      description:
        "AI-powered learning assistant utilizing prompt engineering to provide personalized educational support.",
      image: project5,
      tags: ["HTML", "CSS", "JS", "Bootstrap", "UX"],
      year: "2025",
      type: "Design & Dev",
    },
    {
      title: "E-commerce Website",
      description:
        "Fully responsive e-commerce platform built with modern frontend technologies and intuitive shopping experience.",
      image: project2,
      tags: ["HTML", "CSS", "JavaScript"],
      year: "2024",
      type: "Development",
    },
    {
      title: "Apple Clone",
      description:
        "Educational platform UI/UX design for agricultural technology learning with focus on accessibility and engagement.",
      image: project3,
      tags: ["UI/UX", "Figma", "User Research"],
      year: "2025",
      type: "Design & Dev",
    },
    {
      title: "Tutorial Assistant",
      description:
        "AI-powered learning assistant utilizing prompt engineering to provide personalized educational support.",
      image: project4,
      tags: ["AI", "Prompt Engineering", "UX"],
      year: "2025",
      type: "Design & Dev",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of my recent work in design and development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 4).map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-glow transition-smooth animate-scale-in"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        View
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.year} • {project.type}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/all-projects">Show More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
