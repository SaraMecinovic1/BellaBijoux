import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Add from "./pages/Add/Add";
import Login from "./pages/Login /login";
import Signup from "./pages/Signup/signup";
import { checkUserLogin } from "./firebase";
import { useEffect } from "react";
import All from "./pages/All/all";

const App = () => {
  // useEffect(() => {
  //   checkUserLogin()
  // }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/dodajProizvod" element={<Add />} />
        <Route path="/prijava" element={<Login />} />
        <Route path="/kreirajNalog" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
