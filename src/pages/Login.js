import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/login.css'

function login() {
  return (
    <>
        <div className="color-block"></div>
        
        <div class="form-box">
        <div className="header"><h1>Welcome Back!</h1></div>
        <form>
            <label for="options">Select an employee role:&nbsp;</label>
            <select>
                <option value="standard">Standard Employee</option>
                <option value="admin">Administrator</option>
            </select>
            </form>
      <form>
      &nbsp;
        
        <div class="input-group">
          <div class="input-field">
            <input type="email" placeholder="Email address" />
          </div>
          &nbsp;
          <div class="input-field">
            <input type="password" placeholder="Password" />
          </div>
        </div>
      </form>
      
      <Link to="/LandingPage">
        <button>Login</button>
        </Link>

    </div>
    </>
  )
}

export default login
