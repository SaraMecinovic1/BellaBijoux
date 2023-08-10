import React from "react";
import Nav from "../../nav bar/nav";
import "./details.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Slika from "./slika.jpeg"

const Details = () => {
  return (
    <div className="detailsPage">
      <Nav />
      <div className="content">
        <div className="slika">
        <img src={Slika} alt="Opis slike" className="card-image" />
        </div>
        <div className="informacije">
          <div className="imeProizvoda"> Vanilla Cloud Cream</div>
          <div className="opisProizvoda">
            {" "}
            Vanilla Cloud Cream za telo sa senzualnim, bogatim mirisom brzo se
            upija ne ostavljajući kožu masnom. Obogaćeno uljem jojobe i
            pantenolom čini kožu mekom i glatkom na dodir, dok istovremeno
            stvara zaštitni film preko kože koji je štiti od isušivanja
          </div>
          <hr></hr>
          <div className="cenaProizvoda"> 3,999 rsd</div>
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
            <div className="likeButton"><FavoriteBorderIcon ></FavoriteBorderIcon></div>
            <div className="addWish">  Dodaj u listu zelja</div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
