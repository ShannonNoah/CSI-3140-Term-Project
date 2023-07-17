const User = require('../models/User.model.js');

const mongoose = require('mongoose');

// GET all users
const getUsers = async (req, res) => {
    const users = await User.find({}).sort({ createdAt: -1 });

    res.status(200).json(users);
};

// GET a a user matching an id
const getUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ err: 'id is not valid ObjectId' });
    }

    const user = await User.findById(id);

    if (!user) {
        return res.status(404).json({ err: 'User does not exist' });
    }

    return res.status(200).json(user);
};

// GET users matching an email
const getUserByEmail = async (req, res) => {
    const { email } = req.params;

    const user = await User.find({ email: email });

    if (!user) {
        return res.status(404).json({ err: 'User does not exist' });
    }

    return res.status(200).json(user);
};

// POST a new user
const createUser = async (req, res) => {
    const { email, password, accountType } = req.body;

    // add doc to db
    try {
        const user = await User.create({
            email: email,
            password: password,
            type: accountType
        });

        res.status(200).json(user);
    } catch(err) {
        console.log(err);

        res.status(400).json({ err: err.message });
    }
};

// DELETE a user matching an id
const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ err: 'id is not valid ObjectId' });
    }

    const user = await User.findOneAndDelete({ _id: id });

    if (!user) {
        return res.status(404).json({ err: 'User does not exist' });
    }

    return res.status(200).json(user);
};

// UPDATE a user matching an id
const updateUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ err: 'id is not valid ObjectId' });
    }

    console.log(req.body);
    
    const user = await User.findOneAndUpdate({ _id: id }, {
        ...req.body
    });

    if (!user) {
        return res.status(404).json({ err: 'User does not exist' });
    }

    return res.status(200).json(user);
};

module.exports = {
    getUsers,
    getUser,
    getUserByEmail,
    createUser,
    deleteUser,
    updateUser
};