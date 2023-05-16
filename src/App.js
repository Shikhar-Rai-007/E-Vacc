// import './App.css';
import About from "./Components/About";

import Book from "./Components/Book";

import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Icon from "./Components/Icon";
import Navbar from "./Components/Navbar";

import Login from "./Components/Login";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Alogin from "./Components/Alogin";
import User from "./Components/User";

function App() {
  return (
    <div>
      {/* <Login/> */}
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Icon />
                <User/>
              </>
            }
          />
          <Route path="/About" element={<About />} />

          

          <Route path="/Book" element={<Book />} />

         

         

          <Route path="/Login" element={<Login />} />

         
          <Route path="/Alogin" element={<Alogin />} />
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;
