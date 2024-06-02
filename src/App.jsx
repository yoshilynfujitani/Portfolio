import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";

import About from "./Pages/About";
import Home from "./Pages/Home";

import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Stacks from "./Pages/Stacks";
import { DarkModeProvider } from "./contexts/darkMode";
import ProjectDetails from "./Pages/ProjectDetails";
import Footer from "./Components/Footer";
import { NavbarProvider } from "./contexts/navbarContext";

function App() {
  return (
    <>
      <DarkModeProvider>
        <div className="w-full">
          <HashRouter>
            <div className="sticky top-0 z-30">
              <NavbarProvider>
                <Navbar />
              </NavbarProvider>
            </div>
            <div className="">
              <Routes>
                <Route path="/Portfolio" element={<Home />} />
                <Route path="/Portfolio/about" element={<About />} />
                <Route path="/Portfolio/contact" element={<Contact />} />
                <Route path="/Portfolio/projects" element={<Projects />} />
                <Route path="/Portfolio/stack" element={<Stacks />} />
                <Route
                  path="/Portfolio/projects/:id"
                  element={<ProjectDetails />}
                />
              </Routes>
            </div>
            <Footer />
          </HashRouter>
        </div>
      </DarkModeProvider>
    </>
  );
}

export default App;
