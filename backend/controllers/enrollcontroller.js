const Enroll = require("../models/enrollModel");
const Teacher = require("../models/teacherModel");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Class = require("../models/classModel");

const createEnroll = async (req, res) => {
  const { id, teacher_id, sub_class_id, subject, enroll_status } = req.body;

 
  // add docto db
  try {
  
    const enroll = await Enroll.create({
      id,
      teacher_id,
      sub_class_id,
      subject,
      enroll_status,
    
    });
    res.status(200).json(enroll);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get all Enroll classes one user

const getEnroll = async (req, res) => {
  const id = req.user.id
  console.log("ID IS", id)
  const enroll = await Enroll.find({id}).sort({ createdAt: -1 });
  res.status(200).json(enroll);
  
};




//get all Enroll classes details by Class ID

const getEnrollClassDetails = async (req, res) => {
  const enroll = await Enroll.find({class_id:_id}).sort({ createdAt: -1 });
  res.status(200).json(enroll)
  .populate('sub_class_id')
};













module.exports = {
  createEnroll,
  getEnroll,
  getEnrollClassDetails
};
