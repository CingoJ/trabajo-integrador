import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
      <h2>{props.product}</h2>
      <p>{props.description}</p>
      <h3>{props.price}</h3>
    </div>
  );
}

export default Card;
