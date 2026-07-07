import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
// import Research from "./components/sections/Research";
// import Certifications from "./components/sections/Certifications";
// import Contact from "./components/sections/Contact";
// import Footer from "./components/layout/Footer";

import galaxyBg from "./assets/galaxy.jpg";

function App() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Fixed Galaxy Background */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${galaxyBg})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="fixed inset-0 -z-10 bg-slate-950/85" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        {/*
        <Research />
        <Certifications />
        <Contact />
        */}
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;