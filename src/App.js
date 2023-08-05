import React from "react";
import "./App.css";
import NavBar from "../src/components/NavBar";
import Home from "../src/components/Home";
import Footer from "../src/components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../src/components/About";
import Venta from "../src/components/Venta";
import Contact from "../src/components/Contact";
import NotFound from "../src/components/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Venta" element={<Venta />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
