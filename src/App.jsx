import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Projects from "../src/pages/Projects";
import Contact from "../src/pages/Contact";
const App = () => {
  return (
    <main className="bg-slate-300/20 ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Analytics />
    </main>
  );
};

export default App;
