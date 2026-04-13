import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2>AutomationHub</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/experts">Experts</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/dashboard">Dashboard</Link>
        
      </div>
      
    </div>
  );
}

export default Navbar;