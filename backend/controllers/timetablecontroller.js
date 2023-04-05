const Timetable = require("../models/timetableModel");
const mongoose = require('mongoose')

//get all Classes
const getTimetable = async (req, res) => {
    const timetables = await Timetable.find({}).sort({ createdAt: -1 });
    res.status(200).json(timetables);
  };
  //get a single teacher
const getTimetables = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Teacher" });
  }
  const timetables = await Timetable.findById(id);

  if (!timetables) {
    return res.status(404).json({ error: "No such teacher" });
  }
  res.status(200).json(timetables);
};

//add a new Class
const createTimetable = async (req, res) => {
  const {title, day, email ,subject,time } = req.body;
  // add docto db
  try {
    const timetables = await Timetable.create({title, day, email,subject,time });
    res.status(200).json(timetables);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a teacher
const deleteTimetable = async (req,res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Class'})
      }
      const timetables = await Timetable.findOneAndDelete({_id: id})

      if (!timetables) {
        return res.status(404).json({ error: "No such class" });
      }
      res.status(200).json(timetables)
}

//update a teacher
const updateTimetable = async (req,res) =>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Class'})
      }

      const timetables = await Timetable.findOneAndUpdate({_id: id}, {
        ...req.body

      })
      if (!timetables) {
        return res.status(404).json({ error: "No such class" });
      }
res.status(200).json(timetables)
}
module.exports = {
  getTimetable,
  getTimetables,
  createTimetable,
  deleteTimetable,
  updateTimetable
};