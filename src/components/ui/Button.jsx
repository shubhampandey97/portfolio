import { motion } from "framer-motion";

function Button({
  children,
  href,
  variant = "primary",
  icon,
  target,
}) {
  const baseStyle =
    "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20",

    secondary:
      "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950",
  };

  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target={target}
      rel="noreferrer"
      className={`${baseStyle} ${styles[variant]}`}
    >
      {icon}
      {children}
    </motion.a>
  );
}

export default Button;