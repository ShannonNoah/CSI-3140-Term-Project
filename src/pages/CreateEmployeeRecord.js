import React from 'react'
import '../styles/login.css'
import {Link} from "react-router-dom";
import axios from "axios";

function CreateEmployeeRecord() {
  async function handleClick(event) {
    event.preventDefault();
    var els = document.getElementById("employee").elements
    const newEmployee = {
      firstName: els[0].value,
      lastName: els[1].value,
      address: els[2].value,
      dateOfBirth: els[3].value,
      phoneNumber: els[4].value,
      email: els[5].value,
      SIN: els[6].value,
      type: els[7].value,
      startDate: els[8].value,
      endDate: els[9].value
    }

    await fetch("/api/employees/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmployee)
    })

    for(var i = 0, element; element = els[i++];) {
      console.log(element.name + ": " + element.value)
    }
    
  }
  return (<>
  <div className="color-block"></div>
  <h1>Create Employee Record</h1>
  <div className="form-box">
      <form id="employee">
        <div class="input-group">
        &nbsp;
        <div class="input-field">
            <input name="firstName" type="text" placeholder="First Name" required={true}/>
          </div>
          &nbsp;
          <div class="input-field">
            <input name="lastName" type="text" placeholder="Last Name" required={true}/>
          </div>
          &nbsp;
          <div class="input-field">
            <input name="address" type="text" placeholder="Address" />
          </div>
          &nbsp;
          <div class="input-field">
            <label htmlFor="DOB">Date of Birth: </label>
            <input id="DOB" name="dateOfBirth" type="date" placeholder="Date of Birth" required={true}/>
          </div>
          &nbsp;
          <div class="input-field">
            <input name="phoneNumber" type="text" placeholder="Phone Number" />
          </div>
          &nbsp;
          <div class="input-field">
            <input name="email" type="email" placeholder="Email address" />
          </div>
          &nbsp;
          <div class="input-field">
            <input name="SIN" type="number" placeholder="SIN" required={true}/>
          </div>
          &nbsp;
          <div class="input-field">
            <input name="type" type="text" placeholder="Type" />
          </div>
          &nbsp;
          <div class="input-field">
            <label htmlFor="SD">Start Date: </label>
            <input id="SD" name="startDate" type="date" placeholder="Start Date" required={true}/>
          </div>
          &nbsp;
          <div class="input-field">
            <label htmlFor="ED">End Date: </label>
            <input id="ED" name="endDate" type="date" placeholder="End Date" />
          </div>
          &nbsp;
        </div>
      </form>
      &nbsp;
      <div className = "create-record">
      <Link to="/CreateEmployeeRecord">
        <button onClick = {handleClick}>Create Record</button>
        </Link>
      </div>

      <div className = "go-back">
                <Link to="/LandingPage">
        <button> Go Back</button>
        </Link></div>
  </div>
  </>)
}
  export default CreateEmployeeRecord