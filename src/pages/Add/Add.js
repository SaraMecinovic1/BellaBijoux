import React from "react";
import { Grid, Button } from "@mui/material";
import "./Add.css";
import Nav from "../../nav bar/nav";
import { Formik } from "formik";
import * as yup from "yup";
import { addItem } from "../../firebase";
import { logout } from "../../firebase";
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
    .max(300, "opis mora da ima najvise 200 karaktera"),
  slika: yup.string().required("slika je obavezno polje"),
});

const Add = () => {
  const myColor = "rgb(250, 179, 224)";

  // const handleUpload = () => {
  //   if (!file) {
  //     alert("Please choose a file!");
  //   }

  //   const storageRef = ref(storage, `/files/${file.name}`);
  //   const uploadTask = uploadBytesResumable(storageRef, file);

  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const percent = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );

  //       // update progress
  //       setPercent(percent);
  //     },
  //     (err) => console.log(err),
  //     () => {
  //       // download url
  //       getDownloadURL(uploadTask.snapshot.ref).then((url) => {
  //         console.log(url);
  //       });
  //     }
  //   );
  // };

  const [file, setFile] = useState("");
  // const [imageUrl, setImageUrl] = useState("");
  const [downloadUrls, setDownloadUrls] = useState([])
  // progress
  const [percent, setPercent] = useState(0);

  // Handle file upload event and update state
  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    }

    const storageRef = ref(storage, `/files/${file.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setDownloadUrls((prevUrls) => [...prevUrls, url]);
        
        });
      }
    );
  };

  const submitForm = async (values) => {
    try {
      await addItem(values);
      alert("Uspesno");
    } catch (err) {
      alert("Prijavite se!");
      console.log("error", err);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          naziv: "",
          opis: "",
          cena: "",
          slika:downloadUrls ,
        }}
        validationSchema={newItemShema}
        onSubmit={(values, actions) => {
          //handleSubmit je ovo
          handleUpload();
          submitForm(values);
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
                  {/* <input
                    type="file"
                    onChange={(event) => {
                      setFile(event.target.files[0]);
                    }}
                    accept="/image/*"
                    name="slika"
                  /> */}
                  <input
                    type="file"
                    onChange={handleChange}
                    accept="/image/*"
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
                    onClick={logout}>
                    LOGOUT
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Add;
