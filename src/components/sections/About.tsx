import { Download } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { Button } from "../ui/Button";
import { AnimatedContainer } from "../ui/AnimatedContainer";

const SKILLS = [
  { name: "Kotlin", icon: "/images/ic_kotlin.svg" },
  { name: "React", icon: "/images/react.svg" },
  { name: "Android", icon: "/images/ic_android.svg" },
  { name: "Node.js", icon: "/images/ic_nodejs1.svg" },
  { name: "TypeScript", icon: "/images/ic_ts.svg" },
  { name: "Git", icon: "/images/ic_git.svg" },
  { name: "Firebase", icon: "/images/ic_firebase.svg" },
];

export function About() {
  const { language, t } = useLanguage();

  const cvPath =
    language === "es" ? "/es/CurriculumVitae.pdf" : "/CurriculumVitae.pdf";

  return (
    <section id="about" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <AnimatedContainer className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("about.title")}
          </h2>
        </AnimatedContainer>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Photo */}
          <AnimatedContainer
            delay={100}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="/images/photo.jpg"
                  alt="Sneyder Angulo"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-64 h-64 md:w-80 md:h-80 border border-white/10 rounded-2xl -z-10" />
            </div>
          </AnimatedContainer>

          {/* Bio and Info */}
          <div className="lg:col-span-8 space-y-8">
            {/* Bio */}
            <AnimatedContainer delay={200}>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                {t("about.bio")}
              </p>
            </AnimatedContainer>

            {/* Skills */}
            <AnimatedContainer delay={300}>
              <h3 className="text-xl font-semibold mb-6">
                {t("about.skills")}
              </h3>
              <div className="flex flex-wrap gap-4">
                {SKILLS.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-3 px-4 py-3 bg-zinc-950 border border-white/5 rounded-xl hover:border-white/10 hover:bg-zinc-900 transition-all duration-200"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedContainer>

            {/* CTA */}
            <AnimatedContainer delay={400}>
              <Button
                variant="secondary"
                size="md"
                href={cvPath}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={18} />
                {t("about.view_cv")}
              </Button>
            </AnimatedContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

