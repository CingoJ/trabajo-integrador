import React from "react";
import "./command.css";
import { Link } from "react-router-dom";

function Command(props) {
  return (
    <Link to={props.link} className="enlace">
      {props.texto}
    </Link>
  );
}

export default Command;
