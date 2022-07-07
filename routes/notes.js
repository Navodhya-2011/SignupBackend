const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const StudentNoteCopy = require('../models/StudentNotesModels');

router.post ('/insert', (request, response) => {
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

//Get all notes
router.get("/note", async (req, res) => {
    try{
        const student = await StudentNoteCopy.find();
        res.status(200).json(student);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//Update
router.put("/:id", async (req, res) => {

    try{
        const updateStudentNote = await  StudentNoteCopy.findByIdAndUpdate(req.params.id, {
            authId: req.body.authId,
            title: req.body.title,
            text: req.body.text,
            sender: req.body.sender,
        });

        res.status(200).json(updateStudentNote);
    }
    catch(err){
        res.status(500).json(err)
    }
});

module.exports = router