import React from 'react'
import '../styles/login.css'
import {Link} from "react-router-dom";

function login() {
  return (
    <div className="landing">
        <div className="color-block"></div>
        <h1>What would you like to do?</h1>
        <div className = "button-row">
        <Link to="/CreateEmployeeRecord">
        <button>Create Employee record</button>
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/CreateTransaction">
        <button>Create Transaction</button>
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/CreateAttendanceRecord">
        <button>Create Attendance Record</button>
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/SearchEmployees">
        <button>Search Employees</button>
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/SearchTransactions">
        <button>Search Transactions</button>
        </Link>
        </div>

        
    </div>
  )
}

export default login