import React from "react";
import Nav from "../../nav-bar/nav";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import "./favorites.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import { itemSlice } from "../../store/itemSlice";

const Favorites = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.item.favorites); // useSelector-da uzmemo taj state,al ne da ga promenimo
  console.log(favorites, "favoretes");

  const deleteHandler = (id) => {
    dispatch(itemSlice.actions.removeFavorite(id));
    console.log("izbrisano");

   
  };

  return (
    <div className="favoritesPage">
      <Nav />
      <div className="title1">
        <h1>
          {" "}
          <FavoriteBorderIcon /> LISTA ZELJA
        </h1>
      </div>
      <div className="praznaLista">
        {favorites.length === 0 ? (
          <div>
            <h2>VAŠA LISTA ŽELJA JE PRAZNA</h2>
            <p>
              Pozivamo vas da se upoznate sa asortimanom naše radnje. Sigurno
              možete pronaći nešto za sebe!
            </p>
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
              }}
              onClick={() => {
                console.log("Kliknuto na proizvod, params.id:");
                navigate(`/proizvodi`);
              }}>
              <ShoppingBagIcon sx={{ marginRight: "7px" }} />
              Povratak u prodavnicu
            </Button>
          </div>
        ) : (
          favorites.map((item, index) => (
            <div className="wishList" key={index}>
              <div className="proizvod">
                <img className="pic1"  src={item.slika} alt={`Slika`} />
                <div className="info2">
                  <p className="naziv2">{item.naziv}</p>
                  <p className="ID">ID: {item.id}</p>
                </div>
              </div>

              <div className="price">
                <h3>{item.cena} rsd</h3>

                <div className="buttoni">
                  <Button
                    variant="contained"
                    className="addBut"
                    sx={{
                      backgroundColor: "rgb(250, 200, 232)",
                      "&:hover": {
                        backgroundColor: "rgb(250, 200, 232)",
                      },
                      "&:active": {
                        backgroundColor: "rgb(250, 200, 232)",
                      },
                      // display: "inline-block", // Postavite inline prikaz
                      "@media (max-width: 553px)": {
                        // Primena stilova ispod 514px
                        display: "none", // Sakrij dugme ispod 514px
                      },
                    }}>
                    <ShoppingBagIcon sx={{ marginRight: "7px" }} />
                    Dodaj u korpu
                  </Button>
                  <DeleteForeverIcon
                    className="deleteButt"
                    sx={{ marginLeft: "7px" }}
                    fontSize="large"
                    onClick={() => {
                      deleteHandler(item.id);
                    }}></DeleteForeverIcon>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
