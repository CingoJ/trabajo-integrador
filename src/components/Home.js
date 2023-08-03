import React from "react";
import "./home.css";
import logo from "../assets/logoynombre.png";

function Home() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Bienvenid@ a la tienda!</h1>
    </div>
  );
}

export default Home;
