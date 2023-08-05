import React from "react";
import "./notFound.css";
import chaos from "../assets/chaos404.jpg";

function NotFound() {
  return (
    <>
      <h1>Error 404: Página no encontrada</h1>
      <div className="Error404">
        <img src={chaos} className="chaos" alt="chaos" />
        <p>La página a la que desea acceder no existe.</p>
      </div>
    </>
  );
}

export default NotFound;
