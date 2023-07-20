import React from 'react'
import '../styles/login.css'
import {Link} from "react-router-dom";

function CreateTransaction() {
  return (<>
<div className="color-block"></div>
  <h1>Create Transaction Record</h1>
  <div className="form-box">
      <form>
        <div class="input-group">
        &nbsp;
        <div className="input-field">
              <label htmlFor="startDate">Start Date:</label>
              <input type="date" id="startDate" placeholder="Start date" />
            </div>
          &nbsp;
          <div className="input-field">
              <label htmlFor="endDate">End Date:</label>
              <input type="date" id="endDate" placeholder="End date" />
            </div>
          &nbsp;
          <div className="input-field">
              <label htmlFor="overtime">Overtime:</label>
              <select id="overtime" defaultValue="">
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          &nbsp;
          <div class="input-field">
            <input type="number" placeholder="Period hours worked" />
          </div>
        </div>
      </form>
      &nbsp;
      <div className = "create-record">
      <Link to="/CreateEmployeeRecord">
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
  export default CreateTransaction
