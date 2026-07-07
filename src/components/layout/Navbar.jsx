import { Link } from "react-scroll";
import profileImage from "../assets/profile.png";


function Navbar() {
  const links = [
    "about",
    "tech",
    "experience",
    "projects",
    "research",
    "contact",
  ];

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        bg-slate-950/30
        backdrop-blur-md
        border-b
        border-slate-800
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between">

        <div className="flex items-center gap-3">

          <img
            src={profileImage}
            alt="Shubham Pandey"
            className="
              w-10
              h-10
              rounded-full
              object-cover
              border-2
              border-cyan-400
            "
          />

          <div>
            <h1 className="text-lg font-bold text-white">
              Shubham Pandey
            </h1>

            <p className="text-xs text-cyan-400">
              Data Scientist | ML Engineer
            </p>
          </div>

        </div>

        <div className="hidden md:flex gap-8">

          {links.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={800}
              offset={-80}
              className="
                cursor-pointer
                capitalize
                text-slate-300
                hover:text-cyan-400
                transition
              "
            >
              {item}
            </Link>
          ))}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;