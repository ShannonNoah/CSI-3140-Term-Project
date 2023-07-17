const Attendance = require('../models/Attendance.model.js');

const mongoose = require('mongoose');

// GET all attendance records
const getAttendanceRecords = async (req, res) => {
    const records = await Attendance.find({}).sort({ createdAt: -1 });

    return res.status(200).json(records);
};

// GET an attendance record matching an id
const getAttendanceRecord = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ err: 'id is not valid ObjectId' });
    }

    const record = await Attendance.findById(id);

    if (!record) {
        return res.status(404).json({ err: 'Attendance record does not exist' });
    }

    return res.status(200).json(record);
};

// GET attendance records matching an employee id
const getAttendanceRecordByEmployeeId = async (req, res) => {
    const { employeeId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(employeeId)) {
        return res.status(404).json({ err: 'id is not valid ObjectId' });
    }

    const records = await Attendance.find({ employeeId: employeeId });

    if (!records) {
        return res.status(404).json({ err: 'No matching attendance records' });
    }

    return res.status(200).json(records);
};

// GET attendance records matching a specific attendance type
const getAttendanceRecordByType = async (req, res) => {
    const { type } = req.params;

    try {
        const records = await Attendance.find({ type: type });

        if (!records) {
            return res.status(404).json({ err: 'No matching attendance records' });
        }

        return res.status(200).json(records);
    } catch(err) {
        console.log(err);

        return res.status(400).json({ err: err.message });
    }
};

// POST new attendance record
const createAttendanceRecord = async (req, res) => {
    try {
        const record = await Attendance.create({
            ...req.body
        });

        return res.status(200).json(record);
    } catch(err) {
        console.log(err);

        return res.status(400).json({ err: err.message });
    }
};

// DELETE an attendance record matching an id
const deleteAttendanceRecord = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ err: 'id is not valid ObjectId' });
    }

    const record = await Attendance.findOneAndDelete({ _id: id });

    if (!record) {
        return res.status(404).json({ err: 'Attendance record does not exist' });
    }

    return res.status(200).json(record);
};

// UPDATE an attendance record matching a id
const updateAttendanceRecord = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ err: 'id is not valid ObjectId' });
    }

    const record = await Attendance.findOneAndUpdate({ _id: id }, {
        ...req.body
    }, {
        new: true
    });

    return res.status(200).json(record);
}

module.exports = {
    getAttendanceRecords,
    getAttendanceRecord,
    getAttendanceRecordByEmployeeId,
    getAttendanceRecordByType,
    createAttendanceRecord,
    deleteAttendanceRecord,
    updateAttendanceRecord
};