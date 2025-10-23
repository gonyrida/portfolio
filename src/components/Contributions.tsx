import { Palette, Code } from "lucide-react";
import { Card } from "@/components/ui/card";

const Contributions = () => {
  const contributions = [
    {
      title: "Frontend",
      icon: Code,
      items: [
        "Create reusable carousel component",
        "Implement homepage user interface",
        "Implement course detail user interface",
        "Implement course video user interface",
        "Implement cart page user interface, logic and integrate backend API",
        "Integrate Stripe payment and checkout",
        "Implement AyAi page and integrate API",
        "Create reusable FAQ component",
      ],
    },
    {
      title: "UX/UI",
      icon: Palette,
      items: [
        "Conducted user research and created personas",
        "Designed wireframes and user flows",
        "Created high-fidelity UI designs and prototypes",
        "Performed usability testing and design iteration",
        "Developed design system and visual style guide",
        "Collaborated with developers for UI implementation",
        "Designed branding and presentation materials",
      ],
    },
  ];

  return (
    <section id="contributions" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Contribution point</span> of capstone project
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My key contributions across frontend development and UX/UI design
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {contributions.map((contribution, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-glow transition-smooth animate-scale-in group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <contribution.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{contribution.title}:</h3>
                </div>

                <ul className="space-y-3">
                  {contribution.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contributions;
