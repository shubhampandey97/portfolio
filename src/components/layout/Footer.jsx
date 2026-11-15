import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socials = [
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
    href: "mailto:shubham17997@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70 px-6 py-10 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-lg font-bold text-white">
            Shubham <span className="text-cyan-400">Pandey</span>
          </p>
          <p className="text-sm text-slate-400">
            Data Scientist • Machine Learning Engineer
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-5 text-sm text-slate-400">
          {quickLinks.map((item) => (
            <a key={item.name} href={item.href} className="transition hover:text-cyan-400">
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === "Email" ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={item.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Shubham Pandey. Built with React, Vite and Tailwind CSS.
      </p>
    </footer>
  );
}
