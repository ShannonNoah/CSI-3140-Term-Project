const Transaction = require('../models/Transaction.model.js');

const mongoose = require('mongoose');

// GET all transactions
const getTransactions = async (req, res) => {

};

// GET a transaction matching an id
const getTransaction = async (req, res) => {
    
};

// GET all transactions matching an employeeId
const getTransactionsByEmployeeId = async (req, res) => {
    
};

// GET all transactions matching a last name
const getTransactionsByLastName = async (req, res) => {
    
};

// GET all transactions matching a first name
const getTransactionsByFirstName = async (req, res) => {
    
};

// POST a new transaction
const createTransaction = async (req, res) => {

};

// DELETE a transaction matching an id
const deleteTransaction = async (req, res) => {

};

// UPDATE a transaction matching an id
const updateTransaction = async (req, res) => {

};

module.exports = {
    getTransactions,
    getTransaction,
    getTransactionsByEmployeeId,
    getTransactionsByLastName,
    getTransactionsByFirstName,
    createTransaction,
    deleteTransaction,
    updateTransaction
};