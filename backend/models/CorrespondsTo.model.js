const mongoose = require('mongoose');

const CorrespondsToSchema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    employeeId: {
        type: mongoose.Types.ObjectId,
        ref: 'Employee',
        required: true
    }
}, {
    timestamps: true
});

var CorrespondsTo = mongoose.model('CorrespondsTo', CorrespondsToSchema);

module.exports = CorrespondsTo;