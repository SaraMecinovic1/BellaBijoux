import React, { useState } from "react";
import Nav from "../../nav bar/nav";
import "./contact.css";
import Call from "./slike/call.png";
import Mail from "./slike/mail.png";
import Global from "./slike/global.png";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending email:", { email, subject, message });
    // Ovde možete dodati kod za slanje emaila prema vašem backend-u ili servisu za slanje emailova
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
          <div className="info4">
            <img src={Call} alt="Moj icon" />
            <p>TELEFON</p>
            <p>+381 61 27 10 922</p>
          </div>

          <div className="info4">
            <img src={Mail} alt="Moj icon" />
            <p>EMAIL:</p>
            <p>bellabijoux@gmail.com</p>
          </div>

          <div className="info4">
            <img src={Global} alt="Moj icon" />
            <p>ADRESA:</p>
            <p>Terazije 15-23, 11000 Beograd</p>
          </div>
        </div>

        <div className="email-form">
          <h2>Kontaktirajte nas</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Vaša email adresa:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="subject">Naslov poruke:</label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Poruka:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit">Pošalji</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
