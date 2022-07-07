const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const StudentNoteCopy = require('../models/StudentNotesModels');

note.post ('/insert', (request, response) => {
    const StudentNote = new StudentNoteCopy({
        authId:request.body.authId,
        title:request.body.title,
        text:request.body.text,
        sender:request.body.sender,
    })
    StudentNote.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
});

module.exports = note