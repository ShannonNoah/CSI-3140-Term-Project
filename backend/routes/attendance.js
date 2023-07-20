const express = require('express');

const {
    getAttendanceRecords,
    getAttendanceRecord,
    getAttendanceRecordByEmployeeId,
    getAttendanceRecordByType,
    getAttendanceRecordByDate,
    createAttendanceRecord,
    deleteAttendanceRecord,
    updateAttendanceRecord
} = require('../controllers/attendanceController.js');

const router = express.Router();

// GET all attendance records
router.get('/', getAttendanceRecords);

// GET an attendance record matching an id
router.get('/id/:id', getAttendanceRecord);

// GET attendance records matching an employee id
router.get('/employee/:employeeId', getAttendanceRecordByEmployeeId);

// GET attendance records matching a specific attendance type
router.get('/type/:type', getAttendanceRecordByType);

// GET attendance records matching a specific date
router.get('/date/:date', getAttendanceRecordByDate);

// POST new attendance record
router.post('/', createAttendanceRecord);

// DELETE an attendance record matching an id
router.delete('/:id', deleteAttendanceRecord);

// UPDATE an attendance record matching a id
router.patch('/:id', updateAttendanceRecord);

module.exports = router;