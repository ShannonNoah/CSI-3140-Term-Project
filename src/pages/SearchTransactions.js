import React from 'react'
import '../styles/login.css'

function SearchTransactions() {
  async function handleClick(event) {
    event.preventDefault();
    const by = document.getElementById("searchBy").value
    const query = document.getElementById("query").value
    const results = await fetch(`/api/employees/${ by }/:${ query }`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    
  }
  return (<>  
  <div className="color-block"></div>
  <div className="search">
    <h1>Search Transactions</h1>
    <div className="search-container">
      <form className="search-form">
        <input id="query" type="text" placeholder="Search..." />
        &nbsp;
        <button onClick={handleClick} type="submit">Submit</button>
      </form>
      
      <form className="search-form">
        <label htmlFor="searchBy">Search by:</label>
        <select id="searchBy">
          <option value="employeeID">Employee ID</option>
          <option value="name">Name</option>
        </select>
      </form>
    </div>
  </div></>)
}
  export default SearchTransactions