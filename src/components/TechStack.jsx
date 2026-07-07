import { Link } from "react-scroll";

import {
  SiPython,
  SiPostgresql,
  SiMysql,
  SiOracle,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiHuggingface,
  SiFastapi,
  SiDjango,
  SiDocker,
  SiGit,
  SiAmazonwebservices,
  SiLinux,
  SiStreamlit,
  SiPowerbi,
  SiTableau,
  SiScikitlearn,
} from "react-icons/si";

const skills = {
  Languages: [
    { name: "Python", icon: SiPython },
    { name: "SQL", icon: SiMysql },
  ],

  Databases: [
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Oracle", icon: SiOracle },
    { name: "MySQL", icon: SiMysql },
  ],

  "ML / Deep Learning": [
    { name: "Scikit-Learn", icon: SiScikitlearn },
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "PyTorch", icon: SiPytorch },
  ],

  "Computer Vision": [
    { name: "OpenCV", icon: SiOpencv },
  ],

  "NLP & LLMs": [
    { name: "Hugging Face", icon: SiHuggingface },
  ],

  "Backend & MLOps": [
    { name: "FastAPI", icon: SiFastapi },
    { name: "Django", icon: SiDjango },
    { name: "Docker", icon: SiDocker },
    { name: "Git", icon: SiGit },
  ],

  "Cloud & Tools": [
    { name: "AWS", icon: SiAmazonwebservices },
    { name: "Linux", icon: SiLinux },
    { name: "Streamlit", icon: SiStreamlit },
    { name: "Power BI", icon: SiPowerbi },
    { name: "Tableau", icon: SiTableau },
  ],
};

function TechStack() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-16">
          Tech Stack
        </h2>

        <div className="space-y-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-cyan-400 mb-5">
                {category}
              </h3>

              <div className="flex flex-wrap gap-4">
                {items.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="
                        flex items-center gap-3
                        px-5 py-3
                        bg-slate-900
                        border border-slate-800
                        rounded-xl
                        hover:border-cyan-500
                        transition
                      "
                    >
                      <Icon className="text-2xl" />
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TechStack;