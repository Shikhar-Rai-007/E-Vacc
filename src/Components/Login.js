import React from 'react';
import './Login.css';
export default function Login() {
  return (
    <div class="wrapper">
      <div class="form signup">
        <header>Signup</header>
        <form onSubmit={handleRequest}>
          {/* <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Parent's Name" required />
          <input type="date" placeholder="Date of Birth" required /> */}
          <input type="number" placeholder="Phone Number" required />
          
          <input type="submit" value="See Vaccination Status" />
        </form>
      </div>
    </div>
  )
}

