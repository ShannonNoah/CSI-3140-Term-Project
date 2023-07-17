const mongoose = require('mongoose');
const {
    JobSchema
 } = require('./Job.model');

const EmployeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }, 
    address: {
        type: String
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    phoneNumber: {
        type: String
    },
    email: {
        type: String
    },
    SIN: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
    },
    job: [JobSchema]
}, {
    timestamps: true
});

var Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;