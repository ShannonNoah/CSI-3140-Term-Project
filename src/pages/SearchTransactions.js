import React from 'react'
import '../styles/login.css'

function SearchTransactions() {
  return (<>  
  <div className="color-block"></div>
  <div className="search">
    <h1>Search Transactions</h1>
    <div className="search-container">
      <form className="search-form">
        <input type="text" placeholder="Search..." />
        &nbsp;
        <button type="submit">Submit</button>
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