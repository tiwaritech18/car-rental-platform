import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Models from "./Pages/Models";
import Contact from "./Pages/Contact";
import "./index.css"
import TestimonialsPage from "./Pages/TestimonialsPage";
import AuthPage from "./Pages/AuthPage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/models" element={<Models />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
