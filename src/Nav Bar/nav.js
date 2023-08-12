import "./nav.css";
import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";

const Nav = () => {
  const navigate = useNavigate();
  const myColor = "rgb(250, 179, 224)";
  const myFontColor = "rgb(77, 77, 77)";
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
    console.log("Funkcija handleClicked je pozvana!");
  };

  return (
    <div className="navbar">
      <div id="mobile" onClick={() => handleClicked()}>
        <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={3} md={4}>
          <div
            id="buttNav"
            className={clicked ? "#buttNav active" : "#buttNav"}>
            <Button
              sx={{
                color: myFontColor,
                fontSize: "1rem",
                fontWeight: "bold",
                "&:hover": {
                  color: myColor,
                },
                "&:active": {
                  color: myColor,
                },
              }}
              variant="text">
              Naslovna
            </Button>
            <Button
              sx={{
                marginLeft: 0,
                color: myFontColor,
                fontSize: "1rem",
                fontWeight: "bold",
                "&:hover": {
                  color: myColor,
                },
                "&:active": {
                  color: myColor,
                },
              }}
              variant="text"
              onClick={() => {
                navigate("/");
              }}>
              Proizvodi
            </Button>
            <Button
              sx={{
                marginLeft: 0,
                color: myFontColor,
                fontSize: "1rem",
                fontWeight: "bold",
                "&:hover": {
                  color: myColor,
                },
                "&:active": {
                  color: myColor,
                },
              }}
              variant="text">
              kontakt
            </Button>
          </div>
        </Grid>

        <Grid item xs={5} md={4}>
          <div className="logo" style={{ textAlign: "center" }}>
            <h1 onClick={() => navigate("/")}>
              Bella<span>Bijoux</span>
            </h1>
          </div>
        </Grid>

        <Grid item xs={2} md={4}>
          <div className="iconsNav">
            <PersonOutlineIcon
              fontSize="40px"
              onClick={() => navigate("/prijava")}
            />
            {" | "}
            <FavoriteBorderOutlinedIcon
              fontSize="35px"
              onClick={() => {
             navigate("/listaZelja")
              }}
            />
            {" | "}
            <LibraryAddOutlinedIcon
              fontSize="35px"
              onClick={() =>
                navigate("/dodajProizvod")
              }></LibraryAddOutlinedIcon>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Nav;
