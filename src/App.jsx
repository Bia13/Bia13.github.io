import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Gallery from "./components/gallery";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Contact from "./components/contact";

function App() {
  return (
    <div className="bg-zinc-950 text-white">
      <Hero />
      <About />
      <Projects />
      <Gallery />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;