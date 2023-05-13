import React from 'react'

function Alogin() {
  
    const handleLogin=async (event)=>{
      event.preventDefault();

      const fullName=event.target.fname.value;
      const password=event.target.pwd.value;

      try{
        const response=await axios.post('/admin/Login',{fullName,password});
        console.log(response);
      }catch(error) {console.log(error);}
    }

    const handleSignUp=async (event)=>{
      event.preventDefault();

      const fullName=event.target.fname.value;
      const password=event.target.pwd.value;

      try{
        const response=await axios.post('/admin/SignUp',{fullName,password});
        console.log(response);
      }catch(error) {console.log(error);}
    }

    return (
    <div class="wrapper">
      <div class="form signup">
        <header>Admin's DashBoard</header>
        <form>
          <input type="text" name="fname" placeholder="Full Name" required />
          <input type="password" name="pwd" placeholder="Password" required />
          
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleSignUp}>SignUp </button>
        </form>
      </div>
    </div>
  )
}

export default Alogin
