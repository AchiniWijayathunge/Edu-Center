const express = require('express')
const {
    createTimetable,
    getTimetable,
    deleteTimetable,
    updateTimetable

} = require ('../controllers/timetableController')
const Timetable =require('../models/timetableModel')

const router = express.Router()
//Get all teachers
router.get('/', getTimetable)

//Add a new teacher
router.post('/', createTimetable)
// Delete a teacher
router.delete('/:id', deleteTimetable)

//Update teacher details
router.patch('/:id', updateTimetable)


module.exports =router