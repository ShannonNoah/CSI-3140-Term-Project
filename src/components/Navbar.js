import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
        <div className="leftSide">
            <h1>CompanyName</h1>
        </div>
        <div className = "rightSide">
        <Link to= "/Login"> Login </Link>
          <div className = "button">
          <Link to= "/Register"> Register </Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar