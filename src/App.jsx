import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Pages/Footer";
import About from "./Pages/About";
import Home from "./Pages/Home";

import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Stacks from "./Pages/Stacks";

function App() {
  return (
    <>
      <div className="w-full">
        <BrowserRouter>
          <div className="sticky top-0 z-30">
            <Navbar />
          </div>
          <div className=" lg:ml-60">
            <Routes>
              <Route path="/Portfolio" element={<Home />} />
              <Route path="/Portfolio/about" element={<About />} />
              <Route path="/Portfolio/contact" element={<Contact />} />
              <Route path="/Portfolio/projects" element={<Projects />} />
              <Route path="/Portfolio/stack" element={<Stacks />} />
            </Routes>
          </div>
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
