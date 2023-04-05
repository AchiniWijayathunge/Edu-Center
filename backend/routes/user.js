const express = require("express");

// controller functions
const {
  SignUpAdmin,
  SignInUser,
  SignUpUser,
  getUsers,
getUser,
  deleteUser,
  updateUser,
  
} = require("../controllers/userController");

const router = express.Router();
// //Add a new class /api/classes
// router.post('/SignIn', SignInAdmin)
// login route
router.post('/SignIn', SignInUser);

// signup route
router.post('/SignUp', SignUpUser);

// admin signup route

//Get all users
router.get('/getAllUsers/', getUsers);
//Get a one user
router.get('/getSingleUser/:id/', getUser);

// Delete a user
router.delete('/deleteUser/:id', deleteUser);

//Update teacher user
router.patch('/updateUser/:id', updateUser);

//Add a new class /api/classes
router.post('/admin_SignUp', SignUpAdmin)



module.exports = router;
