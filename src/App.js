import './App.css';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";

import Login from "./pages/Login"
import Greivance from "./pages/Greivance"
import Contact from "./pages/Contact"
import Register from './pages/Register';
function App() {
  return (
    <Router>
     
      <Routes>
      <Route path='/' exact element={<Register/>} />
         
         <Route exact path='/login' element={<Login/>} /> 
        <Route exact path='/greivance'  element={<Greivance/>} />
        <Route exact path='/contact' element={<Contact/>} />
      </Routes>

      </Router>
  );
}

export default App;