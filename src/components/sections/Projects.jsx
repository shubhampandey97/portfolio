import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="mx-auto max-w-[1500px]">
        <SectionTitle subtitle="Projects" title="Featured Projects" />

        <p className="mx-auto -mt-8 mb-16 max-w-3xl text-center text-lg leading-8 text-slate-400">
          I don't stop at a high score. Each project below reports honest,
          held-out numbers — and what I found when I tested whether the
          model really works.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
