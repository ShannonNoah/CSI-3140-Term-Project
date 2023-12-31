import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css'

function Register() {
  const [accountType, setAccountType] = useState("Standard")
  async function handleClick(event) {
    var els = document.getElementById("user").elements
    const newUser = {
      email: els[0].value,
      password: els[1].value,
      accountType
    }

    await fetch("/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser)
    })
  }
  return (
    <>
      <div className="color-block"></div>
      <div class="form-box">
        <div className="header"><h1>Sign up</h1></div>
        <form id="ty">
          <label for="roles">Select an employee role:&nbsp;</label>
          <select id="type" onChange={e=>setAccountType(e.target.value)}>
            <option value="Standard">Standard Employee</option>
            <option value="Administrator">Administrator</option>
          </select>
        </form>
        &nbsp;
        <form id="user">
          <div class="input-group">
            <div class="input-field">
              <input name="email" type="email" placeholder="Email address" required={true} />
            </div>
            &nbsp;
            <div class="input-field">
              <input name="password" type="password" placeholder="Password" required={true} />
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

export default Register
