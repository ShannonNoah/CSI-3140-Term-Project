import React from 'react'
import '../styles/login.css'
import {Link} from "react-router-dom";

function CreateTransaction() {
  return (<>
<div className="color-block"></div>
  <h1>Create Transaction Record</h1>
  <div class="form-box">
      <form>
        <div class="input-group">
        &nbsp;
        <div class="input-field">
            <input type="text" placeholder="First Name" />
          </div>
          &nbsp;
          <div class="input-field">
            <input type="text" placeholder="Last Name" />
          </div>
          &nbsp;
          <div class="input-field">
            <input type="number" placeholder="Overtime" />
          </div>
          &nbsp;
          <div class="input-field">
            <input type="number" placeholder="Total hours worked" />
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