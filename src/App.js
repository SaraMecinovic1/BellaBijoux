import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Add from "./pages/Add/Add";
import Login from "./pages/Login /login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dodajProizvod" element={<Add />} />
        <Route path="/prijava" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
