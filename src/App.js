import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Add from './pages/Add';


const  App=()=>{

  return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Add />} />  
  </Routes>
  </BrowserRouter>

  )
  
}

export default App;
