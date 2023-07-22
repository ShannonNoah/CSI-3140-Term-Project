const Transaction = require('../models/Transaction.model.js');
const Employee = require('../models/Employee.model.js');

const mongoose = require('mongoose');

// GET all transactions
const getTransactions = async (req, res) => {
    const transactions = await Transaction.find({}).sort({ createdAt: -1 });

    res.status(200).json(transactions);
};

// GET a transaction matching an id
const getTransaction = async (req, res) => {
    const { query } = req.params;

    if (!mongoose.Types.ObjectId.isValid(query)) {
        return res.status(404).json({ err: 'id is not valid ObjectId' });
    }

    const transaction = await Transaction.findById(query);

    if (!transaction) {
        return res.status(404).json({ err: 'Transaction does not exist' });
    }
    console.log(transaction);

    return res.status(200).json(transaction);
};

// GET all transactions matching an employeeId
const getTransactionsByEmployeeId = async (req, res) => {
    const { query } = req.params;

    if (!mongoose.Types.ObjectId.isValid(employeeId)) {
        return res.status(404).json({ err: 'id is not valid ObjectId' });
    }

    const transactions = await Transaction.find({ employeeId: employeeId });

    if (!transactions) {
        return res.status(404).json({ err: 'No matching transactions' });
    }

    return res.status(200).json(transactions);
};

// GET all transactions matching a last name
const getTransactionsByLastName = async (req, res) => {
    const { query } = req.params;
    var res = [];

    const employeeIds = await Employee.find({ lastName: lastName })
                                .map(x => x._id.toString());

    if (!employeeIds) {
        return res.status(404).json({ err: 'No matching transactions' });
    }

    employeeIds.forEach(id => {
        var transactions = Transaction.find({ employeeId: id });

        res.concat(transactions);
    });

    return res.status(200).json(res);
};

// GET all transactions matching a first name
const getTransactionsByFirstName = async (req, res) => {
    const { query } = req.params;
    var res = [];

    const employeeIds = (await Employee.find({ firstName: query }) ?? [])
                                .map(x => x._id.toString());

    if (!employeeIds) {
        return res.status(404).json({ err: 'No matching transactions' });
    }

    const response = employeeIds.map(id => {
        var transactions = Transaction.find({ employeeId: id });
        return transactions;
    });

    return res.status(200).json(response);
};

// POST a new transaction
const createTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.create({
            ...req.body
        });

        res.status(200).json(transaction);
    } catch(err) {
        console.log(err);

        res.status(400).json({ err: err.message });
    }
};

// DELETE a transaction matching an id
const deleteTransaction = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ err: 'id is not valid ObjectId' });
    }

    const transaction = await Transaction.findOneAndDelete({ _id: id });

    if (!transaction) {
        return res.status(404).json({ err: 'Transaction does not exist' });
    }

    return res.status(200).json(transaction);
};

// UPDATE a transaction matching an id
const updateTransaction = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ err: 'id is not valid ObjectId' });
    }

    const transaction = await Employee.findOneAndUpdate({ _id: id }, {
        ...req.body
    }, {
        new: true
    });

    if (!transaction) {
        return res.status(404).json({ err: 'Transaction does not exist' });
    }

    return res.status(200).json(transaction);
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