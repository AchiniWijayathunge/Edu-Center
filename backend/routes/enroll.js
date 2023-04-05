const express = require("express");
const { createEnroll } = require("../controllers/enrollController");
const { getEnroll } = require("../controllers/enrollController");
const { getEnrollClassDetails } = require("../controllers/enrollController");
const requireAuth = require('../middleware/requireAuth')
const router = express.Router();
//require auth for all routes
router.use(requireAuth)

// Enroll a user

router.post('/:_id/:teacher_id/:class_id', createEnroll);


// get one users all classes
router.get('/:_id/:teacher_id/:class_id', getEnroll);

// get users enroll classes' details
router.get('classdetails/:_id/:teacher_id/:class_id', getEnrollClassDetails);
module.exports = router;
