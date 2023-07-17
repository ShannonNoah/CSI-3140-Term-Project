const express = require('express');

const {
    getAllCorrespondsTo,
    getCorrespondsTo,
    getCorrespondsToByUser,
    getCorrespondsToByEmployee,
    createCorrespondsTo,
    deleteCorrespondsTo,
    updateCorrespondsTo,
} = require('../controllers/correspondsToController.js');

const router = express.Router();

// GET all correspondsTo
router.get('/', getAllCorrespondsTo);

// GET a single correspondsTo
router.get('/id/:id', getCorrespondsTo);

// GET a single correspondsTo based on userId
router.get('/user/:userId', getCorrespondsToByUser);

// GET a single correspondsTo based on employeeId
router.get('/employee/:employeeId', getCorrespondsToByEmployee);

// POST a new correspondsTo
router.post('/', createCorrespondsTo);

// DELETE an correspondsTo
router.delete('/:id', deleteCorrespondsTo);

// UPDATE an correspondsTo
router.patch('/:id', updateCorrespondsTo);

module.exports = router;