import { useMemo, useState } from 'react'
import { json } from 'react-router-dom';
import '../styles/login.css'

function SearchEmployees() {
  const [by, setBy] = useState("email")
  const [data, setData] = useState(undefined)
  async function handleClick(event) {
    event.preventDefault();
    const query = document.getElementById("query").value
    console.log(`/api/employees/${by}/${query}`);
    const results = await fetch(`/api/employees/${by}/${query}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    setData(await results.json())
  }
  return (
    <>
      <div className="color-block"></div>
      <div className="search">
        <h1>Search Employees</h1>
        <div className="search-container">
          <form className="search-form">
            <input id="query" type="text" placeholder="Search..." />
            &nbsp;
            <button onClick={handleClick} type="submit">Submit</button>
          </form>
          <form id="by" className="search-form">
            <label htmlFor="searchBy">Search by:</label>
            <select id="searchBy" onChange={e => setBy(e.target.value)}>
              <option value="email">Email</option>
              <option value="id">Employee ID</option>
              <option value="first">First Name</option>
              <option value="last">Last Name</option>
            </select>
          </form>
        </div>
        <div className='result-wrapper'>
        <table className="search-results">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>SIN</th>
            <th>Email</th>
          </tr>
          {
            data && (Array.isArray(data)) && (
              data.map((e, idx) => (
                <tr key={idx}>
                  <td>{e._id ?? "ID Not Found"}</td>
                  <td>{e.firstName ?? "First Name Not Found"}</td>
                  <td>{e.lastName ?? "Last Name Not Found"}</td>
                  <td>{e.SIN ?? "SIN Not Found"}</td>
                  <td>{e.email ?? "E-mail Not Found"}</td>
                </tr>
              ))
            )
          }
        </table>
        </div>
      </div>
    </>

  )
}
export default SearchEmployees