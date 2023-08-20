import { Formik } from "formik";
import "./login.css";
import * as yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../nav-bar/nav";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { login } from "../../firebase";

const Shema = yup.object({
  email: yup
    .string()
    .email("Neispravan email")
    .required("Email je obavezno polje, unesite email"),
  password: yup
    .string()
    .required("Lozinka je obavezno polje, unesite sifru")
    .min(6, "Lozinka mora da ima najmanje 6 karaktera")
    .max(50, "Lozinka mora da ima najvise 50 karaktera"),
});
const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const loginFunkc = async (values) => {
    setIsLoading(true);
    try {
      await login(values.email, values.password);
      alert("Uspesna prijava");
      navigate("/dodajProizvod");
    } catch (err) {
      console.log("err", err);
      alert("Pokusajte ponovo");
    }
    setIsLoading(false);
  };

  return (
    <div className="page">
      <Nav />
      {isLoading ? (
        <div className="loading1">Loading...</div>
      ) : (
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Shema}
        onSubmit={(values, actions) => {
          loginFunkc(values);
        }}>
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleSubmit,
          handleChange,
        }) => (
          <div className="page1">
            <div className="title1">
              <h1>
                {" "}
                <PersonOutlineIcon className="icon" fontSize="30px" /> MOJ NALOG
              </h1>
            </div>
            <div className="card1">
              <h2>PRIJAVA</h2>
              <hr className="hr"></hr>
              <label>Email adresa:</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}></input>
              <p className="error-message">
                {errors.email && touched.email && errors.email}
              </p>
              <label>Lozinka:</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}></input>
              <p className="error-message">
                {errors.password && touched.password && errors.password}
              </p>
              <div className="butt1">
                <button
                  type="button"
                  onClick={() => {
                    console.log("submit work");
                    handleSubmit();
                  }}>
                   
                  {" "}
                  LOGIN
                </button>
               
              </div>
              <p
                className="register"
                onClick={() => {
                  navigate("/registracija");
                }}>
                Registruj se*
              </p>
            </div>
          </div>
        )}
      </Formik>
      )}
    </div>
  );
};

export default Login;
