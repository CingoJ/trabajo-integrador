import React from "react";
import "./form.css";

const Form = () => {
  return (
    <>
      <h1>Contacto</h1>
      <div className="formulario">
        <form>
          <label>Nombre y Apellido:</label>
          <input type="text" required />
          <label>Correo Electrónico:</label>
          <input type="text" required />
          <label>Categoría de Consulta:</label>
          <select>
            <option value="cambio">Cambios</option>
            <option value="compra">Compras</option>
            <option value="devolucion">Devoluciones</option>
            <option value="envio">Envios</option>
            <option value="general">General</option>
          </select>
          <label>Consulta:</label>
          <textarea required></textarea>
          <button>Enviar Consulta</button>
        </form>
      </div>
    </>
  );
};

export default Form;
