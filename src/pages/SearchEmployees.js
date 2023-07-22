import React from 'react'
import '../styles/login.css'

function SearchEmployees() {
  async function handleClick(event) {
    event.preventDefault();
    const by = document.getElementById("searchBy").value
    const query = document.getElementById("query").value
    const results = await fetch(`/api/employees/${by}/:${query}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
  return (
    <>
      <div className="color-block"></div>
      <div className="search">
        <h1>Search Employees</h1>
        <div className="search-container">
          <form className="search-form">
            <input name="query" type="text" placeholder="Search..." />
            &nbsp;
            <button onClick={handleClick} type="submit">Submit</button>
          </form>

          <form id="by" className="search-form">
            <label htmlFor="searchBy">Search by:</label>
            <select id="searchBy">
              <option value="email">Email</option>
              <option value="employeeID">Employee ID</option>
              <option value="firstName">First Name</option>
              <option value="lastName">Last Name</option>
            </select>
          </form>
        </div>
      </div>
    </>

  )
}
export default SearchEmployees