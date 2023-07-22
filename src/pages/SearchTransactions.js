import React from 'react'
import { useMemo, useState } from 'react'
import { json } from 'react-router-dom';
import '../styles/login.css'

function SearchTransactions() {
  const [by, setBy] = useState("id")
  const [data, setData] = useState(undefined)
  async function handleClick(event) {
    event.preventDefault();
    const query = document.getElementById("query").value
    const results = await fetch(`/api/transactions/${by}/${query}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    console.log(results)
    setData(await results.json())
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
          <select id="searchBy" onChange={(e => setBy(e.target.value))}>
            <option value="id">Transaction ID</option>
            <option value="employee">Employee ID</option>
          </select>
        </form>
      </div>
      <div className='result-wrapper'>
        <table className="search-results">
          <tr>
            <th>Transaction ID</th>
            <th>Employee ID</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Overtime</th>
            <th>Period Hours Worked</th>
            <th>Total Paid</th>
          </tr>
          {
            data && (
                <tr>
                  <td>{data._id ?? "Transaction ID Not Found"}</td>
                  <td>{data.employeeId ?? "Employee ID Not Found"}</td>
                  <td>{data.startDate ?? "Start Date Not Found"}</td>
                  <td>{data.endDate ?? "End Date Not Found"}</td>
                  <td>{data.overtime ?? "Overtime Not Found"}</td>
                  <td>{data.periodHoursWorked ?? "Period Hours Not Found"}</td>
                  <td>{data.totalPaid ?? "Total Paid Not Found"}</td>
                </tr>
            )
          }
        </table>
      </div>
    </div></>)
}
export default SearchTransactions