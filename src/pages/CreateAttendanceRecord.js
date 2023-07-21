import React from 'react'
import '../styles/login.css'
import {Link} from "react-router-dom";
import axios from 'axios'

function CreateAttendanceRecord() {
  async function handleClick(event) {
    event.preventDefault();
    var els = document.getElementById("attendance").elements
    const newAttendance = {
      employeeId: els[0].value,
      type: els[1].value,
    }

    await fetch("http://localhost:8000/api/attendances", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAttendance)
    })

    for(var i = 0, element; element = els[i++];) {
      console.log(element.name + ": " + element.value)
    }
    
  }
  return (<>
  <div className="color-block"></div>
  <h1>Create Attendance Record</h1>
  <div className="form-box">
      <form id="attendance">
        <div class="input-group">
        &nbsp;
        <div class="input-field">
            <input name="employeeId" type="employeeID" placeholder="Employee ID" />
          </div>
          &nbsp;
          <div class="input-field">
            <input name="type" type="text" placeholder="Type" />
          </div>
        </div>
      </form>
      &nbsp;
      <div className = "create-record">
      <Link to="/CreateAttendanceRecord">
        <button onClick={handleClick}>Create Record</button>
        </Link>
      </div>

      <div className = "go-back">
                <Link to="/LandingPage">
        <button>Go Back</button>
        </Link></div>
  </div>
  </>)
}
  export default CreateAttendanceRecord