import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaCopy,
  FaCheck,
  FaDownload,
} from "react-icons/fa";

const EMAIL = "shubham17997@gmail.com";

const links = [
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "shubham-pandey-4092781a6",
    href: "https://www.linkedin.com/in/shubham-pandey-4092781a6/",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "shubhampandey97",
    href: "https://github.com/shubhampandey97",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Varanasi, India",
    href: "",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Contact
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            I'm open to Data Scientist, Machine Learning Engineer and Computer
            Vision roles. The fastest way to reach me is email.
          </p>

          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-cyan-400"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-cyan-400/20 bg-slate-900/50 p-6 sm:p-10 backdrop-blur-xl"
        >
          {/* Email */}
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="rounded-2xl bg-cyan-500/20 p-5 text-3xl text-cyan-400">
              <FaEnvelope />
            </div>

            <a
              href={`mailto:${EMAIL}`}
              className="break-all text-2xl sm:text-3xl font-bold text-white transition hover:text-cyan-400"
            >
              {EMAIL}
            </a>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 rounded-full bg-cyan-500 px-7 py-3 font-semibold text-slate-900 transition hover:scale-105 hover:bg-cyan-400"
              >
                <FaEnvelope />
                Send Email
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="flex items-center gap-3 rounded-full border border-cyan-500/40 bg-slate-900/60 px-7 py-3 font-semibold text-white transition hover:border-cyan-300"
              >
                {copied ? <FaCheck className="text-cyan-400" /> : <FaCopy />}
                {copied ? "Copied!" : "Copy Email"}
              </button>

              <a
                href="/Shubham_Pandey_Data_Scientist_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full border border-slate-700 bg-slate-900/60 px-7 py-3 font-semibold text-slate-200 transition hover:border-cyan-300"
              >
                <FaDownload />
                Resume
              </a>
            </div>
          </div>

          {/* Other links */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {links.map((item) => {
              const content = (
                <>
                  <span className="text-2xl text-cyan-400">{item.icon}</span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-slate-500">
                      {item.label}
                    </p>
                    <p className="truncate text-sm font-medium text-slate-200">
                      {item.value}
                    </p>
                  </div>
                </>
              );

              const className =
                "flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4 transition hover:border-cyan-400";

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {content}
                </a>
              ) : (
                <div key={item.label} className={className}>
                  {content}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
