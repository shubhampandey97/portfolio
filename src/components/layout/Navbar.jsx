import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Certificates", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((item) =>
        document.querySelector(item.href)
      );

      sections.forEach((section, index) => {
        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(navLinks[index].name);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-2xl border-b border-cyan-500/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1700px] items-center justify-between px-10 xl:px-16">
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3"
        >
          <div className="overflow-hidden rounded-full border border-cyan-400/30 shadow-lg shadow-cyan-500/20 transition group-hover:scale-105">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-12 object-cover"
            />
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              Shubham
              <span className="text-cyan-400"> Pandey</span>
            </h1>

            <p className="text-xs tracking-widest text-slate-400 uppercase">
              ML Engineer | Data Scientist
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden lg:flex items-center gap-3">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                active === item.name
                  ? "bg-cyan-500 text-slate-900 shadow-lg shadow-cyan-500/40"
                  : "text-slate-300 hover:bg-white/10 hover:text-cyan-400"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="ml-10 hidden lg:flex items-center gap-4">
          <a
            href="https://github.com/shubhampandey97"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/shubham-pandey-4092781a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="#contact"
            className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:bg-cyan-400"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-slate-700 p-2 text-white lg:hidden"
        >
          {isOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-slate-950/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-screen border-t border-cyan-500/20" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-5">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className={`rounded-xl px-4 py-3 text-base transition ${
                active === item.name
                  ? "bg-cyan-500 text-slate-900"
                  : "text-slate-300 hover:bg-white/10 hover:text-cyan-400"
              }`}
            >
              {item.name}
            </a>
          ))}

          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://github.com/shubhampandey97"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/shubham-pandey-4092781a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>
          </div>

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-6 rounded-full bg-cyan-500 py-3 text-center font-semibold text-slate-900"
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  );
}