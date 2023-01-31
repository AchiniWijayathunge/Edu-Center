const Class = require("../models/classModel");
const mongoose = require('mongoose')

//get all Classes
const getClasses = async (req, res) => {
    const classes = await Class.find({}).sort({ createdAt: -1 });
    res.status(200).json(classes);
  };

//add a new Class
const createClass = async (req, res) => {
  const { title, teacher_id, subject,batch,date_and_time } = req.body;
  // add docto db
  try {
    const classes = await Class.create({ title, teacher_id,batch,subject,date_and_time });
    res.status(200).json(classes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a teacher
const deleteClass = async (req,res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Class'})
      }
      const class_ = await Class.findOneAndDelete({_id: id})

      if (!class_) {
        return res.status(404).json({ error: "No such class" });
      }
      res.status(200).json(class_)
}

//update a teacher
const updateClass = async (req,res) =>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Class'})
      }

      const classes = await Class.findOneAndUpdate({_id: id}, {
        ...req.body

      })
      if (!classes) {
        return res.status(404).json({ error: "No such class" });
      }
res.status(200).json(classes)
}
module.exports = {
  getClasses,
  createClass,
  //getClass,
  deleteClass,
  updateClass
};
