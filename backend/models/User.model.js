const mongoose = require('mongoose');
const {
    EmployeeSchema
 } = require('./Employee.model');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Administrator', 'Standard'],
        required: true
    }
}, {
    timestamps: true
});

var User = mongoose.model('User', UserSchema);

module.exports = User;