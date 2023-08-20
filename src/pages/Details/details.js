import React, { useEffect, useState } from "react";
import Nav from "../../nav bar/nav";
import "./details.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useParams } from "react-router-dom";
import { getItemeById } from "../../firebase";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { itemSlice } from "../../store/itemSlice";

const Details = () => {
  const [item, setItem] = useState({});
  const dispatch = useDispatch();
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

  // eslint-disable-next-line
  useEffect(() => {
    getItemData();
  }, []);

  const addToFavorites = (item) => {
    dispatch(itemSlice.actions.setFavorite(item));
    console.log("Dodato u favorite ");
  };

  return (
    <div className="detailsPage">
      <Nav />
      <div className="content">
        <Grid container spacing={0}>
          <Grid className="gridItem3" item xs={12} sm={6} md={6}>
            <div className="slika">
              <img src={item.slika} alt="Opis slike" className="card-image" />
            </div>
          </Grid>
          <Grid className="gridItem2" item xs={12} sm={6} md={6}>
            <div className="informacije">
              <div className="imeProizvoda"> {item.naziv}</div>
              <div className="opisProizvoda">{item.opis}</div>
              <hr></hr>
              <div className="cenaProizvoda"> {item.cena} rsd</div>
              <div className="buttoni1">
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
                  <FavoriteBorderIcon
                    onClick={() => {
                      addToFavorites(item);
                    }}></FavoriteBorderIcon>
                </div>
                <div className="addWish"> Dodaj u listu zelja</div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Details;
