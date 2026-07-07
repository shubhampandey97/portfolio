function About() {
  return (
    <section
      id="about"
      className="py-32 border-t border-slate-800"
    >
      <div className="max-w-4xl mx-auto px-6">

        <p className="text-cyan-400 mb-4">
          About
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Turning Data Into
          Intelligent Solutions.
        </h2>

        <div className="space-y-6 text-lg text-slate-400 leading-8">

          <p>
            I am a Data Scientist and Machine Learning
            Engineer with experience in Artificial
            Intelligence, Computer Vision, Natural
            Language Processing, Predictive Analytics,
            and Backend Development.
          </p>

          <p>
            Currently working at Sugmya Finance,
            I develop scalable applications,
            automate reporting systems,
            and build data-driven solutions
            that support business decision making.
          </p>

          <p>
            My interests include Machine Learning,
            Deep Learning, AI Research,
            MLOps, and deploying production-ready
            intelligent systems.
          </p>

        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-3 mt-12">

          {[
            "Python",
            "SQL",
            "TensorFlow",
            "PyTorch",
            "FastAPI",
            "Django",
            "AWS",
            "Docker",
          ].map((tech) => (
            <span
              key={tech}
              className="
                px-4
                py-2
                rounded-full
                bg-slate-900
                border
                border-slate-700
                text-slate-300
              "
            >
              {tech}
            </span>
          ))}

        </div>

      </div>
    </section>
  );
}

export default About;