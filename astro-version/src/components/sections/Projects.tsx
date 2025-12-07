import { projects } from "../../data/projects";
import { useLanguage } from "../../context/LanguageContext";
import { ProjectCard } from "./ProjectCard";
import { AnimatedContainer } from "../ui/AnimatedContainer";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-black" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <AnimatedContainer className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </AnimatedContainer>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

