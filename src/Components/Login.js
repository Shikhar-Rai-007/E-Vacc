import React from 'react';
import './Login.css';
export default function Login() {
  return (
    <div className='wrapper'>
        <form>
            <h1>Login</h1>
            <input type="text" className="input text" placeholder="UserName"/>
            <input type="password" className="input text" placeholder="Password"/>
            <a href="/fp" className="ref">Forget Password</a>
            <input type="button" className="input button" value="Login"/>
            <a href="/" className="ref">Don't Have Account ? Sign UP</a>
         </form>
    </div>
  )
}

