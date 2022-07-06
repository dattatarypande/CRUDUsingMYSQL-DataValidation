var express = require('express');
const connection = require('../controller/mysql.connection');
var router = express.Router();
const studentController=require('../controller/student.controller');
const {body}=require('express-validator');

// const connection =require('../controller/mysql.connection');

/* GET home page. */
router.get('/',studentController.getAllStudents);
router.post('/create',
body('Name').notEmpty().withMessage('Name Required').isAlpha().withMessage('Name Should Be in Alphabetical').isLength({min:2,max:30}).withMessage('Name Size min 2 and max 30'),body('Email_ID').notEmpty().withMessage('Please fill email Field').isEmail().withMessage('Pleae Enter The Email In Proper Format').normalizeEmail(),body('Age').notEmpty().withMessage('Enter The Age').isNumeric().withMessage('Age Shpuld Be in Digit'),
studentController.createdata);
router.get('/find/:id',studentController.finddata);
router.post('/delete/:id',studentController.deletedata);
router.post('/update/:id',studentController.dataupdate);
module.exports=router;
