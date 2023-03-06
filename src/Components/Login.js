import React from 'react';
import './Login.css';
export default function Login() {
  return (
    <div className='wrapper'>
        <form>
            <h1>Login</h1>
            <input type="text" class="input text" placeholder="UserName"/>
            <input type="password" class="input text" placeholder="Password"/>
            <a href="/fp" class="ref">Forget Password</a>
            <input type="button" class="input button" value="Login"/>
            <a href="/" class="ref">Don't Have Account ? Sign UP</a>
         </form>
    </div>
  )
}

