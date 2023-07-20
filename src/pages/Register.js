import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/login.css'

function register() {
  function handleClick(event) {
    event.preventDefault();
    var els = document.getElementById("user").elements
    for(var i = 0, element; element = els[i++];) {
      console.log(element.name + ": " + element.value)
    }
  }
  return (
    <>
        <div className="color-block"></div>
        <div class="form-box">
        <div className="header"><h1>Sign up</h1></div>
        <form>
            <label for="roles">Select an employee role:&nbsp;</label>
            <select>
                <option value="standard">Standard Employee</option>
                <option value="admin">Administrator</option>
            </select>
            </form>
            &nbsp;
      <form id="user">
        <div class="input-group">
        <div class="input-field">
            <input name="employeeId" type="employeeID" placeholder="Employee ID" required={true}/>
          </div>
          &nbsp;
          <div class="input-field">
            <input name="email" type="email" placeholder="Email address" required={true}/>
          </div>
          &nbsp;
          <div class="input-field">
            <input name="password" type="password" placeholder="Password" required={true}/>
          </div>
        </div>
      </form>
      <Link to="/LandingPage">
        <button onClick={handleClick}>Sign Up</button>
        </Link>
    </div>
    </>
  )
}

export default register
