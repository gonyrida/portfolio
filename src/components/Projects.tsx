import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { projects } from "@/data/projects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="projects"
      className="py-24 bg-muted/30 animate-fade-in delay-400"
    >
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
            {projects.slice(0, 3).map((project, index) => (
              <Dialog
                key={index}
                open={isModalOpen && selectedProject === project}
                onOpenChange={setIsModalOpen}
              >
                <DialogTrigger asChild>
                  <Card
                    className="group overflow-hidden hover:shadow-glow transition-smooth animate-scale-in cursor-pointer"
                    onClick={() => {
                      setSelectedProject(project);
                      setIsModalOpen(true);
                    }}
                  >
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
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

                      <p className="text-muted-foreground">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <p className="text-sm text-muted-foreground">
                      {project.year} • {project.type}
                    </p>
                    <p>{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        View Project <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
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
