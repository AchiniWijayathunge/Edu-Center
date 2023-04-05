const express = require('express')
const {
    createClass,
    getClasses,
    getClass,
    deleteClass,
    updateClass,
    getClassesByTeacherId,
   
} = require ('../controllers/classController')
const Class =require('../models/classModel')

const router = express.Router()
//Get all classes /api/classes
router.get('/', getClasses)

//Add a new class /api/classes
router.post('/:teacher_id', createClass)

//get all classes of one teacher
router.get('/:teacher_id', getClassesByTeacherId)

//Get single class /api/classes
router.get('/:teacher_id/:class_id', getClass)


// Delete a class /api/classes
router.delete('/:teacher_id/:class_id', deleteClass)

//Update class details /api/classes
router.patch('/:teacher_id/:class_id', updateClass)




module.exports =router