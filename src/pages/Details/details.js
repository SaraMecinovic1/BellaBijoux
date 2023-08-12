import React, { useEffect, useState } from "react";
import Nav from "../../nav bar/nav";
import "./details.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Slika from "./slika.jpeg";
import { useParams } from "react-router-dom";
import { getItemeById } from "../../firebase";

const Details = () => {
  const [item, setItem] = useState({});
  const params = useParams();
  const getItemData = () => {
    getItemeById(params.id)
      .then((data) => {
        setItem(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getItemData();
  }, []);
  console.log(item)

  return (
    <div className="detailsPage">
      <Nav />
      <div className="content">
        <div className="slika">
          <img src={item.slika} alt="Opis slike" className="card-image" />
        </div>
        <div className="informacije">
          <div className="imeProizvoda"> {item.naziv}</div>
          <div className="opisProizvoda">{item.opis}</div>
          <hr></hr>
          <div className="cenaProizvoda"> {item.cena} rsd</div>
          <div className="buttoni">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgb(250, 200, 232)",
                "&:hover": {
                  backgroundColor: "rgb(250, 200, 232)",
                },
                "&:active": {
                  backgroundColor: "rgb(250, 200, 232)",
                },
              }}>
              {" "}
              <ShoppingBagIcon
                sx={{ marginRight: "7px" }}></ShoppingBagIcon>{" "}
              Dodaj u korpu
            </Button>
          </div>
          <div className="listaZelja">
            <div className="likeButton">
              <FavoriteBorderIcon></FavoriteBorderIcon>
            </div>
            <div className="addWish"> Dodaj u listu zelja</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
