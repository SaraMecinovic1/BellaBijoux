import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Add from './pages/Add/Add';


const  App=()=>{

  return(
  <BrowserRouter>
  <Routes>
    <Route path="/dodajItem" element={<Add />} />  
  </Routes>
  </BrowserRouter>

  )
  
}

export default App;
