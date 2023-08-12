import React from "react";
import Nav from "../../nav bar/nav";
import GlavnaSlika from "./glavna.jpg"
import "./pocetna.css"

function Pocetna() {
  return (
    <div className="pocetnaPage">
      <Nav />
      <div className="ostatak">
        <div className="glavnaSlika">
        <img src={GlavnaSlika} alt="Opis slike" className="glavnaSlika1"/>
        </div>
        <div className="preporucejemoDeo"> </div>
      </div>
    </div>
  );
}

export default Pocetna;
