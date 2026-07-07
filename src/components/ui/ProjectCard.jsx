import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaStar,
} from "react-icons/fa";

import GlassCard from "./GlassCard";
import Button from "./Button";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
    >
      <GlassCard className="overflow-hidden h-full flex flex-col">

        {/* Image */}
        <div className="relative overflow-hidden">

          <img
            src={project.image}
            alt={project.title}
            className="h-64 w-full object-cover transition-all duration-700 hover:scale-105 hover:brightness-110"
          />

          {/* Category */}
          <span className="absolute left-5 top-5 rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg">
            {project.category}
          </span>

          {/* Featured */}
          {project.featured && (
            <span className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-cyan-400 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-cyan-300 backdrop-blur">
              <FaStar />
              Featured
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-8">

          {/* Title */}
          <div className="flex items-start justify-between gap-4">

            <h3 className="text-3xl font-bold text-white leading-tight">
              {project.title}
            </h3>

            <span className="rounded-full border border-cyan-400/20 px-3 py-1 text-sm text-cyan-300 whitespace-nowrap">
              {project.duration}
            </span>

          </div>

          {/* Description */}
          <p className="mt-6 leading-8 text-slate-400">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-8">

            <div className="mb-4 flex items-center gap-2">

              <FaCode className="text-cyan-400" />

              <h4 className="font-semibold text-white">
                Technologies
              </h4>

            </div>

            <div className="flex flex-wrap gap-3">

              {project.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="rounded-full border border-cyan-400/20 bg-slate-800/60 px-4 py-2 text-sm text-slate-200 transition-all duration-300 hover:border-cyan-400 hover:bg-slate-800"
                >
                  {tech}
                </motion.span>
              ))}

            </div>

          </div>

          {/* Highlights */}
          <div className="mt-8">

            <h4 className="mb-4 font-semibold text-white">
              Key Highlights
            </h4>

            <div className="grid gap-3 sm:grid-cols-2">

              {project.highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-slate-800/40 p-3"
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-cyan-400"></div>

                  <span className="text-sm text-slate-300">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <Button
              href={project.github}
              icon={<FaGithub />}
              target="_blank"
            >
              View Code
            </Button>

            {project.demo ? (
              <Button
                href={project.demo}
                variant="secondary"
                icon={<FaExternalLinkAlt />}
                target="_blank"
              >
                Live Demo
              </Button>
            ) : (
              <button
                className="rounded-xl border border-slate-700 px-6 py-3 text-slate-500 cursor-not-allowed"
              >
                Coming Soon
              </button>
            )}

          </div>

        </div>

      </GlassCard>
    </motion.div>
  );
}