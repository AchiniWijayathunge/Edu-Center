const User = require("../models/userModel");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// SignIn a user
const SignInUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.SignIn(email, password);
    console.log("hiii", user);
    // create a token
    const token = createToken(user._id);

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// // SignIn a user
// const SignInAdmin = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const admin = await Admin.SignIn(email, password);
//     console.log("hiii", admin);
//     // create a token
//     const token = createToken(admin._id);

//     res.status(200).json({ admin, token });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// signup a user
const SignUpUser = async (req, res) => {


  const {
    role,
    firstName,
    middleName,
    lastName,
    birthday,
    address,
    school,
    telephone,
    email,
    password
  } = req.body;

  try {
    const user = await User.SignUp(
      role,
      firstName,
      middleName,
      lastName,
      birthday,
      address,
      school,
      telephone,
      email,
      password
    );

// create a token
const token = createToken(user._id)

res.status(200).json({email, token})
} catch (error) {
res.status(400).json({error: error.message})
}
};


// signup a admin

const SignUpAdmin = async (req, res) => {
  console.log(req.body);

  const {
    role,
    email,
    password,
  } = req.body;

  try {
    const user = await User.SignUp(
      role,
      email,
      password
    );

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};












//get all Users

const getUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 });
  res.status(200).json(users);
};

//get a single user
const getUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such User" });
  }
  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({ error: "No such user" });
  }
  res.status(200).json(user);
};

//delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such User" });
  }
  const user = await User.findOneAndDelete({ _id: id });

  if (!user) {
    return res.status(404).json({ error: "No such class" });
  }
  res.status(200).json(user);
};

//update a user
const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such User" });
  }

  const users = await User.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!users) {
    return res.status(404).json({ error: "No such User" });
  }
  res.status(200).json(users);
};

module.exports = {
  SignUpUser,
  SignInUser,

  SignUpAdmin,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
};
