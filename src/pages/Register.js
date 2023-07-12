import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/login.css'

function register() {
  return (
    <>
        <div className="color-block"></div>
        <div class="form-box">
        <div className="header"><h1>Sign up</h1></div>
      <form>
      
        <div class="input-group">
        <div class="input-field">
            <input type="employeeID" placeholder="Employee ID" />
          </div>
          &nbsp;
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
        <button>Sign Up</button>
        </Link>
    </div>
    </>
  )
}

export default register