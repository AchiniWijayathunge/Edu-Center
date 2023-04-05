const express = require('express')
const {
    createTeacher,
    getTeachers,
    getTeacher,
    updateTeacher,
    deleteTeacher

} = require ('../controllers/teacherController')

// const requireAuth = require('../middleware/requireAuth')
// require auth for all teachers routes
const router = express.Router()

// router.use(requireAuth)


//Get all teachers
router.get('/', getTeachers)
//Get a one teacher
router.get('/:id', getTeacher)

//Add a new teacher
router.post('/', createTeacher)
// Delete a teacher
router.delete('/:id', deleteTeacher)

//Update teacher details
router.patch('/:id', updateTeacher)


module.exports =router