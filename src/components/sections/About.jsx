import { motion } from "framer-motion";
import {
  FaSearch,
  FaEye,
  FaDatabase,
  FaRobot,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaSearch />,
    title: "Model Evaluation & Auditing",
    description:
      "External validation, confidence intervals, calibration and leakage checks — finding out whether a high score is real before anyone relies on it.",
  },
  {
    icon: <FaEye />,
    title: "Computer Vision",
    description:
      "Detection, tracking, OCR and medical image classification with YOLOv8, ByteTrack, TensorFlow and PyTorch — shipped as tested pipelines and apps.",
  },
  {
    icon: <FaDatabase />,
    title: "Data Science & Backend",
    description:
      "Python, SQL, FastAPI and Django in production; reporting automation and dashboards with Oracle, PostgreSQL and Power BI.",
  },
  {
    icon: <FaRobot />,
    title: "Generative AI",
    badge: "In progress",
    description:
      "Building a healthcare RAG system with source citations and an evaluation harness for faithfulness and relevance.",
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
            Building ML You Can
            <span className="text-cyan-400"> Trust</span>
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
                I'm <span className="font-semibold text-cyan-400">Shubham Pandey</span>, a{" "}
                <span className="font-semibold text-cyan-400">Data Scientist and Machine Learning Engineer</span>{" "}
                with an M.Sc. in Computational Science (Data Science) from Banaras Hindu University
                and two years of building Python backends and reporting systems in fintech.
              </p>

              <p className="mb-6 leading-8 text-slate-300">
                What I care about most is whether a model <span className="text-white">actually works</span>.
                In my projects I pre-register external tests, hunt for data leakage and shortcut learning,
                and rebuild the pipeline when the honest numbers come out lower — then ship it with tests,
                CI and a working app.
              </p>

              <p className="leading-8 text-slate-300">
                Right now I'm bringing the same rigour to LLMs: a healthcare RAG system where every
                answer cites its source and quality is measured, not assumed.
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
                      M.Sc. (Master's Degree)
                    </h4>

                    <p className="text-slate-400">
                      Computational Science & Applications
                    </p>
                    <p className="text-slate-400">
                      (Data Science Specialization)
                    </p>
                    <p className="text-slate-400">
                      Banaras Hindu University · 2023
                    </p>
                    <p className="mt-2 text-sm text-slate-500">
                      B.Tech, Computer Science & Engineering — SHUATS, Prayagraj · 2021
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
                      IT Executive — Software Development & Reporting
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

              {item.badge && (
                <span className="mb-4 inline-block rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300">
                  {item.badge}
                </span>
              )}

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