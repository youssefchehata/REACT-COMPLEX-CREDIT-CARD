import React from "react";
import "./style.css";

const Prototype = ({ item }) => (
  <div className="creditCard">
    <h1 className="credit-card-title">{item.companyNam}</h1>
    <div className="credit-card-chip" />
    <div className="credit-card-content" />
    <div className="cerdit-card-text" />
    <h2 className="credit-card-number">
      {item.cardNumber.slice(0, 4) +
        " " +
        item.cardNumber.slice(4, 8) +
        " " +
        item.cardNumber.slice(8, 12) +
        " " +
        item.cardNumber.slice(12, 16)}{" "}
      {/* kos num baad chaine vide  */}
    </h2>
    <h2 className="credit-card-valid-thru">
      {item.validThru.slice(0, 2) + "/" + item.validThru.slice(2, 4)}
    </h2>
    <h2 className="credit-card-holder-name">{item.CardHolder.toUpperCase()}</h2>
    <div className="credit-card-logo">
      <img
        src="https://i.ebayimg.com/images/g/B7MAAMXQgJRRBDvt/s-l300.jpg"
        alt="#"
      />
    </div>
  </div>
);

export default Prototype;
