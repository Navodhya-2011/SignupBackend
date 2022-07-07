const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/AdminModels');


router.post ('/adminsignup', (request, response) => {


    const signedUpUser = new signUpTemplateCopy({
        
        firstName:request.body.firstName,
        lastName:request.body.lastName,
        email:request.body.email,
        mobile:request.body.mobile,
        password:request.body.password,
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
});

module.exports = router