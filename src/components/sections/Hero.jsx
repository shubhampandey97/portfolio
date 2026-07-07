import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

import profile from "../../assets/profile.png";

const stats = [
  {
    number: "2 Years",
    label: "Professional Experience",
  },
  {
    number: "10+",
    label: "Projects",
  },
  {
    number: "15+",
    label: "Technologies",
  },
];

const socialLinks = [
  {
    icon: <FaGithub />,
    href: "https://github.com/shubhampandey97",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/shubham-pandey-4092781a6/",
    label: "LinkedIn",
  },
  {
    icon: <FaEnvelope />,
    href: "mailto:your-email@example.com",
    label: "Email",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-1/3 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1650px] flex-col-reverse lg:flex-row items-center justify-between gap-10 px-8 lg:px-16 pt-28 pb-16">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[55%] pr-12"
        >
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/50 px-5 py-2 backdrop-blur-xl">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-400"></span>

            <span className="text-sm font-medium text-cyan-300">
              Available for Opportunities
            </span>
          </div>

          <p className="mb-4 text-cyan-400 font-semibold tracking-[4px] uppercase">
            Hello, I'm
          </p>

          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight whitespace-nowrap">
              Shubham <span className="text-cyan-400">Pandey</span>
          </h1>

          <h2 className="mt-8 text-2xl font-semibold text-slate-300 md:text-3xl">
            Data Scientist • Machine Learning Engineer • AI Developer
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            Building intelligent AI solutions using Machine Learning, Deep Learning, NLP, and Computer Vision. 
            Passionate about transforming data into scalable applications that solve real-world business problems.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap gap-5">
            <a
              href="#projects"
              className="group flex items-center gap-3 rounded-full bg-cyan-500 px-7 py-4 font-semibold text-slate-900 transition duration-300 hover:scale-105 hover:bg-cyan-400"
            >
              View Projects

              <FaArrowRight className="transition group-hover:translate-x-1" />
            </a>

            <a
              href="/Shubham_Pandey_Data_Scientist_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full border border-cyan-500/40 bg-slate-900/60 px-7 py-4 font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-cyan-300 hover:bg-slate-800"
            >
              <FaDownload />

              Resume
            </a>
          </div>

          {/* Social */}
          <div className="mt-8 flex gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-2xl text-slate-300 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:text-cyan-400"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative hidden lg:flex w-[45%] items-center justify-end"
        >
          {/* Outer Glow */}
          <div className="relative -translate-x-10 -translate-y-30">

            {/* Outer Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[430px] w-[430px] rounded-full bg-cyan-500/20 blur-[120px]" />
            </div>

            {/* Rotating Ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[380px] w-[380px] animate-spin rounded-full border border-cyan-400/30 border-t-cyan-400 [animation-duration:12s]" />
            </div>

            {/* Glass Circle */}
            <div className="relative rounded-full border border-cyan-400/20 bg-slate-900/40 p-5 backdrop-blur-xl">
              <img
                src={profile}
                alt="Shubham Pandey"
                className="h-[310px] w-[310px] rounded-full object-cover object-top shadow-[0_0_60px_rgba(34,211,238,0.35)] lg:h-[370px] lg:w-[370px] xl:h-[400px] xl:w-[400px]"
              />
            </div>

          </div>

          {/* Floating Card */}
          <motion.div
            animate={{
              y: [-8, 8, -8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute left-14 bottom-14 rounded-2xl border border-cyan-400/20 bg-slate-900/80 px-6 py-4 backdrop-blur-xl shadow-xl z-20"
          >
            <p className="text-xs uppercase tracking-widest text-slate-400">
              Current Focus
            </p>

            <h4 className="mt-2 font-semibold text-cyan-300">
              GenAI • LLMs • Data Science
            </h4>
          </motion.div>

          {/* Floating Stats */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex gap-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="w-36 rounded-2xl border border-cyan-400/20 bg-slate-900/80 p-4 text-center backdrop-blur-xl shadow-lg"
              >
                <h3 className="text-3xl font-bold text-cyan-400">
                  {item.number}
                </h3>

                <p className="mt-1 text-xs text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}