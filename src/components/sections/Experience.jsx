import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCode,
} from "react-icons/fa";

import { experiences } from "../../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32 px-6"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Experience
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Professional Experience
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Experience building backend systems, automating business workflows,
            designing reporting solutions, and delivering data-driven
            applications using Python, SQL, FastAPI, Django, Oracle and
            PostgreSQL.
          </p>

          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-cyan-400"></div>
        </motion.div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_45px_rgba(34,211,238,0.20)]"
          >
            {/* Top */}
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

              {/* Left */}
              <div className="flex-1">

                <div className="flex items-center gap-3">
                  <FaBriefcase className="text-cyan-400 text-xl" />

                  <h3 className="text-3xl font-bold text-white">
                    {exp.role}
                  </h3>
                </div>

                <h4 className="mt-3 text-2xl font-semibold text-cyan-400">
                  {exp.company}
                </h4>

                <p className="mt-6 leading-8 text-slate-400">
                  {exp.summary}
                </p>

                {/* Tech Stack */}

                <div className="mt-8">

                  <div className="mb-4 flex items-center gap-2">

                    <FaCode className="text-cyan-400" />

                    <h5 className="font-semibold text-white">
                      Tech Stack
                    </h5>

                  </div>

                  <div className="flex flex-wrap gap-3">

                    {exp.techStack.map((tech) => (

                      <span
                        key={tech}
                        className="rounded-full border border-cyan-400/20 bg-slate-800/60 px-4 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-cyan-400 hover:bg-slate-800"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

              {/* Right */}

              <div className="w-full rounded-2xl border border-cyan-400/20 bg-slate-800/40 p-6 lg:w-72">

                <div className="flex items-center gap-3">

                  <FaCalendarAlt className="text-cyan-400" />

                  <div>

                    <p className="font-semibold text-white">
                      {exp.startDate} – {exp.endDate}
                    </p>

                    <p className="text-sm text-cyan-400">
                      {exp.duration}
                    </p>

                  </div>

                </div>

                <div className="mt-6 flex items-center gap-3">

                  <FaMapMarkerAlt className="text-cyan-400" />

                  <span className="text-slate-300">
                    {exp.location}
                  </span>

                </div>

              </div>

            </div>
                        {/* Bottom Section */}

            <div className="mt-10 grid gap-8 lg:grid-cols-3">

              {/* Key Contributions */}

              <div className="rounded-2xl border border-cyan-400/20 bg-slate-800/40 p-6">

                <h4 className="mb-5 text-xl font-bold text-cyan-400">
                  Key Contributions
                </h4>

                <div className="space-y-4">

                  {exp.keyContributions.map((item, idx) => (

                    <div
                      key={idx}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-400"></div>

                      <p className="leading-7 text-slate-300">
                        {item}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

              {/* Achievements */}

              <div className="lg:col-span-2">

                <h4 className="mb-5 text-xl font-bold text-cyan-400">
                  Key Responsibilities & Impact
                </h4>

                <div className="grid gap-4 md:grid-cols-2">

                  {exp.achievements.map((achievement, idx) => (

                    <motion.div
                      key={idx}
                      whileHover={{
                        y: -4,
                      }}
                      className="rounded-2xl border border-white/10 bg-slate-800/40 p-5 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
                    >
                      <div className="flex gap-3">

                        <div className="mt-1 h-3 w-3 rounded-full bg-cyan-400"></div>

                        <p className="leading-7 text-slate-300">
                          {achievement}
                        </p>

                      </div>

                    </motion.div>

                  ))}

                </div>

              </div>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}