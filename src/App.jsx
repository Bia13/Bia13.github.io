import { HashRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Gallery from "./components/gallery";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Contact from "./components/contact";
import ProjectModal from "./components/ProjectModal";

function App() {
  return (
    <HashRouter>
      <div className="bg-zinc-950 text-white">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Projects />
                <Gallery />
                <Experience />
                <Skills />
                <Contact />
              </>
            }
          />
          <Route path="/projects/:slug" element={<ProjectModal />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
