// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>Health Center</h1>
      <ul style={{textAlign: 'right'}} >
        <li style={{}}><Link to="/">Home</Link></li>
        <li  ><Link to="/schedule">Schedule</Link></li>
        <li style={{textAlign: 'right'}} ><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/appoinmentform">Appoinment</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

