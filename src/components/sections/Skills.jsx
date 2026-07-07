import { motion } from "framer-motion";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 px-6"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="text-cyan-400 uppercase tracking-[8px] font-semibold">
            My Skills
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Technologies & Expertise
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Technologies I use to build Machine Learning, Deep Learning,
            Computer Vision, NLP, Backend Systems and Data Analytics solutions.
          </p>

          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-cyan-400"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="h-full rounded-3xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_45px_rgba(34,211,238,0.20)]"
            >
              {/* Category */}
              <h3 className="mb-6 text-3xl font-bold leading-tight text-cyan-400">
                {category.title}
              </h3>

              {/* Skill Chips */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-slate-800/50 px-4 py-2 transition-all duration-300 hover:border-cyan-400 hover:bg-slate-800"
                    >
                      <Icon className="text-lg text-cyan-400" />

                      <span className="text-sm font-medium text-slate-200 whitespace-nowrap">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}