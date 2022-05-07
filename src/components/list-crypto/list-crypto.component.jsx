import React from "react";
import { Card } from "../card/card.component";

import "./list-crypt.styles.css";

export const ListCrypto = (props) => {
  return (
    <div className="container">
      {props.cryptoList.map((crypto) => (
        <Card key={crypto.id} crypto={crypto} />
      ))}
    </div>
  );
};
