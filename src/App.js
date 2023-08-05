import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Add from "./pages/Add/Add";
import Login from "./pages/Login /login";
import Signup from "./pages/Signup/signup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dodajProizvod" element={<Add />} />
        <Route path="/prijava" element={<Login />} />
        <Route path="/kreirajNalog" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
