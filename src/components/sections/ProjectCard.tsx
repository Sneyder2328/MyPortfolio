import { ExternalLink, Github, Smartphone, Calendar, ChevronDown } from "lucide-react";
import { clsx } from "clsx";
import { useState, useRef, useEffect } from "react";
import type { Project } from "../../data/projects";
import { useLanguage } from "../../context/LanguageContext";
import { AnimatedContainer } from "../ui/AnimatedContainer";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { language, t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const delays = [0, 100, 200, 300, 400, 500, 600, 700] as const;
  const delay = delays[index % delays.length];

  // Check if text is truncated
  useEffect(() => {
    const el = descriptionRef.current;
    if (el) {
      setIsTruncated(el.scrollHeight > el.clientHeight);
    }
  }, [language]);

  return (
    <AnimatedContainer
      delay={delay}
      className="group relative bg-zinc-950 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />

        {/* Category Badge */}
        <span
          className={clsx(
            "absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full",
            project.category === "web"
              ? "bg-white/10 text-white"
              : "bg-white/10 text-white"
          )}
        >
          {project.category === "web" ? "Web" : "Android"}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-xl font-semibold text-white group-hover:text-white/90 transition-colors">
            {project.title}
          </h3>
          <span className="flex items-center gap-1.5 text-sm text-white/40 shrink-0">
            <Calendar size={14} />
            {project.date}
          </span>
        </div>

        {/* Description */}
        <div className="mb-4">
          <p
            ref={descriptionRef}
            className={clsx(
              "text-white/60 text-sm leading-relaxed transition-all duration-300",
              !isExpanded && "line-clamp-3"
            )}
          >
            {project.description[language]}
          </p>
          {isTruncated && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 inline-flex items-center gap-1 text-xs text-white/40 hover:text-white/60 transition-colors"
            >
              {isExpanded ? t("projects.show_less") : t("projects.read_more")}
              <ChevronDown
                size={14}
                className={clsx(
                  "transition-transform duration-300",
                  isExpanded && "rotate-180"
                )}
              />
            </button>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium text-white/60 bg-white/5 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            >
              <ExternalLink size={16} />
              {t("projects.see_live")}
            </a>
          )}
          {project.googlePlay && (
            <a
              href={project.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Smartphone size={16} />
              {t("projects.get_app")}
            </a>
          )}
          {project.githubRepo && (
            <a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/60 hover:text-white bg-transparent hover:bg-white/5 rounded-lg transition-colors"
            >
              <Github size={16} />
              {t("projects.github_repo")}
            </a>
          )}
        </div>
      </div>
    </AnimatedContainer>
  );
}

