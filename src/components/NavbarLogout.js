import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/Navbar.css'

function NavbarLogout() {
  return (
    <div className="navbar">
        <div className="leftSide">
            <h1>CompanyName</h1>
        </div>
        <div className = "rightSide">
          <div className = "button">
          <Link to= "/Login"> Logout </Link>
          </div>
        </div>
    </div>
  )
}

export default NavbarLogout