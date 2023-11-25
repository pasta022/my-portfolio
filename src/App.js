import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
        <Projects />
      </Router>
    </div>
  );
}

export default App;
