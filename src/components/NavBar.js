import React from "react";
import "./navBar.css";
import logonav from "../assets/logonav.png";
import Command from "../components/Command";

function NavBar() {
  return (
    <div className="Navigation">
      <img src={logonav} className="logonav" alt="logonav" />
      <ul>
        <li>
          <Command link="/" texto="Inicio" />
        </li>
        <li>
          <Command link="/about" texto="Sobre Nosotros" />
        </li>
        <li>
          <Command link="/" texto="Productos" />
        </li>
        <li>
          <Command link="/" texto="Contacto" />
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
