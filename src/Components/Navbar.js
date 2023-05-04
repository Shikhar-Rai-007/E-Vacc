import React from 'react';
import './style.css';
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg ">
    <div className="header">
    <a href="/" className="logo"><i class="fas fa-heartbeat"></i> E-VACC</a>
    <nav className="navbar">
    <li class="nav-item x12">
        <a href="/">Home</a>
    </li>
    <li class="nav-item x12">
        <a href="/Services">Services</a>
        
    </li>
    <li class="nav-item x12">
        <a href="/About">About</a>
        
    </li>
    <li class="nav-item x12">
        <a href="/Book">Book</a>
        
    </li>
    <li class="nav-item x12">
        
        <a href="/Blogs">Blogs</a>
    </li>
        {/* <a href="/Doctor">Doctors</a> */}
        {/* <a href="/Review">Review</a> */}
        {/* <a href="/Login">Login</a> */}
        <li class="nav-item dropdown x12">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Login
        </a>
        <div class="dropdown-menu x12" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/alogin">Admin Login</a>
          <a class="dropdown-item" href="/login">User Login</a>
         
        </div>
      </li>
    </nav>
    <div id="menu-btn" className="fas fa-bars"></div>
</div>
</nav>
  )
}

export default Navbar
