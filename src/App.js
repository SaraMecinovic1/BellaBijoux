import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Add from "./pages/Add/Add";
import Login from "./pages/Login /login";
import Signup from "./pages/Signup/signup";
import All from "./pages/All/all";
import Details from "./pages/Details/details";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Favorites from "./pages/Favorites/favorites";
import Pocetna from "./pages/Pocetna/pocetna";


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Pocetna />} />
          <Route path="/proizvodi" element={<All />} />
          <Route path="/dodajProizvod" element={<Add />} />
          <Route path="/prijava" element={<Login />} />
          <Route path="/registracija" element={<Signup />} />
          <Route path="/detalji/:id" element={<Details />} />
          <Route path="/listaZelja" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
