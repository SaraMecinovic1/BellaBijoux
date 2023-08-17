import React, { useState } from "react";
import Nav from "../../nav bar/nav";
import "./contact.css";
import Call from "./slike/call.png";
import Mail from "./slike/mail.png";
import Global from "./slike/global.png";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    // Ovde treba pozvati backend endpoint za slanje e-maila
    console.log("Podaci za slanje e-maila:", name, email, message);
  };

  const handleClearFields = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contactPage">
      <Nav />
      <div className="ostalo">
        <div className="textDeo">
          <h2>KONTAKT INFORMACIJE</h2>
          <p>
            Za sva dodatna pitanja možete da nas kontaktirate preko informacija
            u <br></br> prilogu, ili direktno preko kontakt forme
          </p>
        </div>
        <div className="informacije">
          <Grid container spacing={2} alignItems={"center"}>
            <Grid className="gridItem1" item xs={12} sm={6} md={4}>
              <div className="info4">
                <img src={Call} alt="Moj icon" />
                <p>TELEFON</p>
                <p>+381 61 27 10 922</p>
              </div>
            </Grid>

            <Grid className="gridItem" item xs={12} sm={6} md={4}>
              <div className="info4">
                <img src={Mail} alt="Moj icon" />
                <p>EMAIL:</p>
                <p>bellabijoux@gmail.com</p>
              </div>
            </Grid>

            <Grid className="gridItem" item xs={12} sm={6} md={4}>
              <div className="info4">
                <img src={Global} alt="Moj icon" />
                <p>ADRESA:</p>
                <p>Terazije 15-23, 11000 Beograd</p>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="pitanje">
          <p>Imate pitanje?</p>
          <div className="inputs">
            <TextField
              className="textField"
              id="standard-multiline-flexible"
              label="Ime i prezime:*"
              multiline
              maxRows={2}
              variant="standard"
              sx={{  width: "100%", color: "pink", marginBottom: "40px" }}
              value={name}
              onChange={handleNameChange}
            />

            <TextField
              className="textField"
              id="standard-multiline-flexible"
              label="Email:*"
              multiline
              maxRows={2}
              variant="standard"
              sx={{  width: "100%", color: "pink", marginBottom: "40px" }}
              value={email}
              onChange={handleEmailChange}
            />

            <TextField
              className="textField"
              id="outlined-multiline-static"
              label="Poruka"
              multiline
              rows={6}
              sx={{
                width: "100%",
                borderRadius: "5px",
              }}
              value={message}
              onChange={handleMessageChange}
            />

            <div className="button">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "rgb(255, 200, 232)",
                  "&:hover": {
                    backgroundColor: "rgb(250, 200, 232)",
                  },
                  "&:active": {
                    backgroundColor: "rgb(250, 200, 232)",
                  },
                }}
                onClick={() => {
                  handleSubmit();
                  handleClearFields();
                  alert("Poslato...");

                }}>
                {" "}
                Posaljite poruku...
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
