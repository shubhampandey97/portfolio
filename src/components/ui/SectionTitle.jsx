import { motion } from "framer-motion";

function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="text-center mb-16"
    >
      <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
        {subtitle}
      </p>

      <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
        {title}
      </h2>
    </motion.div>
  );
}

export default SectionTitle;