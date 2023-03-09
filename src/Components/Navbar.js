import React from 'react';
import './style.css';
function Navbar() {
  return (
    <div className="header">
    <a href="/" className="logo"> E-VACC</a>
    <nav className="navbar">
        <a href="/">Home</a>
        <a href="/Services">Services</a>
        <a href="/About">About</a>
        <a href="/Doctor">Doctors</a>
        <a href="/Book">Book</a>
        <a href="/Review">Review</a>
        <a href="/Blogs">Blogs</a>
        <a href="/Login">Login</a>
    </nav>
    <div id="menu-btn" className="fas fa-bars"></div>
</div>
  )
}

export default Navbar
