import { Formik } from "formik";
import "./signup.css";
import * as yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../nav bar/nav";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { signUp } from "../../firebase";


const Schema = yup.object({
    fullName: yup.string().min(3).required("Ime je obavezno polje!"),
    email: yup.string().email().required("Email je obavezno polje!"),
    password: yup.string().min(6).max(10).required("Lozinka je obavezno polje!"),
    confirmPassword: yup.string().required("Potvrdna lozinka je obavezno polje!").oneOf([yup.ref("password"), null]),
      
  });
const Signup = () => {
  const [state, setState] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
 
  const submitForm = async (values) => {
    setIsLoading(true);
    try{

        await signUp(values.email, values.password, values.fullName);
        alert("Uspesna prijava")
        navigate("/dodajProizvod");
    }
    catch(err){
        console.log(err, "ERROR")
        alert("Pokusajte ponovo")
    }
    setIsLoading(false);
    console.log(values)
  };

    // if (state) {
    //   return (
    //     <div className="edit-quote-wrapper">
    //       <h1>Loading...</h1>
    //     </div>
    //   );
    // }


  return (
    <div className="page">
      <Nav />
      {isLoading ? (
        <div className="loading1">Loading...</div>
      ) : (
      <Formik
        initialValues={{ fullName: "", email: "", password: "", confirmPassword: ""}}
        validationSchema={Schema}
        onSubmit={(values, actions) => {
            submitForm(values);
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
              <h1 > <PersonOutlineIcon className="icon" fontSize="30px"  />  NOVI NALOG</h1>
            </div>
            <div className="card1">
              <h2>KREIRAJ</h2>
            <hr className="hr"></hr>

            <label>Ime:</label>
              <input
                
                type="fullNmae"
                name="fullName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}></input>
              <p className="error-message">
                {errors.fullName && touched.fullName && errors.fullName}
              </p>


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
              <label >Lozinka:</label>
              <input
                
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}></input>
              <p className="error-message">
                {errors.password && touched.password && errors.password}
              </p>
              <label >  Potvrdite lozinku:</label>
              <input
                
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}></input>
              <p className="error-message">
                {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
              </p>
            <div className="butt1">
              <button
                type="button"
                onClick={() => {
                  console.log("submit work");
                  handleSubmit();
                }}>
                {" "}
                KREIRAJ
              </button>
            </div>
            </div>
            
          </div>
        )}
      </Formik>
       )}
    </div>
  );
};

export default Signup;
