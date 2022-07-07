const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels');


router.post ('/signup', (request, response) => {


    const signedUpUser = new signUpTemplateCopy({
        id:request.body.id,
        firstName:request.body.firstName,
        lastName:request.body.lastName,
        email:request.body.email,
        mobile:request.body.mobile,
        status:request.body.status,
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