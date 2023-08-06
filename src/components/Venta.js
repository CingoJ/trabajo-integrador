import React from "react";
import Products from "../components/Products";
import "./venta.css";
import SearchBar from "./SearchBar";
import Card from "../components/Card";

function Venta() {
  return (
    <div>
      <h1>Productos</h1>
      <SearchBar />
      <div className="card-container">
        {Products.map(function (elem) {
          return (
            <Card
              key={elem.titulo}
              image={elem.image}
              titulo={elem.titulo}
              description={elem.description}
              price={elem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Venta;
