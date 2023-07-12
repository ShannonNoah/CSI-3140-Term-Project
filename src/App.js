import './App.css';
import Navbar from './components/Navbar';
import NavbarLogout from './components/NavbarLogout';
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateTransaction from "./pages/CreateTransaction";
import CreateEmployeeRecord from "./pages/CreateEmployeeRecord";
import CreateAttendanceRecord from "./pages/CreateAttendanceRecord";
import LandingPage from "./pages/LandingPage";
import SearchEmployees from "./pages/SearchEmployees";
import SearchTransactions from "./pages/SearchTransactions";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/LandingPage" element={<LandingPage/>}/>
        <Route path="/CreateTransaction" element={<CreateTransaction/>}/>
        <Route path="/CreateEmployeeRecord" element={<CreateEmployeeRecord/>}/>
        <Route path="/CreateAttendanceRecord" element={<CreateAttendanceRecord/>}/>
        <Route path="/SearchEmployees" element={<SearchEmployees/>}/>
        <Route path="/SearchTransactions" element={<SearchTransactions/>}/>
      </Routes>
      </Router>


   
    </div>
  );
}

export default App;
