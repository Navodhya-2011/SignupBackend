const mongoose = require('mongoose')

const Student = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },

    firstName: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    dateOfBirth: {
        type: Date,
        default: Date.now,
    },

    mobile: {
        type: String,
        required: true,
    },

    status: {
        type: Boolean,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    isStudent: {
        type: Boolean,
        default: true,
    },
})

module.exports = mongoose.model('signuo', Student)