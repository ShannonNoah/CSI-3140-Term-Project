import React from 'react'
import '../styles/login.css'
import {Link} from "react-router-dom";

function CreateTransaction() {
  async function handleClick(event) {
    event.preventDefault();
    var els = document.getElementById("transaction").elements
    const newTransaction = {
      employeeId: els[0].value,
      startDate: els[1].value,
      endDate: els[2].value,
      overtime: els[3].value,
      periodHoursWorked: els[4].value,
      totalHoursWorked: els[5].value,
      totalPaid: els[6].value,
    }

    await fetch("http://localhost:8000/api/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction)
    })

    for(var i = 0, element; element = els[i++];) {
      console.log(element.name + ": " + element.value)
    }
    
  }
  return (<>
<div className="color-block"></div>
  <h1>Create Transaction Record</h1>
  <div className="form-box">
      <form id="transaction">
        <div class="input-group">
          &nbsp;
          <div className="input-field">
            <input name="employeeId" type="employeeID" placeholder="Employee ID" required={true}/>
          </div>
          &nbsp;
          <div className="input-field">
              <label htmlFor="startDate">Start Date:</label>
              <input name="startDate" type="date" id="startDate" placeholder="Start date" required={true}/>
          </div>
          &nbsp;
          <div className="input-field">
              <label htmlFor="endDate">End Date:</label>
              <input name="endDate" type="date" id="endDate" placeholder="End date" required={true}/>
            </div>
          &nbsp;
          <div className="input-field">
              <label htmlFor="overtime">Overtime:</label>
              <select name="overtime" id="overtime" defaultValue="" required={true}>
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          &nbsp;
          <div class="input-field">
            <input name="periodHoursWorked" type="number" placeholder="Period hours worked" required={true} />
          </div>
          &nbsp;
          <div class="input-field">
            <input name="totalHoursWorked" type="number" placeholder="Total hours worked" required={true} />
          </div>
          &nbsp;
          <div class="input-field">
            <input name="totalPaid" type="number" placeholder="Total paid" required={true} />
          </div>
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
        <button>Go Back</button>
        </Link></div>


    </div>
    </>)
}
  export default CreateTransaction
