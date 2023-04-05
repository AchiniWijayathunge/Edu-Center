const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const classSchema = new Schema(
  {
    sub_class_id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    batch: {
      type: String,
      required: true,
    },
    date_and_time: {
      type: String,
      required: true,
    },
    teacher_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Class", classSchema);
