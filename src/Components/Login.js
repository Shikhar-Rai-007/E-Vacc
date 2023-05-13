import React from 'react';
import './Login.css';
import axios from 'axios';
import { useState } from 'react';

export default function Login() {

  const [userData,setUserData]=useState([]);
  const handleUser=async (event)=>{
    event.preventDefault();
    const dob=event.target.dob.value;
    const phno=event.target.PhNo.value;

    try{
      const response=await axios.get('/admin/getAllUsers');
      console.log(response);
      setUserData(response.data);
    }catch(error) {console.log(error);}
  }
  return (
    <div class="wrapper">
      <div class="form signup">
        <header>Vaccine Status</header>
        <form onSubmit={handleUser}> 
          <input type="string" name="dob" placeholder="Date of Birth" required />
          <input type="number" name="PhNo" placeholder="Phone Number" required />
          <input type="submit" value="See Vaccination Status" />
        </form>
      </div>
      <table>
        <thead>
          <tr>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Phone Number</th>
          <th>Date of Birth</th>
          <th>Age</th>
          <th>Date</th>
          </tr>
        </thead>
        <tbody>
         { Array.isArray(userData) &&  userData.map((currUser) => {
            const{firstName,lastName,phNo,dob,age,date}=currUser;
            return(
              <tr>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{phNo}</td>
                <td>{dob}</td>
                <td>{age}</td>
                <td>{date}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}

