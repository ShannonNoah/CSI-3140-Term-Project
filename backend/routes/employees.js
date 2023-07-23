const express = require('express');

const {
    getEmployees,
    getEmployee,
    getEmployeeByLastName,
    getEmployeeByFirstName,
    getEmployeeByEmail,
    createEmployee,
    deleteEmployee,
    updateEmployee
} = require('../controllers/employeeController.js');

const router = express.Router();

// GET all employees
router.get('/', getEmployees);

// GET a single employee
router.get('/id/:query', getEmployee);

// GET employees based on last name
router.get('/last/:query', getEmployeeByLastName);

// GET employees based on first name
router.get('/first/:query', getEmployeeByFirstName);

// GET employees based on email
router.get('/email/:query', getEmployeeByEmail);

/*
const middle = (req, res, next) => {
    console.log(req)
    next()
}
*/

// POST a new employee
router.post('/', createEmployee);


// DELETE an employee
router.delete('/:id', deleteEmployee);

// UPDATE an employee
router.patch('/:id', updateEmployee);

module.exports = router;