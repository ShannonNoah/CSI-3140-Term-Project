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
router.get('/id/:query', getTransaction);

// GET all transactions matching an employeeId
router.get('/employee/:query', getTransactionsByEmployeeId);

// GET all transactions matching a last name
router.get('/last/:query', getTransactionsByLastName);

// GET all transactions matching a first name
router.get('/first/:query', getTransactionsByFirstName);

// POST a new transaction
router.post('/', createTransaction);

// DELETE a transaction matching an id
router.delete('/:id', deleteTransaction);

// UPDATE a transaction matching an id
router.patch('/:id', updateTransaction);

module.exports = router;