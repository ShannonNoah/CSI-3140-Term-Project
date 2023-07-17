const express = require('express');

const {
    getUsers,
    getUser,
    getUserByEmail,
    createUser,
    deleteUser,
    updateUser
} = require('../controllers/userController.js');

const router = express.Router();

// GET all users
router.get('/', getUsers);

// GET a single user
router.get('/id/:id', getUser);

// GET a single user based on email
router.get('/email/:email', getUserByEmail);

// POST a new user
router.post('/', createUser);

// DELETE a user
router.delete('/:id', deleteUser);

// UPDATE a user
router.patch('/:id', updateUser);

module.exports = router;