import React from "react";
import "./about.css";
import empresa from "../assets/empresa.PNG";
import staff from "../assets/staff.jpg";
import alcance from "../assets/alcance.PNG";

function About() {
  return (
    <div>
      <h1>Sobre Nosotros</h1>
      <article id="empresa">
        <div className="image">
          <img src={empresa} className="empresa" alt="empresa" />
        </div>
        <div className="content">
          <h1>La Empresa</h1>
          <p>
            Fundada en 2023, Misiotrónica es empresa líder en venta de
            suministros electrónicos de primeras marcas. Contamos con la mejor
            variedad de productos, de excelente calidad y al mejor precio.{" "}
          </p>
        </div>
      </article>
      <article id="staff">
        <div className="content">
          <h1>El Staff</h1>
          <p>
            Nuestro equipo de trabajo esta conformado por personal altamente
            capacitado tanto en reparación como en venta de artículos
            electrónicos, garantizando así, el mejor asesoramiento para nuestros
            clientes.
          </p>
        </div>
        <div className="image">
          <img src={staff} className="staff" alt="staff" />
        </div>
      </article>
      <article id="alcance">
        <div className="image">
          <img src={alcance} className="alcance" alt="alcance" />
        </div>
        <div className="content">
          <h1>Alcance</h1>
          <p>
            Misiotrónica tiene un alcance a mas de veinte países. Contamos con
            sucursales en Argentina, Chile y Brazil. Además, nuestros clientes
            pueden acceder a nuestros productos desde varios puntos del mundo.
          </p>
        </div>
      </article>
    </div>
  );
}

export default About;
