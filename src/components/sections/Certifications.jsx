import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

import SectionTitle from "../ui/SectionTitle";
import { certifications } from "../../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionTitle subtitle="Certifications" title="Learning & Credentials" />

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-5 rounded-3xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400"
            >
              <div className="h-fit rounded-2xl bg-cyan-500/20 p-4 text-2xl text-cyan-400">
                <FaCertificate />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                <p className="mt-1 text-slate-400">{cert.issuer}</p>
                <p className="mt-1 text-sm text-cyan-300">{cert.year}</p>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                  >
                    View certificate <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
