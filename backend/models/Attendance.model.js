const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    type: {
        type: String,
        enum: ['Present', 'Late', 'Absent', 'Sick', 'Vacation'],
        required: true
    }
}, {
    timestamps: true
});

var Attendance = mongoose.model('Attendance', AttendanceSchema);

module.exports = Attendance;