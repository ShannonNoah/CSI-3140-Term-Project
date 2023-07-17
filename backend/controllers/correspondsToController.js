const CorrespondsTo = require('../models/CorrespondsTo.model.js');

const mongoose = require('mongoose');

// GET all correspondsTo
const getAllCorrespondsTo = async (req, res) => {
    const correspondsTo = await CorrespondsTo.find({}).sort({ createdAt: -1 });

    res.status(200).json(correspondsTo);
};

// GET a single correspondsTo matching an id
const getCorrespondsTo = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ err: 'id is not valid ObjectId' });
    }

    const correspondsTo = await CorrespondsTo.findById(id);

    if (!correspondsTo) {
        return res.status(404).json({ err: 'CorrespondsTo does not exist' });
    }

    return res.status(200).json(correspondsTo);
};

// GET a single correspondsTo matching a userId
const getCorrespondsToByUser = async (req, res) => {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(404).json({ err: 'id is not valid ObjectId' });
    }

    const correspondsTo = await CorrespondsTo.find({ userId: userId });

    if (!correspondsTo) {
        return res.status(404).json({ err: 'CorrespondsTo does not exist' });
    }

    return res.status(200).json(correspondsTo);
};

// GET a single correspondsTo matching an employeeId
const getCorrespondsToByEmployee = async (req, res) => {
    const { employeeId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(employeeId)) {
        return res.status(404).json({ err: 'id is not valid ObjectId' });
    }

    const correspondsTo = await CorrespondsTo.find({ employeeId: employeeId });

    if (!correspondsTo) {
        return res.status(404).json({ err: 'CorrespondsTo does not exist' });
    }

    return res.status(200).json(correspondsTo);
};

// POST a new correspondsTo
const createCorrespondsTo = async (req, res) => {
    const { userId, employeeId } = req.body;

    // add doc to db
    try {
        const correspondsTo = await CorrespondsTo.create({
            userId: userId,
            employeeId: employeeId
        });

        res.status(200).json(correspondsTo);
    } catch(err) {
        console.log(err);

        res.status(400).json({ err: err.message });
    }
};

// DELETE an correspondsTo matching an id
const deleteCorrespondsTo = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ err: 'id is not valid ObjectId' });
    }

    const correspondsTo = await CorrespondsTo.findOneAndDelete(id);

    if (!correspondsTo) {
        return res.status(404).json({ err: 'CorrespondsTo does not exist' });
    }

    return res.status(200).json(correspondsTo);
};

// UPDATE an correspondsTo matching an id
const updateCorrespondsTo = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ err: 'id is not valid ObjectId' });
    }

    const correspondsTo = await CorrespondsTo.findOneAndUpdate({ _id: id }, {
        ...req.body
    });

    if (!correspondsTo) {
        return res.status(404).json({ err: 'CorrespondsTo does not exist' });
    }

    return res.status(200).json(correspondsTo);
};

module.exports = {
    getAllCorrespondsTo,
    getCorrespondsTo,
    getCorrespondsToByUser,
    getCorrespondsToByEmployee,
    createCorrespondsTo,
    deleteCorrespondsTo,
    updateCorrespondsTo
};