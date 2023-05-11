import React from 'react';
import './Login.css';
export default function Login() {

  const handleInputChange=(event)=>{
    const val=(event.target.value);
    console.log(val);
  }
  return (
    <div class="wrapper">
      <div class="form signup">
        <header>Signup</header>
        <form> 
          {/* <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Parent's Name" required />
          <input type="date" placeholder="Date of Birth" required /> */}
          <input type="number" placeholder="Phone Number" onChange={handleInputChange} required />
          
          <input type="submit" value="See Vaccination Status" />
        </form>
      </div>
    </div>
  )
}

