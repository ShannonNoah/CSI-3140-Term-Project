const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    overtime: {
        type: Boolean,
        required: true
    },
    periodHoursWorked: {
        type: Number,
        required: true
    },
    totalHoursWorked: {
        type: Number,
        required: true
    },
    totalPaid: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

var Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;