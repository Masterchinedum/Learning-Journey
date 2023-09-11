import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header>
    <Link to = "" className = "logo"> Masterchinedum </Link>
    <nav>
      <a href = "" className = "nav-link">Home</a>
      <a href = "" className = "nav-link">About</a>
      <a href = "" className = "nav-link">Contact</a>
      <Link to = "/login">Login</Link>
      <Link to = "/register">Register</Link>
    </nav>
  </header>
  )
}

export default Header