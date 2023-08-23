import React, { useRef } from "react";
import { Grid, Button } from "@mui/material";
import "./Add.css";
import Nav from "../../nav-bar/nav";
import { Formik } from "formik";
import * as yup from "yup";
import { addItem } from "../../firebase";
import storage from "../../firebase";
import { useState } from "react";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const newItemShema = yup.object({
  naziv: yup
    .string()
    .required("text je obavezno polje")
    .max(50, "text mora da ima najvise 50 karaktera"),
  cena: yup
    .number("cena mora biti upisana samo kao broj!")
    .required("cena je obavezno polje"),
  opis: yup
    .string()
    .required("opis je obavezno polje")
    .min(6, "opis mora da ima najmanje 6 karaktera")
    .max(500, "opis mora da ima najvise 500 karaktera"),
  slika: yup.string().required("slika je obavezno polje"),
});

const Add = () => {
  const myColor = "rgb(250, 179, 224)";
  const [isLoading, setIsLoading] = useState(false);
  const formikRef = useRef(null);
  const [file, setFile] = useState("");

  const handleUpload = async () => {
    const storageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Handle progress if needed
        },
        (err) => reject(err),
        async () => {
          try {
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            resolve(url);
          } catch (error) {
            reject(error);
          }
        }
      );
    });
  };

  const handleSubmit = async (values) => {
    try {
      setIsLoading(true);

      const imageUrl = await handleUpload();

      if (imageUrl) {
        await addItem({ ...values, slika: imageUrl });
        console.log("Uspesno dodato, SUBMIT FORM");
        formikRef.current.resetForm(); // Reset the form after successful submission
        setFile(""); // Reset the file input
      } else {
        console.log("URL slike nije dostupan.");
      }
    } catch (err) {
      console.log("error", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading ? (
        <div className="loading1">Loading...</div>
      ) : (
        <Formik
          innerRef={formikRef}
          initialValues={{
            naziv: "",
            opis: "",
            cena: "",
            slika: "",
          }}
          validationSchema={newItemShema}
          onSubmit={(values, actions) => {
            //handleSubmit je ovo
            handleSubmit(values, actions);
            console.log(values);
            actions.resetForm();
          }}>
          {({
            values, // formikov state => { email: "", password: "" }
            errors, // errors = { email: 'Neispravan email', password: 'Password is required field' }
            touched, // touched = { email: true }
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <div className="page">
              <Nav />
              <h1 className="title">Dodaj svoj proizvod</h1>
              <hr className="hr"></hr>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={12}>
                  <div className="nazivInput">
                    <label className="label">Naziv proizvoda:</label>
                    <input
                      type="text"
                      name="naziv"
                      onChange={handleChange("naziv")}
                      onBlur={handleBlur}
                      value={values.naziv}></input>
                    <p className="error-message">
                      {errors.naziv && touched.naziv && errors.naziv}
                    </p>
                  </div>
                </Grid>

                <Grid item xs={12} md={12}>
                  <div className="opisInput">
                    <label className="label">Opis proizvoda:</label>
                    <input
                      type="text"
                      name="opis"
                      onChange={handleChange("opis")}
                      onBlur={handleBlur}
                      value={values.opis}></input>
                    <p className="error-message">
                      {errors.opis && touched.opis && errors.opis}
                    </p>
                  </div>
                </Grid>

                <Grid item xs={12} md={12}>
                  <div className="cenaInput">
                    <label className="label">Cena:</label>
                    <input
                      type="number"
                      name="cena"
                      onChange={handleChange("cena")}
                      onBlur={handleBlur}
                      value={values.cena}></input>
                    <p className="error-message">
                      {errors.cena && touched.cena && errors.cena}
                    </p>
                  </div>
                </Grid>

                <Grid item xs={12} md={12}>
                  <div className="slikaInput">
                    <label className="label">Slika:</label>
                    <input
                      type="file"
                      onChange={(event) => {
                        setFile(event.target.files[0]); // Ažurirajte file stanje prilikom izbora slike
                        handleChange(event); // Pozovite handleChange kako biste ažurirali formik stanje
                      }}
                      accept="image/*"
                      name="slika"
                    />

                    <p className="error-message">
                      {errors.slika && touched.slika && errors.slika}
                    </p>
                  </div>
                </Grid>

                <Grid item xs={12} md={12}>
                  <div className="addButton">
                    <Button
                      sx={{
                        backgroundColor: " rgba(191, 162, 143)",
                        fontSize: 18,
                        fontWeight: "bold",
                        width: "200px",
                        "&:hover": {
                          color: myColor,
                          backgroundColor: " rgba(191, 162, 143)",
                        },
                        "&:active": {
                          color: myColor,
                          backgroundColor: " rgba(191, 162, 143)",
                        },
                      }}
                      variant="contained"
                      onClick={() => {
                        handleSubmit();
                      }}>
                      Dodaj
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </div>
          )}
        </Formik>
      )}
    </div>
  );
};

export default Add;
