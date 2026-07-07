import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
// import TechStack from "./components/TechStack";
// import Experience from "./components/Experience";
// import Projects from "./components/Projects";
// import Research from "./components/Research";
// import Contact from "./components/Contact";

import galaxyBg from "./assets/galaxy.jpg";

function App() {
  return (
    <div className="relative text-white">

      {/* Fixed Galaxy Background */}
      <div
        className="
          fixed
          inset-0
          -z-20
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: `url(${galaxyBg})`,
        }}
      />

      {/* Dark Overlay */}
      <div
        className="
          fixed
          inset-0
          -z-10
          bg-slate-950/85
        "
      />

      <Navbar />

      <Hero />
      <About />
      {/* <TechStack /> */}
      {/* <Experience /> */}
      {/* <Projects /> */}
      {/* <Research /> */}
      {/* <Contact /> */}

    </div>
  );
}

export default App;