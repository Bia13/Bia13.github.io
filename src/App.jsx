import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { LanguageProvider } from "./components/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Gallery from "./components/gallery";
import Experience from "./components/experience";
import Contact from "./components/contact";
import ProjectModal from "./components/ProjectModal";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (!scrollTo) return;

    document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth", block: "start" });
    navigate(location.pathname, { replace: true, state: {} });
  }, [location, navigate]);

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Gallery />
      <Experience />
      <Contact />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <div className="bg-zinc-950 text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectModal />} />
          </Routes>
        </div>
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;
