import { motion } from "framer-motion";

function GlassCard({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        rounded-3xl
        border
        border-white/10
        bg-slate-900/40
        backdrop-blur-xl
        shadow-2xl
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

export default GlassCard;