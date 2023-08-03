import React from "react";
import "./App.css";
import NavBar from "../src/components/NavBar";
import Home from "../src/components/Home";
import Footer from "../src/components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../src/components/About";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
