const express = require('express')
const {
    createClass,
    getClasses,
    //getClass,
    deleteClass,
    updateClass

} = require ('../controllers/classController')
const Class =require('../models/classModel')

const router = express.Router()
//Get all teachers
router.get('/', getClasses)

//Get single class
//router.get('/', getClass)
//Add a new teacher
router.post('/', createClass)
// Delete a teacher
router.delete('/:id', deleteClass)

//Update teacher details
router.patch('/:id', updateClass)


module.exports =router