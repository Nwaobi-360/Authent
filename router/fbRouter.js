//first we import our expresss de3pendency\
const express = require ('express');
//we createv a router object
const router = express.Router();
//we then require our controller file and import all the methods from the controller file
const {register, login} = require ('../controller/fbController');
//route for signup
router.post ('/signUP', register)
//route for login
router.post ('/signIN'), login

//then we export our router to the serveer
module.exports = router;

