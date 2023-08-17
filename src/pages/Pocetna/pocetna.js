import React, { useEffect, useState } from "react";
import Nav from "../../nav bar/nav";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GlavnaSlika from "./glavna.jpg";
import "./pocetna.css";
import { db } from "../../firebase";
import { useNavigate, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { itemSlice } from "../../store/itemSlice";
import PrstenSlika from "./slike/prsten.jpg";
import Button from "@mui/material/Button";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import narukvicaSlika from "./slike/narukvica.jpg";
import charmsSlika from "./slike/charm.jpg";

const Pocetna = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addToFavorites = () => {
    dispatch(itemSlice.actions.setFavorite(recommendedDocuments));
    console.log("Dodato u favorite ");
  };

  const [recommendedDocuments, setRecommendedDocuments] = useState([]);
  //   useEffect(() => {
  //     const fetchRecommendedDocuments = async () => {
  //       try {
  //         const recommendedRef = db.collection("items").limit(4);
  //         const snapshot = await recommendedRef.get();

  //         const documents = snapshot.docs.map((doc) => doc.data());
  //         setRecommendedDocuments(documents);
  //       } catch (error) {
  //         console.error("Error fetching recommended documents:", error);
  //       }
  //     };

  //     fetchRecommendedDocuments();
  //   }, []);
  return (
    <div className="pocetnaPage">
      <Nav />
      <div className="ostatak">
        <div className="glavnaSlika">
          <img src={GlavnaSlika} alt="Opis slike" className="glavnaSlika1" />
        </div>
        <div className="preporucejemoDeo">
          <h1>NAŠA PONUDA</h1>
          <div className="izdvajamoDeo">
            <Grid container spacing={0} alignItems={"center"}>
              <Grid className="gridItem" item xs={12} sm={6} md={4}>
                <div className="card">
                  <div
                    className="slikaDiv"
                    onClick={() => {
                      console.log("Kliknuto na proizvod, params.id:");
                      navigate(`/proizvodi`);
                    }}>
                    <img src={PrstenSlika} alt={`Slika `} className="prsten" />
                  </div>

                  <div className="info">
                    <p> PRSTENJE</p>

                    <FavoriteBorderIcon
                      onClick={() => {
                        addToFavorites();
                        alert("Dodato u listu zelja");
                      }}></FavoriteBorderIcon>
                  </div>

                  <div className="butt">
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
                      {" "}
                      <ShoppingBagIcon
                        sx={{ marginRight: "7px" }}></ShoppingBagIcon>{" "}
                      kupite proizvod
                    </Button>
                  </div>
                </div>
              </Grid>

              <Grid className="gridItem" item xs={12} sm={6} md={4}>
                <div className="card">
                  <div
                    className="slikaDiv"
                    onClick={() => {
                      console.log("Kliknuto na proizvod, params.id:");
                      navigate(`/proizvodi`);
                    }}>
                    <img
                      src={narukvicaSlika}
                      alt={`Slika `}
                      className="prsten"
                    />
                  </div>

                  <div className="info">
                    <p> NARUKVICE</p>

                    <FavoriteBorderIcon
                      onClick={() => {
                        addToFavorites();
                        alert("Dodato u listu zelja");
                      }}></FavoriteBorderIcon>
                  </div>

                  <div className="butt">
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
                      {" "}
                      <ShoppingBagIcon
                        sx={{ marginRight: "7px" }}></ShoppingBagIcon>{" "}
                      kupite proizvod
                    </Button>
                  </div>
                </div>
              </Grid>

              <Grid className="gridItem" item xs={12} sm={6} md={4}>
                <div className="card">
                  <div
                    className="slikaDiv"
                    onClick={() => {
                      console.log("Kliknuto na proizvod, params.id:");
                      navigate(`/proizvodi`);
                    }}>
                    <img src={charmsSlika} alt={`Slika `} className="prsten" />
                  </div>

                  <div className="info">
                    <p> PRIVESCI</p>

                    <FavoriteBorderIcon
                      onClick={() => {
                       console.log("button koji ne radi nista")
                      }}></FavoriteBorderIcon>
                  </div>

                  <div className="butt">
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
                      {" "}
                      <ShoppingBagIcon
                        sx={{ marginRight: "7px" }}></ShoppingBagIcon>{" "}
                      kupite proizvod
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pocetna;
