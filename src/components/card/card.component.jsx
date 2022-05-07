import React from "react";

import "./card.styles.css";

export const Card = (props) => {
  return (
    <a href={props.crypto.url}>
      <div className="card-container">
        <img src={props.crypto.image} alt={props.crypto.name} />
        <h2> {props.crypto.name}</h2>
      </div>
    </a>
  );
};
