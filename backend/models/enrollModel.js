const mongoose = require('mongoose')

const Schema = mongoose.Schema

const enrollSchema = new Schema({
    id:{
        type: String,
        required:true,
    },
    teacher_id:{
        type: String,
        required:true,
    },
    sub_class_id:{
        type: String,
        required:true,
    },
    subject: {
        type: String,
        required:true,
    },
    enroll_status:{
        type: String,
        required:true,
    }
}, {timestamps: true}
)
module.exports=mongoose.model('Enroll',enrollSchema )