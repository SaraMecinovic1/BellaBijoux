import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Add from "./pages/Add/Add";
import Login from "./pages/Login /login";
import Signup from "./pages/Signup/signup";
import All from "./pages/All/all";
import Details from "./pages/Details/details";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/dodajProizvod" element={<Add />} />
        <Route path="/prijava" element={<Login />} />
        <Route path="/registracija" element={<Signup />} />
        <Route path="/detalji" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
