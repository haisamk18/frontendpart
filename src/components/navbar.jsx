import React from 'react';
import {  Link } from "react-router-dom";
import "../components/navbar.css";
const Navbar= () =>{
  return (
  <div className='Nav'>
    <li>
      <Link to="/" className='li'>Register</Link>
    </li>
    <li>
      <Link to="/login" className='li'>Login</Link>
    </li>
    <li>
      <Link to="/greivance" className='li'>Greivance</Link>
    </li>
    <li>
      <Link to="/contact" className='li'>Contact</Link>
    </li>
  </div>
  );
}
export default Navbar;