// import './App.css';
import About from "./Components/About";
import Blogs from "./Components/Blogs";
import Book from "./Components/Book";
import Doctor from "./Components/Doctor";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Icon from "./Components/Icon";
import Navbar from "./Components/Navbar";
import Review from "./Components/Review";
import Service from "./Components/Service";
import Login from "./Components/Login";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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
                <Blogs />
              </>
            }
          />
          <Route path="/About" element={<About />} />

          <Route path="/Doctor" element={<Doctor />} />

          <Route path="/Book" element={<Book />} />

          <Route path="/Review" element={<Review />} />

          <Route path="/Blogs" element={<Blogs />} />

          <Route path="/Login" element={<Login />} />

          <Route path="/Services" element={<Service />} />
        </Routes>
      </BrowserRouter>
      {/* <Navbar/>
   <Home/>
   <Icon/>
   <Service/>
   <About/>
   <Doctor/>
   <Book/>
   <Review/>
   <Blogs/>
   <Footer/> */}
      {/* <Login/> */}
      <Footer />
    </div>
  );
}

export default App;
