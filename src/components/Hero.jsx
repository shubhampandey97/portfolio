import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

import profileImage from "../assets/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
      "
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}

          <div>

            <p className="text-cyan-400 text-lg mb-4">
              Hello, I'm
            </p>

            <h1 className="leading-none">

              <span className="block text-6xl md:text-7xl font-bold">
                Shubham
              </span>

              <span className="block text-6xl md:text-7xl font-bold text-cyan-400 mt-2">
                Pandey
              </span>

            </h1>

            <h2 className="mt-8 text-2xl md:text-3xl text-slate-300">
              Data Scientist &
              <br />
              Machine Learning Engineer
            </h2>

            <p className="mt-8 text-slate-400 text-lg leading-8 max-w-xl">
              Building intelligent systems through
              Machine Learning, Computer Vision,
              NLP, LLMs and Data Analytics.
            </p>

            <div className="flex gap-4 mt-10">

              <a
                href="/resume.pdf"
                className="
                  px-6
                  py-3
                  bg-cyan-500
                  rounded-xl
                  flex
                  items-center
                  gap-2
                  hover:bg-cyan-600
                "
              >
                <FaDownload />
                Resume
              </a>

              <a
                href="#projects"
                className="
                  px-6
                  py-3
                  border
                  border-cyan-500
                  rounded-xl
                  hover:bg-cyan-500/10
                "
              >
                Projects
              </a>

            </div>

            {/* Social */}

            <div className="flex gap-4 mt-10">

              <a
                href="mailto:yourmail@gmail.com"
                className="
                  w-12 h-12
                  rounded-full
                  border
                  border-slate-700
                  flex
                  items-center
                  justify-center
                  hover:border-cyan-400
                "
              >
                <FaEnvelope />
              </a>

              <a
                href="https://github.com/shubhampandey97"
                target="_blank"
                rel="noreferrer"
                className="
                  w-12 h-12
                  rounded-full
                  border
                  border-slate-700
                  flex
                  items-center
                  justify-center
                  hover:border-cyan-400
                "
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/shubham-pandey-4092781a6/"
                target="_blank"
                rel="noreferrer"
                className="
                  w-12 h-12
                  rounded-full
                  border
                  border-slate-700
                  flex
                  items-center
                  justify-center
                  hover:border-cyan-400
                "
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">

            <div
              className="
                relative
                p-[2px]
                rounded-[30px]
                border
                border-cyan-400
                shadow-[0_0_40px_rgba(34,211,238,0.3)]
              "
            >

              <div
                className="
                  bg-slate-900/40
                  backdrop-blur-md
                  rounded-[28px]
                  p-4
                "
              >

                <img
                  src={profileImage}
                  alt="profile"
                  className="
                    w-[320px]
                    md:w-[380px]
                    lg:w-[420px]
                    rounded-[20px]
                  "
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;