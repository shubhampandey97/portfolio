import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaCheckCircle,
  FaTools,
  FaRobot,
  FaDatabase,
} from "react-icons/fa";

import GlassCard from "./GlassCard";
import Button from "./Button";

export default function ProjectCard({ project }) {
  const inProgress = project.status === "In progress";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="h-full"
    >
      <GlassCard
        className={`overflow-hidden h-full flex flex-col ${
          inProgress ? "border-dashed border-amber-400/40" : ""
        }`}
      >
        {/* Image */}
        <div className="relative overflow-hidden bg-slate-100">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              loading="lazy"
              className="h-56 w-full object-contain p-4 transition-all duration-700 hover:scale-105"
            />
          ) : (
            <div className="flex h-56 w-full items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950">
              {project.category === "Generative AI" ? (
                <FaRobot className="text-7xl text-cyan-400/60" />
              ) : (
                <FaDatabase className="text-7xl text-cyan-400/60" />
              )}
            </div>
          )}

          {/* Category */}
          <span className="absolute left-5 top-5 rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg">
            {project.category}
          </span>

          {/* Status */}
          {inProgress && (
            <span className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-amber-400 bg-slate-900/90 px-4 py-2 text-sm font-semibold text-amber-300 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
              In progress
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6 sm:p-8">
          {/* Title */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <h3 className="text-2xl font-bold leading-tight text-white">
              {project.title}
            </h3>

            <span className="self-start rounded-full border border-cyan-400/20 px-3 py-1 text-sm text-cyan-300 whitespace-nowrap">
              {project.duration}
            </span>
          </div>

          {/* Description */}
          <p className="mt-5 leading-7 text-slate-400">{project.description}</p>

          {/* Results */}
          {project.results?.length > 0 && (
            <div
              className={`mt-6 rounded-2xl border p-5 ${
                inProgress
                  ? "border-amber-400/20 bg-amber-400/5"
                  : "border-cyan-400/20 bg-cyan-400/5"
              }`}
            >
              <div className="mb-3 flex items-center gap-2">
                {inProgress ? (
                  <FaTools className="text-amber-300" />
                ) : (
                  <FaCheckCircle className="text-cyan-400" />
                )}
                <h4 className="font-semibold text-white">
                  {inProgress ? "Progress & plan" : "Key results"}
                </h4>
              </div>

              <ul className="space-y-2">
                {project.results.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <span
                      className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                        inProgress ? "bg-amber-400" : "bg-cyan-400"
                      }`}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="mt-6">
            <div className="mb-3 flex items-center gap-2">
              <FaCode className="text-cyan-400" />
              <h4 className="font-semibold text-white">Tech</h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-400/20 bg-slate-800/60 px-3 py-1.5 text-xs text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          {(project.github || project.demo) && (
            <div className="mt-auto flex flex-wrap gap-4 pt-8">
              {project.github && (
                <Button href={project.github} icon={<FaGithub />} target="_blank">
                  View Code
                </Button>
              )}

              {project.demo && (
                <Button
                  href={project.demo}
                  variant="secondary"
                  icon={<FaExternalLinkAlt />}
                  target="_blank"
                >
                  Live Demo
                </Button>
              )}
            </div>
          )}
        </div>
      </GlassCard>
    </motion.div>
  );
}
