const mongoose = require('mongoose');

const JobSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    workLocation: {
        type: String
    },
    hourlyPay: {
        type: Number,
        required: true
    }
});

var Job = mongoose.model('Job', JobSchema);

module.exports = {
    Job,
    JobSchema
};