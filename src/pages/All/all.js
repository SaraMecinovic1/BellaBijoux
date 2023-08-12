import React, { useEffect, useState } from "react";
import { getItem } from "../../firebase";
import Nav from "../../nav bar/nav";
import { Grid } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./all.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { itemSlice } from "../../store/itemSlice";

const All = () => {
  const [Item, setItem] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemState = useSelector((state) => state.item);

  const addToFavorites = () => {
    dispatch(itemSlice.actions.setFavorite(Item));
    console.log("Dodato u favorite ");
  };

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
    <div className="page2">
      <Nav />
      <div className="proizvodi">
        <Grid container spacing={0}>
          {Item.map((item, index) => (
            <Grid className="gridItem" item xs={12} sm={6} md={4} key={index}>
              <div className="card">
                <div
                  className="slikaDiv"
                  onClick={() => {
                    console.log("Kliknuto na proizvod, params.id:", item.id);
                    navigate(`/detalji/${item.id}`);
                  }}>
                  <img src={item.slika[0]} alt={`Slika ${index}`} />
                </div>

                <div className="info">
                  <p>{item.naziv}</p>

                  <FavoriteBorderIcon
                    onClick={() => {
                      addToFavorites();
                    }}></FavoriteBorderIcon>
                </div>

                <p className="cenaP">{item.cena} rsd</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default All;
