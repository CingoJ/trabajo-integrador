import React from "react";
import { useEffect } from "react";
import "./card.css";

function Card(props) {
  useEffect(() => {
    console.log(props);
  }, [props]);
  return (
    <div className="container">
      <div className="card">
        <img src={props.image} alt={props.name} />
        <h2>{props.titulo}</h2>
        <p>{props.description}</p>
        <h3>{props.price}</h3>
      </div>
    </div>
  );
}

export default Card;
