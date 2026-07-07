import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="mx-auto max-w-[1500px]">

        <SectionTitle
          subtitle="Projects"
          title="Featured Projects"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}