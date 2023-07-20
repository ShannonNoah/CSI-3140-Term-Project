import React from 'react'
import '../styles/login.css'
import {Link} from "react-router-dom";

function CreateAttendanceRecord() {
  return (<>
  <div className="color-block"></div>
  <h1>Create Attendance Record</h1>
  <div class="form-box">
      <form>
        <div class="input-group">
        &nbsp;
        <div class="input-field">
            <input type="number" placeholder="Employee ID" />
          </div>
          &nbsp;
          <div class="input-field">
            <input type="text" placeholder="Type" />
          </div>
        </div>
      </form>
      &nbsp;
      <div className = "create-record">
      <Link to="/CreateAttendanceRecord">
        <button>Create Record</button>
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