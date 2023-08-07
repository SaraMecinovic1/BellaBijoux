import React, { useEffect, useState } from "react";
import { getItem } from "../../firebase";
import Nav from "../../nav bar/nav";
import { Grid } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./all.css";

const All = () => {
  const [Item, setItem] = useState([]);

  useEffect(() => {
    getItem()
      .then((data) => {
        console.log("Podaci: ", data);
        setItem(data); //dajemo state-u vrednost objekta tj tih citata
      })
      .catch((error) => {
        console.log(error, "error");
      });
  }, []);
  return (
    <div className="page">
      <Nav />
      <div className="proizvodi">
        <Grid container spacing={2} alignItems="center">
          {Item.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div className="card">
                <div className="slikaDiv"> slika</div>
                <div className="info">
                  <p>{item.naziv}</p>
                  <FavoriteBorderIcon></FavoriteBorderIcon>
                </div>
                <p className="cenaP">{item.cena}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default All;
