const mongoose = require('mongoose')

const Insert = new mongoose.Schema({
    authId: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        required: true,
    },

    text: {
        type: String,
        required: true,
    },

    sender: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('notes', Insert)