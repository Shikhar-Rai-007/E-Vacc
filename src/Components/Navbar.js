import React from 'react';
import './style.css';
function Navbar() {
  return (
    <div className="header">
    <a href="#" className="logo"><i className="fas fa-heartbeat"></i> medcare.</a>
    <nav className="navbar">
        <a href="/">home</a>
        <a href="/">services</a>
        <a href="/">about</a>
        <a href="/">doctors</a>
        <a href="/">book</a>
        <a href="/">review</a>
        <a href="/">blogs</a>
    </nav>
    <div id="menu-btn" className="fas fa-bars"></div>
</div>
  )
}

export default Navbar
