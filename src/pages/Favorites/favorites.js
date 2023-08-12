import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../../nav bar/nav";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import "./favorites.css";

const Favorites = () => {
  const favorites = useSelector((state) => state.item.favorites); // useSelector-da uzmemo taj state,al ne da ga promenimo
console.log(favorites)
  return (
    <div className="favoritesPage">
      <Nav />
      <div className="title1">
        <h1>
          {" "}
          <FavoriteBorderIcon></FavoriteBorderIcon> LISTA ZELJA
        </h1>
      </div>

      {favorites.map((item, index) => {
        <div className="wishList" key={index}>

          <div className="proizvod">
            <img src={item.slika} alt={`Slika`} />
            <p>{item.naziv}</p>
            <p>{item.id}</p>
          </div>

          <div className="price">
            <h3>{item.cena}</h3>

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
          </div>
        </div>;
      })}
    </div>
  );
};

export default Favorites;
