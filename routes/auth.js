const router = require("express").Router();
const Joi = require("joi");
const SignUpModels = require("../models/SignUpModels");
const AdminModels = require("../models/AdminModels");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { invalid } = require("joi");
const { findById } = require("../models/StudentNotesModels");
const StudentNotesModels = require("../models/StudentNotesModels");

router.post("/", async (req,res) => {
    try {
        const {error} = validate(req.body);
        if (error) {
            return res.status(400).send({message: error.details[0].message});
        }

        const studentExits = await SignUpModels.findOne({email: req.body.email});
        const adminExists = await AdminModels.findOne({email: req.body.email});
        if(!studentExits) {

            return res.status(401).send({message: "Invalid Email"});
        }
        else{
            // const validPassword = await bycrypt.compare(
            //     req.body.password,
            //     studentExits.password,
            // );
            // const validPassword = 
            console.log(studentExits.password === req.body.password);
            const validPassword = studentExits.password === req.body.password
            if(!validPassword) {
                return res.status(401).send({message: "Invalid Email or password"});
            }
            else{
                // console.log('1');
                // const token = await jwt.sign({_id: studentExist._id}, process.env.TOKEN_SECRET);
                // console.log('2');
                // res.header("authToken", token).send({
                // "authToken":token,
                // "role": "student",
                // "roleData": studentExist
                return res.send(studentExits)
            //});
            }
        }

        if(!adminExists) {
            return res.status(401).send({message: "Invalid Email"});
        }
        else{
            // const validPassword = await bycrypt.compare(
            //     req.body.password,
            //     adminExists.password,
            //);
            if(!validPassword) {
                return res.status(401).send({message: "Invalid Email or password"});
            }
            else{
                // const token = await jwt.sign({_id: adminExists.id}, process.env.TOKEN_SECRET);
                // res.header("authToken", token).send({
                // "authToken":token,
                // "role": "student",
                // "roleData": adminExists
            //});
            return res.send(studentExits)
            }
            
        }

        // const token = studentExits.generateAuthToken();
        // res.status(200).send({data: token, message: "Logged in successfully"});
    }
    catch (error) {
        res.status(500).send({message: "Internal Server Error"});
    }
});

const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().required().label("Email"),
        password: Joi.string().required().label("Password"),
    });

    return schema.validate(data);
};



//Delete
router.delete("/:id", async (req, res) => {
    try{
        await SignUpModels.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
    }
    catch(err){
        res.status(500).json(err);
    }
});

//Get all notes
router.get("/note", async (req, res) => {
    try{
        const student = await StudentNotesModels.find();
        res.status(200).json(student);
    }
    catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;