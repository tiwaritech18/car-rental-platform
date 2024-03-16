import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Models from "./Pages/Models";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import "./index.css"
function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/models" element={<Models />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
