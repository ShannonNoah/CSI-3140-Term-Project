const Attendance = require('../models/Attendance.model.js');

const mongoose = require('mongoose');

// GET all attendance records
const getAttendanceRecords = async (req, res) => {

};

// GET an attendance record matching an id
const getAttendanceRecord = async (req, res) => {

};

// GET attendance records matching an employee id
const getAttendanceRecordByEmployeeId = async (req, res) => {

};

// GET attendance records matching a specific attendance type
const getAttendanceRecordByType = async (req, res) => {

};

// POST new attendance record
const createAttendanceRecord = async (req, res) => {

};

// DELETE an attendance record matching an id
const deleteAttendanceRecord = async (req, res) => {

};

// UPDATE an attendance record matching a id
const updateAttendanceRecord = async (req, res) => {

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