import React from 'react';
import './Login.css';
import './Alogin.css';
import axios from 'axios';
import { useState } from 'react';
// import UserProfile from './User';
import { useNavigate } from 'react-router-dom';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export default function Login() {

  const [userData,setUserData]=useState([]);
  const navigate = useNavigate();
  const handleUser=async (event)=>{
    event.preventDefault();
    const dob=event.target.dob.value;
    const phNo=event.target.PhNo.value;
    navigate('/User',{dob,phNo});
    // try{
    //   const response=await axios.post('/user/UserLogin',{dob,phNo});
    //   console.log(response);
    //   setUserData(response.data);
    //   navigate('/User',{dob,phNo});
    // }catch(error) {console.log(error);}
  }
  return (
    <div>
    <div className="wrapper">
      <div className="form signup">
        <header>Vaccine Status</header>
        <form onSubmit={handleUser}> 
          <input type="string" name="dob" placeholder="Date of Birth" required />
          <input type="number" name="PhNo" placeholder="Phone Number" required />
          <input type="submit" className="button" value="See Vaccination Status" />
        </form>
      </div>
      </div>
      </div>
  )
}

