import React from 'react'

function Alogin() {
  return (
    <div class="wrapper">
      <div class="form signup">
        <header>Signup</header>
        <form method="POST" action="/admin">
          <input type="text" placeholder="Full Name" required />
          <input type="number" placeholder="Phone Number" required />
          
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  )
}

export default Alogin
