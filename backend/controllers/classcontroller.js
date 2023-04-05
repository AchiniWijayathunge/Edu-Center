const Class = require("../models/classModel");
const mongoose = require("mongoose");

//get all Classes
const getClasses = async (req, res) => {
  const classes = await Class.find({}).sort({ createdAt: -1 });
  res.status(200).json(classes);
};

//get a single class
const getClass = async (req, res) => {
  console.log("achini");
  const { class_id } = req.params;
  const { teacher_id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(class_id)) {
    return res.status(404).json({ error: "No such Class" });
  }
  const Singleclass = await Class.find({
    teacher_id: teacher_id,
    _id: class_id,
  });

  if (!Singleclass) {
    return res.status(404).json({ error: "No such class" });
  }
  res.status(200).json(Singleclass);
  console.log("MY CLASS ID IS...............", class_id);
  // .populate({path:'sub_class_id', select:['title', 'subject','batch','date_and_time']})
};

//add a new Class
const createClass = async (req, res) => {
  console.log("call");
  const {
    sub_class_id,
    title,
    email,
    subject,
    batch,
    date_and_time,
    teacher_id,
  } = req.body;
  //const { teacher_id } = req.params;
  //console.log(req.body)
  // console.log(req.params)
  // add docto db
  try {
    const classes = await Class.create({
      sub_class_id,
      title,
      email,
      batch,
      subject,
      date_and_time,
      teacher_id,
    });
    res.status(200).json(classes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a class
const deleteClass = async (req, res) => {
  const { class_id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(class_id)) {
    return res.status(404).json({ error: "No such Class" });
  }
  const class_ = await Class.findOneAndDelete({ _id: class_id });

  if (!class_) {
    return res.status(404).json({ error: "No such class" });
  }
  res.status(200).json(class_);
};

//update a one class
const updateClass = async (req, res) => {
  const { class_id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(class_id)) {
    return res.status(404).json({ error: "No such Class" });
  }

  const classes = await Class.findOneAndUpdate(
    { _id: class_id },
    {
      ...req.body,
    }
  );
  if (!classes) {
    return res.status(404).json({ error: "No such class" });
  }
  res.status(200).json(classes);
};

//get classes by teacher id

const getClassesByTeacherId = async (req, res) => {
  console.log("call here");

  const { teacher_id } = req.params;
  const classes = await Class.find({ teacher_id: teacher_id }).sort({
    createdAt: -1,
  });
  res.status(200).json(classes);
};

module.exports = {
  getClasses,
  createClass,
  getClass,
  deleteClass,
  updateClass,
  getClassesByTeacherId,
};
