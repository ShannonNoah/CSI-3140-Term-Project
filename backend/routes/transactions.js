const express = require('express');

const {
    getTransactions,
    getTransaction,
    getTransactionsByEmployeeId,
    getTransactionsByLastName,
    getTransactionsByFirstName,
    createTransaction,
    deleteTransaction,
    updateTransaction
} = require('../controllers/TransactionController.js');

const router = express.Router();

// GET all transactions
router.get('/', getTransactions);

// GET a transaction matching an id
router.get('/id/:id', getTransaction);

// GET all transactions matching an employeeId
router.get('/employee/:employeeId', getTransactionsByEmployeeId);

// GET all transactions matching a last name
router.get('/last/:lastName', getTransactionsByLastName);

// GET all transactions matching a first name
router.get('/first/:firstName', getTransactionsByFirstName);

// POST a new transaction
router.post('/', createTransaction);

// DELETE a transaction matching an id
router.delete('/:id', deleteTransaction);

// UPDATE a transaction matching an id
router.patch('/:id', updateTransaction);

module.exports = router;