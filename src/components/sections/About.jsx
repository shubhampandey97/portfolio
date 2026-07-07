import { motion } from "framer-motion";
import {
  FaBrain,
  FaDatabase,
  FaChartLine,
  FaRobot,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaBrain />,
    title: "Artificial Intelligence",
    description:
      "Building intelligent systems using Machine Learning, Deep Learning, NLP, Computer Vision and Generative AI.",
  },
  {
    icon: <FaDatabase />,
    title: "Data Science",
    description:
      "Transforming raw data into actionable insights through Python, SQL, statistics and predictive modeling.",
  },
  {
    icon: <FaChartLine />,
    title: "Analytics",
    description:
      "Creating interactive dashboards and automating business reports with Power BI and SQL.",
  },
  {
    icon: <FaRobot />,
    title: "Generative AI",
    description:
      "Exploring LLMs, RAG systems, AI Assistants and modern AI applications for real-world problems.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6"
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
          <p className="mb-3 uppercase tracking-[6px] text-cyan-400 font-semibold">
            About Me
          </p>

          <h2 className="text-5xl font-black text-white">
            Passionate About
            <span className="text-cyan-400"> Data & AI</span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-cyan-400"></div>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-slate-900/50 p-10 backdrop-blur-xl"
        >
          <div className="grid gap-14 lg:grid-cols-2">
            {/* Left */}
            <div>
              <h3 className="mb-6 text-3xl font-bold text-white">
                Who am I?
              </h3>

              <p className="mb-6 leading-8 text-slate-300">
                I'm <span className="font-semibold text-cyan-400"> Shubham Pandey</span>, a <span className="font-semibold text-cyan-400">Machine Learning Engineer and Data Scientist</span> passionate about 
                building intelligent systems that solve real-world problems. I specialize in Machine Learning, Deep Learning, NLP, 
                  Computer Vision, and Data Analytics developing end-to-end AI solutions with Python, SQL, 
                    TensorFlow, PyTorch, FastAPI, and AWS.
              </p>

              <p className="leading-8 text-slate-300">
                I enjoy transforming complex data into scalable AI applications that create meaningful business impact 
                and continuously expanding my expertise in modern AI technologies.
              </p>
            </div>

            {/* Right */}
            <div className="space-y-6">
              {/* Education */}
              <div className="rounded-2xl border border-cyan-500/20 bg-slate-950/40 p-6 transition hover:border-cyan-400">
                <div className="mb-4 flex items-center gap-4">
                  <div className="rounded-xl bg-cyan-500/20 p-4 text-2xl text-cyan-400">
                    <FaGraduationCap />
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      Master's Degree
                    </h4>

                    <p className="text-slate-400">
                      Computational Science & Applications
                    </p>
                    <p className="text-slate-400">
                      (Data Science Specialization)
                    </p>
                    <p className="text-slate-400">
                      Banaras Hindu University
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="rounded-2xl border border-cyan-500/20 bg-slate-950/40 p-6 transition hover:border-cyan-400">
                <div className="mb-4 flex items-center gap-4">
                  <div className="rounded-xl bg-cyan-500/20 p-4 text-2xl text-cyan-400">
                    <FaBriefcase />
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      Software Developer
                    </h4>

                    <p className="text-slate-400">
                      Sugmya Finance Pvt. Ltd.
                    </p>
                    <p className="text-slate-400">
                      May 2024 – Apr 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Highlights */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-cyan-500/20 p-4 text-3xl text-cyan-400">
                {item.icon}
              </div>

              <h3 className="mb-4 text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="leading-7 text-slate-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}