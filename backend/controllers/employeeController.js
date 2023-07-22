const Employee = require('../models/Employee.model.js');

const mongoose = require('mongoose');

// GET all employees
const getEmployees = async (req, res) => {
    const employees = await Employee.find({}).sort({ createdAt: -1 });

    res.status(200).json(employees);
};

// GET a single employee matching an id
const getEmployee = async (req, res) => {
    const { query } = req.params;

    if (!mongoose.Types.ObjectId.isValid(query)) {
        return res.status(404).json({ err: 'id is not valid ObjectId' });
    }

    const employee = await Employee.findById(query);

    if (!employee) {
        return res.status(404).json({ err: 'Employee does not exist' });
    }

    return res.status(200).json(employee);
};

// GET employees matching a last name
const getEmployeeByLastName = async (req, res) => {
    const { query } = req.params;

    const employee = await Employee.find({ lastName: query });

    if (!employee) {
        return res.status(404).json({ err: 'Employee does not exist' });
    }

    return res.status(200).json(employee);
};

// GET employees matching a first name
const getEmployeeByFirstName = async (req, res) => {
    const { query } = req.params;
    console.log(query, 2);
    const employee = await Employee.find({ firstName: query });

    if (!employee) {
        return res.status(404).json({ err: 'Employee does not exist' });
    }

    return res.status(200).json(employee);
};

// GET employees matching an email
const getEmployeeByEmail = async (req, res) => {
    const { query } = req.params;

    const employee = await Employee.find({ email: query });

    if (!employee) {
        return res.status(404).json({ err: 'Employee does not exist' });
    }

    return res.status(200).json(employee);
};

// POST a new employee
const createEmployee = async (req, res) => {
    try {
        const employee = await Employee.create({
            ...req.body
        });

        res.status(200).json(employee);
    } catch(err) {
        console.log(err);

        res.status(400).json({ err: err.message });
    }
};

// DELETE an employee matching an id
const deleteEmployee = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ err: 'id is not valid ObjectId' });
    }

    const employee = await Employee.findOneAndDelete({ _id: id });

    if (!employee) {
        return res.status(404).json({ err: 'Employee does not exist' });
    }

    return res.status(200).json(employee);
};

// UPDATE an employee matching an id
const updateEmployee = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ err: 'id is not valid ObjectId' });
    }

    const employee = await Employee.findOneAndUpdate({ _id: id }, {
        ...req.body
    }, {
        new: true
    });

    if (!employee) {
        return res.status(404).json({ err: 'Employee does not exist' });
    }

    return res.status(200).json(employee);
};

module.exports = {
    getEmployees,
    getEmployee,
    getEmployeeByLastName,
    getEmployeeByFirstName,
    getEmployeeByEmail,
    createEmployee,
    deleteEmployee,
    updateEmployee
};