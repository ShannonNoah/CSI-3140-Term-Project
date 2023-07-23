require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/users');
const employeeRoutes = require('./routes/employees');
const correspondsToRoutes = require('./routes/correspondsTo');
const transactionRoutes = require('./routes/transactions');
const attendanceRoutes = require('./routes/attendance');
const app = express();

// middleware
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// app.post('/api/employees', (req, req) => console.log(req))
// routes
app.use('/api/users', userRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/correspondsto', correspondsToRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/attendances', attendanceRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Connected to DB and Listening on port http://localhost:${ process.env.PORT }`);
        });        
    })
    .catch((err) => {
        console.log(err);
    });